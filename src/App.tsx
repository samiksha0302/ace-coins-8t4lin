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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1Home">
            <Tab1 />
          </Route>
          <Route exact path="/tab2Transaction">
            <Tab2 />
          </Route>
          <Route path="/tab3Wallet">
            <Tab3 />
          </Route>
          <Route path="/tab4Account">
            <Tab4 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1Home" href="/tab1Home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2Transaction" href="/tab2Transaction">
            <IonIcon icon={receipt} />
            <IonLabel>Transaction</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3Wallet" href="/tab3Wallet">
            <IonIcon icon={wallet} />
            <IonLabel>Wallet</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4Account" href="/tab4Account">
            <IonIcon icon={person} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;