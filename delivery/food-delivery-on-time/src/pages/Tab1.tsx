import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonThumbnail } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonCard class="card-center">
      <IonThumbnail>
        <img class="img" alt="Silhouette of mountains" src="../assets/icon/fast_food_311861.jpg" />
      </IonThumbnail>
      <IonCardHeader>
        <IonButton class="skip" fill="clear" href="/Tab2">skip</IonButton>
        <IonCardTitle class="title">Food Delivery on-Time</IonCardTitle>
        <IonCardSubtitle class="sub-title">Shop from your Favorite Resturants</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent class="card">
        A diverse list from different resturants in the Region and around your area carefully selected..
      </IonCardContent>
      <IonButton expand="block" class="button" href="/Tab2">Next</IonButton>
    </IonCard>
  );
};

export default Tab1;
