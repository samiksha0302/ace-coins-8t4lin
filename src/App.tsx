import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home , receipt , wallet , person  } from 'ionicons/icons';
import Tab1 from './pages/tab1Home';
import Tab2 from './pages/tab2Transaction';
import Tab3 from './pages/tab3Wallet';
import Tab4 from './pages/tab4Account';

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
import PageLogin from './pages/pageLogin';
import PageSignup from './pages/pageSignup';
import PageVerification from './pages/pageVerification';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/" component={AppTab} />
      <Route path="/pageLogin" component={PageLogin} exact={true} />
      <Route path="/pageSignup" component={PageSignup} exact={true} />
      <Route path="/pageVerification" component={PageVerification} exact={true} />
    </IonReactRouter>
  </IonApp>
);

export default App;