export function ConceptoScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <h4 class="titles" style="color:violet"><b>Entender un concepto</b></h4>

        <p class="subtitles" style="margin-top:50px"> ¿Qué problema te estás encontrando?</p>
    
        <div id="explaining">
            <button id="teoriaBtn" class="btn option concepto">No entiendo la teoría</button>
            <button id="repasarBtn" class="btn option concepto">Quiero repasar la teoría</button>
        </div>

        <!--depending on the option chosen the content will be different-->

        <section id="teoria" class="content-section" style="display:none">
            <div style="display:flex; flex-direction:row; gap:20px;">
                <h3 style="color:violet"><em><b>No entiendo la teoría</b></em></h3>
                <button id="audioTeoria" class="btn btn-outline-light btn-sm" style="height:30px; width:30px">
                    <i class="bi bi-volume-up"></i>
                </button>
            </div>
            <div>
                <p>
                La IA Generativa tiene un gran potencial para explicar la teoría de diferentes maneras para el/la estudiante, 
                pero los prompts utilizados afectan al resultado.
                </p>
                <p>
                Ahora miraremos las estrategias que son usadas habitualmente, y alternativas que pueden ser útiles.
                </p>
            </div>

            <h3 style="color:violet"><em><b>Estrategia habitual</b></em></h3>
            <p>Para ahorrar tiempo, normalmente le decimos a la IA que haga un resumen, o que lo explique de otra manera,
            pero para obtener un buen resultado, se debe ser más específico. <br>
            Si no, es posible que el nivel al que te lo explique no sea el adecuado, se olvide de puntos clave, o no se adhiera
            a tu manera de aprender. <br>
            Esto acaba resultando en muchas iteraciones con la IA hasta obtener una explicación con la que estés satisfecho/a, 
            y mucho tiempo invertido, lo que puede provocar frustración o desdén hacia la IA y hacia el contenido a aprender.
            </p>

            
            <h3 style="color:violet"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa a la hora de estudiar o aprender teoría, hay que crear prompts más específicos.</p>
                <p>Una cosa muy importante es dar información del contexto: en qué curso estás, qué estudias, qué asignatura es...<br>
                 De esta manera, el nuevo contenido creado estará alineado con el nivel esperado para alguien en tu curso.</p>
                <p>Otro punto importante es tu manera de aprender. <br>
                Algo bueno de la IA es que puede hacer que el aprendizaje sea personalizado a tus necesidades. 
                Por eso, mencionar de qué manera aprendes mejor hará que la IA te enseñe de esa manera, y el tiempo dedicado sea más eficiente, 
                reduciendo la frustración por no entender lo que explica, o por no obtener una respuesta que te sirva.</p>
            </div>
            <h3 style="color:violet"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo que necesitas entender cómo funciona <em>'el protocolo TCP'</em>.<br>
            Esto es lo que tienes en las diapositivas de teoría:
            </p>

            <div class="comparison">
                <div class="promptText">
                    <h5><b>TCP: Transmission Control Protocol</b></h5>
                    <p>
                    TCP ofrece <b>transferencia fiable de datos</b>. 
                    Mediante técnicas como <em>flow control</em>, números de secuencia, confirmaciones (<em>acknowledgments</em>) 
                    y temporizadores, TCP garantiza que los datos se entreguen correctamente y en orden entre procesos. 
                    De este modo, convierte el servicio no fiable de IP en un transporte fiable entre procesos.
                    </p>

                    <p>
                    Además, TCP proporciona <b>control de congestión</b>. 
                    Este mecanismo no está pensado tanto para una aplicación concreta, sino para el buen funcionamiento de 
                    toda la red. Básicamente, evita que una sola conexión TCP sature los enlaces y routers con demasiado tráfico. 
                    TCP intenta repartir el ancho de banda de forma equitativa entre las conexiones, 
                    regulando la velocidad de envío de datos.
                    </p>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:violet"><b><em>Prompts habituales</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Explicame esto.</p>
                            <p><i class="bi bi-caret-right"></i>No lo entiendo, explícalo de otra manera.</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:violet"><b><em>Prompts mejorados</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>No entiendo este concepto, ¿me lo puedes explicar brevemente 
                            y con un ejemplo real?</p>
                            <p><i class="bi bi-caret-right"></i>Quiero que expliques este concepto de una manera menos técnica, 
                            y que luego relaciones la explicación que me has dado con la original.</p>
                            <p><i class="bi bi-caret-right"></i>Aprendo de manera visual y no entiendo este concepto, 
                            ¿me peudes hacer un flowchart, un gráfico o buscar un vídeo de cómo funciona?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv">
                <div>
                    <h5 style="color:violet"><b><em>Resultado 1-</b> Prompt nº2 (habitual)</em></h5>
                    <div class="promptText">
                        <h5><b>¿Qué hace TCP?</b></h5>
                        <div>
                            <p>TCP es un protocolo de transporte que proporciona <b>entrega fiable y ordenada de datos</b> 
                            sobre una red no fiable como IP.</p>

                            <p>Divide los datos en segmentos y los numera para poder reconstruir el orden correcto. 
                            El receptor confirma los segmentos recibidos mediante <b>ACKs</b>. 
                            Si no hay confirmación, se considera pérdida y se retransmite.
                            </p>

                            <p><b>Además:</b></p>
                            <ul>
                                <li><b>Control de flujo:</b> limita la cantidad de datos enviados según la capacidad del receptor.</li>
                                <li><b>Control de congestión:</b> adapta la velocidad de envío según la carga de la red para 
                                evitar saturación.</li>
                            </ul>

                            <p>En conjunto, TCP asegura que los datos lleguen correctamente, en orden y sin sobrecargar la red.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 style="color:violet"><b><em>Resultado 2 -</b> Prompt nº1 (mejorado)</em></h5>
                    <div class="promptText" style="max-height:360px">
                        <h5><b>1. Transferencia fiable de datos</b></h5>
                        <div>
                            <p>TCP se asegura de que los datos lleguen:</p>
                            <ul>
                            <li>Sin perderse</li>
                            <li>Sin duplicarse</li>
                            <li>En el orden correcto</li>
                            </ul>

                            <p><b>¿Cómo lo hace?</b></p>
                            <ul>
                            <li>Cada trozo de datos tiene un <b>número de secuencia</b></li>
                            <li>El receptor envía un <b>ACK (confirmación)</b> cuando lo recibe</li>
                            <li>Si el emisor no recibe el ACK, <b>reenvía</b> el dato</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Ejemplo real:</b><p>
                            <p>Imagina que envías un archivo por WhatsApp:</p>
                            <ul>
                                <li>El archivo se divide en partes</li>
                                <li>Tu móvil envía parte 1, 2, 3…</li>
                                <li>El otro móvil responde: “recibí la 1 y la 2”</li>
                                <li>Si la 3 no llega, se vuelve a enviar</li>
                            </ul>
                            <p><b>Resultado:</b> el archivo llega completo y en orden, aunque la red falle.</p>
                        </div>
                        <h5><b>2. Control de congestión</b></h5>
                        <div>
                            <p>Esto no es solo para ti, sino para <b>toda la red</b>.</p>

                            <p>TCP intenta evitar que:</p>
                            <ul>
                            <li>Demasiados datos saturen routers o enlaces</li>
                            <li>Se produzcan pérdidas masivas</li>
                            </ul>

                            <p><b>¿Cómo lo hace?</b></p>
                            <ul>
                            <li>Empieza enviando <b>poco tráfico</b></li>
                            <li>Si todo va bien → <b>aumenta la velocidad</b></li>
                            <li>Si detecta problemas → <b>reduce la velocidad</b></li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Ejemplo real:</b></p>
                            <p>Imagina una autopista:</p>
                            <ul>
                                <li>Si hay pocos coches → puedes ir más rápido</li>
                                <li>Si empieza a haber tráfico → reduces velocidad</li>
                                <li>Si hay atasco → avanzas muy lento</li>
                            </ul>
                            <p><b>TCP hace lo mismo</b> con los datos para no colapsar Internet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="repasar" class="content-section" style="display:none">
            <div style="display:flex; flex-direction:row; gap:20px;">
                <h3 style="color:violet"><em><b>Quiero repasar la teoría</b></em></h3>
                <button id="audioRepasar" class="btn btn-outline-light btn-sm" style="height:30px; width:30px">
                    <i class="bi bi-volume-up"></i>
                </button>
            </div>
            <div>
            <p>
            La IA Generativa tiene un gran potencial para actuar como profesor, ofrecer ejercicios y preguntas para asegurar 
            que has entendido el contenido, y en general repasar de cara a un examen pero los prompts utilizados afectan al resultado. 
            </p>
            <p>Ahora miraremos la estrategia que es usada habitualmente, y alternativas que pueden ser útiles.</p>
            </div>
            <h3 style="color:violet"><em><b>Estrategia habitual</b></em></h3>
            <div>
            <p>Para ahorrar tiempo, se suele pedir a la IA que te pregunte para ver si te lo sabes, 
            pero esto no tiene en cuenta el nivel por el que debe preguntar, cuáles son los conceptos más importantes,
            el feedback que debe ofrecer, qué tipo de ejercicios te van mejor o o cómo son los que te entrarian en un examen.
            </p>
            <p>
            Esto resulta en un camino de aprendizaje genérico y poco adaptado a tus necesidades.<br>
            En cambio, con prompts más específicos,
            la IA se puede adherir a tu manera de aprender.
            </p>
            </div>
            
            <h3 style="color:violet"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa, se debe ser más específico.<br>
                En casos de explicación y repaso de teoría, es muy útil decirle a la IA que coja el rol de "profesor", de esta manera,
                después de cada ejercicio hecho, te dará un feedback similar al que te daría un profesor, y personalizado a tu manera de aprender
                y entender las cosas.
                </p>
                <p>El tipo de ejercicios y/o preguntas a hacer para repasar también es importante. Pueden ser ejercicios que vayan aumentando 
                de dificultad, o preguntas como las que te saldrían en el examen.<br>
                Para ambos casos, es importante darle al menos un ejemplo a tu IA conversacional para que sepa qué es lo que quieres.</p>
            </div>
            <h3 style="color:violet"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo que quieres repasar <em>'cómo funciona una CDN'</em>.<br>
            Esto es lo que tienes en las diapositivas/en tus apuntes:
            </p>

            <div class="comparison" style="margin-left:70px">
                <div class="promptText exercise" style="height:470px">
                        <h5><b><em>Content Delivery Network (CDN)</em></b></h5>

                        <p>Una <b>CDN (Content Delivery Network)</b> es una red grande y geográficamente distribuida de servidores 
                        especializados cuyo objetivo es acelerar la entrega de contenido web, como páginas, vídeos o imágenes, 
                        a los usuarios finales.
                        </p>

                        <p>Para ello, se apoya en distintos elementos.<br>
                        Por un lado, los <b>Puntos de Presencia (PoPs)</b>, 
                        que son centros de datos situados estratégicamente cerca de los usuarios y que contienen múltiples 
                        servidores de caché.
                        </p>

                        <p>Los <b>servidores de caché</b> almacenan copias de los contenidos más solicitados para servirlos 
                        rápidamente, reduciendo el consumo de ancho de banda, la latencia y la carga sobre el servidor original.
                        </p>

                        <p>Además, existe un componente llamado <b>selector</b>, encargado de decidir a qué PoP y a qué servidor 
                        de caché debe conectarse cada usuario. Esta decisión se basa en distintas <b>políticas de encaminamiento 
                        (routing policies)</b>, teniendo en cuenta factores como la topología de red, el contenido disponible en 
                        caché, el estado de los servidores, el proveedor de Internet (ISP), la localización del usuario, 
                        la hora del día o la calidad de servicio (QoS).
                        </p>

                        <p>Para gestionar eficientemente la distribución de datos, se puede utilizar el <b>hashing consistente 
                        (consistent hashing)</b>, una técnica que permite que, al cambiar el número de servidores, 
                        solo sea necesario reasignar una pequeña parte de los datos.
                        </p>

                        <p>Las CDN ofrecen múltiples ventajas: permiten atender a un gran número de usuarios simultáneamente, 
                        reducen la latencia, ayudan a soportar picos de demanda, disminuyen el tráfico dentro de la red de 
                        distribución y mejoran la calidad de servicio.
                        </p>

                        <p>Por último, la distribución de los PoPs suele basarse en una <b>matriz de costes</b>, que representa la 
                        distancia (en términos de latencia o coste de comunicación) entre los distintos puntos de la red.
                        </p>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:violet"><b><em>Prompts habituales</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Hazme preguntas para ver si he entendido esto.</p>
                            <p><i class="bi bi-caret-right"></i>Ayudame a repasar esta teoría.</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:violet"><b><em>Prompts mejorados</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Actúa como si fueras mi profesor. Quiero repasar este contenido, 
                            que es de primer curso de ingeniería. Haz rondas de 5 preguntas incrementando la dificultad cada vez 
                            y dame feedback para que pueda aprender que las respuestas que he dado.
                            </p>
                            <div>
                            <p><i class="bi bi-caret-right"></i>Actúa como si fueras mi profesor. Quiero repasar esto para el 
                            examen, este es el tipo de preguntas que me pueden salir: <em>copiar ejemplo aquí</em>
                            </p>
                            </div>
                            <p><i class="bi bi-caret-right"></i>Quiero repasar este contenido. Actúa como mi profesor. 
                            Haz ejercicios de completar los huecos, comprueba si lo he hecho bien, e incrementa la dificultad 
                            después de cada uno.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv" style="margin-left:70px; max-width:85%">
                <div>
                    <h5 style="color:violet"><b><em>Resultado 1-</b> Prompt nº2 (habitual)</em></h5>
                    <div class="promptText" style="width:650px">
                        <h5>Conceptos básicos</h5>
                        <ol>
                            <li>¿Cuál es el objetivo principal de una CDN?</li>
                            <li>¿Qué es un PoP y por qué se colocan cerca de los usuarios?</li>
                            <li>¿Qué almacenan exactamente los servidores de caché?</li>
                        </ol>

                        <h5>Funcionamiento</h5>
                        <ol start="4">
                            <li>¿Qué problema se intenta evitar al servir contenido desde caché en lugar del servidor original?</li>
                            <li>¿Qué papel tiene el “selector” dentro de una CDN?</li>
                            <li>Nombra al menos 3 factores que el selector puede tener en cuenta para decidir a qué servidor enviar a un usuario.</li>
                        </ol>

                        <h5>Routing y decisiones</h5>
                        <ol start="7">
                            <li>¿Por qué el “camino más rápido” no siempre coincide con la distancia física más corta?</li>
                            <li>¿Cómo puede influir el ISP del usuario en la decisión del selector?</li>
                            <li>¿Por qué la hora del día puede afectar a la elección del servidor?</li>
                        </ol>

                        <h5>Técnicas clave</h5>
                        <ol start="10">
                            <li>Explica con tus palabras qué es el <em>consistent hashing</em>.</li>
                            <li>¿Qué ventaja tiene el consistent hashing cuando se añade o elimina un servidor?</li>
                            <li>¿Qué pasaría si no se usara consistent hashing y cambiara el número de servidores?</li>
                        </ol>

                        <h5>Ventajas</h5>
                        <ol start="13">
                            <li>Menciona 3 beneficios de usar una CDN.</li>
                            <li>¿Cómo ayuda una CDN a soportar picos de tráfico?</li>
                            <li>¿Por qué una CDN reduce el consumo de ancho de banda del servidor original?</li>
                        </ol>

                        <h5>Aplicación / razonamiento</h5>
                        <ol start="16">
                            <li>Imagina que un contenido no está en caché en ningún PoP cercano, ¿qué ocurriría?</li>
                            <li>Si un servidor de caché está saturado, ¿qué debería hacer el selector?</li>
                            <li>¿Qué representa la matriz de costes en una CDN?</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <h5 style="color:violet"><b><em>Resultado 2 -</b> Prompt nº1 (mejorado)</em></h5>
                    <div class="promptText">
                        <h5><b><em>Repaso de CDN</em></b></h5>

                        <p>
                        Perfecto, vamos a hacerlo como en clase. Te haré una <b>primera ronda de 5 preguntas básicas</b> 
                        para comprobar que tienes claros los fundamentos. Después de que respondas, te daré 
                        <b>feedback detallado</b> y subiremos el nivel.
                        </p>

                        <h5>Ronda 1 — Nivel básico</h5>
                        <p><b>Pregunta 1</b><br>
                        ¿Qué es una CDN y cuál es su objetivo principal?
                        </p>

                        <p><b>Pregunta 2</b><br>
                        ¿Qué es un PoP (Punto de Presencia) dentro de una CDN?
                        </p>

                        <p><b>Pregunta 3</b><br>
                        ¿Qué función tienen los servidores de caché?
                        </p>

                        <p><b>Pregunta 4</b><br>
                        ¿Para qué sirve el selector en una CDN? Menciona al menos <b>dos factores</b> que tiene en cuenta.
                        </p>

                        <p><b>Pregunta 5</b><br>
                        ¿Qué ventaja aporta el hashing consistente en una CDN?
                        </p>
                
                        <p>
                        Responde numerando del 1 al 5 (como en un examen). Después te corrijo como profesor —
                        con nota orientativa, errores y cómo mejorar— y pasamos a la siguiente ronda más difícil.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pruebatu" class="content-section" style="display:none">
            <h3 style="color:violet"><em><b>Aplícalo a tu caso particular</b></em></h3>    
            <p>Piensa en los prompts propuestos en la página anterior, y utiliza, o crea uno particular que te sirva para la asignatura que quieras.
            Utiliza tu IA de confianza.</p>
            <div class="pistaDiv">
                <p><em><b>¿Necesitas ayuda?</b></em></p>
                <button id="pistaBtn" class="btn pista concepto btn-sm">
                    <i class="bi bi-lightbulb"></i> Pista
                </button>
            </div>
            <div id="pistasPrompt" class="promptText" style="display:none; gap:40px">
                <!--se rellenará dinámicamente--!>
            </div>
            <h3 style="color:violet"><em><b>Momento de reflexión</b></em></h3>
            <p>Una vez has aplicado los nuevos prompts, es momento de reflexionar sobre qué has aprendido y cómo te sientes. 
            Aquí debajo tienes algunas afirmaciones que te podrían servir como guía.</p>
            <div class="titleReflection"><h5 style="color:violet"><b><em>¿Qué ha cambiado al usar este tipo de prompts?</b></em></h5></div>
            <div class="reflection">
                <div>
                    <input class="form-check-input concepto" type="checkbox" id="opt1">
                    <label class="form-check-label" for="opt1">He entendido más</label>
                </div>
                <div>
                    <input class="form-check-input concepto" type="checkbox" id="opt2">
                    <label class="form-check-label" for="opt2">He estado más tiempo hablando con la IA</label>
                </div>
                <div>
                    <input class="form-check-input concepto" type="checkbox" id="opt3">
                    <label class="form-check-label" for="opt3">Sé explicarlo por mi cuenta</label>
                </div>
                <div>
                    <input class="form-check-input concepto" type="checkbox" id="opt4">
                    <label class="form-check-label" for="opt4">Me ha ofrecido respuestas que se adherían más a mi forma de aprender</label>
                </div>
            </div>
        </section>

        <section id="footer" class="footerSec" style="display:none">
            <button id="atrasBtn" class="btn btn-outline-light me-2">Atrás</button>
            <button id="pruebaBtn" class="btn prueba concepto">Pruebalo tú!</button>
        </section>


    `;

    return container;
}