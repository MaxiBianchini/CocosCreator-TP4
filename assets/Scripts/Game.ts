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
    Player:cc.Node  = null;

    @property(cc.Node)
    Player2:cc.Node  = null;

    @property(cc.Node)
    Player3:cc.Node  = null;

    @property(cc.TextAsset)
    FileTXT:cc.TextAsset = null;

    @property(cc.Label)
    score:cc.Label = null;

    @property(cc.Label)
    vida:cc.Label = null;

    @property(cc.Label)
    mensajedemuerte:cc.Label = null;

    playerScore:number;
    playervidas:number;

    EstaMuerto1:boolean;
    EstaMuerto2:boolean;
    EstaMuerto3:boolean;

    
    MoverPlayer(event){
        switch(event.keyCode){
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
    }

    BajarPuntaje(){

        this.playerScore -= 5;
        if (this.playerScore < 0) this.playerScore = 0;
        this.score.string = 'Puntaje: '+ this.playerScore.toString();
    }

    StringVidas(){

        if (this.Player.active) this.playervidas = this.Player.getComponent('Personaje').Vidas;
        else if (this.Player2.active) this.playervidas = this.Player2.getComponent('Personaje').Vidas;
        else if (this.Player3.active) this.playervidas = this.Player3.getComponent('Personaje').Vidas;

        this.vida.string = 'Vidas: '+ this.playervidas.toString();
    }

    gainScoreMoneda(){

        this.playerScore += 10;
        this.score.string = 'Puntaje: '+ this.playerScore.toString();
    }

    GameOver(){

        this.FileTXT.text =  this.playerScore.toString();
        cc.director.loadScene('Game Over');
    }

    GameWin(){

        this.FileTXT.text =  this.playerScore.toString();
        cc.director.loadScene('Game Win');
    }

    CambioDePersonaje(Tipo_de_personaje: number){
        
        if (Tipo_de_personaje == 1 && !this.EstaMuerto1){

            if(this.Player2.active) {
                this.Player2.getComponent('Personaje').Vidas -= 1;
                if(this.Player2.getComponent('Personaje').Vidas == 0) this.EstaMuerto2 = true;
            }
            else if(this.Player3.active) {
                this.Player3.getComponent('Personaje').Vidas -= 1;
                if(this.Player3.getComponent('Personaje').Vidas == 0) this.EstaMuerto3 = true;
            }

            this.mensajedemuerte.string = 'Estas usando a PEON';//+ this.playervidas.toString();

            this.Player.active = true;
            this.Player2.active = false;
            this.Player3.active = false;
        }
        if (Tipo_de_personaje == 2 && !this.EstaMuerto2){

            if(this.Player.active) {
                this.Player.getComponent('Personaje').Vidas -= 1;
                if(this.Player.getComponent('Personaje').Vidas == 0) this.EstaMuerto1 = true;
            }
            else if(this.Player3.active) {
                this.Player3.getComponent('Personaje').Vidas -= 1;
                if(this.Player3.getComponent('Personaje').Vidas == 0) this.EstaMuerto3 = true;
            }

            this.mensajedemuerte.string = 'Estas usando a SALTARIN';

            this.Player.active = false;
            this.Player2.active = true;
            this.Player3.active = false;
        }
        if (Tipo_de_personaje == 3 && !this.EstaMuerto3){

            if(this.Player.active) {
                this.Player.getComponent('Personaje').Vidas -= 1;
                if(this.Player.getComponent('Personaje').Vidas == 0) this.EstaMuerto1 = true;
            }
            else if(this.Player2.active) {
                this.Player2.getComponent('Personaje').Vidas -= 1;
                if(this.Player2.getComponent('Personaje').Vidas == 0) this.EstaMuerto2 = true;
            }

            this.mensajedemuerte.string = 'Estas usando a VELOZ';

            this.Player.active = false;
            this.Player2.active = false;
            this.Player3.active = true;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.MoverPlayer,this);

        let physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.gravity = cc.v2 (0,-2000);

        this.playerScore = 0;;
        this.playervidas = 0;

        this.Player.active = false;
        this.Player2.active = false;
        this.Player3.active = false;

        this.EstaMuerto1 = false;
        this.EstaMuerto2 = false;
        this.EstaMuerto3 = false;
    }

    start () {}

    update (dt) {

        if (this.Player.active){
            this.Player2.setPosition(this.Player.getPosition());
            this.Player3.setPosition(this.Player.getPosition());
        }
        if (this.Player2.active){
            this.Player.setPosition(this.Player2.getPosition());
            this.Player3.setPosition(this.Player2.getPosition());
        }
        if (this.Player3.active){
            this.Player.setPosition(this.Player3.getPosition());
            this.Player2.setPosition(this.Player3.getPosition());
        }

    }
}
