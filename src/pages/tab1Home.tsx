import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonLabel, IonButton, IonIcon, IonButtons ,
  IonRow, IonCol, IonGrid, IonItem, 
  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList , IonAvatar, IonRouterLink
} from '@ionic/react';

import { planet, notifications, trendingUp, trendingDown  } from 'ionicons/icons';
import { Graph } from '../components/TaskGraph';
import './tab1Home.css';

const Tab1: React.FC = () => {

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

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Transaction Graph</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList><Graph props={undefined}></Graph></IonList>
                  <IonItem>
                    <IonLabel slot="end">Updated Every 1 Min</IonLabel>
                  </IonItem>
                </IonCardContent>
                
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Transaction List</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonList>
                      <IonItem>
                        <IonAvatar slot="start">
                          <IonIcon icon={trendingUp}  size="large" color="success"/>
                        </IonAvatar>
                        <IonLabel>
                          <h2>5 Coins Bought</h2>
                          <p>2s ago</p>
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
                  </IonCardContent>
                  <IonItem>
                    <IonRouterLink routerLink='tab2Transaction'>
                      <IonButton expand="block">View All</IonButton>
                    </IonRouterLink>
                  </IonItem>
                </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
