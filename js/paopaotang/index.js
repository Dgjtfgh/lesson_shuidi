function Player(name, teamColor) {
    this.enemies = [];  // 敌人
    this.partners = [];  // 队友
    this.name = name;
    this.teamColor = teamColor;
    this.state = 'live';
}
Player.prototype.win = function() {
    // kill all
    console.log(`${this.name} win`);
}
Player.prototype.lose = function() {
    console.log(`${this.name} lose`);
}
Player.prototype.die = function() {
    console.log(`${this.name} die`);
    this.state = 'die';
    let all_dead = true; // 都死了
    for(var i = 0, partner; partner = this.partners[i++];) {
        // console.log(partner.state);
        if(partner.state == 'live') {
            all_dead = false;
            break;
        }
    }
    // console.log(all_dead);
    if(all_dead) {
        for(var i = 0, partner; partner = this.partners[i++];) {
            partner.lose();
        }
        for(var i = 0, enemy; enemy = this.enemies[i++];) {
            enemy.win();
        }
    }
}
// 组队 生成玩家，工厂类来负责
var players = [];
var playerFactory = function(name, teamColor) {
    var newPlayer = new Player(name, teamColor);
    for(var i = 0, player; player = players[i++];){
        if(player.teamColor == newPlayer.teamColor) {
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        } else {
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}
var player1 = playerFactory('皮蛋', 'red');
var player2 = playerFactory('小乖', 'red');
var player3 = playerFactory('宝宝', 'red');
var player4 = playerFactory('小强', 'red');
// 队友是谁？ 敌人是谁？ 交给工厂去做
var player5 = playerFactory('黑牛' , 'blue');
var player6 = playerFactory('葱头' , 'blue');
var player7 = playerFactory('胖墩' , 'blue');
var player8 = playerFactory('海盗' , 'blue');
// console.log(player1.partners, player1.enemies);

player1.die();
player2.die();
player3.die();
player4.die();