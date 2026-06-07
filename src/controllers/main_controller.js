//this file controls the interaction of the elements in main screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { MainScreen } from '../screens/main_screen.js';


export function MainController (params){
    //getting elements in Main Screen
    const container = MainScreen();

    //reference of elements in container
    const concepto_btn = container.querySelector('#conceptoBtn');
    const codigo_btn = container.querySelector('#codigoBtn');
    const resolver_btn = container.querySelector('#resolverBtn');
    const comprobar_btn = container.querySelector('#comprobarBtn');
    
    //navigation to corresponding screen
    concepto_btn.onclick = () => {navigate('/concepto')};
    codigo_btn.onclick = () => {navigate('/codigo')};
    resolver_btn.onclick = () => {navigate('/resolver')};
    comprobar_btn.onclick = () => {navigate('/comprobar')};
    


    return container;
}
