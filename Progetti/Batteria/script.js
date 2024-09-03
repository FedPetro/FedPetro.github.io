
    document.addEventListener ("keypress", function (e){
        addSound(e.key);
    });


for (i = 0; i < document.querySelectorAll (".letter-").length; i++){
document.querySelectorAll (".letter-")[i].addEventListener ("click", function(){
    console.log ("hai clickato btn");
    var buttonInnerHTML = this.innerHTML;
    addSound(buttonInnerHTML);
})
}

function addSound (key){
    switch (key) {
        case "w":
            var kick = new Audio ("Kick.wav");
            kick.play();                                  

            var icon = document.createElement ("img"); //crea l'icona
            icon.src = "Note.png";  //path icona png
            icon.classList.add ("kick-icon");  //aggiugni css dell'icona sul kick
            document.body.appendChild (icon); //aggiungi il tutto al documento (mostra su schermo)

            setTimeout(function () {  //timer per quanto tempo mostrare l'icona
                document.body.removeChild(icon);
            }, 300)

            break;

        case "a":
            var snare = new Audio ("Snare.wav");
            snare.play();

            var icon = document.createElement ("img"); //crea l'icona
            icon.src = "Note.png";  //path icona png
            icon.classList.add ("snare-icon");  //aggiugni css dell'icona sul kick
            document.body.appendChild (icon); //aggiungi il tutto al documento (mostra su schermo)

            setTimeout(function () {  //timer per quanto tempo mostrare l'icona
                document.body.removeChild(icon);
            }, 300)

            break;

        case "s":
            var perc1 = new Audio ("Perc1.wav");
            perc1.play();

            var icon = document.createElement ("img"); //crea l'icona
            icon.src = "Note.png";  //path icona png
            icon.classList.add ("perc1-icon");  //aggiugni css dell'icona sul kick
            document.body.appendChild (icon); //aggiungi il tutto al documento (mostra su schermo)

            setTimeout(function () {  //timer per quanto tempo mostrare l'icona
                document.body.removeChild(icon);
            }, 300)

            break;

        case "d":
            var hh = new Audio ("HH.wav");
            hh.play();

            var icon = document.createElement ("img"); //crea l'icona
            icon.src = "Note.png";  //path icona png
            icon.classList.add ("hh-icon");  //aggiugni css dell'icona sul kick
            document.body.appendChild (icon); //aggiungi il tutto al documento (mostra su schermo)

            setTimeout(function () {  //timer per quanto tempo mostrare l'icona
                document.body.removeChild(icon);
            }, 300)

            break;

        case "f":
            var oh = new Audio ("OH.wav");
            oh.play();

            var icon = document.createElement ("img"); //crea l'icona
            icon.src = "Note.png";  //path icona png
            icon.classList.add ("oh-icon");  //aggiugni css dell'icona sul kick
            document.body.appendChild (icon); //aggiungi il tutto al documento (mostra su schermo)

            setTimeout(function () {  //timer per quanto tempo mostrare l'icona
                document.body.removeChild(icon);
            }, 300)

            break;

        case "g":
            var perc3 = new Audio ("Perc3.wav");
            perc3.play();

            var icon = document.createElement ("img"); //crea l'icona
            icon.src = "Note.png";  //path icona png
            icon.classList.add ("perc3-icon");  //aggiugni css dell'icona sul kick
            document.body.appendChild (icon); //aggiungi il tutto al documento (mostra su schermo)

            setTimeout(function () {  //timer per quanto tempo mostrare l'icona
                document.body.removeChild(icon);
            }, 300)

            break;

        case "h":
            var perc2 = new Audio ("Perc2.wav");
            perc2.play();

            var icon = document.createElement ("img"); //crea l'icona
            icon.src = "Note.png";  //path icona png
            icon.classList.add ("perc2-icon");  //aggiugni css dell'icona sul kick
            document.body.appendChild (icon); //aggiungi il tutto al documento (mostra su schermo)

            setTimeout(function () {  //timer per quanto tempo mostrare l'icona
                document.body.removeChild(icon);
            }, 300)

            break;

            default:
                console.log (key);

    }

    var button = document.querySelector(".letter-" + key);
    if (button) {
      button.classList.add("button-clicked");

      // Imposta un timeout per rimuovere la classe dopo 500 millisecondi (0,5 secondi)
      setTimeout(function () {
        button.classList.remove("button-clicked");
      }, 200); // 500 millisecondi = 0,5 secondi
    }
}





