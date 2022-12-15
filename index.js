	
      //play and pause

      function video_1() {
         
        var firstVid = document.getElementById("vD_1");

        var secondVid = document.getElementById("vD_2");
        var thirdVid = document.getElementById("vD_3");
        var fourthVid = document.getElementById("vD_4");

     if (firstVid.paused) {
          firstVid.play();
          secondVid.pause();
          thirdVid.pause();
          fourthVid.pause();
        } else {
          firstVid.pause()
        }
     }

    function video_2() {
    
       var firstVid = document.getElementById("vD_1");
        var secondVid = document.getElementById("vD_2");
        var thirdVid = document.getElementById("vD_3");
        var fourthVid = document.getElementById("vD_4");
        
     if (secondVid.paused) {
          secondVid.play();
          firstVid.pause();
          thirdVid.pause();
          fourthVid.pause();
        } else {
         secondVid.pause()
        }
     }

     function video_3() {

       var firstVid = document.getElementById("vD_1");
       var secondVid = document.getElementById("vD_2");
       var thirdVid = document.getElementById("vD_3");
       var fourthVid = document.getElementById("vD_4");
       
    if (thirdVid.paused) {
         thirdVid.play();
         secondVid.pause();
         firstVid.pause();
         fourthVid.pause();
       } else {
         thirdVid.pause()
       }
    }

    function video_4() {
    
        var firstVid = document.getElementById("vD_1");
        var secondVid = document.getElementById("vD_2");
        var thirdVid = document.getElementById("vD_3");
        var fourthVid = document.getElementById("vD_4");
        
     if (fourthVid.paused) {
          fourthVid.play();
          secondVid.pause();
          thirdVid.pause();
          firstVid.pause();
        } else {
         fourthVid.pause()
        }
     }



