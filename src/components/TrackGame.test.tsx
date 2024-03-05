import React from 'react';
import { render, screen } from '@testing-library/react';
import TrackGame from "./TrackGame";

describe('Track Game', () => {
  test('renders', () => {
    render(<TrackGame />);
    screen.getByText('Track Game')
  });
})


