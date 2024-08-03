gsap.registerPlugin(ScrollTrigger); //Plugin gsap scrollTrigger
gsap.registerPlugin(ScrollToPlugin); //Plugin gsap scrollTo
gsap.registerPlugin(TextPlugin); //Plugin gsap text

// sfondo
window.addEventListener('DOMContentLoaded', () =>{
    VANTA.FOG({
        el: "#bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xffffff,
        midtoneColor: 0xd08fff,
        lowlightColor: 0xffffff,
        baseColor: 0xffffff,
        blurFactor: 0.27,
        zoom: 3.00
      })
})


//animazioni su nome e lavoro
let tlNomeLavoro = gsap.timeline();

tlNomeLavoro.fromTo( ".saluto",
    { y: -500}, 
    { y: 0}
);

tlNomeLavoro.fromTo(".nome", 
    {x:-1000},
    { x: 0, duration:1}
)


tlNomeLavoro.fromTo( ".un",
    { x: -500}, 
    { x: 0}
);

tlNomeLavoro.fromTo(".fortissimo", 
    {y:0, scale:0},
    {y:0, scale:1, color:'#FFFCFF', backgroundColor:'#9381FF', borderRadius:'5px', paddingLeft:'10px', paddingRight:'10px',}
)

tlNomeLavoro.fromTo(".fullStack", 
    {y:200, text: "" },
    {y:0, duration:1 }
)


tlNomeLavoro.to(".fullStack", {
    duration: 3,
    text: "Full Stack Web Developer",
})

tlNomeLavoro.to(".fullStack", {
    duration: 1,
    paddingLeft:'10px', 
    paddingRight:'10px',
    backgroundColor: '#3AB795',
    borderRadius:'10px',
    color: '#fffcff'   
})



// tlNomeLavoro.to(".fortissimo", {
//     duration: 4,
//     delay: 1,
//     text: "",
// })

// tlNomeLavoro.to(".fortissimo", {
//     backgroundColor:'#FFFCFF',
//     duration: 0.1
// })


    // scrollTrigger:{ //abilità l'esecuzione solo quando rientra nella viewport
    //     trigger: ".fullStack",    //fai partire l'animazione e fermala quando .illustratione esce dalla viewport
    //     toggleActions: "restart pause resume none" //restart = quando finisci rinizia, pause = quando esco dalla viewport fermati, resume = quando ritorno ricomincia 
    //     },
    // duration: 5, 
    // text: "",



let illRotation = gsap.to(".illustration", {
    scrollTrigger:{ //abilità l'esecuzione solo quando rientra nella viewport
        trigger: ".illustration",    //fai partire l'animazione e fermala quando .illustratione esce dalla viewport
        toggleActions: "restart none none none"
        },
    rotation: 360,
    ease:Linear.easeNone, // rotazione 360  
    duration: 5, // how long the animation lasts
    repeat: Infinity, // the number of repeats - this will play 3 times
    yoyo: false, // this will alternate back and forth on each repeat on true. Like a yoyo    
});

let fumettoText = document.querySelector('#fumettoWrapper');


// pausa rotazione illustrazione quando  clicco
function stopRotation(){
    document.querySelector(".illustration").addEventListener("click", function() { //al click fai qualcosa
        if (illRotation.isActive()) { //se l'animazione è attiva metti in pausa
            illRotation.pause();
            this.style.backgroundImage = "url('media/img/startRotation.png')" //cambia immagine
            fumettoText.innerHTML = `
            <p class="h-100 align-content-center">Io che guardo i Tutorial su come usarla</p>` //cambia il testo del fumetto 
        } else {
            illRotation.resume(); //se riclicco riprendi
            this.style.backgroundImage = "url('media/img/Illustration.png')" //usa immagine di default impostata in css
                        fumettoText.innerHTML = `
            <p class="h-100 align-content-center">Io che trovo una nuova libreria JS</p>` //ripristina il testo del fumetto 
        } 
    });
}

stopRotation();

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
