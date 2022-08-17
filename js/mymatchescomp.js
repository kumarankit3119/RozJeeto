var titlearray =["PUBG MOBILE","FREE-FIRE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE"];

var entry =["20","20","20","20","20","20","20"];

var date =["6 july","5 july","4 july","","","",""];

var prize =["100","9","9"," 9"," 0","50","70"];

var map =["Erangel","Erangel","Erangel","Erangel","Erangel","Erangel","Erangel"];

var team =["Solo","duo","squad","squad","squad","squad","squad"];

var teamname  =["ankit "," ","python code","java objects","android program","jquery objects","ruby code"];

var Rank  =["1 ","3","p4","2s","5","5","8"];

var kills  =["10 ","8","0","4s","6","4","1"];


var dynamic = document.querySelector('.mymatcontainer');  
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.mymatcontainer').innerHTML;  
  dynamic.innerHTML = `<div id="cards${i}" class="boxes" style ="    margin-bottom: 20px;">
      <div class="box-content">

        <h2> ${titlearray[i]}</h2><hr style ="    margin-bottom: 10px;">

        <p>ENTRY -
          ${entry[i]}rs
        </p>

    <p style="color:lawngreen;"><b>Joined on -
          ${date[i]}</b>
        </p>

<p>Team name -
          ${teamname[i]}
        </p>

    <p>Prize Won -
          ${prize[i]}rs
        </p>

<p>Rank -
          ${Rank[i]}
        </p>

<p>Kills -
          ${kills[i]}
        </p>

    <p style="color:yellow;">Map -
          <b>${map[i]}</b>
        </p>
   
 

 <p style="color:lawngreen;"><b>Status -
        Completed</b></p>
        <a class="showmore" href="#"></a>
      </div>
    </div><br><br>` + fetch ; 
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
    document.getElementById("tmof").innerHTML = "Total matches -" + titlearray.length;
} 
