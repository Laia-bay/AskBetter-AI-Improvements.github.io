//this file controls the interaction of the elements in 'resolver ejercicios' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { ResolverScreen } from '../screens/resolver_screen.js';


export function ResolverController (params){
    //getting elements in container
    const container = ResolverScreen();

    //getting the content of the section and the pruebatu section
    const resolver_section = container.querySelector('#resolver')
    const pruebatu_section = container.querySelector('#pruebatu');

    //getting all the paragraphs separately
    const intro = container.querySelector('.resolver-intro');
    const hab = container.querySelector('.resolver-esthab');
    const alt = container.querySelector('.resolver-estalt');
    const comp = container.querySelector('.resolver-comp');

    //getting the show buttons of every paragraph
    const intro_btn = container.querySelector('#resolverIntroBtn');
    const hab_btn = container.querySelector('#resolverEstHabBtn');
    const alt_btn = container.querySelector('#resolverEstAltBtn');

    //referencing the navigation section and its buttons
    const atras_btn = container.querySelector('#atrasBtn');
    const prueba_btn = container.querySelector('#pruebaBtn');


    //knowing if pruebalo tu section is visible
    let isVisible = null;


        //controlling ALL the audios
        const a_intro = container.querySelector('#ARIntro');
        const a_hab = container.querySelector('#AREstHab');
        const a_alt = container.querySelector('#AREstAlt');
        const a_comp = container.querySelector('#ARComp')

        const utterances = {
            intro: null,
            hab: null,
            alt: null,
            comp: null
        };

        let current_key = null;

    //referencing the elements from pruebalo tu section/page
    const pistas = container.querySelector('#pistasPrompt');
    const pista_btn = container.querySelector('#pistaBtn');



    //FUNCTIONS
        //leer: reads the content of the page
    function leerEvent(paragraph, key) {

        let utterance = utterances[key];
        
        //If this paragraph audio exists and is the current one (whether it is playing or not), toggle pause/resume
        if (current_key == key && utterance){

            if (speechSynthesis.speaking && !speechSynthesis.paused) {
                speechSynthesis.pause();
                console.log("pausado!");
                return;
                
            }
        
            if (speechSynthesis.paused) {
                speechSynthesis.resume();
                console.log("reanudado!");
                return;
            }
        }
        //If there is a paragraph that exists but it is not this one, cancel it.
        if (current_key && current_key != key){
            speechSynthesis.cancel();

            utterances[current_key] = null;
            current_key = null;

        }

        //create a new utterance with the desired paragraph
        const texto = paragraph.innerText;

        utterance = new SpeechSynthesisUtterance(texto);

        utterance.lang = "es-ES";
        utterance.getVoices()[0];
        utterance.rate = 1;

        utterance.onend = () => {
            utterances[key] = null;

            if (current_key == key) current_key = null

            console.log("terminado!");
        };

        utterances[key] = utterance;
        current_key = key;

        speechSynthesis.speak(utterance);

        console.log("creado!");
    }

        //muestraTexto: shows the paragraph when clicking the button
    function muestraTexto(paragraph, btn){
        if(btn.className == "btn mostrar btn-outline-light btn-sm"){
            paragraph.style.display="";
            btn.innerText = "esconde";
            btn.classList.add("hide");
        }
        else{
            paragraph.style.display="none";
            btn.innerHTML = `Mostrar`;
            btn.classList.remove("hide");
        }
    }

        //pruebalo tu: give the user some tips on how to apply it to their own code
    function pruebaloTu(){
        isVisible = true;
        pruebatu_section.style.display="";
        resolver_section.style.display="none";
        prueba_btn.style.display = "none";
        atras_btn.style.display="";

        //cancelling audio
        utt_intro = null;
        utt_hab = null;
        utt_alt = null;
        utt_comp = null;
        speechSynthesis.cancel();
        
        return;
    }


    //EVENT LISTENERS

        //reading content
    a_intro.onclick = () => leerEvent(intro, "intro");
    a_hab.onclick = () => leerEvent(hab, "hab");
    a_alt.onclick = () => leerEvent(alt, "alt");
    a_comp.onclick = () => leerEvent(comp, "comp");

        // showing content
    intro_btn.onclick = () =>{muestraTexto(intro,intro_btn)};
    hab_btn.onclick = () =>{muestraTexto(hab,hab_btn)};
    alt_btn.onclick = () =>{muestraTexto(alt,alt_btn)};

        //going to pruebalo tu screen
    prueba_btn.addEventListener('click', ()=> {pruebaloTu()});

        //going back to the main content in resolver screen
    atras_btn.addEventListener('click', () =>{
        resolver_section.style.display="";
        pruebatu_section.style.display="none";
        prueba_btn.style.display = "";
        atras_btn.style.display = "none";
        pistas.style.display="none";
        pista_btn.innerHTML = `<i class="bi bi-lightbulb"></i> Pista`;
        pista_btn.classList.remove("hide"); 
    });

        //showing clues of prompts
    pista_btn.addEventListener('click', () =>{
        if(pista_btn.className == "btn pista resolver btn-sm"){
            pistas.style.display="";
            pista_btn.innerText = "esconde";
            pista_btn.classList.add("hide");
        }
        else{
            pistas.style.display="none";
            pista_btn.innerHTML = `<i class="bi bi-lightbulb"></i> Pista`;
            pista_btn.classList.remove("hide");
        }
    });
            

    return container;
}