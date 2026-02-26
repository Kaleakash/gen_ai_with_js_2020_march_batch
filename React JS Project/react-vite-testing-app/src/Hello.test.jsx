import { describe } from "vitest";
import Hello from "./Hello";
import { render, screen } from "@testing-library/react";



describe("Hello Component testing ",()=> {

    test("should render Hello World with Vite! ", () => {
        render(<Hello />);  // load the Hello Component 
        // using screen to find the element with text "Hello World with Vite!" and check if it is in the document
        const helloElement = screen.getByText(/Hello World with Vite!/i);
        
        expect(helloElement).toBeInTheDocument();
    });
    
})

