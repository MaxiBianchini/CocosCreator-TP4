"use strict";
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