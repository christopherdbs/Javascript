window.onload=(()=>
{
	//Equivalent de getElementById() -- reprend la syntaxe CSS pour récupérer les id (ici)
	var form = document.querySelector("#form") ;
	var tbody = document.querySelector("#contacts tbody") ; //A partir de contact on récupère le tbody qui est dans contact
	var contacts = JSON.parse(localStorage.getItem("contacts")) ; //Récupère le stockage local
	if(contacts == null)
	{
		contacts = [] ; //Puisque non défini, on le déclare
		localStorage.setItem("contacts", JSON.stringify(contacts)) ;
	}
	form.addEventListener("submit", function(ev)
									{
										ev.preventDefault() ;	//Bloque la réaction par défaut
										//Attention : couplage trop grand donc risque si le nom est modifié
										var nom = this			//Représente le formulaire
													.elements
													.nom
													.value ;
										var prenom = this			//Représente le formulaire
													.elements
													.prenom
													.value ;
										var email = this			//Représente le formulaire
													.elements
													.email
													.value ;

										//Ajoute au tableau de sauvegarde
										contacts.push({"nom":nom, "prenom":prenom, "email":email}) ;
										localStorage.setItem("contacts", JSON.stringify(contacts)) ;

										//Insère les éléments dans le flux HTML
										var tr = document.createElement("tr") ;
										tr.innerHTML =	"<td>"+nom+"</td>"
														+ "<td>"+prenom+"</td>"
														+ "<td>"+email+"</td>"
														;
										tbody.appendChild(tr) ;
										this.reset() ;
								}) ;
	//Capture un click sur un fils
	tbody.addEventListener("click",
							function(ev)
							{
								if(confirm("Supprimer ?")) //Affiche une demande de  confirmation(fenêtre indépendante)
								{
									//On récupère le "tr" à effacer et on le passe à la fonction removeChild.
									this.removeChild(ev
									.target
									.parentNode);
								}
							},
							true)
})

//JSON.stringify --> transforme un objet en chaine de caractères
//JSON.parse	--> opération inverse