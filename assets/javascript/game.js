$( document ).ready(function() {       
    {
        choices = [{
            "id":"t"
            "name":"Donald Trump",
            "choiceImg": "assets/images/t.jpg",
            "hp": "441",
            "a": "3",
            // afn: trumpAttack()
        },
        {
            "id":"c"
            "name": "Hillary Clinton",
            "choiceImg": "assets/images/h.jpg",
            "hp": "404",
            "a": "3",
            // afn: clintonAttack()
        },
        {
            "id":"j"
            "name": "Gary Johnson",
            "choiceImg": "assets/images/j.jpg",
            "hp": "61",
            "a": "1",
            // afn: johnsonAttack()
        },
        {
            "id":"s"
            "name": "Jill Stein",
            "choiceImg": "assets/images/s.jpg",
            "hp": "23",
            "a": "0",
            // afn: steinAttack()
        }
    ]}
    //
    var playerChosen = false;
    var enemyChosen = false;
    // start the game
    $( function() {
        $("#freeToChoose").empty();
        $("#initBtn").click(function() {
            for (var i = 0; i < choices.length; i++){
                var cimg = choices[i].choiceImg;
                var cstat = choices[i].hp;
                var cid = choices[i].name;


                $("#freeToChoose").append('<button class="choiceBtn ' + cid + ' "><img class="img choicepic" src=' + cimg + '></img><br><p class="hpclass" class="h5">HP: ' + cstat + '</p></button>');
                
            }
        });
    });

    $(".choicepic").click(function() {

    }



    if (playerChosen === true) {
        ("#freeToChoose").clear()
    }








});


