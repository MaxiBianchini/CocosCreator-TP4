window.__require = function t(e, o, r) {
function n(c, a) {
if (!o[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var l = o[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return n(e[c][1][t] || t);
}, l, l.exports, t, e, o, r);
}
return o[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < r.length; c++) n(r[c]);
return n;
}({
BanderaFinal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4aa99sUWOBP768ui7x1MDtE", "BanderaFinal");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.getComponent(cc.Animation).play();
};
e.prototype.start = function() {};
return i([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
FinalScore: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "802c5qz1v5ITKYbX8Vnycmc", "FinalScore");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.FileTXT = null;
e.score = null;
return e;
}
e.prototype.onLoad = function() {
this.FileTXT.url = cc.url.raw("assets/Puntaje.txt");
this.score.string = "Puntaje Final: " + this.FileTXT;
};
e.prototype.start = function() {};
i([ s(cc.TextAsset) ], e.prototype, "FileTXT", void 0);
i([ s(cc.Label) ], e.prototype, "score", void 0);
return i([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "54682B6X6dAWLBfuZRkcB60", "Game");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Player = null;
e.Player2 = null;
e.Player3 = null;
e.FileTXT = null;
e.score = null;
e.vida = null;
e.mensajedemuerte = null;
return e;
}
e.prototype.MoverPlayer = function(t) {
switch (t.keyCode) {
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
}
};
e.prototype.BajarPuntaje = function() {
this.playerScore -= 5;
this.playerScore < 0 && (this.playerScore = 0);
this.score.string = "Puntaje: " + this.playerScore.toString();
};
e.prototype.StringVidas = function() {
this.Player.active ? this.playervidas = this.Player.getComponent("Personaje").Vidas : this.Player2.active ? this.playervidas = this.Player2.getComponent("Personaje").Vidas : this.Player3.active && (this.playervidas = this.Player3.getComponent("Personaje").Vidas);
this.vida.string = "Vidas: " + this.playervidas.toString();
};
e.prototype.gainScoreMoneda = function() {
this.playerScore += 10;
this.score.string = "Puntaje: " + this.playerScore.toString();
};
e.prototype.GameOver = function() {
this.FileTXT.text = this.playerScore.toString();
cc.director.loadScene("Game Over");
};
e.prototype.GameWin = function() {
this.FileTXT.text = this.playerScore.toString();
cc.director.loadScene("Game Win");
};
e.prototype.CambioDePersonaje = function(t) {
if (1 == t && !this.EstaMuerto1) {
if (this.Player2.active) {
this.Player2.getComponent("Personaje").Vidas -= 1;
0 == this.Player2.getComponent("Personaje").Vidas && (this.EstaMuerto2 = !0);
} else if (this.Player3.active) {
this.Player3.getComponent("Personaje").Vidas -= 1;
0 == this.Player3.getComponent("Personaje").Vidas && (this.EstaMuerto3 = !0);
}
this.mensajedemuerte.string = "Estas usando a PEON";
this.Player.active = !0;
this.Player2.active = !1;
this.Player3.active = !1;
}
if (2 == t && !this.EstaMuerto2) {
if (this.Player.active) {
this.Player.getComponent("Personaje").Vidas -= 1;
0 == this.Player.getComponent("Personaje").Vidas && (this.EstaMuerto1 = !0);
} else if (this.Player3.active) {
this.Player3.getComponent("Personaje").Vidas -= 1;
0 == this.Player3.getComponent("Personaje").Vidas && (this.EstaMuerto3 = !0);
}
this.mensajedemuerte.string = "Estas usando a SALTARIN";
this.Player.active = !1;
this.Player2.active = !0;
this.Player3.active = !1;
}
if (3 == t && !this.EstaMuerto3) {
if (this.Player.active) {
this.Player.getComponent("Personaje").Vidas -= 1;
0 == this.Player.getComponent("Personaje").Vidas && (this.EstaMuerto1 = !0);
} else if (this.Player2.active) {
this.Player2.getComponent("Personaje").Vidas -= 1;
0 == this.Player2.getComponent("Personaje").Vidas && (this.EstaMuerto2 = !0);
}
this.mensajedemuerte.string = "Estas usando a VELOZ";
this.Player.active = !1;
this.Player2.active = !1;
this.Player3.active = !0;
}
};
e.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
var t = cc.director.getPhysicsManager();
t.enabled = !0;
t.gravity = cc.v2(0, -2e3);
this.playerScore = 0;
this.playervidas = 0;
this.Player.active = !1;
this.Player2.active = !1;
this.Player3.active = !1;
this.EstaMuerto1 = !1;
this.EstaMuerto2 = !1;
this.EstaMuerto3 = !1;
};
e.prototype.start = function() {};
e.prototype.update = function() {
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
i([ s(cc.Node) ], e.prototype, "Player", void 0);
i([ s(cc.Node) ], e.prototype, "Player2", void 0);
i([ s(cc.Node) ], e.prototype, "Player3", void 0);
i([ s(cc.TextAsset) ], e.prototype, "FileTXT", void 0);
i([ s(cc.Label) ], e.prototype, "score", void 0);
i([ s(cc.Label) ], e.prototype, "vida", void 0);
i([ s(cc.Label) ], e.prototype, "mensajedemuerte", void 0);
return i([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
InstrButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7f9666xdahA4IS776MKASur", "InstrButton");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Instructions");
this.node.on("touchstart", function() {
cc.director.loadScene("Instructions");
});
};
e.prototype.start = function() {};
return i([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
MainCamera: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1fcd8/AA9JHwLpJKXOpnbpK", "MainCamera");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.PlayerNode = null;
e.PlayerNode2 = null;
e.PlayerNode3 = null;
e.Fondo = null;
return e;
}
e.prototype.MoverPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.a:
this.PlayerNode.active || this.PlayerNode.active || this.PlayerNode.active || this.node.setPosition(this.node.getPosition().x - 15, this.node.getPosition().y);
break;

case cc.macro.KEY.d:
this.PlayerNode.active || this.PlayerNode.active || this.PlayerNode.active || this.node.setPosition(this.node.getPosition().x + 15, this.node.getPosition().y);
}
};
e.prototype.start = function() {};
e.prototype.update = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
var t;
this.PlayerNode.active ? t = this.PlayerNode.getPosition() : this.PlayerNode2.active ? t = this.PlayerNode2.getPosition() : this.PlayerNode3.active && (t = this.PlayerNode3.getPosition());
t.x = t.x + 200;
t.y = cc.misc.clampf(t.y, 0, 220);
var e = this.node.getPosition();
e.lerp(t, .1, e);
this.node.setPosition(e);
this.Fondo.setPosition(e.x / 2, e.y / 2);
};
i([ s(cc.Node) ], e.prototype, "PlayerNode", void 0);
i([ s(cc.Node) ], e.prototype, "PlayerNode2", void 0);
i([ s(cc.Node) ], e.prototype, "PlayerNode3", void 0);
i([ s(cc.Node) ], e.prototype, "Fondo", void 0);
return i([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
MenuButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "04b2cLJO2hNY7d+M/HJMgQO", "MenuButton");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Menu");
this.node.on("touchstart", function() {
cc.director.loadScene("Menu");
});
};
e.prototype.start = function() {};
return i([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
Moneda: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c698399bfVBvIgcvFwLs5B9", "Moneda");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCollisionEnter = function(t) {
if (0 == t.tag) {
this.node.parent.parent.getComponent("Game").gainScoreMoneda();
this.node.destroy();
}
};
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
e.prototype.onDestroy = function() {};
return i([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
Personaje: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e9dd3I0kj9ADYUBaiFlK1oz", "Personaje");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Tipo_de_Personaje = 0;
return e;
}
e.prototype.MoverPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.space:
this.Saltar = 1;
}
};
e.prototype.PararPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.space:
this.Saltar = 0;
}
};
e.prototype.onBeginContact = function(t, e, o) {
2 == e.tag && (this.TocandoSuelo = !0);
1 != o.tag && 0 != e.tag || (this.Morir = !0);
};
e.prototype.onCollisionEnter = function(t) {
if (4 == t.tag) {
this.Morir = !0;
this.node.parent.getComponent("Game").GameWin();
}
};
e.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
this.Vidas = 3;
this.Saltar = 0;
3 == this.Tipo_de_Personaje ? this.MaxVelocidad = 300 : this.MaxVelocidad = 150;
2 == this.Tipo_de_Personaje ? this.FuerzaSalto = 12e4 : this.FuerzaSalto = 85e3;
this.FuerzaCaminar = 2e3;
this.TocandoSuelo = !1;
this.Morir = !1;
this.Rigid_Body = this.node.getComponent(cc.RigidBody);
};
e.prototype.start = function() {};
e.prototype.update = function() {
this.Rigid_Body.linearVelocity.x < this.MaxVelocidad && this.Rigid_Body.applyForceToCenter(cc.v2(1 * this.FuerzaCaminar, 0), !0);
if (this.TocandoSuelo && 1 == this.Saltar) {
this.Rigid_Body.applyForceToCenter(cc.v2(0, this.FuerzaSalto), !0);
this.TocandoSuelo = !1;
}
if (this.Morir) {
this.node.setPosition(cc.v2(-4720, -190));
this.Vidas -= 1;
this.Morir = !1;
this.node.parent.getComponent("Game").BajarPuntaje();
this.node.parent.getComponent("Game").StringVidas();
0 == this.Vidas && this.node.parent.getComponent("Game").GameOver();
}
};
i([ s ], e.prototype, "Tipo_de_Personaje", void 0);
return i([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
PlayButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "70d03q0SE5F5LTaxIQT1IR2", "PlayButton");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Game");
this.node.on("touchstart", function() {
cc.director.loadScene("Game");
});
};
e.prototype.start = function() {};
return i([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ]
}, {}, [ "BanderaFinal", "FinalScore", "Game", "InstrButton", "MainCamera", "MenuButton", "Moneda", "Personaje", "PlayButton" ]);