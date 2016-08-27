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
//why the path???????????
$(function() {
    var cimg = "";
        cimg = choices[1].choiceImg;
    console.log(cimg);

    $("#freeToChoose").append('<img class="img" src=cimg>');
});

//
// $( function() {
//     $("#initBtn").click(function() {
//         alert("hi");
//         // console.log(choices[1].name);
//         for (var i = 0; i < choices; i++){
//             console.log(choices[i].name);
//             $("freeToChoose").prepend(choices[i].img);
//         }
//     });
// });
//







