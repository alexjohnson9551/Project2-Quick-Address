import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controller from './Controller';

describe('<Controller />', () => {
  test('it should mount', () => {
    render(<Controller />);
    
    const controller = screen.getByTestId('Controller');

    expect(controller).toBeInTheDocument();
  });
});