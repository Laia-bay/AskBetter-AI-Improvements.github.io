export function MainScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <h4 id="welcome" class="titles">Bienvenido/a a <em class="text-danger"><b>EstudIA mejor</b></em></h4>
        <p class="subtitles"><em>¿Qué necesitas?</em></p>

        <div id="optionBtns" class="options">
            <button id="conceptoBtn" class="btn option concepto">Entender un concepto</button>
            <button id="codigoBtn" class="btn option codigo">Trabajar con código</button>
            <button id="resolverBtn" class="btn option resolver">Resolver ejercicios</button>
            <button id="comprobarBtn" class="btn option comprobar">Comprobar resultados</button>
        </div>
    `;

    return container;
}