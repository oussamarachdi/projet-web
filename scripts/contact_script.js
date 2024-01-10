function handleSubmit(){
    // Récupérer les valeurs du formulaire
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var x = prompt("Voulez-vous envoyer cette information, Tapez Oui/Non pour continuer : ");
    if(x.toLocaleLowerCase() == 'oui'){
        console.log("Formulaire soumis!\nNom: "+ name + "\nE-mail: "+ email+ "\nMessage: "+message)
        alert("Votre informations a été envoyer avec succès!!!");
    }else{
        alert("Aucune informations a été envoyer!!!");
    }
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    
}

