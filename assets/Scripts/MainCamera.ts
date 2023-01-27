// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    PlayerNode:cc.Node = null;

    @property(cc.Node)
    PlayerNode2:cc.Node  = null;

    @property(cc.Node)
    PlayerNode3:cc.Node  = null;

    @property(cc.Node)
    Fondo:cc.Node = null;


    MoverPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                if (!this.PlayerNode.active && !this.PlayerNode.active && !this.PlayerNode.active){
                    this.node.setPosition(this.node.getPosition().x - 15,this.node.getPosition().y);
                }
                
            break;
            case cc.macro.KEY.d:
                if (!this.PlayerNode.active && !this.PlayerNode.active && !this.PlayerNode.active){
                    this.node.setPosition(this.node.getPosition().x + 15,this.node.getPosition().y);
                }

            break;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {}

    update (dt) {

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.MoverPlayer,this);

        let target_position;

        if(this.PlayerNode.active) target_position = this.PlayerNode.getPosition();
        else if (this.PlayerNode2.active) target_position = this.PlayerNode2.getPosition();
        else if (this.PlayerNode3.active) target_position = this.PlayerNode3.getPosition();

        target_position.x = target_position.x + 200;
        target_position.y = cc.misc.clampf(target_position.y,0,220);

        let current_position = this.node.getPosition();

        current_position.lerp( target_position , 0.1 , current_position );

        this.node.setPosition(current_position);

        this.Fondo.setPosition(current_position.x/2,current_position.y/2);
    }
}
