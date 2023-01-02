import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonThumbnail } from '@ionic/react';
import './Tab1.css';

const Tab3: React.FC = () => {
  return (
    <IonCard class="card-center">
      <IonThumbnail>
        <img class="img" alt="Silhouette of mountains" src="../assets/icon/safe-food-delivery.png" />
      </IonThumbnail>
      <IonCardHeader>
        <IonButton class="skip" fill="clear" href="/Tab4">skip</IonButton>
        <IonCardTitle class="title">Enjoy low on all orders</IonCardTitle>
      </IonCardHeader>
      <IonCardContent class="content">
        Enjoy flexible payment options 
      </IonCardContent>
      <IonButton class="button" expand="block" href="/screens/Home">Get started</IonButton>
    </IonCard>
  );
};

export default Tab3;
