import { IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent,
IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {   IonAvatar, IonIcon} from '@ionic/react';
import { planet, notifications, exit } from 'ionicons/icons';
import { IonButton} from '@ionic/react';
import { CoinBuy } from '../components/TaskCoinBuy';
import { CoinSell } from '../components/TaskCoinSell';
import './tab3Wallet.css';

const Tab3: React.FC = () => {

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
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Wallet Balance: 50</IonCardTitle>
            </IonCardHeader>
          </IonCard>             
        <CoinBuy props={undefined}></CoinBuy>
        <CoinSell props={undefined}></CoinSell>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
