module com_main {

	export class CacheNode{
		public key;
		public data;
		public next:CacheNode;
		public prev:CacheNode;

		public constructor($key?:any, $data?:any) {
			this.key = $key;
			this.data = $data;
        }
	}


	export class LRUCache {
		private $head:CacheNode;
		private $tail:CacheNode;
		private $capacity:number = 0;
		private $hashmap:any = {};

		public constructor($capacity) {
			this.$capacity = $capacity;
			this.$head = new CacheNode();
			this.$tail = new CacheNode();

			this.$head.next = this.$tail;
			this.$tail.prev = this.$head;
		}

		public print(){
			console.log(this.$hashmap);
		}

		public get($key)
		{
			var node:CacheNode = this.$hashmap[$key];
			if(!node) return '';
			if(this.count == 1) return node.data;

			this.detach(node);
			this.attach(this.$head, node);

			return node.data;
		}

		public pack($key, $data):CacheNode
		{
			if(this.$capacity <= 0) return;

			var $node:CacheNode = this.$hashmap[$key];
			if($node)
			{
				
				this.detach($node);
				this.attach(this.$head, $node);
				$node.data = $data;
			}else{
				$node = new CacheNode($key, $data);
				this.$hashmap[$key] = $node;
				this.attach(this.$head, $node);

				if(this.count > this.$capacity){
					var $nodeToRemove:CacheNode = this.$tail.prev;
					
					this.remove($nodeToRemove.key);

					return $nodeToRemove;
				}
			}
			return null;
		}

		public remove($key)
		{
			var nodeToRemove:CacheNode = this.$hashmap[$key];
			if(!nodeToRemove) return;
			this.detach(nodeToRemove);
			this.$hashmap[$key] = null;
			delete this.$hashmap[$key];
		}

		public removeAll()
		{
			var keys:any[] = Object.keys(this.$hashmap);
			for(var i:number = 0; i < keys.length; i++)
			{
				this.remove(keys[i]);
			}
		}	

		public get hashmap()
		{
			return this.$hashmap;
		}

		public get count()
		{
			var keys:any[] = Object.keys(this.$hashmap);
			return keys.length;
		}


		private attach($head:CacheNode, $node:CacheNode)
		{
			$node.prev = $head;
			$node.next = $head.next;
			$node.next.prev = $node;
			$node.prev.next = $node;
		}

		private detach($node:CacheNode)
		{
			$node.prev.next = $node.next;
			$node.next.prev = $node.prev;
		}
	}
}