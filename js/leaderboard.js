
  var table = document.getElementById("myTable");
    
    var userid=["Adhira Goel",
"Alisha	Mehta        ",
"Ankit Kushwaha	     ",
"Anaisha	Chowdhary    ",
"Ananya  Chawla       ",
"Avni mishra          ",
"Carina bedi          ",
"Drishti	Singh        ",
"Hiya kumari	         ",
"Ira	Bedi             ",
"Vikas kushwaha       ",
"Mohit Joshi          ",
"Sidharth Kashyap     ",
"Himanshu Sharma      ",
"Ishita	Jha          ",
"Kaia Kumari	         ",
"Kashvi Varma         ",
"Krisha Maurya        ",
"Larisa	Iyer         ",
"Mahika Jain	         ",
"Mayra Khanna	     ",
"Mehar Kaur           ",
"Aniket Tiwari        ",
"Mirai 	Gokhale      ",
"Mishka	Dubey        ",
"Naitee	Chopra       ",
"Navya Ghosh          ",
"Divij Jain           ",
"Divit Verma          ",
"Divyansh Saini       ",
"Eeshan Singh         ",
"Nehrika	Joshi        ",
"Neysa Dayal          ",
"Dixit Dhiman         ",
"Pavati	Saxena       ",
"Prisha	Shah         ",
"Ryka	Ray          ",
"Rebecca	Dhawan       ",
"Saanvi	Thakur       ",
"Sahana	Singh        ",
"Sai	Divi             ",
"Saisha Gupta         ",
"Saloni	Kumari       ",
"Shanaya	Chauhan      ",
"Shrishti  Mehta      ",
"Sneha	 Kumar       ",
"Taahira	 Dhar        ",
"Taara	 Patel       ",
"Tanvi	 Bhatt       ",
"Viti	 Surve       ",
"Zara     Kapoor      ",
"Aahva	 Anand       ",
"Aadiv	 Dayal       ",
"Aarav	 Dhawan      ",
"Akanksh	 Puri        ",
"Ajay	MAngal       ",
"Anant	Kulkarni     ",
"Atiksh	Bhasin       ",
"Ayaan	Zubair       ",
"Bhuv	Jha          ",
"Dasya	Sunder       ",
"Gopal Mishra	     ",
"Hemant Raj           ",
"Idhant	Chakrabarti  ",
"Ishank	Sri          ",
"Jash	Dhar         ",
"Jay	Chadra           ",
"Josi Kashyap         ",
"Kabir Modi           ",
"Kahaan	Gupta        ",
"Kairav	chauhan      ",
"Kevin	Ahuja        ",
"Laksh	Arora        "];
    
 
    var battle=["130 ","110","100","98","89","85","79","75","69","65"];
    
    var mob=["bh****.haridass@gmail.com",
"di****afe2011@gmail.com",
"bh****k18@gmail.com",
"ha****anfzd67@gmail.com",
"ha****pm@gmail.com",
"bh****sharma2305@gmail.com",
"in****davkrishna@gmail.com",
"ji****25@gmail.com",
"kr****@gmail.com",
"li****13@yahoo.com",
"pr****hinnaa@gmail.com",
"ra****umaar786@gmail.com",
"va****ababu66@gmail.com",
"an****kris@gmail.com",
"as****brandeis.edu;",
"aw****gmail.com;",
"dk****rmacy@gmail.com",
"du****ollege@gmail.com",
"ed****jreim-ayushjournal.com",
"fi****s.galgotia@gmail.com",
"gc****1966@gmail.com",
"kv****li@gmail.com",
"la****aarki@gmail.com",
"lf****gegvr@gmail.com",
"ma****sm@gmail.com",
"pr****al.npgcsr@gmail.com",
"pr****resh.india@gmail.com",
"re****ur@gmail.com",
"sk****arkashi@gmail.com",
"st****collegeagra@gmail.com",
"su****@gmail.com",
"ak****7@gmail.com",
"ha****tsbrar16@gmail.com",
"ig****-bih@nic.in",
"in****andhib.ed09@gmail.com",
"in****alshit@gmail.com",
"ji****92@gmail.com",
"ou****e4@gmail.com",
"pa****.srcc.wds@gmail.com",
"pr****the123@gmail.com",
"sa****cl@gmail.com",
"sm****lacode@gmail.com",
"st****collegeagra@gmail.com",
"su****@gmail.com",
"an****un12@gmail.com;",
"bo****ollege@gmail.com",
"bp****mcollege@gmail.com",
"br****3@gmail.com",
"fi****@gmail.com",
"ga****raza@yahoo.com",
"ge****e@gmail.com",
"kn****haiah@gmail.com",
"lc****@asianetindia.com",
"na****ctron@gmail.com",
"pr****ndra@yahoo.com",
"pr****alagiacollege@gmail.com",
"pr****alskpcc@gmail.com",
"rg****cs.du@gmail.com",
"sh****iitm@gmail.com",
"su****nungo63@gmail.com",
"ti****gmail.com;",
"uj****angi@gmail.com",
"us****sh@gmail.com",
"al****dsc.dcac@gmail.com",
"ga****huti@gmail.com",
"go****ollegebisalpur@gmail.com",
"hc****@gmail.com;",
"hc****ool@gmail.com;",
"pr****aldducollege@gmail.com",
"rg****cs.du@gmail.com",
"sb****npali@gmail.com",
"sh****college@gmail.com",
"zy****@gmail.com",
"cu****mania@gmail.com",
"cu****lchd@gmail.com",
"km****r66@gmail.com",
"pr****mishra64@gmail.com",
"ro****t.45@gmail.com",
"sp****ics@gmail.com",
"wa****oductionmail@gmail.com"];
    
    var winning =["10000","9945","7888","6555","5487","4367","4234","4134","3960"];
    
   for (var i = 0; i < userid.length; i++) {
       var index=i+2;
       
  var row = table.insertRow(index);
       
  var cell1 = row.insertCell(0);//index
       
  var cell2 = row.insertCell(1);
       
     var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
       
 
       
  cell1.innerHTML = index;
  cell2.innerHTML = userid[i];
  cell3.innerHTML = battle[i];
  cell4.innerHTML = mob[i]; 
    cell5.innerHTML =  winning[i]+"&nbsp;rs";
       
       
       
       
       
   }
    