import React from 'react';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the custom matchers
import Greeting from './Greeting';


describe('Greeting component',()=>{
    test('renders Hello World as a text', () => {
        render(<Greeting />);
      
        // Act
        // Finding the element with text 'Hello World'
        const helloWorldElement = screen.getByText('Hello World');
        // Assert
        expect(helloWorldElement).toBeInTheDocument();
      });

      test('renders good to see you if the button was NOT clicked',()=>{
        render(<Greeting />);
      
        // Act
        // Finding the element with text 'Hello World'
        const outputElement = screen.getByText('good to see you',{exact:false});
        // Assert
        expect(outputElement).toBeInTheDocument();
      });

      test('render "Changed" if the button was clicked',()=>{
        render(<Greeting />);
      
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
        //Assert
        // Assert
        expect(buttonElement).toBeInTheDocument();
      });
})

