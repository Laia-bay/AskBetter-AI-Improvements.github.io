export function CodigoScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <h4 class="titles" style="color:dodgerblue"><b>Trabajar con código</b></h4>

        <p class="subtitles" style="margin-top:50px"> ¿Qué problema te estás encontrando?</p>
    
        <div id="coding">
            <button id="entenderBtn" class="btn option codigo">No entiendo el código</button>
            <button id="fallaBtn" class="btn option codigo">No me funciona y no sé por qué</button>
            <button id="noaprendoBtn" class="btn option codigo">La IA lo resuelve y no aprendo</button>
        </div>

        <!--depending on the option chosen the content will be different-->

        <section id="entender" class="content-section" style="display:none">
            <div style="display:flex; flex-direction:row; gap:20px;">
                <h3 style="color:dodgerblue"><em><b>No entiendo el código</b></em></h3>
                <button id="audioEntender" class="btn btn-outline-light btn-sm" style="height:30px; width:30px">
                    <i class="bi bi-volume-up"></i>
                </button>
            </div>

            <p>No te preocupes, es un problema muy común.
             La IA Generativa tiene un gran potencial para explicar código y aprender cosas nuevas, 
             pero los prompts utilizados afectan al resultado.
            Ahora miraremos la estrategia que es usada habitualmente, y alternativas que pueden ser útiles.
            </p>

            <h3 style="color:dodgerblue"><em><b>Estrategia habitual</b></em></h3>
            <p>A menudo, cuando no entendemos el código le decimos a la IA, "explícame esto",
            sin especificar qué es lo que no se entiende, o por qué. 
            De esta manera, se pone todo el peso del aprendizaje en la IA y ninguno en nosotros,
            que resulta en un aprendizaje más superficial que puede olvidarse el día del examen. 
            </p>

            
            <h3 style="color:dodgerblue"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa, se debe pasar la responsabilidad de la IA al estudiante.</p>
                <p>Los prompts, que es el mensaje que escribes al chat con lo que quieres que haga, cuanto más específicos, mejor. 
                Darle información sobre en qué curso estás, qué estás estudiando, o de qué asignatura se trata, ayuda a la IA a ofrecer una respuesta más personalizada.
                Recuerda que aun así es importante no dar información personal o confidencial.</p>
                <p> Sobre este mismo punto, ser más específico con qué parte entiendes, qué no, y cuál es tu manera de aprender, hará que los resultados que obtengas se adhieran más a tus necesidades.</p>
                <p>De esta manera, la respuesta que tu chat conversacional te ofrezca tendrá la información que tú necesitas, en vez de una respuesta larga y genérica, que a veces puede confundir más que ayudar, o que se debe buscar entre todo lo mostrado la parte que te es relevante a ti.</p> 
                <p>Explicar en el prompt qué crees que es lo que hace la función, y pedir que te corrija, también es una manera muy útil de aprender, que te hace pensar, en vez de esperar a que la IA te de la respuesta y copiarla.</p>
            </div>
            <h3 style="color:dodgerblue"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo una función de <em>'Binary Search'</em> con python. 
            Esta función encuentra un valor en una array de manera más rápida que un loop normal.
            </p>
            

            <div class=comparison>
                <div class=code>
    <pre><code class="language-python">def binarySearch(array,target):
    left = 0
    right = len(array)-1

    while left <=right:
        mid = (left + right)//2

        if array[mid] == target:
            return mid

        elif array[mid] < target:
            left = mid+1

        else:
            right = mid-1

    return -1</code></pre>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:dodgerblue"><b><em>Prompt habitual</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Explica esta función</p>
                            <p><i class="bi bi-caret-right"></i>¿Esto qué hace?</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:dodgerblue"><b><em>Prompt mejorado</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Explica línea por línea qué hace esta función</p>
                            <p><i class="bi bi-caret-right"></i>Quiero entender este código, pero no me lo expliques todo de golpe. 
                            Explícame las primeras líneas y hazme preguntas para ver si lo entiendo.
                            </p>
                            <p><i class="bi bi-caret-right"></i>¿Me puedes explicar qué hace el 'while' de esta función?</p>
                            <p><i class="bi bi-caret-right"></i>¿Qué hace la condición 'elif' en esta función?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv">
                <div>
                    <h5 style="color:dodgerblue"><b><em>Resultado 1-</b> Prompt nº1 (habitual)</em></h5>
                    <div class="promptText">

                        <p>Ese código implementa el algoritmo de <b>búsqueda binaria</b>, que sirve para encontrar un elemento (<code>target</code>) dentro de una lista (<code>array</code>) <b>ordenada</b>.</p>

                        <h5>¿Cómo funciona?</h5>
                        <ol>
                            <li>Empieza con dos índices:
                                <ul>
                                    <li><code>left</code> (inicio de la lista)</li>
                                    <li><code>right</code> (final de la lista)</li>
                                </ul>
                            </li>
                            <li>Mientras <code>left &lt;= right</code>:
                                <ul>
                                    <li>Calcula el punto medio:
                                        mid = (left + right) // 2
                                    </li>
                                    <li>Compara el valor del medio con el <code>target</code>:
                                        <ul>
                                            <li>Si es igual → devuelve la posición (<code>mid</code>)</li>
                                            <li>Si es menor → busca en la mitad derecha</li>
                                            <li>Si es mayor → busca en la mitad izquierda</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Si no encuentra el elemento → devuelve <code>-1</code></li>
                    </div>
                </div>
                <div>
                    <h5 style="color:dodgerblue"><b><em>Resultado 2 -</b> Prompt nº1 (mejorado)</em></h5>
                    <div class="promptText">

                        <ul><code>def binarySearch(array,target):</code></ul>
                        <p>Aquí estás <b>definiendo una función</b> llamada <code>binarySearch</code> que recibe dos parámetros:<br>
                        <b>array</b>: una lista de números que debe estar ordenada.<br>
                        <b>target</b>: el número que quieres buscar dentro de esa lista.</p>

                        <ul><code>left = 0<br>
                        right = len(array)-1</code></ul>

                        <p>Estas dos líneas crean <b>dos “punteros” o índices</b>:<br>
                        <b>left = 0</b> → empieza al inicio de la lista<br>
                        <b>right = len(array)-1</b> → apunta al final de la lista</p>

                        <p>En otras palabras, estás diciendo: 
                        <em>"Voy a buscar entre la posición 0 y la última posición del array."</em>
                        </p>

                        <h5>Preguntas para comprobar si lo entiendes:</h5>
                        <ol>
                            <li>Si <b>array = [2, 4, 6, 8, 10]</b>, ¿qué valor tendría <code>right</code>?</li>
                            <li>¿Por qué crees que usamos <code>len(array)-1</code> y no solo <code>len(array)</code>?</li>
                            <li>¿Qué representan realmente <code>left</code> y <code>right</code>: valores o posiciones?</li>
                        </ol>
                        <p>Respóndeme y seguimos con la siguiente parte!</p>
                    </div>
                </div>
            </div>
            
        </section>

        <section id="falla" class="content-section" style="display:none">
            <div style="display:flex; flex-direction:row; gap:20px;">
                <h3 style="color:dodgerblue"><em><b>No me funciona y no sé por qué</b></em></h3>
                <button id="audioFalla" class="btn btn-outline-light btn-sm" style="height:30px; width:30px">
                    <i class="bi bi-volume-up"></i>
                </button>
            </div>

            <p>No te preocupes, es un problema muy común.
             La IA Generativa tiene un gran potencial para explicar y debugar código, 
             pero los prompts utilizados afectan al resultado.
            Ahora miraremos la estrategia que es usada habitualmente, y alternativas que pueden ser útiles.
            </p>

            <h3 style="color:dodgerblue"><em><b>Estrategia habitual</b></em></h3>
            <div>
            <p>A menudo, cuando no entendemos qué falla, le decimos a la IA "arregla esto",
            sin especificar qué quieres que haga la función, qué parte falla, o qué nivel de experiencia programando tienes.
            <p> Este tipo de prompts generales pueden resultar en la IA cambiando el código completo, por uno más complejo que no se entiende, 
            o en uno que no cumple con el objetivo de la función, o en uno que simplemente sigue sin funcionar porque ha cambiado algo que ya iba bien.
            </p>
            </div>

            
            <h3 style="color:dodgerblue"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa, se debe pasar la responsabilidad de la IA al estudiante.</p>
                <p>Los prompts, cuanto más específicos, mejor. 
                Darle información sobre en qué curso estás, qué estás estudiando, o de qué asignatura se trata, ayuda a la IA a ofrecer una respuesta más personalizada.
                Recuerda que aun así es importante no dar información personal o confidencial.</p>
                <p> Sobre este mismo punto, ser más específico con qué quieres que modifique, o cómo quieres que lo modifique, hará que los resultados que obtengas se adhieran más a tus necesidades.</p>
                <p>De esta manera, la respuesta que tu chat conversacional te ofrezca tendrá la información que tú necesitas, en vez de una respuesta larga y genérica, que a veces puede confundir más que ayudar.</p> 
                <p>Explicar en el prompt qué debe hacer este código, cuál es el error que aparece, y dónde crees que está fallando, también es una manera muy útil de aprender, que te hace pensar, en vez de esperar a que la IA te de la respuesta y copiarla.</p>
            </div>
            <h3 style="color:dodgerblue"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo una función incorrecta de <em>'KMeans'</em> con python. 
            Esta función agrupa datos en clusters basándose en su cercanía a un centro.
            </p>
            <div class=comparison style="margin-left:70px">
                <div class="code">
    <pre><code class="language-python">def kmeans(points_list, n_clusters, n_iterations):
    
    list_current_centroids = random.sample(points_list, n_clusters)

    for iteration_counter in range(n_iterations):
        list_clusters_assigned_points = [[]] * n_clusters

        for point in points_list:
            list_distances_each_centroid = []

            for centroid in list_current_centroids:
                distance = math.sqrt(
                    (point[0] - centroid[0])**2 +
                    (point[1] - centroid[1])**2
                )
                list_distances_each_centroid.append(distance)

            idx_closest_centroid = list_distances_each_centroid.index(
                min(list_distances_each_centroid)
            )

            list_clusters_assigned_points[idx_closest_centroid].append(point)

        for cluster in range(n_clusters):
            current_cluster_points = list_clusters_assigned_points[cluster]
            x_total = 0
            y_total = 0

            for point_in_cluster in current_cluster_points:
                x_total += point_in_cluster[0]
                y_total += point_in_cluster[1]

            new_centroid_x = x_total / len(current_cluster_points)
            new_centroid_y = y_total / len(current_cluster_points)

            list_current_centroids[cluster] = (new_centroid_x, new_centroid_y)

    return list_current_centroids</code></pre>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:dodgerblue"><b><em>Prompt habitual</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Arregla esta función</p>
                            <p><i class="bi bi-caret-right"></i>Esto no funciona</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:dodgerblue"><b><em>Prompt mejorado</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Estoy haciendo una función Kmeans que agrupa datos(puntos) 
                            en un cluster segun su distancia a un centro. No me funciona, y no sé donde está el error, 
                            podemos revisar línea por línea?
                            </p>
                            <p><i class="bi bi-caret-right"></i>Estoy haciendo una función Kmeans, pero no funciona. 
                            A veces peta y no me da ningun resultado, y otras está todo agrupado en el mismo sitio. 
                            Podría ser por la manera en la que estoy asignando los puntos a los crusters inicialmente?
                            </p>
                            <p><i class="bi bi-caret-right"></i>Esta función no me va, se trata de agrupar los puntos segun la cercanía a unos centros. 
                            Creo que hay varias cosas que están mal, pero quiero ir de las más graves a las más leves. 
                            Hazme una lista de las cosas que están mal o deban optimizarse, y explícame sólo la primera. 
                            No cambies el nombre de las variables o la estructura a no ser que sea necesario.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv" style="margin-left:70px; max-width:85%">
                <div>
                    <h5 style="color:dodgerblue"><b><em>Resultado 1-</b> Prompt nº1 (habitual)</em></h5>
                    <div class="code" style="width:650px">
                    <pre><code class="language-python">def kmeans(data, k, iters):
    centroids = random.sample(data, k)

    for _ in range(iters):
        clusters = [[] for _ in range(k)]

        for x, y in data:
            idx = min(range(k),
                key=lambda i:(x-centroids[i][0])**2+(y-centroids[i][1])**2)
            clusters[idx].append((x, y))

        new_centroids = []
        for i, cluster in enumerate(clusters):
            if cluster:
                sx = sum(p[0] for p in cluster)
                sy = sum(p[1] for p in cluster)
                n = len(cluster)
                new_centroids.append((sx / n, sy / n))
            else:
                new_centroids.append(centroids[i])

        centroids = new_centroids

    return centroids</code></pre>
                    </div>
                </div>
                <div>
                    <h5 style="color:dodgerblue"><b><em>Resultado 2 -</b> Prompt nº3 (mejorado)</em></h5>
                    <div class="promptText" style="max-height:525px">
                        <h5>Lista de problemas (de más grave a más leve)</h5>
                            <ol>
                                <li><p>Inicialización incorrecta de <code>list_clusters_assigned_points</code></p></li>
                                <li><p>Posible división por cero si un cluster queda vacío</p></li>
                                <li><p>Ineficiencia al calcular distancias (uso innecesario de <code>sqrt</code>)</p></li>
                                <li><p>Uso de <code>min(...)</code> + <code>index(...)</code> en lugar de algo más eficiente</p></li>
                                <li><p>No hay criterio de convergencia (solo iteraciones fijas)</p></li>
                            </ol>

                        <p>1: Inicialización incorrecta de <code>list_clusters_assigned_points</code></p>
                        <code>list_clusters_assigned_points = [[]] * n_clusters</code>

                        <p>Esto <b>no crea listas independientes</b>, 
                        sino múltiples referencias a<b> la misma lista en memoria</b>.
                        </p>

                        <h5>¿Qué significa esto?</h5>
                        <p>Si haces: <code>list_clusters_assigned_points[0].append(point)</code></p>
                        <p>Ese <code>point</code> se añadirá <b>a TODOS los clusters</b>, 
                        porque en realidad todos apuntan a la misma lista.<br>
                        Esto rompe completamente el algoritmo, porque todos los puntos acaban en todos los clusters.
                        </p>

                        <h5>Solución correcta</h5>
                        <code>list_clusters_assigned_points = [[] for _ in range(n_clusters)]</code>
                        <p>Si quieres, en el siguiente paso te explico el segundo problema (división por cero), 
                        que también es bastante crítico en K-means.</p>
                    </div>
                </div>
            </div>

        </section>

        <section id="noaprendo" class="content-section" style="display:none">
            <div style="display:flex; flex-direction:row; gap:20px;">
                <h3 style="color:dodgerblue"><em><b>La IA lo resuelve y no aprendo</b></em></h3>
                <button id="audioNoaprendo" class="btn btn-outline-light btn-sm" style="height:30px; width:30px">
                    <i class="bi bi-volume-up"></i>
                </button>
            </div>

            <p>No te preocupes, es un problema muy común.
             La IA Generativa tiene un gran potencial para crear código desde cero, pero la forma de pedirlo afectará a nuestro nivel de aprendizaje.
            Ahora miraremos la estrategia que es usada habitualmente, y alternativas que pueden ser útiles.
            </p>

            <h3 style="color:dodgerblue"><em><b>Estrategia habitual</b></em></h3>
            <div>
            <p>A menudo, cuando no sabemos por dónde empezar, le decimos a la IA "haz esto", y aunque en 2 o 3 iteraciones obtenemos un buen resultado, 
            no estamos siendo activos en el aprendizaje, lo que resulta en una menor retención de información, y que cuando te encuentres con un ejercicio similar, 
            debas volver a buscarlo.
            </p>
            <p>La IA Generativa debe usarse como apoyo, no como una vía fácil para hacer lo que los profesores piden.</p>
            </div>
            
            <h3 style="color:dodgerblue"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa, se debe pasar la responsabilidad de la IA al estudiante.</p>
                <p>Los prompts, cuanto más específicos, mejor. 
                Darle información sobre en qué curso estás, qué estás estudiando, o de qué asignatura se trata, ayuda a la IA a ofrecer una respuesta más personalizada.
                Recuerda que aun así es importante no dar información personal o confidencial.</p>
                <p>Sobre este mismo punto, cuando se trata de programar desde cero, es muy útil mencionar tu nivel de programación, 
                de esta manera no creará código complejo y difícil de entender. Más adelante, si uno quiere, puede preguntar cosas como 
                "qué se puede mejorar de este código para hacerlo más eficiente".</p>
                <p>En caso de tener algo de código hecho, pero no saber cómo seguir, copia el código, explica qué hace, 
                y explica con qué parte estás teniendo problemas, y por qué. De esta manera, la respuesta que tu chat conversacional 
                te ofrezca será mucho más útil, ya que sabrá exactamente qué parte abordar primero.</p> 
                <p>En caso de no saber cómo empezar, en vez de dejar que la IA lo haga todo, piensa primero qué deberías hacer. 
                Escríbelo en pseudocode o en lenguaje normal y pregúntale a la IA si ese enfoque sería correcto y por qué.</p>
                <p>En ambos casos es muy importante mencionar que no haga el ejercicio de golpe, que vaya parte por parte, 
                y que te haga preguntas para ver si estás entendiendo lo que estás haciendo.
                Es un proceso más largo al habitual, pero más enriquecedor para ti, ya que estás mucho más involucrado/a en la programación.</p>
            </div>
            <h3 style="color:dodgerblue"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo que debes crear un pequeño juego de <em>'Adivina el número'</em> con python.</p>
            <div class="comparison" style="margin-left:70px">
                <div class="promptText exercise">
                    <h5><em>Enunciado</em></h5>
                    <p>Desarrolla un programa en Python que implemente un juego en el que el ordenador genera un número aleatorio y 
                    el usuario debe adivinarlo.</p>
                    <ul style="margin-bottom:0">
                        <li>El programa generará un número entero aleatorio entre <b>1 y 20</b> (ambos incluidos).</li>
                        <li>A continuación, el usuario dispondrá de un máximo de <b>10 intentos</b> para adivinar el número.</li>
                        <li>Después de cada intento, el programa debe indicar si el número introducido es mayor o menor que el número secreto.</li>
                    </ul>
                    <p>El juego termina cuando el usuario acierta el número o cuando se agotan los intentos.<br> 
                    Al finalizar, se mostrará un mensaje indicando si ha ganado o perdido.
                    </p>

                    <h5><em>Requisitos del juego</em></h5>
                        <ul>
                            <li>Es obligatorio utilizar un bucle <b>while</b> para controlar los intentos.</li>
                            <li>Se puede usar la librería estándar <b>random</b> para generar el número.</li>
                            <li>Validar que la entrada del usuario sea un número entero.</li>
                            <li>Si la entrada no es válida, mostrar un mensaje de error y volver a pedir el número sin consumir intento.</li>
                        </ul>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:dodgerblue"><b><em>Prompt habitual</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Haz este ejercicio</p>
                            <p><i class="bi bi-caret-right"></i>Completa esto asegurándote que cumple todos los requisitos
                            y que parezca de un programador de primer curso de universidad
                            </p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:dodgerblue"><b><em>Prompt mejorado</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Tengo que hacer este ejercicio, pero no sé por dónde empezar, 
                            me puedes ayudar a aprender qué necesito saber antes de programar? 
                            Quiero entenderlo primero de manera lógica pero no me lo expliques todo de golpe, vamos parte por parte.
                            </p>
                            <p><i class="bi bi-caret-right"></i>He de hacer este ejercicio y tengo algunas líneas empezadas, 
                            pero no sé cómo seguir. Ayúdame sólo a hacer la parte del input del usuario por favor.
                            </p>
                            <p><i class="bi bi-caret-right"></i>Tengo este ejercicio hecho pero nos piden que validemos que el input 
                            del usuario es correcto, cómo puedo hacer eso? No modifiques nada más. Cuando termine con esto, 
                            haz una lista de las cosas que podría mejorar del código.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv" style="margin-left:70px; max-width:85%">
                <div>
                    <h5 style="color:dodgerblue"><b><em>Resultado 1-</b> Prompt nº2 (habitual)</em></h5>
                    <div class="code" style="width:650px">
    <pre style="max-height:400px"><code class="language-python">import random
        secret_num= random.randint(1, 20)

        i = 0
        max_attempts = 10
        correct = False

        while i < max_attempts and not correct:
            user_input = input("Select a number between 1 and 20: ")

            if not user_input.isdigit():
                print("Error: you must type an integer.")
                continue

            num = int(user_input)
            i += 1

            if num == secret_num:
                correct = True
            elif num < secret_num:
                print("The secret number is greater.")
            else:
                print("The secret number is smaller.")

        if correct:
            print("Congrats! You have guessed the secret number.")
        else:
            print("Sorry, you lost. The secret number was:", secret_num)</code></pre>
                    </div>
                </div>
                <div>
                    <h5 style="color:dodgerblue"><b><em>Resultado 2 -</b> Prompt nº1 (mejorado)</em></h5>
                    <div class="promptText">
                        <h5><b><em>Paso 1:</b> Entender el objetivo básico</em></h5>

                        <p>Antes de pensar en código, solo quiero asegurarme de que tienes clara la idea del juego.</p>
                        <div>
                        <p><b>Pregunta:</b> Si tuvieras que explicar el juego con tus palabras, 
                        qué dirías que tiene que hacer el programa?</p>
                        <ul><p style="color:gray"><b>Respuesta del usuario:</b> .....</p></ul>
                        </div>

                        <h5><b><em>Paso 2:</b> El número secreto</em></h5>

                        <p>El programa necesita guardar un número secreto que <b>sea aleatorio</b> y <b>esté entre 1 y 20</b></p>
                        <div>
                        <p><b>Pregunta:</b> ¿Qué necesitas para crear ese número aleatorio en Python?</p>
                        <ul><p style="color:gray"><b>Respuesta del usuario:</b> .....</p></ul>

                        <p><b>Pregunta:</b> ¿Para qué crees que usamos un número aleatorio en este juego?
                        ¿Qué pasaría si no fuera aleatorio?</p>
                        <ul><p style="color:gray"><b>Respuesta del usuario:</b> .....</p></ul>
                        </div>

                        <h5><b><em>Paso 3:</b> Estructura del juego</em></h5>

                        <p>Ahora vamos a algo clave antes de programar.<br>
                        El juego tiene dos “zonas”:</p>
                        <ol>
                            <li><b>Preparación</b>
                                <ul>
                                    <li>Se crea el número secreto</li>
                                    <li>Se preparan los intentos</li>
                                </ul>
                            </li>
                            <li><b>Juego</b>
                                <ul>
                                    <li>El usuario intenta adivinar</li>
                                    <li>Se repite varias veces</li>
                                </ul>
                            </li>
                        </ol>
                        <div>
                        <p><b>Pregunta:</b> ¿Cuál de estas dos partes crees que se repite varias veces?</p>
                        <ul>
                            <li>A) Crear el número secreto</li>
                            <li>B) Pedir al usuario que intente adivinar</li>
                        </ul>
                        <ul><p style="color:gray"><b>Respuesta del usuario:</b> .....</p></ul>

                        <p><b>Pregunta:</b> Si el usuario tiene 10 intentos, ¿qué significa eso en lógica?</p>
                        <ul><p style="color:gray"><b>Respuesta del usuario:</b> .....</p></ul>
                        </div>
                        <p style="color:lightslategray"><b>...Y así seguiría hasta terminar el ejercicio</b></p>
                        
                    </div>
                </div>
            </div>    
        </section>

        <section id="pruebatu" class="content-section" style="display:none">
            <h3 style="color:dodgerblue"><em><b>Aplícalo a tu caso particular</b></em></h3>    
            <p>Piensa en los prompts propuestos en la página anterior, y utiliza, o crea uno particular que te sirva para el código que no has entendido.
            Utiliza tu IA de confianza.</p>
            <div class="pistaDiv">
                <p><em><b>¿Necesitas ayuda?</b></em></p>
                <button id="pistaBtn" class="btn pista codigo btn-sm">
                    <i class="bi bi-lightbulb"></i> Pista
                </button>
            </div>
            <div id="pistasPrompt" class="promptText" style="display:none; gap:40px">
                <!--se rellenará dinámicamente--!>
            </div>
            <h3 style="color:dodgerblue"><em><b>Momento de reflexión</b></em></h3>
            <p>Una vez has aplicado los nuevos prompts, es momento de reflexionar sobre qué has aprendido y cómo te sientes. 
            Aquí debajo tienes algunas afirmaciones que te podrían servir como guía.</p>
            <div class="titleReflection"><h5 style="color:dodgerblue"><b><em>¿Qué ha cambiado al usar este tipo de prompts?</b></em></h5></div>
            <div class="reflection">
                <div>
                    <input class="form-check-input" type="checkbox" id="opt1">
                    <label class="form-check-label" for="opt1">He entendido más</label>
                </div>
                <div>
                    <input class="form-check-input" type="checkbox" id="opt2">
                    <label class="form-check-label" for="opt2">He estado más tiempo hablando con la IA</label>
                </div>
                <div>
                    <input class="form-check-input" type="checkbox" id="opt3">
                    <label class="form-check-label" for="opt3">Sé explicarlo por mi cuenta</label>
                </div>
                <div>
                    <input class="form-check-input" type="checkbox" id="opt4">
                    <label class="form-check-label" for="opt4">Me costaba no pedir la solución directa</label>
                </div>
            </div>
        </section>

        <section id="footer" class="footerSec" style="display:none">
            <button id="atrasBtn" class="btn btn-outline-light me-2">Atrás</button>
            <button id="pruebaBtn" class="btn prueba codigo">Pruebalo tú!</button>
        </section>
    `;


    const codes = container.querySelectorAll(".language-python")
    codes.forEach(code => {
        Prism.highlightElement(code);
    });

    return container;
}