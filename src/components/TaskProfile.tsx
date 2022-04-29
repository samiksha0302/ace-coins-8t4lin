import { IonLabel, IonButton,
    IonRow, IonCol, IonItem, IonInput,
    IonToast, IonGrid, IonAvatar, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonText } from '@ionic/react';
import { chatboxEllipsesOutline, informationSharp, trendingUp } from 'ionicons/icons';

import React from 'react';
import { CONFIG } from '../constants';

type Props = { props: any };
type State = { email: string, firstname: string, lastname:string,
    number:string,address: string, city:string,pincode:string, toastState: boolean, toastMessage: string };

class Profile extends React.Component<Props, State> {

    constructor(props: any) {
  
        super(props);

        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            number: '',
            address: '',
            city: '',
            pincode: '',
            toastState: false,
            toastMessage: 'Message',
        };               
    }

    componentDidMount() {

        let url , credentials;     
        
        url = CONFIG.API_ENDPOINT + '/user/info';

        credentials = {
            'id': localStorage.getItem("id"),
        }

        fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials)
        })
    
        .then(res => res.json())
    
        .then((res) => {
            this.setState({
                email: 'demo',
                firstname: res.first_name,
                lastname: res.last_name,
                address: res.address,
                city: res.city,
                pincode: res.pincode
            });
        },

        (error) => {
            console.error(error);           
            this.setState({toastMessage: error.toString(), toastState: true});
        })
    }

    render() {

        return (
            <>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <IonCard>
                                <IonCardHeader>
                                    <IonRow>
                                        <IonIcon icon={ chatboxEllipsesOutline } />
                                        <IonCardSubtitle>First Name</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>
                                        <p>{this.state.firstname.charAt(0).toUpperCase() + this.state.firstname.slice(1).toLowerCase()}</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonCard>
                                <IonCardHeader>
                                    <IonRow>
                                        <IonIcon icon={ chatboxEllipsesOutline } />
                                        <IonCardSubtitle>Last Name</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>
                                        <p>{this.state.lastname.charAt(0).toUpperCase() + this.state.lastname.slice(1).toLowerCase()}</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    
                    <IonRow>
                        <IonCol size="12">
                            <IonCard>
                                <IonCardHeader>
                                    <IonRow>
                                        <IonIcon icon={ chatboxEllipsesOutline } />
                                        <IonCardSubtitle>Address</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>
                                        <p>{this.state.address.charAt(0).toUpperCase() + this.state.address.slice(1).toLowerCase()}</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    
                    <IonRow>
                        <IonCol size="12">
                            <IonCard>
                                <IonCardHeader>
                                    <IonRow>
                                        <IonIcon icon={ chatboxEllipsesOutline } />
                                        <IonCardSubtitle>City</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>
                                        <p>{this.state.city.charAt(0).toUpperCase() + this.state.city.slice(1).toLowerCase()}</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    
                    <IonRow>
                        <IonCol size="12">
                            <IonCard>
                                <IonCardHeader>
                                    <IonRow>
                                        <IonIcon icon={ chatboxEllipsesOutline } />
                                        <IonCardSubtitle>Pincode</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>
                                        <p>{this.state.pincode}</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonToast isOpen={this.state.toastState}
                    onDidDismiss={() => this.setState(() => ({ toastState: false }))}
                    message= {this.state.toastMessage}
                    duration={400}/>
                </>
        );
    }
};

export {Profile};