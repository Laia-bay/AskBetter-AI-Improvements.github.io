export function ResolverScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <h4 class="titles" style="color:limegreen"><b>Resolver ejercicios</b></h4>

        <section id="resolver" class="content-section">
            <div style="display:flex; flex-direction:row; gap:20px; margin-top:2%">
                <h3 style="color:limegreen"><em><b>Resolución de ejercicios con IA Generativa</b></em></h3>
                <button id="audioResolver" class="btn btn-outline-light btn-sm" style="height:30px; width:30px">
                    <i class="bi bi-volume-up"></i>
                </button>
            </div>
            <div>
                <p>
                La IA Generativa tiene un gran potencial para explicar los pasos de los ejercicios de diferentes maneras para el/la estudiante, 
                pero los prompts utilizados afectan al resultado.
                </p>
                <p>
                Ahora miraremos las estrategias que son usadas habitualmente, y alternativas que pueden ser útiles.
                </p>
            </div>

            <h3 style="color:limegreen"><em><b>Estrategia habitual</b></em></h3>
            <div>
            <p>Para ahorrar tiempo, normalmente le decimos a la IA que resuelva un ejercicio, y automáticamente lo hace por pasos.<br>
            Esta división por pasos es útil, pero no es personalizada para todo el mundo y para todo tipo de ejercicios. 
            A veces se necesita un plan más detallado, mientras que otras veces sólo quieres una explicación general.
            </p>
            <p>Al mismo tiempo, este tipo de prompts ponen gran parte del peso de razocinio en la IA generativa, en vez de en el estudiante,
            lo que puede causar una dependencia hacia la IA y pensar que sin ella no podemos resolver los ejercicios.</p>
            <p>Es por ello que debemos hacer que los prompts sigan metodologías como el SRL o SDL, dónde el estudiante es el quien guía 
            qué y cómo aprende.
            </p>
            </div>

            
            <h3 style="color:limegreen"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa a la hora de resolver ejercicios hay que crear prompts más específicos 
                y que no ofrezcan la solución completa, así aunque el estudiante ha de pensar más, también aprende más rápido.</p>
                <p>hay ejercicios que se pueden resolver de diferentes maneras, sobretodo según el nivel en el que estás.
                Por eso, una cosa muy importante es dar información del contexto: en qué curso estás, qué estudias, qué asignatura es...,
                y así lo resolverá o te guiará de la manera adecuada.
                </p>
                <p>Otro punto importante es no buscar la solución directa. Aunque te muestre un desglose, no te está dejando tiempo para pensar 
                <em>"¿qué toca ahora?".</em><br>
                Leer lo que debes hacer requiere un nivel de esfuerzo menor a intentar adivinar el siguente paso,
                que resulta en no recordar tanto cómo se resuelve el ejercicio.
                </p>
                <p>Para evitarlo, si no sabemos por dónde empezar, podemos compartir la parte de nuestros apuntes que pertoca a ese ejercicio, 
                o alguno resuelto en clase, y pedir que explique qué necesitas para saber hacer ese ejercicio.<br>
                También se puede pedir que de haga sólo el primer paso, y pedir pistas para los siguientes a medida que los haces. 
                Así, la IA te está ayudando a llegar a la solución correcta, en vez de simplemente mostrártela, y te está dando oportunidades 
                para resolverlo por tu cuenta, lo que acaba resultando en sentirte más satisfecho/a que si te la hubiera dado directamente.
                </p>
                <p> Como información extra, para asegurar que se ha entendido la manera de resolverlo, puedes pedir que cree uno que se resuelva 
                de la misma manera pero con números diferentes, o incluso puedes pedir que te haga preguntas teóricas sobre cómo se resuelve.
                </p>
            </div>
            <h3 style="color:limegreen"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo que necesitas resolver este ejercicio de Señales y Sistemas sobre <em>dibujar un gráfico de magnitud</em>
            </p>

            <div class="comparison">
                <div class="promptText">  
                    <h5><b>Enunciado</b></h5>
                    <p> Tenemos una señal:</p>
                    <p style="align-self:center"><b>x(t) = 10cos(800πt + π/4) + 7cos(1200πt - π/3) - 3cos(1600πt)</b></p>
                    <p>Dibuja el gráfico de magnitud.</p>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:limegreen"><b><em>Prompts habituales</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Haz este ejercicio.</p>
                            <p><i class="bi bi-caret-right"></i>Haz esto paso por paso.</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:limegreen"><b><em>Prompts mejorados</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Quiero hacer este ejercicio pero necesito ayuda. Te voy a explicar 
                            cómo lo haría y tú me corriges como si fueras mi profesor.</p>
                            <p><i class="bi bi-caret-right"></i>No sé cómo hacer este ejercicio pero no quiero que me des la respuesta directa. 
                            ¿Puedes hacer sólo el primer paso? Dame dos pistas para el siguiente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv">
                <div>
                    <h5 style="color:limegreen"><b><em>Resultado 1-</b> Prompt nº1 (habitual)</em></h5>
                    <div class="promptText">
                        <p><b>Señal dada:</b> x(t) = 10cos(800πt + π/4) + 7cos(1200πt - π/3) - 3cos(1600πt)</p>

                        <h5>1. Identificación de componentes</h5>
                        <div>
                            <p><b>Primer término:</b> 10cos(800πt + π/4)</p>
                            <ul>
                                <li>Frecuencia angular: ω₁ = 800π</li>
                                <li>Fasor: 10∠(π/4)</li>
                            </ul>
                        </div>
                        <div>
                            <p><b>Segundo término:</b> 7cos(1200πt - π/3)</p>
                            <ul>
                                <li>Frecuencia angular: ω₂ = 1200π</li>
                                <li>Fasor: 7∠(-π/3)</li>
                            </ul>
                        </div>
                        <div>
                            <p><b>Tercer término:</b> -3cos(1600πt), que -3cos(1600πt) = 3cos(1600πt + π)</p>
                            <ul>
                                <li>Frecuencia angular: ω₃ = 1600π</li>
                                <li>Fasor: 3∠π</li>
                            </ul>
                        </div>

                        <h5>2. Espectro de magnitud</h5>

                        <p>Cada coseno genera dos líneas en ±ω con magnitud A/2.</p>

                        <table style="align-self:center; border-collapse:separate; border-spacing:30px 0; text-align:center">
                        <tr>
                            <th>Frecuencia (ω)</th>
                            <th>Magnitud</th>
                        </tr>
                        <tr>
                            <td>±800π</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>±1200π</td>
                            <td>3.5</td>
                        </tr>
                        <tr>
                            <td>±1600π</td>
                            <td>1.5</td>
                        </tr>
                        </table>


                        <h5>3. Conclusión</h5>
                        <ul>
                            <li>El espectro es discreto con picos en ±ω.</li>
                            <li>Las magnitudes son A/2 para cada componente.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5 style="color:limegreen"><b><em>Resultado 2 -</b> Prompt nº2 (mejorado)</em></h5>
                    <div class="promptText">
                        <p>Perfecto, vamos paso a paso sin spoilear la solución</p>
                        <div>
                            <h5>Primer paso</h5>
                            <p style="margin-bottom:10px">Identifica las <b>frecuencias</b> de cada término de la señal.</p>

                            <p style="margin-bottom:10px">Recuerda que una señal de la forma <b>cos(ωt + φ)</b><br>
                            tiene <b>frecuencia angular</b> ω (rad/s), y puedes convertirla a frecuencia en Hz con <b>f = ω / (2π)</b>
                            </p>

                            <p>Aplica esto a cada uno de los tres cosenos de x(t).</p>
                        </div>
                        <h5>Dos pistas para seguir</h5>

                        <p><b>Pista 1:</b> El gráfico de magnitud (espectro) de una señal cosenoidal tiene <b>dos picos</b>, 
                        uno en +f y otro en -f.
                        </p>

                        <p><b>Pista 2:</b> La <b>amplitud en el espectro</b> no es exactamente la del coseno tal cual: piensa en cómo se 
                        reparte cuando lo expresas con exponenciales (pista: aparece un factor de 1/2).
                        </p>

                        <p>Si quieres, en el siguiente paso podemos comprobar juntos si has encontrado bien las frecuencias antes de dibujar.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pruebatu" class="content-section" style="display:none">
            <h3 style="color:limegreen"><em><b>Aplícalo a tu caso particular</b></em></h3>    
            <p>Piensa en los prompts propuestos en la página anterior, y utiliza, o crea uno particular que te sirva para la asignatura 
            que quieras.
            Utiliza tu IA de confianza.</p>
            <div class="pistaDiv">
                <p><em><b>¿Necesitas ayuda?</b></em></p>
                <button id="pistaBtn" class="btn pista resolver btn-sm">
                    <i class="bi bi-lightbulb"></i> Pista
                </button>
            </div>
            <div id="pistasPrompt" class="promptText" style="display:none; gap:30px">
                <div>
                    <p style="justify-self:center">Si no sabes por dónde empezar</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Pedir que actúe como profesor y te explique qué necesitas saber para resolver el ejercicio.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pedir que te explique sólo el primer paso, y pistas para el siguiente.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Intentar explicar cómo lo harías, y que te corrija.</p>
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si no te sale una parte específica</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Explicar lo que has hecho hasta ahora, y dónde crees que estás fallando.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pedir que sólo te haga ese apartado, y que te haga preguntas o te de pistas para el siguiente.</p>
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si aprendes a base de repetición</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>Pedir que te haga un ejercicio similar con diferentes números.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pedir que haga un ejercicio basado en un ejemplo de la vida real.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>Pedir que te haga preguntas teóricas sobre el ejercicio que acabas de hacer.
                    </p>
                </div>
            </div>
            <h3 style="color:limegreen"><em><b>Momento de reflexión</b></em></h3>
            <p>Una vez has aplicado los nuevos prompts, es momento de reflexionar sobre qué has aprendido y cómo te sientes. 
            Aquí debajo tienes algunas afirmaciones que te podrían servir como guía.</p>
            <div class="titleReflection"><h5 style="color:limegreen"><b><em>¿Qué ha cambiado al usar este tipo de prompts?</b></em></h5></div>
            <div class="reflection">
                <div>
                    <input class="form-check-input resolver" type="checkbox" id="opt1">
                    <label class="form-check-label" for="opt1">He entendido más</label>
                </div>
                <div>
                    <input class="form-check-input resolver" type="checkbox" id="opt2">
                    <label class="form-check-label" for="opt2">He estado más tiempo hablando con la IA</label>
                </div>
                <div>
                    <input class="form-check-input resolver" type="checkbox" id="opt3">
                    <label class="form-check-label" for="opt3">Sé hacerlo por mi cuenta</label>
                </div>
                <div>
                    <input class="form-check-input resolver" type="checkbox" id="opt4">
                    <label class="form-check-label" for="opt4">Estoy satisfecho/a con el resultado</label>
                </div>
            </div>
        </section>

        <section id="footer" class="footerSec">
            <div><button id="atrasBtn" class="btn btn-outline-light me-2" style="display:none">Atrás</button></div>
            <div><button id="pruebaBtn" class="btn prueba resolver" style="align-content:flex-end">Pruebalo tú!</button></div>
        </section>
    `;

    return container;
}