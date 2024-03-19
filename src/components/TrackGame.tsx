import React, {useState} from "react";
import {IonButton, IonInput, IonItem, IonLabel, IonList} from "@ionic/react";


const TrackGame: React.FC = () => {
    const [playerName, setPlayerName] = useState('');
    const [playerList, setPlayerList] = useState<Array<string>>([""]);
    
  return (
    <div className="container">
      <strong>Track Game</strong>
        <IonInput 
            data-testid="player-name"
            label="Player name" 
            placeholder="Enter player name" 
            onIonChange={(e) =>
              setPlayerName(e.detail.value ?? '')}
            value={playerName}>
        </IonInput>
        <IonButton
          data-testid="submit-button"
          onClick={() => {
            setPlayerList([...playerList, playerName])
            setPlayerName('');
            
        }}>submit</IonButton>
        <IonList
          data-testid="player-list">
            {playerList.map((player, index) => {
                return (
                    <IonItem key={index}>
                        <IonLabel>{player}</IonLabel>
                    </IonItem>
                )
            })}
        </IonList>
    </div>
  );
};

export default TrackGame;
