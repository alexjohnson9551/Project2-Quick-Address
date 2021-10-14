import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeTable from './HomeTable';

describe('<HomeTable />', () => {
  test('it should mount', () => {
    render(<HomeTable />);
    
    const homeTable = screen.getByTestId('HomeTable');

    expect(homeTable).toBeInTheDocument();
  });
});