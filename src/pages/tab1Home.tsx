import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonLabel, IonButton, IonIcon, IonButtons ,
  IonRow, IonCol, IonGrid, IonItem, 
  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList , IonBackButton, IonListHeader, IonAvatar

} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './tab1Home.css';

import { home , receipt , wallet , planet, notifications, trendingUp, trendingDown  } from 'ionicons/icons';

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

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>
                <IonItem>
                  <IonIcon icon={home} slot="start" />
                  <IonLabel>Recent Transactions</IonLabel>
                  <IonButton fill="outline" slot="end">View</IonButton>
                </IonItem>
                <IonCardContent>
                  This is content, without any paragraph or header tags,
                  within an ion-cardContent element.
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Recent Transaction</IonCardTitle>
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
                    <IonButton fill="solid" color="primary" slot="end" size="default">View all</IonButton>
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
