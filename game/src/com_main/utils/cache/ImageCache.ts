//module com_main {
//
//	export class ImageCache {
//		protected m_pCache:LRUCache;
//		private m_pAsyncDic:any = {};
//
//		public constructor($capacity:number = 30)
//		{
//			this.m_pCache = new LRUCache($capacity);
//		}
//
//		public remove($key)
//		{
//			RES.destroyRes($key);
//			this.m_pCache.remove($key);
//		}
//
//		public removeAll()
//		{
//			var hashmap:any = this.m_pCache.hashmap;
//			var keys:any[] = Object.keys(hashmap);
//			for(var i:number = 0; i < keys.length; i++)
//			{
//				this.remove(keys[i]);
//			}
//		}
//
//		public removeAsync()
//		{
//			this.m_pAsyncDic = {};
//		}
//
//		public pack($key, $data?:any)
//		{
//			var data = this.m_pCache.pack($key, $data);
//			if(data)
//			{
//				this.remove(data.key);
//			}
//		}
//
//		public existRes($key):boolean
//		{
//			return RES.getRes($key) != null;
//		}
//
//		public exist($key):boolean
//		{
//			return this.m_pCache.get($key) != '';
//		}
//
//		public getRes($key){
//			this.pack($key);
//			return RES.getRes($key);
//		}
//
//		private callAsyncRes(args:any[],texture):void
//		{
//			for(var i:number = 0; i < args.length; i++)
//			{
//				let arg:any = args[i];
//				arg.compFunc.call(arg.thisObject,texture,arg.data);
//			}
//		}
//
//		public getResAsync($key: string, $compFunc: Function, $thisObject: any, $data?:any, $once?:any): any
//		{
//			var self = this;
//			var texture:egret.Texture = RES.getRes($key);
//            if(!texture){
//				let args:any = {key:$key,compFunc:$compFunc,thisObject:$thisObject, data:$data};
//				if(!self.m_pAsyncDic[$key]){
//					RES.getResAsync($key, function(texture, key){
//						if(self.m_pAsyncDic[key]){
//							self.pack(key);
//							self.callAsyncRes(self.m_pAsyncDic[key], texture);
//							delete self.m_pAsyncDic[$key];
//						}
//					},this);
//				}
//				if(!self.m_pAsyncDic[$key] || $once){
//					self.m_pAsyncDic[$key] = [args];
//				}else{
//					self.m_pAsyncDic[$key].push(args);
//				}
//
//            }else{
//				self.pack($key);
//				$compFunc.call($thisObject, texture, $data);
//            }
//		}
//	}
//
//
//
//	export class ImageManager
//	{
//		private static _mapCache:ImageCache;
//		private static _buildingCache:ImageCache;
//
//		private static cleanQueue:any[] = [];
//		private static cleanKeyMap = {};
//		private static animHandle: number = 0;
//
//		public static get mapCache()
//		{
//			if(!this._mapCache)
//			{
//				var c = NativeHelper.isNative() ? 25 : 48;
//				this._mapCache = new ImageCache(c);
//			}
//			return this._mapCache;
//		}
//
//
//		public static get buildingCache()
//		{
//			if(!this._buildingCache)
//			{
//				this._buildingCache = new ImageCache(48);
//			}
//			return this._buildingCache;
//		}
//
//		protected static afterCleanUI()
//		{
//			let data;
//			let length = ImageManager.cleanQueue.length - 1;
//			let removeNum:number = 0;
//			for(var i:number = length; i > -1; i--)
//			{
//				data = ImageManager.cleanQueue[i];
//				let b = RES.destroyRes(data.key);
//				// debug("afterCleanUI:"+data.key + ',' + b);
//				removeNum += 1;
//
//				delete ImageManager.cleanKeyMap[data.key];
//				ImageManager.cleanQueue.splice(i,1);
//				if(removeNum >= 100){
//					debug('afterCleanUI number:'+this.cleanQueue.length);
//					ImageManager.cleanUI(true);
//					break;
//				}
//			}
//		}
//
//		public static cleanUI(isCheck?)
//		{
//			if(ImageManager.animHandle){
//				clearTimeout(ImageManager.animHandle);
//			}
//			ImageManager.animHandle = egret.setTimeout(function(checked){
//				if(checked){
//					if(UpManager.panelSize == 0 && UpManager.CurrentPanel == null)ImageManager.afterCleanUI();
//				}else{
//					ImageManager.afterCleanUI();
//				}
//			},ImageManager,300, isCheck);
//		}
//
//		public static destroyStaffHalf(){
//			if(NativeHelper.isNative()){
//                RES.destroyRes('StaffHalf');
//                RES.destroyRes('OnLoad');
//            }
//		}
//
//		public static putUI($key:string, $width:number, $height:number)
//		{
//			if(this.cleanKeyMap[$key]) return;
//
//			this.cleanQueue.push({key:$key, width:$width, height:$height});
//			this.cleanKeyMap[$key] = 1;
//		}
//
//		public static removeAll()
//		{
//			this.mapCache.removeAll();
//			this.buildingCache.removeAll();
//		}
//
//		public static passCached($key:string):boolean
//		{
//			// if($key.indexOf('FChat_') > -1)return true;
//			// if($key.indexOf('FCommon_') > -1)return true;
//			// if($key.indexOf('FMainUI_') > -1)return true;
//			// if($key.indexOf('Item_') > -1)return true;
//			if($key.indexOf('FOtherView_') > -1)return true;
//			// if($key.indexOf('FCommonEx1_') > -1)return true;
//
//			return false;
//		}
//	}
//}