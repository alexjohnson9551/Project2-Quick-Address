import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controller2 from './Controller2';

describe('<Controller2 />', () => {
  test('it should mount', () => {
    render(<Controller2 />);
    
    const controller2 = screen.getByTestId('Controller2');

    expect(controller2).toBeInTheDocument();
  });
});