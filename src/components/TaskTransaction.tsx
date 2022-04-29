import React from 'react';

import { IonItem, IonIcon, IonLabel, IonAvatar } from '@ionic/react';
import { trendingUp } from 'ionicons/icons';
import { CONFIG } from '../constants';

type Props = { props: any };
type State = { trans: Array<string>};

class Transaction extends React.Component<Props, State> {
  
  constructor(props: any) {super(props);this.state = {trans: []};}
    
  componentDidMount() {

    fetch(CONFIG.API_ENDPOINT + '/get_chain', {
        method: 'GET',
        headers: {"Content-Type": "application/json",}})

    .then(res => res.json())

    .then((res) => {this.setState({trans: res.chain});}, (err) => {console.error(err)});
  }
     
  render() {
    return (
    <>
        {this.state.trans.map((tag: any, index: number) => 
            <IonItem key={index}>
                <IonAvatar slot="start">
                    <IonIcon icon={trendingUp}  size="large" color="success"/>
                </IonAvatar>
            
                <IonLabel>
                    <h2>
                        <IonLabel color="success">{tag.previous_hash}</IonLabel>
                    </h2>

                    <p>{new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit"})
                    .format(tag.timestamp.DateTimeFormat)}</p>

                </IonLabel>
            </IonItem>)}
    </>
    );       
  }
};  

export {Transaction};