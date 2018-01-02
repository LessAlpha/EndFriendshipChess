module com_main {

    export class GuideManager {

        public constructor() {
        }


        private static instance :GuideManager;
        public static get inst() :GuideManager{
            if(!this.instance)  this.instance = new GuideManager;
            return this.instance;
        }


    }

}