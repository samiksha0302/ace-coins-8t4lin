import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonLabel, IonButton, IonIcon, IonButtons ,
    IonRow, IonCol, IonGrid, IonItem, 
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList , IonBackButton, IonListHeader, IonAvatar,IonInput,
    IonRouterLink
  
  } from '@ionic/react';
  
import './pageLogin.css';

import { arrowBack, shapesOutline } from "ionicons/icons";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { home , receipt , wallet , planet, notifications, trendingUp, trendingDown, person  } from 'ionicons/icons';
import PageSignup from './pageSignup';
import { monitorEventLoopDelay } from 'perf_hooks';

const PageLogin = () => {

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

                <IonRow className='ion-padding'>
                    <IonCol className='ion-text-center ion-padding'>
                        <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={person}
                        />
                    </IonCol>
                </IonRow>

                <IonRow className='ion-padding'>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating"> Email</IonLabel>
                            <IonInput  type="email"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Password</IonLabel>
                            <IonInput  type="password"></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow className='ion-padding'>
                    <IonCol>
                            <IonRouterLink routerLink='./'>
                                <IonCol size="11">
                                    <IonButton expand="block">Login</IonButton> 
                                </IonCol>
                            </IonRouterLink>
                    </IonCol>
                    
                    <IonCol>
                        <IonRouterLink routerLink='./pageSignup'>
                            <IonCol size="11">
                                <IonButton expand="block">Signup</IonButton> 
                            </IonCol>
						</IonRouterLink>
                    </IonCol>
                </IonRow>

            </IonContent>
		</IonPage>
	);
};

export default PageLogin;