import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddressFromCode from './AddressFromCode';

describe('<AddressFromCode />', () => {
  test('it should mount', () => {
    render(<AddressFromCode />);
    
    const addressFromCode = screen.getByTestId('AddressFromCode');

    expect(addressFromCode).toBeInTheDocument();
  });
});