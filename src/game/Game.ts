// TypeScript file
class Game2048 extends eui.Component{
    private gameContent: eui.Group;

    public constructor() {
        super();
        this.skinName = "resource/game/GamePlaySkin.exml";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
    }

    //添加显示列表
		private onAdded(e: egret.Event) {
            console.log(e)
		}
}