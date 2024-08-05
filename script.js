// al click sui nav-link vai alla sezione corrispondente
let navLinks = document.querySelectorAll('a[href^="#"]'); //vai a catturare tutti gli a che hanno attribtuo href che comincia con "#"

//funzione per scrollare a sezioni

navLinks.forEach(link => { //cicla tutti i link
        let hash = link.hash //tramite .hash recupero il contenuto in href="questoContenuto"
        link.addEventListener("click", (e) => { //al click sul link vado a fare...
            e.preventDefault(); //con preventDefault() disattivo il comportamento default dell'anchor (a)
            gsap.to(window, {
            duration: 0.2,
            delay: 0.2,
                scrollTo:{
                    y: hash //scrolla fino alla sezione dedicata
                }
            });
        });
    })


//libreria aos
AOS.init();
