import { IonLabel, IonButton,
    IonRow, IonCol, IonItem, IonInput,
    IonToast, IonGrid } from '@ionic/react';

import React from 'react';
import { CONFIG } from '../constants';

type Props = { props: any };
type State = { sender: string, receiver: string,amount: any, toastState: boolean, toastMessage: string };

class CoinSell extends React.Component<Props, State> {

    constructor(props: any) {
  
        super(props);

        this.state = {
            sender: '',
            receiver: '',
            amount: 0,
            toastState: false,
            toastMessage: 'Message'
        };               
    }

    //Code to Update the Input Components with the values.
    updateAmount = (event: any) => {
        this.setState({ amount: event.detail.value });
    };

    //Code for Login Check
    
    sell = () => {
        
        let url , credentials;     
        
        url = CONFIG.API_ENDPOINT + '/add_transaction';
        
        credentials = {
              "sender": this.state.amount,
              "receiver": 'Ace Coins' ,
              "amount": this.state.amount
          }

        fetch(url, {

        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
        })

        .then((res) => {
            
            if(res.status === 201){
                {this.mineBlock()}
                return res.json();
            } else { 
                throw new Error("Error in Buying");              
            }
        })

        .then((result) => {
            localStorage.setItem("status","201");
            localStorage.setItem("message",result.message);
            this.setState({toastMessage: this.state.amount+' Coins Sold', toastState: true});   
        },

        (error) => {
            console.error(error);           
            this.setState({toastMessage: error.toString(), toastState: true});
        })
    }

    mineBlock = () => {
        
        fetch(CONFIG.API_ENDPOINT + '/mine_block', {
            method: 'GET',
            headers: {"Content-Type": "application/json",}})
    
        .then(res => res.json())
    
        .then((res) => {this.setState({toastMessage: res.message, toastState: true});}, (err) => {console.error(err)});
    }

    render() {

        return (
            <>
                <IonGrid className="ion-justify-content-center ion-align-items-center ion-align-self-center">

                    <IonRow className='ion-padding'>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Amount</IonLabel>
                                <IonInput  onIonChange={this.updateAmount} type="number" placeholder="Enter Coins to Sell"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow className='ion-padding'>
                        <IonCol>
                                <IonButton expand="block" onClick={this.sell}>Sell</IonButton>
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

export {CoinSell};