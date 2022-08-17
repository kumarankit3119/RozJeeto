var titlearray =["PUBG MOBILE","FREE-FIRE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE"];
var entry =["20","20","20","20","20","20","20"];

var date =["6 july","5 july","4 july","","","",""];

var slot =["9:30-10:15","8:30-10:15","1:30-10:15","4:30-10:15","","",""];

var map =["Erangel","Erangel","Erangel","Erangel","Erangel","Erangel","Erangel"];

var team =["Solo","duo","squad","squad","squad","squad","squad"];

var teamname  =["ankit ","js program","python code","java objects","android program","jquery objects","ruby code"];



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

    <p>Slot -
          ${slot[i]}
        </p>

    <p style="color:yellow;">Map -
          <b>${map[i]}</b>
        </p>

    <p>Team  -
          ${team[i]}
        </p>

    <p>Team name -
          ${teamname[i]}
        </p>

 <p style="color:lawngreen;"><b>Status -
        Joined</b>
        </p>

        <a class="showmore" href="#"></a>
      </div>
    </div><br><br>` + fetch ; 
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')
    `;
  document.getElementById("tmop").innerHTML = "Total matches -" + titlearray.length;
     
} 
