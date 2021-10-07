import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Registration from './Registration';

describe('<Registration />', () => {
  test('it should mount', () => {
    render(<Registration />);
    
    const registration = screen.getByTestId('Registration');

    expect(registration).toBeInTheDocument();
  });
});