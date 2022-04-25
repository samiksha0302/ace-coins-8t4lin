import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonLabel, IonButton, IonIcon, IonButtons ,
    IonRow, IonCol, IonGrid, IonItem, 
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonList , IonBackButton, IonListHeader, IonAvatar,IonInput,
    IonRouterLink,
    IonToast
  } from '@ionic/react';

import './pageLogin.css';
import { RouteComponentProps } from 'react-router';
import React from 'react';

import { arrowBack, shapesOutline } from "ionicons/icons";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { home , receipt , wallet , planet, notifications, trendingUp, trendingDown, person  } from 'ionicons/icons';
import PageSignup from './pageSignup';
import { CONFIG } from '../constnats';

type Props = { props:any };
type State = { email: string, password: string, toastState: boolean, toastMessage: string};

class PageLogin extends React.Component <Props & RouteComponentProps<any>, State> {

    constructor(props: any) {
  
        super(props);

        this.state = {
            email: '',
            password: '',
            toastState: false,
            toastMessage: 'Message'
        };           

        this.event = new CustomEvent('loggedIn', {detail: false});     
    }

    event: Event;

    //Code to Update the Input Components with the values.
    updatePassword = (event: any) => {
        this.setState({ password: event.detail.value });
    };
    
    updateEmail = (event: any) => {
        this.setState({ email: event.detail.value });
    };

    //Code for Clearing Data Before Login
    componentDidMount(){
        this.clearCredentials();
        this.props.history.listen((location, action) => {
        if(location.pathname === "/login"){
          this.clearCredentials();}
        })
    }

    clearCredentials(){
        this.event = new CustomEvent('loggedIn', {
          detail: false
        });
        window.dispatchEvent(this.event);   
        localStorage.removeItem("token");       
        localStorage.removeItem("username");
        localStorage.removeItem("isLogin");
        localStorage.removeItem("email");
    }

    //Code for Login Check
    
    login= () => {
        
        let url , credentials;     
        
        url = CONFIG.API_ENDPOINT + '/users/login';
        
        credentials = {
            "user": {
            "email": this.state.email,
            "password": this.state.password}
        }
          
        fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(credentials)})
                
                .then((res) => {
                    
                    if(res.status === 200){
                        return res.json();
                    } else { 
                        throw new Error("Error Logging in");              
                    }
                })

                .then((result) => {
                     
                    localStorage.setItem("token",result.user.token);       
                    localStorage.setItem("username", result.user.username);
                    localStorage.setItem("isLogin", "true");
                    localStorage.setItem("email", result.user.email);
                 
                    this.event = new CustomEvent('loggedIn', {detail: true,});
                
                    window.dispatchEvent(this.event);
                    this.props.history.replace('/');
                },
        
                (error) => {
                    console.error(error);           
                    this.setState({toastMessage: error.toString(), toastState: true});
                })
    }

    render() {

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
                        <IonIcon style={{ fontSize: "50px", color: "#0040ff" }} icon={person}/>
                    </IonCol>
                </IonRow>

                <IonRow className='ion-padding'>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating"> Email</IonLabel>
                            <IonInput  onIonChange={this.updateEmail} type="email" placeholder="Email"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Password</IonLabel>
                            <IonInput onIonChange={this.updatePassword} type="password" placeholder="Password"></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow className='ion-padding'>
                    <IonCol>
                        <IonItem>
                            <IonButton expand="block" onClick={this.login}>Login</IonButton> 
                        </IonItem>
                    </IonCol>
                    
                    <IonCol>
                        <IonRouterLink routerLink='./pageSignup'>
                            <IonCol size="11">
                                <IonButton expand="block">Signup</IonButton> 
                            </IonCol>
						</IonRouterLink>
                    </IonCol>
                </IonRow>

                <IonToast isOpen={this.state.toastState}
                    onDidDismiss={() => this.setState(() => ({ toastState: false }))}
                    message= {this.state.toastMessage}
                    duration={400}/>

            </IonContent>
		</IonPage>
	);

}
};

export default PageLogin;