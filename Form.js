class Form{
    constructor(){
         this.inpu = createInput("Your name please");
        this.button = createButton("continue");
        this.greeting = createElement('H3');
    }
    display(){
        var title = createElement('H2');
        title.html("Forza Horizon NoteBook");
        title.position(130, 12);
        this.inpu.position(130, 200);
        this.button.position(260, 250);
        this.button.mousePressed(()=>{
            this.inpu.hide();
            this.button.hide();
            player.name = this.inpu.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(200, 50);
        });
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.inpu.hide();
    }
}