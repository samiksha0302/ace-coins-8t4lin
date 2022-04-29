import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonLabel, IonButton, IonIcon, IonButtons,IonRow, IonCol, 
    IonGrid, IonItem, IonInput, IonRouterLink, IonToast} from '@ionic/react';
  
import React from 'react';
import { person } from "ionicons/icons";
import { RouteComponentProps } from 'react-router';
import { planet, notifications} from 'ionicons/icons';
import { CONFIG } from '../constants';
import './pageSignup.css';

type Props = { props:any };
type State = {email: string, pass1: string, pass2: string, firstname: string, lastname:string,
    number:string,address: string, city:string,pincode:string, toastState: boolean, toastMessage: string};

class PageSignup extends React.Component <Props & RouteComponentProps<any>, State> {

    constructor(props: any) {

        super(props);
        
        this.state = {
            email: '',
            pass1: '',
            pass2: '',
            firstname: '',
            lastname: '',
            number: '',
            address: '',
            city: '',
            pincode: '',
            toastState: false,
            toastMessage: 'Message'
        };      

        this.event = new CustomEvent('loggedIn', {detail: false});     
    }

    event: Event;
    
    
    updateEmail = (event: any) => {
        this.setState({ email: event.detail.value });
    };

    updatePassword1 = (event: any) => {
        this.setState({ pass1: event.detail.value });
    };

    updatePassword2 = (event: any) => {
        this.setState({ pass2: event.detail.value });
    };

    updateFirstName = (event: any) => {
        this.setState({ firstname: event.detail.value });
    };

    updateLastName = (event: any) => {
        this.setState({ lastname: event.detail.value });
    };

    updateNumber = (event: any) => {
        this.setState({ number: event.detail.value });
    };

    updateAddress = (event: any) => {
        this.setState({ address: event.detail.value });
    };

    updateCity = (event: any) => {
        this.setState({ city: event.detail.value });
    };

    updatePincode = (event: any) => {
        this.setState({ pincode: event.detail.value });
    };
    
    componentDidMount(){
        this.clearCredentials();
        this.props.history.listen((location, action) => {
        if(location.pathname === "/pageLogin"){
          this.clearCredentials();}
        })
    }

    clearCredentials(){
        this.event = new CustomEvent('loggedIn', {
          detail: false
        });
        window.dispatchEvent(this.event);         
        localStorage.removeItem("status");
        localStorage.removeItem("isLoggedIn");
    }

    
    register = () => {
        
        let url , credentials;     
        
        url = CONFIG.API_ENDPOINT + '/user/add';
        
        credentials = {
            "email": this.state.email,
            "newpsw1": this.state.pass1,
            "newpsw2": this.state.pass2,
            "first": this.state.firstname,
            "last": this.state.lastname,
            "number": this.state.number,
            "address": this.state.address,
            "city": this.state.city,
            "pincode": this.state.pincode
        }
          
        fetch(url, {

        method: 'POST',
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(credentials)})
        
        .then((res) => {
            
            if(res.status === 200){
                return res.json();
            } else { 
                throw new Error("Error creating user");              
            }
        })

        .then((result) => {
                
            localStorage.setItem("status",result.status); 
            localStorage.setItem("isLoggedIn", "true");
            
            this.event = new CustomEvent('loggedIn', {detail: true,});
        
            window.dispatchEvent(this.event);
            this.props.history.replace('/');
        },

        (error) => {
            console.error(error);           
            this.setState({toastMessage: error.toString(), toastState: true});
        })
    }

    render(){

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
                                    <IonInput onIonChange={this.updatePassword1} type="password" placeholder="Password"></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Confirm Password</IonLabel>
                                    <IonInput onIonChange={this.updatePassword2} type="password" placeholder="Confirm Password"></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">First Name</IonLabel>
                                    <IonInput onIonChange={this.updateFirstName} type="text" placeholder="First Name"></IonInput>
                                </IonItem>
                                
                                <IonItem>
                                    <IonLabel position="floating">Last Name</IonLabel>
                                    <IonInput onIonChange={this.updateLastName} type="text" placeholder="Last Name"></IonInput>
                                </IonItem>
                                
                                <IonItem>
                                    <IonLabel position="floating">Number</IonLabel>
                                    <IonInput onIonChange={this.updateNumber} type="text" placeholder="Number"></IonInput>
                                </IonItem>
                                
                                <IonItem>
                                    <IonLabel position="floating">Address</IonLabel>
                                    <IonInput onIonChange={this.updateAddress} type="text" placeholder="Address"></IonInput>
                                </IonItem>
                                
                                <IonItem>
                                    <IonLabel position="floating">City</IonLabel>
                                    <IonInput onIonChange={this.updateCity} type="text" placeholder="City"></IonInput>
                                </IonItem>
                                
                                <IonItem>
                                    <IonLabel position="floating">Pincode</IonLabel>
                                    <IonInput onIonChange={this.updatePincode} type="text" placeholder="Pincode"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow className='ion-padding'>
                            <IonCol>
                                    <IonButton expand="block" onClick={this.register}>Signup</IonButton>

                                    <IonRouterLink routerLink='./pageLogin'>
                                        <IonButton expand="block">Login</IonButton>
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

export default PageSignup;