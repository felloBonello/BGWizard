import React, { useState } from "react";
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ItemReorderEventDetail,
} from "@ionic/react";

const TrackGame: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerList, setPlayerList] = useState<Array<string>>([]);

  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    setPlayerList(event.detail.complete(playerList));
  }

  return (
    <div className="container">
      <strong>Track Game</strong>
      <IonInput
        data-testid="player-name"
        label="Player name"
        placeholder="Enter player name"
        onIonChange={(e) => setPlayerName(e.detail.value ?? "")}
        value={playerName}
      ></IonInput>
      <IonButton
        data-testid="submit-button"
        onClick={() => {
          setPlayerList([...playerList, playerName]);
          setPlayerName("");
        }}
      >
        submit
      </IonButton>
      <IonList data-testid="player-list">
        <IonReorderGroup
          disabled={false}
          data-testid="reorder-button"
          onIonItemReorder={handleReorder}
        >
          {playerList.map((player, index) => {
            return (
              <IonReorder>
                <IonItem key={index}>
                  <IonLabel>{player}</IonLabel>
                  <IonReorder slot="end"></IonReorder>
                </IonItem>
              </IonReorder>
            );
          })}
        </IonReorderGroup>
      </IonList>
    </div>
  );
};

export default TrackGame;
