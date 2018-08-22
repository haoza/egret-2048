// TypeScript file
class Game2048 extends eui.Component{
    private gameContent: eui.Group;

    private size = 145;
    private girdNum = 16;

    public constructor() {
        super();
        this.skinName = "GamePlaySkin";
        this.addBgGrid();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
    }

    //添加显示列表
    private onAdded(e: egret.Event) {
        console.log(e)
    }
    private addBgGrid() {
        for (let i = 0; i< this.girdNum; i++) {
            const row = Math.floor(i / 4);
            const col = i % 4;
            const grid = Util.createRect(row * 145, col * 145, this.size, 0, Util.numStyle[0].bg, 1)
            this.gameContent.addChild(grid)
        }

    }
}