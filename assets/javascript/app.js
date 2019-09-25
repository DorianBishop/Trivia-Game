$(document).ready(function() {
   
    $('#countdown').hide();
    $('.trivia-ques').hide();
    $('.results').hide();
    
    // Variables
    var number = 90; //number of seconds
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;
  