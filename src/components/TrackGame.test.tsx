import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import TrackGame from "./TrackGame";
import {InputChangeEventDetail, IonApp} from "@ionic/react";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('Track Game', () => {
  test('renders', () => {
    render(<TrackGame />);
    screen.getByText('Track Game')
  });
  
  test('renders a input text field with a button', async () => {
    render(<IonApp><TrackGame /></IonApp>);
    const user = userEvent.setup();
    
    const inputElement = screen.getByText("player name",{exact: false})
    const input = screen.getByTestId('player-name')
    input.focus();
    await user.type(input, 'John Doe');
    input.blur();
    
    await waitFor(() => {
      expect(input).toHaveValue('John Doe')
    })
  });
})


