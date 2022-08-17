var titlearray =["PUBG MOBILE","FREE-FIRE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE","PUBG MOBILE"];
var descriptionarray =["20","js program","python code","java objects","android program","jquery objects","ruby code"];
var descriptiondate =["6 july","js program","python code","java objects","android program","jquery objects","ruby code"];
var descriptionslot =["9:30-10:15","js program","python code","java objects","android program","jquery objects","ruby code"];
var descriptionmap =["Erangel","js program","python code","java objects","android program","jquery objects","ruby code"];
var descriptionteam =["Solo","js program","python code","java objects","android program","jquery objects","ruby code"];
var teamname  =["ankit ","js program","python code","java objects","android program","jquery objects","ruby code"];


var dynamic = document.querySelector('.mymatcontainer');  
for (var i = 0; i < 5; i++) {
  var fetch = document.querySelector('.mymatcontainer').innerHTML;  
  dynamic.innerHTML = `<div id="cards${i}" class="boxes">
      <div class="box-content">
        <h2> ${titlearray[i]}</h2><hr>
        <p>ENTRY -
          ${descriptionarray[i]}rs
        </p>
    <p style="color:blue;">Joined on -
          ${descriptiondate[i]}
        </p>
    <p>Slot -
          ${descriptionslot[i]}
        </p>
    <p>Map -
          ${descriptionmap[i]}
        </p>
    <p>Team  -
          ${descriptionteam[i]}
        </p>
    <p>Team name -
          ${teamname[i]}
        </p>
        <a class="showmore" href="#"></a>
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
} 
