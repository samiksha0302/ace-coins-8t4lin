import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonItem, IonLabel, IonInput, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './tab4Account.css';
import React, { useState } from 'react';

import { home , receipt , wallet , planet, notifications, trendingUp, trendingDown  } from 'ionicons/icons';

const Tab4: React.FC = () => {

  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar> 
        
          <IonItem>
            <IonLabel position="fixed" className="acc_label">First Name</IonLabel>
            <IonInput value={text} className="acc_input" color="danger"> </IonInput>
          </IonItem>
          <IonItem className="acc_item">
            <IonLabel position="fixed" className="acc_label">Last Name</IonLabel>
            <IonInput value={text} className="acc_input"> </IonInput>
          </IonItem>
          <IonItem className="acc_item">
            <IonLabel position="fixed" className="acc_label">Accont No</IonLabel>
            <IonInput value={text} className="acc_input"> </IonInput>
          </IonItem>
          <IonItem className="acc_item">
            <IonLabel position="fixed" className="acc_label">Phone No</IonLabel>
            <IonInput value={text} className="acc_input"> </IonInput>
          </IonItem>
          <IonItem className="acc_item">
            <IonLabel position="fixed" className="acc_label">Email</IonLabel>
            <IonInput value={text} className="acc_input"> </IonInput>
          </IonItem>

          <IonButton expand="block" fill="solid" className="element_spacing">Update</IonButton>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
