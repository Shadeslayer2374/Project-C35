class Form{
    constructor(){
        this.input = createInput("Participant Name");
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Let's Do a survey on Online classes :)");
        this.question1 = createElement('h3', "Q.1 Should online classes be continued?");
        this.radio = createRadio('h4');
        this.radio.option('Yes');
        this.radio.option('No');
        this.radio.option('No comment');
        this.question2 = createElement('h3', "Q2. Do you think Offline classes sets an unecessary risk for students?");
        this.radio1 = createRadio('h4');
        this.radio1.option('Yes');
        this.radio1.option('No');
        this.radio1.option('No comment');
        this.question3 = createElement('h3', "Q.3 Did you like this survey? ");
        this.radio2 = createRadio('h4');
        this.radio2.option('Yes');
        this.radio2.option('No');
        this.radio2.option('No Comment');

    }


    display() {
        this.input.position(570, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(500, 5)
        this.question1.position(300, 360)
        this.radio.position(500, 440)
        this.question2.position(300, 480)
        this.radio1.position(500, 540)
        this.question3.position(300, 580)
        this.radio2.position(500, 630)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.text.hide();
            this.question1.hide();
            this.question2.hide();
            this.question3.hide();
            this.radio.hide();
            this.radio1.hide();
            this.radio2.hide();
            Player.input = this.input.value();
            this.greeting.html("Thank you " + Player.input)
            this.greeting = createElement('h2');
            this.greeting.position(displayWidth/2 - 100, displayHeight/4);
          });
        
    }
}