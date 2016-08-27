{
    choices = [{
        "name":"Donald Trump",
        "choiceImg": "assets/images/t.jpg",
        "hp": "441",
        "a": "3",
        // afn: trumpAttack()
    },
    {
        "name": "Hillary Clinton",
        "choiceImg": "assets/images/h.jpg",
        "hp": "404",
        "a": "3",
        // afn: clintonAttack()
    },
    {
        "name": "Gary Johnson",
        "choiceImg": "assets/images/j.jpg",
        "hp": "61",
        "a": "1",
        // afn: johnsonAttack()
    },
    {
        "name": "Jill Stein",
        "choiceImg": "assets/images/s.jpg",
        "hp": "23",
        "a": "0",
        // afn: steinAttack()
    }
]}
//
// var playerChosen = false
// var 

$( function() {
    $("#initBtn").click(function() {
        for (var i = 0; i < choices.length; i++){
            cimg = choices[i].choiceImg;

            $("#freeToChoose").append('<input type="image" class="img" src=' + cimg + '></input>');
        }
    });
});


$( function() {
    $("#freeToChoose").click(function()

        )


});



