function readFile(file){
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET",file,false);
  var allText=""
  rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText.split("\n")
}

function findRace(name){
  var lines=['{"raceName":"Artificial Construct","SN":"AC","cost":4,"baseAttributes":["Base Movement","SMOD:No Constitution","Immunity(Ability Damage, Ability Drain, disease,death,energy drain,necromantic effects,poison,sleep,paralysis,stun)+1","NOEF:Crits and subdual damage","Defect:Cannot Heal","SMOD:Succeed fort save(unless objects effected)"],"lvlbonus":""}'];
  try{
    lines = readFile("js/racedescriptions.js");
  } catch (error){
    alert(error);
  }
  document.getElementById("rattr").innerHTML=lines[0];
  var randJson=JSON.parse(lines[0]);
  document.getElementById("rname").innerHTML="test";
  for (let i=0; i<lines.length;i++){
    if (lines[i].indexOf(name)>-1){
      rJson=JSON.parse(lines[i]);
      document.getElementById("rname").innerHTML=rJson.raceName;
      return null;
    }
  }
}
