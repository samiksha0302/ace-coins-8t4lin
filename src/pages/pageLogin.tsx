import { IonContent, IonHeader, IonPage, IonTitle, 
    IonToolbar, IonLabel, IonButton, IonIcon, IonButtons ,
    IonRow, IonCol, IonItem, IonInput, IonRouterLink, 
    IonToast, IonGrid } from '@ionic/react';

import React from 'react';
import { planet, notifications, person  } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { CONFIG } from '../constants';
import './pageLogin.css';

type Props = { props: any };
type State = { email: string, password: string, toastState: boolean, toastMessage: string };

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
        
        localStorage.setItem("isLoggedIn", "false");
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
    }

    clearCredentials(){
        this.event = new CustomEvent('loggedIn', {detail: false});
        window.dispatchEvent(this.event);

        localStorage.removeItem("id");       
        localStorage.removeItem("status");
        localStorage.removeItem("message");
    }

    //Code for Login Check
    
    login = () => {
        
        let url , credentials;     
        
        url = CONFIG.API_ENDPOINT + '/login';

        credentials = {
              "email": this.state.email,
              "passwd": this.state.password
        }

        fetch(url, {

        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)})
        
        .then((res) => {
            
            if(res.status === 200){
                return res.json();
            } else { 
                throw new Error("Error Logging in");             
            }
        })

        .then((result) => {
                
            localStorage.setItem("status",result.status);
            localStorage.setItem("message",result.message);
            localStorage.setItem("id",result.id);        
            localStorage.setItem("isLoggedIn", "true");
            
            this.event = new CustomEvent('loggedIn', {detail: true});
        
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

                    <IonGrid className="ion-justify-content-center ion-align-items-center ion-align-self-center">
                        
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
                                    <IonButton expand="block" onClick={this.login}>Login</IonButton>

                                    <IonRouterLink routerLink='./pageSignup'>
                                        <IonButton expand="block">Signup</IonButton>
                                    </IonRouterLink>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

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