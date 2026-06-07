//this file controls the interaction of the elements in help screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { HelpScreen } from '../screens/help_screen.js';


export function HelpController (params){
    //getting elements in container
    const container = HelpScreen();

    //referencing the section
    const info_section = container.querySelector('#helpDiv');
    
    //controlling the audio
    const audio_info = container.querySelector('#audioInfo');
    let utterance = null;


    //FUNCTIONS
        //leer: reads the content of the page
    function leerEvent(section) {
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
            const texto = info_section.innerText;
            
            utterance = new SpeechSynthesisUtterance(texto);
            
            utterance.lang = "es-ES";
            utterance.rate = 1;
            utterance.onend = () => utterance = null;
            speechSynthesis.speak(utterance);
        }
    }


    //EVENT LISTENERS
        //reading content
    audio_info.onclick = () => {leerEvent()};



    return container;
}