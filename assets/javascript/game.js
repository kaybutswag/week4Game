var parisStats = {
  "health": 17,
  "attack": 5,
  "cAttack": 5,
  "quotes": ["If you need some love, get a hooker.",
  "Fall in a hole!",
  "Find a ledge or a way to deal.",
  "You offer nothing to women or the world in general.",
  "Tie your tubes, idiot.",
  "Was the last time you had an interesting though when you considered flinging yourself off a building.",
  "I can scare the stupid out of you, but lazy runs deep.",
  "I was busy trying to get air to my brain cells, a burden you've not yet faced."]
};

var lucilleStats= {
"health": 30,
"attack": 2,
"cAttack": 2,
"quotes": ["If you're worried about criticism, sometimes a diet is the best defense.",
  "You want your belt to buckle, not your chair.",
  "At least you're in jail, not an urn.",
  "Are you a stay-in-bed mom?",
  "My coat costs more than your house, if you had a house.",
  "You just get more awful.",
  "Those heels can only carry so much weight.",
  "You're my third least favorite child."]
};

  var jackStats={
"health": 20,
"attack": 4,
"cAttack": 3,
"quotes": ["Human empathy. It's as useless as the Winter Olympics.",
  "Fifty is still sixty for women.",
  "What tradgedy happened in your life that you insist upon punishing yourself with all this mediocrity.",
  "See grown-up dating world is like your haircut. Sometimes awkward triangles occur.",
  "Socio-economically speaking you are more like an inner-city latina.",
  "But you’ll always be a pig farmer’s son, boy, cause I smell fried baloney all over you.",
  "Don't worry about getting to your point, I'm going to live forever.",
  "Thank you for telling me what I already know. You should work for the Huffington Post."]
};

  var dwightStats={
"health": 16,
"attack": 6,
"cAttack":6,   
"quotes": ["Depression? Isn't that a fancy word for feeling bummed out?",
  "Speaking of funerals, why don't you go ahead and die.",
  "You look normal, ugly.",
  "You're an idiot.",
  "When someone smiles at me, all I see is a chimpanzee begging for its life.",
  "I hope the war goes on forever and you get drafted.",
  "I am better than you have ever been or ever will be.",
  "There's too many people like you on this earth, we need a new plague."]
};
//I want to pass the id and grab quote. If I put this id in

  var iconsChosen= false;
  var fighterChosen =false;
  var fighterID="";
  var enemyID="";
  var zinger="";
  var oldHealth1=0;
  var oldHealth2=0;
  var newHealth1=0;
  var newHealth2=0;
  var deadCount=0;
  var newAttack=0;
  var oldAttack=0;


function getQuote(name){
  if(name=="Lucille"){
    zinger= lucilleStats.quotes[Math.floor(Math.random() * lucilleStats.quotes.length)];
    return zinger;
  }
else if (name=="Jack"){
    zinger= jackStats.quotes[Math.floor(Math.random() * jackStats.quotes.length)];
    return zinger;
}

else if (name=="Paris"){
    zinger= parisStats.quotes[Math.floor(Math.random() * parisStats.quotes.length)];
    return zinger;
} 

else if (name=="Dwight"){
    zinger= dwightStats.quotes[Math.floor(Math.random() * dwightStats.quotes.length)];
    return zinger;
}

}

function fight(name1,name2){
  function jab(name1){
    if(name1=="Lucille"){
      attack=lucilleStats.attack;
      console.log(attack);
      $("#lscores").text("Attack:"+" "+attack);
      lucilleStats.attack+=lucilleStats.attack;
      attack=lucilleStats.attack;
      return attack;
      console.log(attack);
    }
    else if(name1=="Jack"){
      attack= jackStats.attack;
      $("#jscores").text("Attack:"+" "+attack);
      jackStats.attack+=jackStats.attack;
      attack=jackStats.attack;
      return attack;
    }

    else if(name1=="Paris"){
      attack= parisStats.attack;
      $("#pscores").text("Attack:"+" "+attack);
      parisStats.attack+=parisStats.attack;
      attack=parisStats.attack;
      return attack;
    }

    else if(name1=="Dwight"){
      attack= dwightStats.attack;
      $("#dscores").text("Attack:"+" "+attack);
      dwightStats.attack+=dwightStats.attack;
      attack=dwightStats.attack;
      return attack;
    }

  }
  

    function respond(name2){

    if(name2=="Lucille"){
      cAttack= lucilleStats.cAttack;
      $("#lscores").text("Counter Attack:"+" "+cAttack);
      return cAttack;
      }
    
    else if(name2=="Jack"){
      cAttack= jackStats.cAttack;
      $("#jscores").text("Counter Attack:"+" "+cAttack);
      return cAttack;
      }

    
    else if(name2=="Paris"){
      cAttack= parisStats.cAttack;
      $("#pscores").text("Counter Attack:"+" "+cAttack);
      return cAttack;
      console.log("checked");
      }

    else if(name2=="Dwight"){
      cAttack= dwightStats.cAttack;
      $("#dscores").text("Counter Attack:"+" "+cAttack);
      return cAttack;
      }
}

  function recalculate1(cAttack,name1){
   if(name1=="Lucille"){
      oldHealth1=lucilleStats.health;
      newHealth1=oldHealth1-cAttack;
      $("#lLevel").text(newHealth1);
      lucilleStats.health=newHealth1;
      oldHealth1=lucilleStats.health;
      return oldHealth1;
    }
    else if(name1=="Jack"){
      oldHealth1=jackStats.health;
      newHealth1=oldHealth1-cAttack;
      $("#jLevel").text(newHealth1);
      jackStats.health=newHealth1;
      oldHealth1=jackStats.health;
      return oldHealth1;
    }

    else if(name1=="Paris"){
      oldHealth1=parisStats.health;
      newHealth1=oldHealth1-cAttack;
      $("#pLevel").text(newHealth1);
      parisStats.health=newHealth1;
      oldHealth1=parisStats.health;
      return oldHealth1;
    }

    else if(name1=="Dwight"){
      oldHealth1=dwightStats.health;
      newHealth1=oldHealth1-cAttack;
      $("#dLevel").text(newHealth1);
      dwightStats.health=newHealth1;
      oldHealth1=dwightStats.health;
      return oldHealth1;
    }  

}

function recalculate2(attack,name2){
    oldAttack=attack;
    newAttack=attack/2;
    console.log(newAttack);
   if(name2==="Lucille"){
      oldHealth2=lucilleStats.health;
      newHealth2=oldHealth2-newAttack;
      $("#lLevel").text(newHealth2);
      lucilleStats.health=newHealth2;
      oldHealth2=lucilleStats.health;
      return oldHealth2;
    }
    else if(name2==="Jack"){
      oldHealth2=jackStats.health;
      newHealth2=oldHealth2-newAttack;
      $("#jLevel").text(newHealth2);
      jackStats.health=newHealth2;
      oldHealth2=jackStats.health;
      return oldHealth2;
    }

    else if(name2==="Paris"){
      oldHealth2=parisStats.health;
      newHealth2=oldHealth2-newAttack;
      $("#pLevel").text(newHealth2);
      parisStats.health=newHealth2;
      oldHealth2=parisStats.health;
      return oldHealth2;
    }

    else if(name2==="Dwight"){
      oldHealth2=dwightStats.health;
      newHealth2=oldHealth2-newAttack;
      $("#dLevel").text(newHealth2);
      dwightStats.health=newHealth2;
      oldHealth2=dwightStats.health;
      return oldHealth2;
    }  

}

jab(name1);
respond(name2);
recalculate1(cAttack,name1);
recalculate2(attack,name2);
}

$(document).ready(function() {

  $(".icon").on("click",function(){
    if (iconsChosen) return;

    if(fighterChosen){
      $(this).remove();
      $(".enemyIcon").append($(this));
      enemyID=$(this).attr("value");
      enemyBlock=$(this);
      $(this).css({'background-color':'black','color':'#a69373','border-color':'#a69373','height':'250px'});
      $("button").css('display','block');
      $(".enemyLine").css('display','block');
      $("#instructions").text("Press attack until one contender has no ego left.");
      iconsChosen= true;
    }

    else {
      $(this).remove();
      $(".fighterIcon").append($(this));
      fighterID=$(this).attr("value");
      $(this).css({'background-color':'#a69373','color':'black','height':'250px'});
      $(".fighterLine").css('display','block');
      $("#instructions").text("Choose your worthy Adversary");
      fighterChosen=true;
    }
    });

  $("button").on("click",function(){
    getQuote(enemyID);
    $(".enemyLine").text(zinger);
    getQuote(fighterID);
    $(".fighterLine").text(zinger);
    fight(fighterID,enemyID);
      if(oldHealth1<=0){
          $("#instructions").text("You have lost. You may now find you corner for crying.");
          $("button").css('display','none');
          $(".fighterIcon").css({'opacity': '0.4','filter':'alpha(opacity=40)'});
          $(".fighterLine").css({'opacity': '0.4','filter':'alpha(opacity=40)'});
        }
      else if((oldHealth2<=0)&&(deadCount<2)){
        $("button").css('display','none');
        $(enemyBlock).clone().appendTo(".lostBin");
        $(".lostBin").css({'opacity': '0.4','filter':'alpha(opacity=40)'});
        $(".enemyIcon").empty();
        $(".enemyLine").empty();    
        $(".enemyLine").css('display','none');
        $("#instructions").text("Victory! This party just got fun. Choose your next Victim.");
        deadCount ++;
        iconsChosen=false;   
      }
      else if((oldHealth2<=0)&&(deadCount>=2)){
        $("button").css('display','none');
        $(enemyBlock).clone().appendTo(".lostBin");
        $(".lostBin").css({'opacity': '0.4','filter':'alpha(opacity=40)'});
        $(".enemyIcon").empty(); 
        $(".enemyLine").empty(); 
        $(".enemyLine").css('display','none');
        $("#instructions").text("No self worth to be found! Enjoy the tears!");
      }
  });

});


