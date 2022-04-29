import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonAvatar, IonIcon, IonButtons
} from '@ionic/react';

import React from 'react';
import { IonButton,IonList } from '@ionic/react';
import { planet, notifications } from 'ionicons/icons';
import { Transaction } from '../components/TaskTransaction';
import './tab2Transaction.css';

const Tab2: React.FC = () => {
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
            <IonButton>
              <IonIcon icon={notifications} />
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
