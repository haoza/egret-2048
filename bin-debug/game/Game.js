var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript file
var Game2048 = (function (_super) {
    __extends(Game2048, _super);
    function Game2048() {
        var _this = _super.call(this) || this;
        _this.skinName = "GamePlaySkin.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdded, _this);
        return _this;
    }
    //添加显示列表
    Game2048.prototype.onAdded = function (e) {
        console.log(e);
    };
    return Game2048;
}(eui.Component));
__reflect(Game2048.prototype, "Game2048");
//# sourceMappingURL=Game.js.map