import { Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import PageLogin from './pages/pageLogin';
import PageSignup from './pages/pageSignup';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AppTab from './components/AppTab';

setupIonicReact();

let Auth = false

if(localStorage.getItem('isLoggedIn') === 'true'){
  Auth = true
}else{
  Auth = false
}

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <Route path="/" component={Auth ? AppTab : PageLogin} />
      <Route path="/pageLogin" component={PageLogin} exact={true} />
      <Route path="/pageSignup" component={PageSignup} exact={true} />
    </IonReactRouter>
  </IonApp>
);

export default App;
