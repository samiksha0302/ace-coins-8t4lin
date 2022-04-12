import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonAvatar, IonIcon
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './tab2Transaction.css';

import React from 'react';
import { IonButton, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';

import { home , receipt , wallet , planet, notifications, trendingUp, trendingDown  } from 'ionicons/icons';
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transaction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
                      <IonItem>
                        <IonAvatar slot="start">
                          <IonIcon icon={trendingUp}  size="large" color="success"/>
                        </IonAvatar>
                        <IonLabel>
                          <h2>5 Coins Bought</h2>
                          <p>23/02/12</p>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonAvatar slot="start">
                          <IonIcon icon={trendingDown}  size="large" color="danger"/>
                        </IonAvatar>
                        <IonLabel>
                          <h2>2 Coins Sold</h2>
                          <p>4s ago</p>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonAvatar slot="start">
                          <IonIcon icon={trendingDown}  size="large" color="danger"/>
                        </IonAvatar>
                        <IonLabel>
                          <h2>2 Coins Sold</h2>
                          <p>6s ago</p>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonAvatar slot="start">
                          <IonIcon icon={trendingUp}  size="large" color="success"/>
                        </IonAvatar>
                        <IonLabel>
                          <h2>6 Coins Bought</h2>
                          <p>10s ago</p>
                        </IonLabel>
                      </IonItem>
                    </IonList>
                  
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
