import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonLabel, IonButton, IonIcon, IonButtons ,
    IonRow, IonCol, IonGrid, IonItem, 
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList , IonBackButton, IonListHeader, IonAvatar
  
  } from '@ionic/react';
  
import './pageVerification.css';

import { arrowBack, shapesOutline } from "ionicons/icons";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { home , receipt , wallet , planet, notifications, trendingUp, trendingDown  } from 'ionicons/icons';

const PageVerification = () => {

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

                Verification

            </IonContent>
		</IonPage>
	);
};

export default PageVerification;