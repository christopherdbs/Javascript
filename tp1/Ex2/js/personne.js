function Personne(nom,prenom,mail,age,amis){
	this.nom=nom||"";
	this.prenom=prenom||"";
	this.mail=mail||"";
	this.age=age||0;
	this.amis=amis||[];
}

var Denis=new Personne("Monnerat","Denis","monnerat@u-pec.fr",44);
var Pierre=new Personne("Valarcher","Pierre","valarcher@u-pec.fr",49);
var Didier=new Personne("Diaz","Didier","diaz@u-pec.fr",53);
var Luc=new Personne("Hernandez","Luc","hernandez@u-pec.fr",44);
var DeptInfo = [];
DeptInfo.push(Denis,Luc,Pierre,Didier);

Personne.prototype.toHtmlRow=function(){
	return "<tr>"
			+"<td>"+this.nom+"</td>"
			+"<td>"+this.prenom+"</td>"
			+"<td>"+this.mail+"</td>"
			+"<td>"+this.age+"</td>"
			+"<td>"+this.amis+"</td>"
			+"</tr>";
}

function ajouterAmi(){
var ok=document.getElementById("pseudo").value;
DeptInfo.forEach((p)=>{
	console.log(ok);
	p.amis[p.amis.length]=""+ok;
});

}

function AfficherTable(personnes){

	personnes.sort(function compareNombres(a, b) {
  return b - a;
})
	var tab = personnes.map(p=>{
		 p.nom=p.nom.toUpperCase();
		return p;
	});
	
document.writeln("<table class='_b1'><thead><th>Nom</th><th>Prénom</th><th>Mail</th><th>Age</th><th>Ami</th></thead>");
document.writeln("<tbody>");
	personnes.forEach(function(p){
		document.writeln(p.toHtmlRow());
		
	})
	document.writeln("</tbody></table>");
	  var total = [53,49,44,44].reduce((a, b)=> a + b,0);

		document.writeln("");

total=total/4;
document.writeln("<p>Age Moyen : "+total.toFixed(2)+"</p>");
}

