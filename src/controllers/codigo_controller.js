//this file controls the interaction of the elements in 'trabajar con codigo' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { CodigoScreen } from '../screens/codigo_screen.js';


export function CodigoController (params){
    //getting elements in Codigo screen
    const container = CodigoScreen();

    //referencing the 3 options in container
    const entender_btn = container.querySelector('#entenderBtn');
    const falla_btn = container.querySelector('#fallaBtn');
    const noaprendo_btn = container.querySelector('#noaprendoBtn');
    
    //referencing the 3 sections
    const ent_section = container.querySelector('#entender');
    const falla_section = container.querySelector('#falla');
    const no_section = container.querySelector('#noaprendo');
    const pruebatu_section = container.querySelector('#pruebatu');
    
    //referencing the navigation section and its buttons
    const footer_section = container.querySelector('#footer');
    const atras_btn = container.querySelector('#atrasBtn');
    const prueba_btn = container.querySelector('#pruebaBtn');

    //knowing the section that the user is actually on and if pruebalo tu section is visible
    let actualSection = null;
    let isVisible = null;

    //controlling the audio
    const audio_entender = container.querySelector('#audioEntender');
    const audio_falla = container.querySelector('#audioFalla');
    const audio_noaprendo = container.querySelector('#audioNoaprendo');
    let utterance = null;

    //referencing the elements from pruebalo tu section/page
    const pistas = container.querySelector('#pistasPrompt');
    const pista_btn = container.querySelector('#pistaBtn');








    //FUNCTIONS
    function showSection(section){
        //first of all, hide the buttons
        entender_btn.style.display = "none";
        falla_btn.style.display = "none";
        noaprendo_btn.style.display = "none";
        //show the navigation buttons
        footer_section.style.display="flex";

        //showing the correct one
        if (section == "entender"){
            ent_section.style.display = "flex";
            falla_section.style.display = "none";
            no_section.style.display = "none";
            actualSection = ent_section;
        }

        else if (section == "falla"){
            falla_section.style.display = "flex";
            ent_section.style.display = "none";
            no_section.style.display = "none";
            actualSection = falla_section;

        }

        else if (section == "noaprendo"){
            no_section.style.display = "flex";
            ent_section.style.display = "none";
            falla_section.style.display = "none";
            actualSection = no_section;

        }
    }

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
            const texto = document.getElementById(section).innerText;
            
            utterance = new SpeechSynthesisUtterance(texto);
            
            utterance.lang = "es-ES";
            utterance.rate = 1;
            utterance.onend = () => utterance = null;
            speechSynthesis.speak(utterance);
        }
    }

        //go back: let the user choose one of the 3 options again
    function goBack(){
        //show the options to choose
        entender_btn.style.display = "";
        falla_btn.style.display = "";
        noaprendo_btn.style.display = "";

        //hide all the sections
        no_section.style.display = "none";
        ent_section.style.display = "none";
        falla_section.style.display = "none";

        //hide the navigation buttons
        footer_section.style.display="none";
    }

        //pruebalo tu: give the user some tips on how to apply it to their own code
    function pruebaloTu(actualSection){
        isVisible = true;
        actualSection.style.display="none";
        pruebatu_section.style.display="";
        prueba_btn.style.display = "none";

        //cancelling audio
        utterance = null;
        speechSynthesis.cancel();
        
        return;
    }

    function atrasEvent(actualSection){
        //if we are on pruebalo tu section, atrás goes back to the previous one

        if(isVisible == true){
            actualSection.style.display="";
            pruebatu_section.style.display="none";
            prueba_btn.style.display = "";
            footer_section.style.display = "";
            pistas.style.display="none";
            pista_btn.innerHTML = `<i class="bi bi-lightbulb"></i> Pista`;
            pista_btn.classList.remove("hide");
            
        }
        //else, atrás shows the buttons to choose again
        else {
            goBack();
        }
        isVisible = false;

        //cancelling audio
        utterance = null;
        speechSynthesis.cancel();
    }

    function fillPistas(section){
        if (section == "entender"){
            pistas.innerHTML = `
                <div>
                    <p style="justify-self:center">Si no entiendes nada</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Pide línea por línea.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pide que te haga preguntas.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pide que te explique qué deberías saber previamente 
                    para entenderlo.
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si no entiendes una parte</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Pide específicamente que te explique esa parte.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Explica qué crees que hace el código, 
                    y qué crees que hace esa parte.
                    </p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pide que te lo explique de otra manera, 
                    o si hay una manera más sencilla de escribir esa parte.
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si eres un visual learner</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Pide que te muestre algun vídeo de cómo funcionaría el código.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pide que te haga un boceto sencillo 
                    de lo que haría el código.
                    </p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pide que te lo explique con un diagrama, 
                    o color-coded según la función de cada parte.
                    </p>
                </div>
            `;
        }

        if(section =="falla"){
            pistas.innerHTML = `
                <div>
                    <p style="justify-self:center">Si no sabes dónde está el error</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Pide revisión línea por línea.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Explica el error que te estás encontrando detalladamente.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Explica que crees que podría ser, 
                    o qué significa el error que te sale</p>
                </div>
                <div>
                    <p style="justify-self:center">Si sabes dónde se encuentra el error</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Explica dónde está el error, pide que no te de la solución, 
                    sino que te haga preguntas para llegar a ella.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pide que no modifique el resto del código.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Explica qué has intentado para solucionarlo.</p>
                </div>
            `;
            pistas.style.width="1000px";
            pistas.style.alignSelf = "flex-start";
            pistas.style.marginLeft = "50px";
        }

        if(section =="noaprendo"){
            pistas.innerHTML = `
                <div style="width:400px">
                    <p style="justify-self:center">Si no sabes por dónde empezar</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Pedir explicación lógica por partes.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Explicar tú qué crees que se podría hacer.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pedir que te haga preguntas para asegurar que entiendes 
                    lo que explica.</p>
                </div>
                <div style="width:400px">
                    <p style="justify-self:center">Si ya tienes una parte de código hecha</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Copiar y explicarle el código, explicarle en qué te has quedado atascado/a 
                    y qué has probado.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pedir que se centre en el siguiente paso, 
                    que no te haga el ejercicio entero.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pedir que te haga preguntas hasta que llegues a la 
                    solución, sin código de por medio.</p>
                </div>
                <div style="width:400px">
                    <p style="justify-self:center">Según tu manera de aprender</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Si aprendes con ejemplos, pide que te haga un ejemplo por cada parte que 
                    explique. 
                    Puedes pedirle también que los vaya subiendo en dificultad.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Si aprendes de manera visual, pide que busque o 
                    cree un flowchart sobre cómo funciona el código. Si es un tema común, puedes pedir también vídeos de YouTube.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Si aprendes con práctica, pide que te haga mini 
                    ejercicios de programación relacionados con la parte que no sabes hacer, o ejercicios similares al que ha 
                    pedido el docente.</p>
                </div>
            `;
        }
    }


    //EVENT LISTENERS

        //choosing an option
    entender_btn.onclick = () => { showSection("entender"), fillPistas("entender")};
    falla_btn.onclick = () => { showSection("falla"), fillPistas("falla") };
    noaprendo_btn.onclick = () => { showSection("noaprendo"), fillPistas("noaprendo") };

        //reading content
    audio_entender.onclick = () => {leerEvent("entender")};
    audio_falla.onclick = () => {leerEvent("falla")};
    audio_noaprendo.onclick = () => {leerEvent("noaprendo")};


        //going back to choose another OR going back to the previous section when on Pruebalo tu
    atras_btn.addEventListener('click', () =>{
        atrasEvent(actualSection); 
    });

        //going to pruebalo tu screen
    prueba_btn.addEventListener('click', ()=> {pruebaloTu(actualSection)});

        //showing clues of prompts
    pista_btn.addEventListener('click', () =>{
        if(pista_btn.className == "btn pista codigo btn-sm"){
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