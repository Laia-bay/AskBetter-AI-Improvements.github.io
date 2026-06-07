export function HelpScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <div style="display:flex; flex-direction:row; gap:20px;">
            <h4 class="titles">Información sobre <em>'EstudIA mejor'</em></h4>
            <button id="audioInfo" class="btn btn-outline-light" style="height:45px; width:45px">
                <i class="bi bi-volume-up"></i>
            </button>
        </div>
        <hr></hr>
        <div id="helpDiv">
        <p style="font-size:18px"> Esta página web está diseñada con los <b>estudiantes de Ingeniería TIC</b> en mente.</p>
        <p> El objetivo es ayudaros a hacer un mejor uso de la <b>Inteligencia Artificial Generativa</b> a partir de la sugerencia de prompts 
        más personalizados y adaptados a vuestras necesidades. 
        </p>
        <p> Este mejor uso se centra en el marco del <a href="https://www.cast.org/what-we-do/universal-design-for-learning/" target="_blank">
        <span class=link><em>Diseño Universal para el Aprendizaje (DUA)</em></span></a>, que se trata de crear una educación personalizada,
        interesante y relevante para todos los estudiantes, sin importar origen, discapacidades, o maneras de estudiar. EL objetivo del DUA 
        es la <em>learner agency</em>, que podría traducirse como la autonomía del/la estudiante.<br>
        Es por ello que en esta página se aplican algunas de sus directrices, sobretodo aquellas relacionadas con la <b>representación del 
        contenido de diferentes maneras</b>, <b>la elección</b>, y <b>la autoreflexión del estudiante</b>.</p>
        <p>En la pantalla principal, puedes elegir qué contenido ver según lo que necesites en ese momento, las opciones son:</p>
        <ul class="ps-4">
            <li><b style="color:violet">Entender un concepto:</b></span> Relacionado con el aprendizaje y el repaso de conceptos 
            teóricos.</li>
            <li><span><b style="color:dodgerblue">Trabajar con código:</b></span> Tips para entender, debugar, y aprender a programar.</li>
            <li><span><b style="color:limegreen">Resolver ejercicios:</b></span> Encontrarás diferentes prompts para diferentes maneras de 
            aprender.</li>
            <li><span><b style="color:darkorange">Comprobar ejercicios:</b></span> Cómo comprobar de manera correcta y eficiente los ejercicios 
            hechos.</li>
        </ul>
        <p> Aunque el contenido es diferente, todas las opciones tienen la misma <b>estructura:</b></p>
        <ol>
        <li>Breve <b>descripción</b> de lo que la IA puede hacer.</li>
        <li><b>Estrategia habitual</b>, es decir, prompts que normalmente utilizamos los estudiantes.</li>
        <li><b>Estrategia alternativa</b>, que mayormente están centradas en poner el peso del aprendizaje en el estudiante, en vez de esperar a
        que la IA lo resuelva todo.</li>
        <li> <b>Comparativa:</b> Con un <b>ejemplo</b>, mostrar los <b>prompts habituales</b>, los <b>mejorados</b>, y dos <b>resultados</b>, 
        uno de cada sección.</li>
        </ol>

        <p> Algunas de las sugerencias son comunes para todos los caminos a elegir, ya que provienen de las mismas técnicas, como el 
        <b>chain-of-thought</b>, que se trata de pedir el "paso a paso" en tareas extensas y evita equivocaciones de la IA, o el <b>role-playing</b>, 
        que permite que la IA actúe como tu profesor, así ofreciendo un feedback mucho más educativo y útil para ti.
        </p>

        <p>Y por último, relacionado con la puesta en práctica y la autoreflexión, todas las opciones tienen una pantalla de "Pruebalo tú ahora", 
        donde se te anima a aplicar este tipo de prompts aprendidos a tu propio caso, a algo que necesites, y que luego reflexiones sobre las
        diferencias que has notado.
        </p>

        <p> Si tienes alguna duda particular, o quieres saber más sobre la aplicación de DUA en las universidades, puedes contactar conmigo a
        través del correo: <b>laiapertusa@gmail.com</b>
        </p>
        <hr>
        <h5 style="text-decoration:underline">Links adicionales</h5>
        <p style="margin-left:2%; margin-bottom:5px"><em>Información sobre DUA</em></p>
        <a href="https://www.youtube.com/watch?v=AGQ_7K35ysA&t=164s" target="_blank"><span class="link">What is UDL- video</span></a><br>
        <a href="https://udlguidelines.cast.org/static/udlg3-graphicorganizer_spanish_update_8142024.pdf" target="_blank">
        <span class="link">Pautas del DUA</span></a>
        <p style="margin-left:2%; margin-bottom:5px"><em>Información sobre DUA</em></p>
        <a href="https://www.promptingguide.ai/techniques" target="_blank"><span class="link">All kinds of techniques</span></a><br>
        <a href="https://www.phoenix.edu/research/news/2025/how-to-write-an-effective-prompt-for-using-generative-ai-tools.html?utm_source=chatgpt.com"
         target="_blank"><span class="link">Write an effective prompt</span></a><br>
        <a href="https://learnprompting.org/docs/basics/prompt_structure?srsltid=AfmBOooYso_JGw3iSZAiEVm1USCnMxlcyQfnewBLkWwtrnu6tW-9Aefe" 
        target="_blank"><span class="link">Prompt structure</span></a>
        
        </div>
    `;

    return container;
}