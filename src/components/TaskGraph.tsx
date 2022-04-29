import { IonImg } from '@ionic/react';
import React from 'react';

type Props = { props: any };
type State = {ImgFinal:any};

class Graph extends React.Component<Props, State> {
  
  constructor(props: any) {super(props);this.state = {ImgFinal:''};}
    
  componentDidMount() {
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
            <>
            <IonImg src={this.state.ImgFinal}></IonImg>
            </>
    );       
  }
};  

export {Graph};