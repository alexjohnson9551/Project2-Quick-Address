import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CurrentLocation from './CurrentLocation';

describe('<CurrentLocation />', () => {
  test('it should mount', () => {
    render(<CurrentLocation />);
    
    const currentLocation = screen.getByTestId('CurrentLocation');

    expect(currentLocation).toBeInTheDocument();
  });
});