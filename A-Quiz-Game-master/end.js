
const finalscore = document.getElementById('finalscore');
const mostrecentscore = localStorage.getItem('mostrecentscore');


finalscore.innerText = mostrecentscore;

if(finalscore!=50){
    document.getElementById('Correct').innerHTML='Correct Answers :'+(mostrecentscore/10);
    document.getElementById('Congrat').style.color='red';
    document.getElementById('Congrat').innerHTML='You Just missed..!';
                   document.getElementById('finalwin').innerHTML='0';
}