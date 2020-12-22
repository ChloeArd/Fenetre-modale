function Modal(titre, texte, label){
    this.titre = titre;
    this.texte = texte;
    this.label = label;

    this.ajoutTitre = function(){
        let h1 = document.getElementById("title");
        h1.innerHTML = this.titre;
    }

    this.ajoutParagraph = function() {
        let paragraph = document.getElementById("paragraph");
        paragraph.innerHTML = this.texte;
    }

    this.ajoutLabel = function(){
        let label = document.getElementById("label1");
        label.innerHTML = this.label;
    }
}

let modal1 = new Modal("Modal Window", "Are you sure want to download this modal box?<br>\n" + "Click 'OK' to start downloading.", "Agree ou terms & conditions!")
modal1.ajoutLabel();
modal1.ajoutParagraph();
modal1.ajoutTitre();

