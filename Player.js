class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var getCountRef = database.ref("playerCount");
        getCountRef.on("value", (data)=>{
            playerCount = data.val();
        });
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
         });
    }
    static getPlayersInput(){
        var playerinforef = database.ref('players');
        playerinforef.on("value", (data)=>{
            allPlayers = data.val();
        });
    }
}