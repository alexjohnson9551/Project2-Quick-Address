import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  test('it should mount', () => {
    render(<Navigation />);
    
    const navigation = screen.getByTestId('Navigation');

    expect(navigation).toBeInTheDocument();
  });
});