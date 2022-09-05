$('#login').click(function(){ //when login button is clicked
    var lang = $('#lang').val()//get the language value that is selected from dropdown input
    var loginGrtr = G$('john', 'doe', lang).greet('#greeting', true) //create greetr obj, then call greet() with the html selector + the formal/informal bool and change the html to the product of the greet function
})