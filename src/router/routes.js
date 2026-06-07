//this file defines what screen corresponds to each path (we get controllers, which get screen views)
// Import of screen & controllers
import { registerRoute } from './router.js';
import { MainController } from '../controllers/main_controller.js';
import { HelpController } from '../controllers/help_controller.js';
import { ConceptoController } from '../controllers/concepto_controller.js';
import { CodigoController } from '../controllers/codigo_controller.js';
import { ResolverController } from '../controllers/resolver_controller.js';
import { ComprobarController } from '../controllers/comprobar_controller.js';


registerRoute('/main', MainController);
registerRoute('/help', HelpController);
registerRoute('/concepto', ConceptoController);
registerRoute('/codigo', CodigoController);
registerRoute('/resolver', ResolverController);
registerRoute('/comprobar', ComprobarController);
