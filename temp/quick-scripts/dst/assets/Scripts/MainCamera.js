
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MainCamera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fcd8/AA9JHwLpJKXOpnbpK', 'MainCamera');
// Scripts/MainCamera.ts

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
        _this.PlayerNode = null;
        _this.PlayerNode2 = null;
        _this.PlayerNode3 = null;
        _this.Fondo = null;
        return _this;
    }
    NewClass.prototype.MoverPlayer = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                if (!this.PlayerNode.active && !this.PlayerNode.active && !this.PlayerNode.active) {
                    this.node.setPosition(this.node.getPosition().x - 15, this.node.getPosition().y);
                }
                break;
            case cc.macro.KEY.d:
                if (!this.PlayerNode.active && !this.PlayerNode.active && !this.PlayerNode.active) {
                    this.node.setPosition(this.node.getPosition().x + 15, this.node.getPosition().y);
                }
                break;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
        var target_position;
        if (this.PlayerNode.active)
            target_position = this.PlayerNode.getPosition();
        else if (this.PlayerNode2.active)
            target_position = this.PlayerNode2.getPosition();
        else if (this.PlayerNode3.active)
            target_position = this.PlayerNode3.getPosition();
        target_position.x = target_position.x + 200;
        target_position.y = cc.misc.clampf(target_position.y, 0, 220);
        var current_position = this.node.getPosition();
        current_position.lerp(target_position, 0.1, current_position);
        this.node.setPosition(current_position);
        this.Fondo.setPosition(current_position.x / 2, current_position.y / 2);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "PlayerNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "PlayerNode2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "PlayerNode3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Fondo", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFpbkNhbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJEQztRQXhERyxnQkFBVSxHQUFXLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixXQUFLLEdBQVcsSUFBSSxDQUFDOztJQStDekIsQ0FBQztJQTVDRyw4QkFBVyxHQUFYLFVBQVksS0FBSztRQUNiLFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztvQkFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25GO2dCQUVMLE1BQU07WUFDTixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztvQkFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25GO2dCQUVMLE1BQU07U0FDVDtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUwsY0FBVSxDQUFDO0lBRVgseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFFTixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUUzRSxJQUFJLGVBQWUsQ0FBQztRQUVwQixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUFFLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQUUsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07WUFBRSxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuRixlQUFlLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9DLGdCQUFnQixDQUFDLElBQUksQ0FBRSxlQUFlLEVBQUcsR0FBRyxFQUFHLGdCQUFnQixDQUFFLENBQUM7UUFFbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBdkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFaSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkQ1QjtJQUFELGVBQUM7Q0EzREQsQUEyREMsQ0EzRHFDLEVBQUUsQ0FBQyxTQUFTLEdBMkRqRDtrQkEzRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFBsYXllck5vZGU6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQbGF5ZXJOb2RlMjpjYy5Ob2RlICA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQbGF5ZXJOb2RlMzpjYy5Ob2RlICA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGb25kbzpjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgTW92ZXJQbGF5ZXIoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXJOb2RlLmFjdGl2ZSAmJiAhdGhpcy5QbGF5ZXJOb2RlLmFjdGl2ZSAmJiAhdGhpcy5QbGF5ZXJOb2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggLSAxNSx0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXJOb2RlLmFjdGl2ZSAmJiAhdGhpcy5QbGF5ZXJOb2RlLmFjdGl2ZSAmJiAhdGhpcy5QbGF5ZXJOb2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyAxNSx0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMuTW92ZXJQbGF5ZXIsdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRfcG9zaXRpb247XHJcblxyXG4gICAgICAgIGlmKHRoaXMuUGxheWVyTm9kZS5hY3RpdmUpIHRhcmdldF9wb3NpdGlvbiA9IHRoaXMuUGxheWVyTm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuUGxheWVyTm9kZTIuYWN0aXZlKSB0YXJnZXRfcG9zaXRpb24gPSB0aGlzLlBsYXllck5vZGUyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5QbGF5ZXJOb2RlMy5hY3RpdmUpIHRhcmdldF9wb3NpdGlvbiA9IHRoaXMuUGxheWVyTm9kZTMuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgdGFyZ2V0X3Bvc2l0aW9uLnggPSB0YXJnZXRfcG9zaXRpb24ueCArIDIwMDtcclxuICAgICAgICB0YXJnZXRfcG9zaXRpb24ueSA9IGNjLm1pc2MuY2xhbXBmKHRhcmdldF9wb3NpdGlvbi55LDAsMjIwKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRfcG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgY3VycmVudF9wb3NpdGlvbi5sZXJwKCB0YXJnZXRfcG9zaXRpb24gLCAwLjEgLCBjdXJyZW50X3Bvc2l0aW9uICk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50X3Bvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5Gb25kby5zZXRQb3NpdGlvbihjdXJyZW50X3Bvc2l0aW9uLngvMixjdXJyZW50X3Bvc2l0aW9uLnkvMik7XHJcbiAgICB9XHJcbn1cclxuIl19