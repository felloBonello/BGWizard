import React from 'react';
import {render, screen, fireEvent, waitFor, within} from '@testing-library/react';
import TrackGame from "./TrackGame";
import {IonApp} from "@ionic/react";
import {getIonChangeEvent} from "../helpers/test/events";

describe('Track Game', () => {
  it('renders', () => {
    render(<TrackGame />);
    screen.getByText('Track Game')
  });
  
  it('adds a new player to the list', async () => {
    render(<IonApp><TrackGame /></IonApp>);

    const playerName = 'John Doe'

    const input = screen.getByTestId('player-name')
    fireEvent(input, getIonChangeEvent(playerName));

    expect(input).toHaveValue(playerName)

    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)

    const playerList = screen.getByTestId('player-list')
    within(playerList).getByText(playerName)
  });
})


