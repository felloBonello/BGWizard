import React from 'react';
import {render, screen, fireEvent, waitFor, within} from '@testing-library/react';
import TrackGame from "./TrackGame";
import {IonApp} from "@ionic/react";
import { setupIonicReact } from '@ionic/react';

describe('Track Game', () => {
  test('renders', () => {
    render(<TrackGame />);
    screen.getByText('Track Game')
  });
  
  test('renders a input text field with a button', async () => {
    render(<IonApp><TrackGame /></IonApp>);

    const playerName = 'John Doe'

    const input = screen.getByTestId('player-name')
    fireEvent(input, new CustomEvent('ionChange', { detail: { value: playerName } }));

    expect(input).toHaveValue(playerName)

    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)

    const playerList = screen.getByTestId('player-list')
    within(playerList).getByText(playerName)
  });
})


