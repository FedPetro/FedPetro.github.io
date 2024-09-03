document.addEventListener("keypress", function(e) { // Aggiunge un listener per l'evento "keypress" che viene attivato ogni volta che un tasto della tastiera viene premuto
    addSound(e.key); // Chiama la funzione addSound passando la chiave del tasto premuto
});


document.querySelectorAll("[class^='letter-']").forEach(function(button) { // Seleziona tutti gli elementi con classi che iniziano con "letter-"
    button.addEventListener("click", function() { // Per ogni elemento trovato, aggiunge un listener per l'evento "click"
        var buttonInnerHTML = this.innerHTML.toLowerCase(); // Ottiene il contenuto del pulsante e lo converte in minuscolo
        addSound(buttonInnerHTML); // Chiama la funzione addSound con la chiave corrispondente al pulsante cliccato
    });
});

function addSound(key) {
    switch (key) { // Utilizza uno switch per determinare quale suono riprodurre in base alla chiave (lettera) premuta
        case "w":
            var kick = new Audio("Kick.wav"); // Crea un nuovo oggetto Audio per il file Kick.wav
            kick.play();  // Riproduce il suono del kick
            createAndShowIcon("kick-icon"); // Chiama la funzione per creare e mostrare l'icona corrispondente
            break;

        case "a":
            var snare = new Audio("Snare.wav"); 
            snare.play(); 
            createAndShowIcon("snare-icon"); 
            break;

        case "s":
            var perc1 = new Audio("Perc1.wav"); 
            perc1.play(); 
            createAndShowIcon("perc1-icon"); 
            break;

        case "d":
            var hh = new Audio("HH.wav"); 
            hh.play(); 
            createAndShowIcon("hh-icon"); 
            break;

        case "f":
            var oh = new Audio("OH.wav"); 
            oh.play(); 
            createAndShowIcon("oh-icon"); 
            break;

        case "g":
            var perc3 = new Audio("Perc3.wav"); 
            perc3.play(); 
            createAndShowIcon("perc3-icon"); 
            break;

        case "h":
            var perc2 = new Audio("Perc2.wav"); 
            perc2.play(); 
            createAndShowIcon("perc2-icon"); 
            break;

        default:
            console.log(key); // Se il tasto premuto non corrisponde a nessuno dei casi, logga la chiave nella console
    }

    
    var button = document.querySelector(".letter-" + key); // Seleziona il pulsante con la classe "letter-" seguita dalla chiave (lettera)
    if (button) { // Verifica se esiste un pulsante corrispondente
        button.classList.add("button-clicked"); // Aggiunge la classe "button-clicked" per evidenziare il pulsante

        
        setTimeout(function() { // Imposta un timeout per rimuovere la classe dopo 200 millisecondi
            button.classList.remove("button-clicked"); // Rimuove la classe "button-clicked" per tornare allo stato normale
        }, 200); // Timeout impostato a 200 millisecondi
    }
}


function createAndShowIcon(iconClass) { // Funzione per creare e mostrare un'icona sullo schermo per un breve periodo
    var icon = document.createElement("img"); // Crea un nuovo elemento immagine
    icon.src = "Note.png";  // Imposta il percorso dell'immagine
    icon.classList.add(iconClass);  // Aggiunge la classe CSS specifica per l'icona
    document.body.appendChild(icon); // Aggiunge l'elemento immagine al body del documento per mostrarlo

    
    setTimeout(function() { // Imposta un timeout per rimuovere l'icona dopo 300 millisecondi
        document.body.removeChild(icon); // Rimuove l'icona dal documento
    }, 300); // Timeout impostato a 300 millisecondi
}
