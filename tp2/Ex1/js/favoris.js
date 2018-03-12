var liens= [ 
	{
	nom:"Google"  ,
	url:"www.google.fr",
	img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png"	
},
	{
		nom:"Le Monde",
		url:"www.lemonde.fr/",
		img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lemonde_fr_2005_logo.svg/200px-Lemonde_fr_2005_logo.svg.png?uselang=fr"

	},
	{
		nom:"L'Equipe",
		url:"www.lequipe.fr",
		img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/L%27%C3%89quipe_wordmark.svg/200px-L%27%C3%89quipe_wordmark.svg.png"
	}
];

window.addEventListener("load", () =>
{
	var ul = document.createElement("ul") ; //Ajoute un ul dans le fichier dom
	liens.forEach((el)=>
	{
		var li = document.createElement("li") ;
		var a = document.createElement("a") ;
		a.href = "http://"+el.url ;
		a.textContent = el.nom ;

		//On ajoute au DOM
		li.appendChild(a) ;
		ul.appendChild(li) ;
	})
	//Ajoute au body
	document.body.appendChild(ul) ;
})