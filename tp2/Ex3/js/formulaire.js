window.onload=()=>
{
	//Equivalent de getElementById() -- reprend la syntaxe CSS pour récupérer les id (ici)
	var form = document.querySelector("#form") ;
	var body = document.querySelector("body") ; //A partir de contact on récupère le tbody qui est dans contact

	form.addEventListener("click", function(ev)
									{					
										body.querySelector("label").foreach(function(element){
											body.removeChild(element);
										});	
										ev.preventDefault() ;	//Bloque la réaction par défaut
										//Attention : couplage trop grand donc risque si le nom est modifié
										var nb = this			//Représente le formulaire
													.elements
													.enfant
													.value ;
									

											console.log(nb);

										//Insère les éléments dans le flux HTML
										for(var s=0;s<nb;s++){
											var label= document.createElement("label") ;
												var input = document.createElement("input") ;
	
										label.innerHTML =	"<label> Prénom enfant "+(s+1) +"</label>"	;
										input.innerHTML =	"<input> </input>"	;
										body.appendChild(label) ;
										body.appendChild(input) ;
										
										}
		
										
				
		}) ;

}

//JSON.stringify --> transforme un objet en chaine de caractères
//JSON.parse	--> opération inverse