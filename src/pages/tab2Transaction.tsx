import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonAvatar, IonIcon, IonButtons, IonLabel
} from '@ionic/react';

import React from 'react';
import { IonButton,IonList } from '@ionic/react';
import { planet, notifications, exit } from 'ionicons/icons';
import { Transaction } from '../components/TaskTransaction';
import './tab2Transaction.css';

const Tab2: React.FC = () => {

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={planet} />
            </IonButton>
          </IonButtons>
          
          <IonTitle>Ace Coins</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={logout}>
              <IonLabel>Logout</IonLabel>&nbsp;<IonIcon icon={exit} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <Transaction props={undefined}></Transaction>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
