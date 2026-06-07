export function ComprobarScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <h4 class="titles" style="color:darkorange"><b>Comprobar resultados</b></h4>

         <section id="comprobar" class="content-section">
            <div style="display:flex; flex-direction:row; gap:20px; margin-top:2%">
                <h3 style="color:darkorange"><em><b>Comprobación de ejercicios con IA Generativa</b></em></h3>
                <button id="audioComprobar" class="btn btn-outline-light btn-sm" style="height:30px; width:30px">
                    <i class="bi bi-volume-up"></i>
                </button>
            </div>
            <div>
                <p>
                La IA nos permite comprobar si el ejercicio que hemos hecho es correcto, pero la manera en la que lo pidamos afectará a
                nuestro nivel de retención del ejercicio.
                </p>
                <p>
                Ahora miraremos las estrategias que son usadas habitualmente, y alternativas que pueden ser útiles.
                </p>
            </div>

            <h3 style="color:darkorange"><em><b>Estrategia habitual</b></em></h3>
            <div>
            <p>Para ahorrar tiempo, normalmente le decimos a la IA que nos diga si el resultado de un ejercicio está bien, 
            sin copiar el ejercicio entero. En caso de que esté bien, el prompt sería correcto, ya que te muestra un pequeño desglose de cómo se haría el ejercicio.<br>
            Pero si está mal, es un problema porque automáticamente resuelve el ejercicio completo, sin dejarte pensar dónde puedes haberte equivocado.
            Además, puede que la forma en la que lo resuelve no es la que te enseñaron a ti, y eso puede confundir más.
            </p>
            <p> Otra manera habitual de comprobar ejercicios es pidiendo que te de sólo el resultado final, aunque esto evita que te muestre
            la solución completa, en caso de tenerlo bien no sabes si todo tu procedimiento es correcto, y eso también debe ser comprobado.
            </p>
            </div>

            
            <h3 style="color:darkorange"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa a la hora de comprobar ejercicios hay que crear prompts más específicos.</p>
                <p>Una cosa muy importante es dar información del contexto: en qué curso estás, qué estudias, qué asignatura es...<br>
                De esta manera, el nuevo contenido creado estará alineado con el nivel esperado para alguien en tu curso.<br>
                Otro punto importante es mostrarle un ejemplo de como se resuelven este tipo de ejercicios, uno que hayas hecho en clase, 
                o sepas 100% que está bien. Con estas dos cosas, la IA resolverá el ejercicio de la manera que te han enseñado.</p>
                <p>Pedirle que adapte el rol de profesor también permitirá que en caso de no tener el ejercicio bien, te ayude a llegar al
                resultado correcto.
                </p>
                <p>Lo más recomendado es compartir el ejercicio completo, pedir que compruebe tanto procedimiento como resultado final.
                En caso de que sea correcto, que diga si hay algo a mejorar según el ejemplo que compartiste, y en caso de que sea incorrecto,
                que te los marque específicamente (sin resolverlos), o que te haga preguntas para llegar a ellos. 
                </p> 
                <div>
                    
                <div>
            </div>
            <h3 style="color:darkorange"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo que has de resolver este ejercicio sobre <em>'Huffman Coding'</em>.<br>
            Este es el enunciado:
            </p>

            <div class="comparison">
                <div class="promptText">
                    <h5><b><em>Enunciado</em></b></h5>
                    <div>
                    <p>La longitud promedio del código de Huffman para una fuente que toma valores {<b><em>a, b, c, d, e, f</em></b>} con probabilidades:</p>
                    <p style="justify-self:center">{<b><em>3/5, 1/6, 1/15, 1/15, 1/20, 1/20</em></b>}</p>
                    <p>es</p>
                    </div>
                    <ul>
                        <p><b>(a)</b> 28/15</p>
                        <p><b>(b)</b> 19/10</p>
                        <p><b>(c)</b> Ninguna de las anteriores</p>
                    </ul>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:darkorange"><b><em>Prompts habituales</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Haz este ejercicio.</p>
                            <p><i class="bi bi-caret-right"></i>Haz esto paso por paso.</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:darkorange"><b><em>Prompts mejorados</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Actúa como profesor, y comprueba este ejercicio paso por paso. 
                            En caso de estar algo mal, relaciona el error con la teoría.
                            </p>
                            <p><i class="bi bi-caret-right"></i>Basado en este ejemplo, comprueba si mi ejercicio está bien. 
                            Si lo está, dime si hay algo que pueda mejorar, si no lo está, muéstrame exactamente dónde está el error, 
                            no hagas el ejercicio de cero.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv">
                <div>
                    <h5 style="color:darkorange"><b><em>Resultado 1-</b> Prompt nº2 (habitual)</em></h5>
                    <div class="promptText">
                        <h5><b><em>Resolución paso a paso: Código de Huffman</em></b></h5>
                        <p><b><em>1. Probabilidades dadas</em></b></p>
                        <p style="align-self:center"><b>a:</b> 3/5 = 0.6&nbsp;&nbsp;&nbsp<b>b:</b> 1/6 ≈ 0.1667&nbsp;&nbsp;&nbsp<b>c:</b> 1/15 ≈ 0.0667<br>
                        <b>d:</b> 1/15 ≈ 0.0667&nbsp;&nbsp;&nbsp <b>e:</b> 1/20 = 0.05&nbsp;&nbsp;&nbsp <b>f:</b> 1/20 = 0.05</p>
                        <p><b><em>2. Ordenar de menor a mayor</em></b></p>
                        <p style="align-self:center"><b>f:</b> 1/20 = 0.05 &nbsp;&nbsp;&nbsp <b>e:</b> 1/20 = 0.05 &nbsp;&nbsp;&nbsp<b>d:</b> 1/15 ≈ 0.0667<br>
                        <b>c:</b> 1/15 ≈ 0.0667&nbsp;&nbsp;&nbsp <b>b:</b> 1/6 ≈ 0.1667 &nbsp;&nbsp;&nbsp <b>a:</b> 3/5 = 0.6</p>
                        
                        <p><b><em>3. Construcción del árbol de Huffman</em></b></p>
                        <div style="margin-left:5%">
                        <p><b>Paso 1:</b> e + f = 0.10</p>
                        <p style="margin-left:5%; margin-bottom:5px">Lista: 0.10, 0.0667, 0.0667, 0.1667, 0.6</p>

                        <p><b>Paso 2:</b> c + d = 0.1334</p>
                        <p style="margin-left:5%; margin-bottom:5px">Lista: 0.10, 0.1334, 0.1667, 0.6</p>

                        <p><b>Paso 3:</b> 0.10 + 0.1334 = 0.2334</p>
                        <p style="margin-left:5%; margin-bottom:5px">Lista: 0.1667, 0.2334, 0.6</p>

                        <p><b>Paso 4:</b> 0.1667 + 0.2334 = 0.4</p>
                        <p style="margin-left:5%; margin-bottom:5px">Lista: 0.4, 0.6</p>

                        <p><b>Paso 5:</b> 0.4 + 0.6 = 1</p>
                        <p style="margin-left:5%">Árbol completo.</p>
                        </div>
                        <p><b><em>4. Longitudes de código</em></b></p>
                        <p style="align-self:center"><b>a:</b>1 &nbsp;&nbsp;&nbsp <b>b:</b> 2 &nbsp;&nbsp;&nbsp <b>c:</b> 4 &nbsp;&nbsp;&nbsp 
                        <b>d:</b> 4 &nbsp;&nbsp;&nbsp <b>e:</b> 4 &nbsp;&nbsp;&nbsp <b>f:</b> 4</p>

                        <p><b><em>5. Longitud promedio</em></b></p>
                        <p style="align-self:center"><b>L = Σ p<sub>i</sub> · l<sub>i</sub></b></p>
                        <ul>
                            <li>a: 0.6 x 1 = 0.6</li>
                            <li>b: 0.1667 x 2 = 0.3334</li>
                            <li>c: 0.0667 x 4 = 0.2668</li>
                            <li>d: 0.0667 x 4 = 0.2668</li>
                            <li>e: 0.05 x 4 = 0.2</li>
                            <li>f: 0.05 x 4 = 0.2</li>
                            </ul>

                        <p><b>Suma:</b> L ≈ 1.867, que es <b>(a) 28/15</b></p>

                    </div>
                </div>
                <div>
                    <h5 style="color:darkorange"><b><em>Resultado 2 -</b> Prompt nº1 (mejorado)</em></h5>
                    <div class="promptText" style="max-height:360px">
                        <h5><b><em>Revisión del ejercicio (Teoría de la Información)</em></b></h2>

                        <p>Vamos a revisarlo con calma y con rigor de Teoría de la Información. Te adelanto ya que hay dos posibles fuentes 
                        de error en tu procedimiento:</p>
                        <ul>
                            <li>En la construcción del árbol de Huffman (orden y combinaciones)</li>
                            <li>En la asignación de longitudes finales (que es donde suele fallar más la gente)</li>
                        </ul>
                        
                        <p><b><em>1. Probabilidades (correctas)</em></b></p>
                        <div>
                        <p>Conjunto de símbolos:</p>
                        <p style="justify-self:center">{a, b, c, d, e, f} = { 3/5, 1/6, 1/15, 1/15, 1/20, 1/20 }</p>
                        <p style="margin-top:5px">En decimal: </p>
                        <p style="justify-self:center">3/5 = 0.6, 1/6 ≈ 0.1667, 1/15 ≈ 0.0667, 1/20 = 0.05</p>
                        <p style="margin-top:5px">Hasta aquí perfecto.</p>
                        </div>
                        <p><b><em>2. Construcción del árbol de Huffman (punto crítico)</em></b></h3>
                        <div>
                        <p>Ordenamos las probabilidades:</p>
                        <p style="justify-self:center; margin-bottom:5px"><b>0.05, 0.05, 0.0667, 0.0667, 0.1667, 0.6</b></p>
                        <div style="margin-left:5%">
                        <p><b>Paso 1- </b>Sumamos los dos menores: 0.05 + 0.05 = 0.10</p>
                        <p style="margin-left:5%">Queda:0.0667, 0.0667, 0.10, 0.1667, 0.6</p>
                        <p>✔ Correcto.</p>
                        <p><b>Paso 2</b></p>
                        <p style="margin-left:5%">Aquí hay una decisión importante: se deben coger los dos menores actuales:
                        0.0667 + 0.0667 = 0.1334</p>
                        <p style="margin-top:5px; margin-bottom:10px">Pero tú hiciste: <b>0.1 + 0.0667</b></p>
                        
                        <p><b>ERROR TEÓRICO IMPORTANTE:</b></p>
                        <p style="margin-left:5%">En Huffman SIEMPRE se combinan los dos menores disponibles, no uno “reciente” si no 
                        es el menor.</p>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="pruebatu" class="content-section" style="display:none">
            <h3 style="color:darkorange"><em><b>Aplícalo a tu caso particular</b></em></h3>    
            <p>Piensa en los prompts propuestos en la página anterior, y utiliza, o crea uno particular que te sirva para la asignatura que quieras.
            Utiliza tu IA de confianza.</p>
            <div class="pistaDiv">
                <p><em><b>¿Necesitas ayuda?</b></em></p>
                <button id="pistaBtn" class="btn pista comprobar btn-sm">
                    <i class="bi bi-lightbulb"></i> Pista
                </button>
            </div>
            <div id="pistasPrompt" class="promptText" style="display:none; justify-self:center; width:630px">
                <div>
                    <p><i class="bi bi-caret-right"></i>Especificar rol de profesor.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Compartir tu solución.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Compartir un ejercicio que sepas que es correcto como 
                    ejemplo.
                    </p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pedir que no haga el ejercicio desde cero, sino que marque los errores en tu
                    procedimiento.
                    </p>
                </div>
            </div>
            <h3 style="color:darkorange"><em><b>Momento de reflexión</b></em></h3>
            <p>Una vez has aplicado los nuevos prompts, es momento de reflexionar sobre qué has aprendido y cómo te sientes. 
            Aquí debajo tienes algunas afirmaciones que te podrían servir como guía.</p>
            <div class="titleReflection"><h5 style="color:darkorange"><b><em>¿Qué ha cambiado al usar este tipo de prompts?</b></em></h5></div>
            <div class="reflection">
                <div>
                    <input class="form-check-input comprobar" type="checkbox" id="opt1">
                    <label class="form-check-label" for="opt1">He entendido más</label>
                </div>
                <div>
                    <input class="form-check-input comprobar" type="checkbox" id="opt2">
                    <label class="form-check-label" for="opt2">He estado más tiempo hablando con la IA</label>
                </div>
                <div>
                    <input class="form-check-input comprobar" type="checkbox" id="opt3">
                    <label class="form-check-label" for="opt3">Sé hacerlo por mi cuenta</label>
                </div>
                <div>
                    <input class="form-check-input comprobar" type="checkbox" id="opt4">
                    <label class="form-check-label" for="opt4">Me ha ofrecido respuestas que se adherían más a mi forma de aprender</label>
                </div>
            </div>
        </section>

        <section id="footer" class="footerSec">
            <div><button id="atrasBtn" class="btn btn-outline-light me-2" style="display:none">Atrás</button></div>
            <div><button id="pruebaBtn" class="btn prueba comprobar" style="align-content:flex-end">Pruebalo tú!</button></div>
        </section>
    `;

    return container;
}