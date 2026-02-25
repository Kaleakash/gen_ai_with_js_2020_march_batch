import { describe } from "vitest";

import { render, screen } from "@testing-library/react";
import Login from "./Login";



describe("Login Component testing ",()=> {

    test("should render Login page ", () => {
        render(<Login />);  // load the Login Component 
        // using screen to find the element with text "Login page" and check if it is in the document
        const loginElement = screen.getByText(/Login page/i);        
        expect(loginElement).toBeInTheDocument();
    });

//     test.skip("should display error message when fields are empty", async () => {
//         render(<Login />);  // load the Login Component 
//         let buttonElement = screen.getByRole("button", { name: /Login/i }); // find the button element
//         await buttonElement.click(); // simulate a click on the button
//         const loginElement = screen.getByText(/Please fill in all fields/i);   // find the element with role "alert"
//        //console.log(loginElement);
//        expect(loginElement).toBeInTheDocument();
//     });

})
