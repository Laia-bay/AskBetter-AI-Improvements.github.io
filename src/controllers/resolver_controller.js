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

    //referencing the navigation section and its buttons
    const atras_btn = container.querySelector('#atrasBtn');
    const prueba_btn = container.querySelector('#pruebaBtn');


    //knowing if pruebalo tu section is visible
    let isVisible = null;

    //controlling the audio
    const audio_resolver = container.querySelector('#audioResolver');
    let utterance = null;

    //referencing the elements from pruebalo tu section/page
    const pistas = container.querySelector('#pistasPrompt');
    const pista_btn = container.querySelector('#pistaBtn');



    //FUNCTIONS
        //leer: reads the content of the page
    function leerEvent() {

        if (utterance){
            if (speechSynthesis.speaking && !speechSynthesis.paused) {
                speechSynthesis.pause();
                return;
            }
        
            if (speechSynthesis.paused) {
                speechSynthesis.resume();
                return;
            }
        }

        if(!utterance){
            const texto = resolver_section.innerText;
            
            utterance = new SpeechSynthesisUtterance(texto);
            
            utterance.lang = "es-ES";
            utterance.rate = 1;
            utterance.onend = () => utterance = null;
            speechSynthesis.speak(utterance);
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
        utterance = null;
        speechSynthesis.cancel();
        
        return;
    }


    //EVENT LISTENERS

        //reading content
    audio_resolver.onclick = () => {leerEvent()};

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