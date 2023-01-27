
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54682B6X6dAWLBfuZRkcB60', 'Game');
// Scripts/Game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Player = null;
        _this.Player2 = null;
        _this.Player3 = null;
        _this.FileTXT = null;
        _this.score = null;
        _this.vida = null;
        _this.mensajedemuerte = null;
        return _this;
    }
    NewClass.prototype.MoverPlayer = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.num1:
                this.CambioDePersonaje(1);
                this.StringVidas();
                break;
            case cc.macro.KEY.num2:
                this.CambioDePersonaje(2);
                this.StringVidas();
                break;
            case cc.macro.KEY.num3:
                this.CambioDePersonaje(3);
                this.StringVidas();
                break;
        }
    };
    NewClass.prototype.BajarPuntaje = function () {
        this.playerScore -= 5;
        if (this.playerScore < 0)
            this.playerScore = 0;
        this.score.string = 'Puntaje: ' + this.playerScore.toString();
    };
    NewClass.prototype.StringVidas = function () {
        if (this.Player.active)
            this.playervidas = this.Player.getComponent('Personaje').Vidas;
        else if (this.Player2.active)
            this.playervidas = this.Player2.getComponent('Personaje').Vidas;
        else if (this.Player3.active)
            this.playervidas = this.Player3.getComponent('Personaje').Vidas;
        this.vida.string = 'Vidas: ' + this.playervidas.toString();
    };
    NewClass.prototype.gainScoreMoneda = function () {
        this.playerScore += 10;
        this.score.string = 'Puntaje: ' + this.playerScore.toString();
    };
    NewClass.prototype.GameOver = function () {
        this.FileTXT.text = this.playerScore.toString();
        cc.director.loadScene('Game Over');
    };
    NewClass.prototype.GameWin = function () {
        this.FileTXT.text = this.playerScore.toString();
        cc.director.loadScene('Game Win');
    };
    NewClass.prototype.CambioDePersonaje = function (Tipo_de_personaje) {
        if (Tipo_de_personaje == 1 && !this.EstaMuerto1) {
            if (this.Player2.active) {
                this.Player2.getComponent('Personaje').Vidas -= 1;
                if (this.Player2.getComponent('Personaje').Vidas == 0)
                    this.EstaMuerto2 = true;
            }
            else if (this.Player3.active) {
                this.Player3.getComponent('Personaje').Vidas -= 1;
                if (this.Player3.getComponent('Personaje').Vidas == 0)
                    this.EstaMuerto3 = true;
            }
            this.mensajedemuerte.string = 'Estas usando a PEON'; //+ this.playervidas.toString();
            this.Player.active = true;
            this.Player2.active = false;
            this.Player3.active = false;
        }
        if (Tipo_de_personaje == 2 && !this.EstaMuerto2) {
            if (this.Player.active) {
                this.Player.getComponent('Personaje').Vidas -= 1;
                if (this.Player.getComponent('Personaje').Vidas == 0)
                    this.EstaMuerto1 = true;
            }
            else if (this.Player3.active) {
                this.Player3.getComponent('Personaje').Vidas -= 1;
                if (this.Player3.getComponent('Personaje').Vidas == 0)
                    this.EstaMuerto3 = true;
            }
            this.mensajedemuerte.string = 'Estas usando a SALTARIN';
            this.Player.active = false;
            this.Player2.active = true;
            this.Player3.active = false;
        }
        if (Tipo_de_personaje == 3 && !this.EstaMuerto3) {
            if (this.Player.active) {
                this.Player.getComponent('Personaje').Vidas -= 1;
                if (this.Player.getComponent('Personaje').Vidas == 0)
                    this.EstaMuerto1 = true;
            }
            else if (this.Player2.active) {
                this.Player2.getComponent('Personaje').Vidas -= 1;
                if (this.Player2.getComponent('Personaje').Vidas == 0)
                    this.EstaMuerto2 = true;
            }
            this.mensajedemuerte.string = 'Estas usando a VELOZ';
            this.Player.active = false;
            this.Player2.active = false;
            this.Player3.active = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
        var physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.gravity = cc.v2(0, -2000);
        this.playerScore = 0;
        ;
        this.playervidas = 0;
        this.Player.active = false;
        this.Player2.active = false;
        this.Player3.active = false;
        this.EstaMuerto1 = false;
        this.EstaMuerto2 = false;
        this.EstaMuerto3 = false;
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        if (this.Player.active) {
            this.Player2.setPosition(this.Player.getPosition());
            this.Player3.setPosition(this.Player.getPosition());
        }
        if (this.Player2.active) {
            this.Player.setPosition(this.Player2.getPosition());
            this.Player3.setPosition(this.Player2.getPosition());
        }
        if (this.Player3.active) {
            this.Player.setPosition(this.Player3.getPosition());
            this.Player2.setPosition(this.Player3.getPosition());
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Player", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Player2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Player3", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXT", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "score", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "vida", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "mensajedemuerte", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlMQztRQTlLRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUc1QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIscUJBQWUsR0FBWSxJQUFJLENBQUM7O0lBNEpwQyxDQUFDO0lBbEpHLDhCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENB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QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO0lBRUwsQ0FBQztJQTdLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNLO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNhO0lBckJmLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpTDVCO0lBQUQsZUFBQztDQWpMRCxBQWlMQyxDQWpMcUMsRUFBRSxDQUFDLFNBQVMsR0FpTGpEO2tCQWpMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUGxheWVyOmNjLk5vZGUgID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFBsYXllcjI6Y2MuTm9kZSAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUGxheWVyMzpjYy5Ob2RlICA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRleHRBc3NldClcclxuICAgIEZpbGVUWFQ6Y2MuVGV4dEFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZTpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdmlkYTpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbWVuc2FqZWRlbXVlcnRlOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwbGF5ZXJTY29yZTpudW1iZXI7XHJcbiAgICBwbGF5ZXJ2aWRhczpudW1iZXI7XHJcblxyXG4gICAgRXN0YU11ZXJ0bzE6Ym9vbGVhbjtcclxuICAgIEVzdGFNdWVydG8yOmJvb2xlYW47XHJcbiAgICBFc3RhTXVlcnRvMzpib29sZWFuO1xyXG5cclxuICAgIFxyXG4gICAgTW92ZXJQbGF5ZXIoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubnVtMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2FtYmlvRGVQZXJzb25hamUoMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0cmluZ1ZpZGFzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubnVtMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2FtYmlvRGVQZXJzb25hamUoMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0cmluZ1ZpZGFzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubnVtMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2FtYmlvRGVQZXJzb25hamUoMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0cmluZ1ZpZGFzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEJhamFyUHVudGFqZSgpe1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllclNjb3JlIC09IDU7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyU2NvcmUgPCAwKSB0aGlzLnBsYXllclNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9ICdQdW50YWplOiAnKyB0aGlzLnBsYXllclNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgU3RyaW5nVmlkYXMoKXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuUGxheWVyLmFjdGl2ZSkgdGhpcy5wbGF5ZXJ2aWRhcyA9IHRoaXMuUGxheWVyLmdldENvbXBvbmVudCgnUGVyc29uYWplJykuVmlkYXM7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5QbGF5ZXIyLmFjdGl2ZSkgdGhpcy5wbGF5ZXJ2aWRhcyA9IHRoaXMuUGxheWVyMi5nZXRDb21wb25lbnQoJ1BlcnNvbmFqZScpLlZpZGFzO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuUGxheWVyMy5hY3RpdmUpIHRoaXMucGxheWVydmlkYXMgPSB0aGlzLlBsYXllcjMuZ2V0Q29tcG9uZW50KCdQZXJzb25hamUnKS5WaWRhcztcclxuXHJcbiAgICAgICAgdGhpcy52aWRhLnN0cmluZyA9ICdWaWRhczogJysgdGhpcy5wbGF5ZXJ2aWRhcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhaW5TY29yZU1vbmVkYSgpe1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllclNjb3JlICs9IDEwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gJ1B1bnRhamU6ICcrIHRoaXMucGxheWVyU2NvcmUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBHYW1lT3Zlcigpe1xyXG5cclxuICAgICAgICB0aGlzLkZpbGVUWFQudGV4dCA9ICB0aGlzLnBsYXllclNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lIE92ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBHYW1lV2luKCl7XHJcblxyXG4gICAgICAgIHRoaXMuRmlsZVRYVC50ZXh0ID0gIHRoaXMucGxheWVyU2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUgV2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgQ2FtYmlvRGVQZXJzb25hamUoVGlwb19kZV9wZXJzb25hamU6IG51bWJlcil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKFRpcG9fZGVfcGVyc29uYWplID09IDEgJiYgIXRoaXMuRXN0YU11ZXJ0bzEpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5QbGF5ZXIyLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIyLmdldENvbXBvbmVudCgnUGVyc29uYWplJykuVmlkYXMgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuUGxheWVyMi5nZXRDb21wb25lbnQoJ1BlcnNvbmFqZScpLlZpZGFzID09IDApIHRoaXMuRXN0YU11ZXJ0bzIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5QbGF5ZXIzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIzLmdldENvbXBvbmVudCgnUGVyc29uYWplJykuVmlkYXMgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuUGxheWVyMy5nZXRDb21wb25lbnQoJ1BlcnNvbmFqZScpLlZpZGFzID09IDApIHRoaXMuRXN0YU11ZXJ0bzMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnNhamVkZW11ZXJ0ZS5zdHJpbmcgPSAnRXN0YXMgdXNhbmRvIGEgUEVPTic7Ly8rIHRoaXMucGxheWVydmlkYXMudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVGlwb19kZV9wZXJzb25hamUgPT0gMiAmJiAhdGhpcy5Fc3RhTXVlcnRvMil7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLlBsYXllci5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdldENvbXBvbmVudCgnUGVyc29uYWplJykuVmlkYXMgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuUGxheWVyLmdldENvbXBvbmVudCgnUGVyc29uYWplJykuVmlkYXMgPT0gMCkgdGhpcy5Fc3RhTXVlcnRvMSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLlBsYXllcjMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllcjMuZ2V0Q29tcG9uZW50KCdQZXJzb25hamUnKS5WaWRhcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5QbGF5ZXIzLmdldENvbXBvbmVudCgnUGVyc29uYWplJykuVmlkYXMgPT0gMCkgdGhpcy5Fc3RhTXVlcnRvMyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVuc2FqZWRlbXVlcnRlLnN0cmluZyA9ICdFc3RhcyB1c2FuZG8gYSBTQUxUQVJJTic7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlBsYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFRpcG9fZGVfcGVyc29uYWplID09IDMgJiYgIXRoaXMuRXN0YU11ZXJ0bzMpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5QbGF5ZXIuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5nZXRDb21wb25lbnQoJ1BlcnNvbmFqZScpLlZpZGFzIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLlBsYXllci5nZXRDb21wb25lbnQoJ1BlcnNvbmFqZScpLlZpZGFzID09IDApIHRoaXMuRXN0YU11ZXJ0bzEgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5QbGF5ZXIyLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIyLmdldENvbXBvbmVudCgnUGVyc29uYWplJykuVmlkYXMgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuUGxheWVyMi5nZXRDb21wb25lbnQoJ1BlcnNvbmFqZScpLlZpZGFzID09IDApIHRoaXMuRXN0YU11ZXJ0bzIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnNhamVkZW11ZXJ0ZS5zdHJpbmcgPSAnRXN0YXMgdXNhbmRvIGEgVkVMT1onO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5Nb3ZlclBsYXllcix0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHBoeXNpY3NfbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljc19tYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBoeXNpY3NfbWFuYWdlci5ncmF2aXR5ID0gY2MudjIgKDAsLTIwMDApO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMDs7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJ2aWRhcyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuUGxheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUGxheWVyMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlBsYXllcjMuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuRXN0YU11ZXJ0bzEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkVzdGFNdWVydG8yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Fc3RhTXVlcnRvMyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5QbGF5ZXIuYWN0aXZlKXtcclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIyLnNldFBvc2l0aW9uKHRoaXMuUGxheWVyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLlBsYXllcjMuc2V0UG9zaXRpb24odGhpcy5QbGF5ZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLlBsYXllcjIuYWN0aXZlKXtcclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuc2V0UG9zaXRpb24odGhpcy5QbGF5ZXIyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLlBsYXllcjMuc2V0UG9zaXRpb24odGhpcy5QbGF5ZXIyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5QbGF5ZXIzLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLnNldFBvc2l0aW9uKHRoaXMuUGxheWVyMy5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIyLnNldFBvc2l0aW9uKHRoaXMuUGxheWVyMy5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==