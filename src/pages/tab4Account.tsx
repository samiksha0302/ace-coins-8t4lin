import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonItem, IonLabel, IonInput, IonButton, IonAvatar, IonCard, IonCardContent, IonButtons, IonIcon, IonList, } from '@ionic/react';

import './tab4Account.css';
import React, { useState } from 'react';
import { exit, notifications, planet } from 'ionicons/icons';
import { Profile } from '../components/TaskProfile';

const Tab4: React.FC = () => {

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  }

  const [text, setText] = useState<string>();

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
          <Profile props={undefined}></Profile>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
