$(document).ready(function() {

    
        $('#countdown').hide();
        $('.trivia-ques').hide();
        $('.results').hide();
    
       //Variables
        var number = 60; //number of seconds
        var intervalId;
        var correctCount = 0;
        var wrongCount = 0;
        var unanswered = 0;
    
    
    
        // Function to show questions
        function showQuestions(){
            $('#countdown').show();
            $('.trivia-ques').show();
            $('#game-done').show();
        }
    
        // Function for timer
        function countdownTimer(){
                intervalId = setInterval(decrement, 1000);
        }
       
            
        function decrement(){
            number--;
            $('#timer').html(" " + number + " " + "seconds");
            if (number ===1){
                $('#timer').html(" " + number + " " + "second");
            }
            else if(number ===0) {
                stop();
                hide();
                displaySummary();
            }
        }
    
            //Function to clear timer
        function stop() {
            clearInterval(intervalId);
        }
    
            
        function hide(){
            $('#countdown').hide();
            $('.trivia-ques').hide();
            $('#game-done').hide();
        }
    
        // Funtion to Summarize game display
        function displaySummary(){
            $('.results').show();
            unanswered = (5-(correctCount+wrongCount));
            $('#correctScore').text("Correct Answers:" + " " + correctCount); 
            $('#wrongScore').text("Wrong Answers:" + " " + wrongCount); 
            $('#unanswered').text("Unanswered:" + " " + unanswered); 
        }
    
    //Buttons
    
        // Start Button
        $('#game-start').on('click', function(){
            $('#game-start').hide();
            showQuestions();
            countdownTimer();
        }); 
    
        // Done Button
        $('#game-done').on('click', function(){
            $('#game-start').hide(); 
            hide();
            displaySummary();
        });
    
        // Radio button
        $('input[type=radio]').on ('change', function(){
        correctCount = $('input[value=correct]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        unanswered = (5-(correctCount+wrongCount));
        });
    
    });