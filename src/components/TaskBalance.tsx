import { IonCardTitle } from "@ionic/react";
import React from "react";
import { CONFIG } from "../constants";

type Props = { props: any };
type State = { balance: string, toastState: boolean, toastMessage: string };

class Balance extends React.Component<Props, State> {

    constructor(props: any) {
  
        super(props);

        this.state = {
            balance: '',
            toastState: false,
            toastMessage: 'Message',
        };               
    }
      
    componentDidMount() {
  
      fetch(CONFIG.API_ENDPOINT + '/account/balance', {
          method: 'GET',
          headers: {"Content-Type": "application/json",}})
  
      .then(res => res.json())
  
      .then((res) => {this.setState({balance: res.amount});}, (err) => {console.error(err)});
    }
       
    render() {
      return (<><IonCardTitle>Wallet Balance: {this.state.balance}</IonCardTitle></>);       
    }
  };  
  
  export {Balance};