
  var tab = new Array(9);
   var tab2= new Array(9);


function Jouer(){
  document.getElementById("gagned").style.display = "none"; 
  document.getElementById("perdud").style.display = "none"; 

  var tirage = 0;
  var Memory={ "on":"./images/on.png",
                "off":"./images/off.png"
    }

  for(var i=0;i<9;i++)
    {   tab2[i]= 0;
        tirage=getRandomInt(2);
      console.log(tirage);
        if(tirage==1){
          document.images[i].src= Memory.on;
          tab[i]=1;
          
        }else{
          document.images[i].src= Memory.off;
          tab[i]=0;
        }
    }
   
    setTimeout(Back, 1000);
    
    
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Etat(nb){
  var Memory={ "on":"./images/on.png",
                "off":"./images/off.png"
    }

   document.images[nb].src= Memory.on;
   if(tab[nb] === 0){
        document.images[nb].src= Memory.off;
      Affichermasquer("perdud");
   }
 var gagnenb=0;
   tab2[nb]= 1;
    for(var i=0;i<9;i++){

      if(tab[i]===0)
       {          
          if(tab2[i]===0)
          {           gagnenb++;
           }
       }else if(tab[i]===1)
       {
         if(tab2[i]===1)
       {         gagnenb++;
       }
         
       }
             
    }
  
    if(gagnenb==9){
      Affichermasquer("gagned");
    }
  
}

function Back(){
   var Memory={ "on":"./images/on.png",
                "off":"./images/off.png"
    }

  for(var i=0;i<9;i++){
            document.images[i].src= Memory.off;
  }
}

function Affichermasquer(nom){
   var div = document.getElementById(nom); 
  if(div.style.display=="none") { 
    div.style.display = "block"; 
  } else { 
    div.style.display = "none";
  }
}

