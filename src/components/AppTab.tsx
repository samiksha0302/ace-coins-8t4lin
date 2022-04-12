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

import Tab1 from '../pages/tab1Home';
import Tab2 from '../pages/tab2Transaction';
import Tab3 from '../pages/tab3Wallet';
import Tab4 from '../pages/tab4Account';

const AppTab: React.FC = () => {
    return (
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
    );
  };
  
  export default AppTab;