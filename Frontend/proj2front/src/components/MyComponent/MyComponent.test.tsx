import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  test('it should mount', () => {
    render(<MyComponent />);
    
    const myComponent = screen.getByTestId('MyComponent');

    expect(myComponent).toBeInTheDocument();
  });
});