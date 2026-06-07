//this file initializes the website

// Importing necessary files and functions
import './router/routes.js';
import { router } from './router/router.js';
import { initGeneralLayout } from './controllers/generalLayout_controller.js';


async function initApp(){
    
    window.addEventListener('hashchange', router);
    
    window.addEventListener('load', () => {
        initGeneralLayout();
        router();

    }) 
};

initApp();