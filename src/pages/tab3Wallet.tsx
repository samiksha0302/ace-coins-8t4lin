import { IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent,
IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {   IonAvatar, IonIcon} from '@ionic/react';
import { planet, notifications } from 'ionicons/icons';
import { IonButton} from '@ionic/react';
import { CoinBuy } from '../components/TaskCoinBuy';
import { CoinSell } from '../components/TaskCoinSell';
import './tab3Wallet.css';

const Tab3: React.FC = () => {
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
