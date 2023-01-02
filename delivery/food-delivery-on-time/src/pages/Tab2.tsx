import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonThumbnail } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonCard class="card-center">
      <IonThumbnail>
        <img class="img" alt="Silhouette of mountains" src="../assets/icon/hand_delivery_concept_multicolors_cartoon_style_design_6828347.jpg" />
      </IonThumbnail>
      <IonCardHeader>
        <IonButton class="skip" fill="clear" href="/Tab3">skip</IonButton>
        <IonCardTitle class="title">Quick Delivery to your Door step</IonCardTitle>
      </IonCardHeader>
      <IonCardContent class="text">
        We have a dynamic and professional delivery team that is professionally and intelligently trained 
      </IonCardContent>
      <IonButton class="Next" expand="block" href="/Tab3">Next</IonButton>
    </IonCard>
  );
};

export default Tab2;
