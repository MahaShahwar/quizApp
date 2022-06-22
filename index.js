
    
    const myQuestions = [
        {
          question: "Who invented JavaScript?",
          answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
          },
          correctAnswer: "Brendan Eich"
        },
        {
          question: "Which one of these is a JavaScript package manager?",
          answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
          },
          correctAnswer: "npm"
        },
        {
          question: "Which tool can you use to ensure code quality?",
          answers: {
            a: "Angular",
            b: "jQuery",
            c: "ESLint",
          },
          correctAnswer: "ESLint"
        }
      ];

      var count = 0
      var score=0
      var finalScore=0
      
      lastQuestion=myQuestions.length
      
      
      function next() {
        answer= myQuestions[count].correctAnswer

        var ele = document.getElementsByName('quiz');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
              result=ele[i].value;
              if(result==answer){
                score++;
              }
            } 
        }
        count++;
       
        document.getElementById("q1").innerHTML = myQuestions[count].question
      
        document.getElementById("a").innerHTML =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[0]]
        document.getElementById("b").innerHTML =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[1]]
        document.getElementById("c").innerHTML =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[2]]

        document.getElementById("optionA").value =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[0]]
        document.getElementById("optionB").value =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[1]]
        document.getElementById("optionC").value =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[2]]

          
        
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
        
        if(count>=lastQuestion-1){
          //document.getElementById('next').style.visibility = 'hidden';
          alert("submit the quiz on next page")
        } 

      }
    
      function submit() {
        answer= myQuestions[lastQuestion-1].correctAnswer

        var ele = document.getElementsByName('quiz');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
              result=ele[i].value;
              if(result==answer){
                score++;
              }
            } 
        }
        console.log(score)
        document.getElementById("results").innerHTML=score
       
    }
     
      function previous() {
        count--;
        document.getElementById("q1").innerHTML = myQuestions[count].question
      
        document.getElementById("a").innerHTML =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[0]]
        document.getElementById("b").innerHTML =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[1]]
        document.getElementById("c").innerHTML =myQuestions[count].answers[Object.keys(myQuestions[count].answers)[2]]
        
        if(count<=0){
          alert("No more previous question")
         // document.getElementById('previous').style.visibility = 'hidden';
          
        }
      }

      

     

      