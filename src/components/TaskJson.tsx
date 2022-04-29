import React from 'react';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonImg } from '@ionic/react';
import { CONFIG } from '../constants';

type Props = { props: any };
type State = { files: Array<string>,ImgFinal:any};

class TaskJson extends React.Component<Props, State> {
  
  constructor(props: any) {super(props);this.state = {files: [],ImgFinal:''};}
    
  componentDidMount() {

    fetch(CONFIG.API_ENDPOINT + '/is_valid', {
        method: 'GET',
        headers: {"Content-Type": "application/json",}})

    .then(res => res.json())

    .then((res) => {this.setState({files: res.message});}, (err) => {console.error(err)});

    //Code for Graph
    let min = 1;
    let max = 100;
    let rand1 =  min + (Math.random() * (max-min));
    let rand2 =  min + (Math.random() * (max-min));
    let rand3 =  min + (Math.random() * (max-min));
    let rand4 =  min + (Math.random() * (max-min));
    let rand5 =  min + (Math.random() * (max-min));
    let url1 = 'https://quickchart.io/chart/render/zm-9f5817bf-f10d-4055-9b4f-3d7b2db5d49c?';
    let url2 = url1 + 'data1='+rand1+','+rand2+','+rand3+','+rand4+','+rand5+''; 
    let ImgUrl = url2;
    this.setState({ImgFinal:ImgUrl});
  }
     
  render() {
    return (
            <><IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Random Quote</IonCardSubtitle>
          <IonCardTitle>{this.state.files}</IonCardTitle>
        </IonCardHeader>
      </IonCard><IonCard>
          <IonItem href="#" className="ion-activated">
            <IonImg src={this.state.ImgFinal}></IonImg>
          </IonItem>
        </IonCard></>
    );       
  }
};  

export {TaskJson};