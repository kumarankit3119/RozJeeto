

var current_time= new Date();
          var hour=current_time.getHours();
          var minute= current_time.getMinutes();
          var players =0;
          var scrol =hour-8;
          
           if(hour > 8 | players>=100){
               document.getElementById("b1").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn2").disabled = true ;
               window.scrollBy(0,(430*scrol));
               window.addEventListener("load",noscroll);
               
               function noscroll(){
                    window.scrollTo(0,(430*scrol));
               }
               
         
          }else{
               document.getElementById("b2").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
          
          
          if(hour > 9 | players>=100){
               document.getElementById("b3").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn3").disabled = true ;
             
         
          }else{
               document.getElementById("b4").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
          
            if(hour > 10 | players>=100){
               document.getElementById("b5").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn4").disabled = true ;
         
          }else{
               document.getElementById("b6").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
            if(hour > 11 | players>=100){
               document.getElementById("b7").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn5").disabled = true ;
         
          }else{
               document.getElementById("b8").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
          
            if(hour > 12 | players>=100){
               document.getElementById("b9").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn6").disabled = true ;
         
          }else{
               document.getElementById("b10").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
          
            if(hour > 13 | players>=100){
               document.getElementById("b11").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn7").disabled = true ;
         
          }else{
               document.getElementById("b12").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
            if(hour > 14 | players>=100){
               document.getElementById("b13").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn8").disabled = true ;
         
          }else{
               document.getElementById("b14").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
            if(hour > 15 | players>=100){
               document.getElementById("b15").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn9").disabled = true ;
         
          }else{
               document.getElementById("b16").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
            if(hour > 16 | players>=100){
               document.getElementById("b17").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn10").disabled = true ;
         
          }else{
               document.getElementById("b18").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
            if(hour > 17 | players>=100){
               document.getElementById("b19").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn11").disabled = true ;
         
          }else{
               document.getElementById("b20").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
            if(hour > 18 | players>=100){
               document.getElementById("b21").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn12").disabled = true ;
         
          }else{
               document.getElementById("b22").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
            if(hour > 19 | players>=100){
               document.getElementById("b23").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn13").disabled = true ;
         
          }else{
               document.getElementById("b24").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
           if(hour > 20 | players>=100){
               document.getElementById("b25").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn14").disabled = true ;
         
          }else{
               document.getElementById("b26").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
            if(hour > 21 | players>=100){
               document.getElementById("b27").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn15").disabled = true ;
         
          }else{
               document.getElementById("b28").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;}
         
         if(hour > 22 | players>=100){
               document.getElementById("b29").innerHTML = "&nbsp;&nbsp;Registration-Closed" ;
       document.getElementById("myBtn16").disabled = true ;
         
          }else{
               document.getElementById("b30").innerHTML = "&nbsp;&nbsp;<b>Registration-open</b> " ;  }
          

  function link(btn){
      btn=btn-1;
    if(hour == btn)
    window.open("create%20team.php","_parent");
    else
         window.open("upcomingtm.php","_parent");
    
}
        