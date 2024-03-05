import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TrackGame from '../components/TrackGame';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Track Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Track Game</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TrackGame name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
