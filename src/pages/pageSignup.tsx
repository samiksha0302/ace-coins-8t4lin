import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonLabel, IonButton, IonIcon, IonButtons ,
    IonRow, IonCol, IonGrid, IonItem, 
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList , IonBackButton, IonListHeader, IonAvatar,
    IonInput, IonRouterLink
  } from '@ionic/react';
  
import './pageSignup.css';

import { arrowBack, shapesOutline } from "ionicons/icons";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { home , receipt , wallet , planet, notifications, trendingUp, trendingDown  } from 'ionicons/icons';

const PageSignup = () => {

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
                        
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            
            <IonContent>
                <IonRow className='ion-padding'>
                    <IonCol className='ion-text-center ion-padding'>
                        <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        />
                    </IonCol>
                </IonRow>

                <IonRow className='ion-text-center ion-padding'>
                    <IonCol>
                    <IonItem>
                            <IonLabel position="floating"> First Name</IonLabel>
                            <IonInput  type="text"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Last Name</IonLabel>
                            <IonInput  type="text"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Phone Number</IonLabel>
                            <IonInput  type="text"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Email</IonLabel>
                            <IonInput  type="email"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Password</IonLabel>
                            <IonInput  type="password"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Confirm Password</IonLabel>
                            <IonInput  type="password"></IonInput>
                        </IonItem>
                        
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonRouterLink routerLink='./pageSignup'>
                            <IonCol size="11">
                                <IonButton expand="block">Signup</IonButton> 
                            </IonCol>
						</IonRouterLink>

                </IonRow>
                </IonContent>
		</IonPage>
	);
};

export default PageSignup;