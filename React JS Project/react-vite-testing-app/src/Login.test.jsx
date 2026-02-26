import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import Login from "./Login";

import { expect } from "vitest"
import userEvent from "@testing-library/user-event";

describe("Login Component", () => {


    test("simple test ",() => {
        expect(1 + 2).toBe(3);
    })


        test("should render the login form with Heading as 'Login page'", () => {
            // Render the Login component
            // Assert that the form elements are present
            render(<Login />);
            const loginElement = screen.getByText(/Login page/i);
            expect(loginElement).toBeInTheDocument();
        })


    test("should show error message when fields are empty", async() => {
        render(<Login />);
        const loginButton = screen.getByRole("button", { name: /Login/i });
        await loginButton.click();
        const errorMessage = screen.getByText(/Please fill in all fields/i);
        expect(errorMessage).toBeInTheDocument();
    })


    test("InValid email Id or password ", async() => {
        render(<Login />);
        // reference of email and password input field
        const emailInput = screen.getByPlaceholderText(/email/i);
        const passwordInput = screen.getByPlaceholderText(/password/i);

        // Simulate user typing invalid email and password
        await userEvent.type(emailInput, "wrong@example.com");
        await userEvent.type(passwordInput, "wrongpassword");        

        const loginButton = screen.getByRole("button", { name: /Login/i });
        await loginButton.click();

        const errorMessage = screen.getByText(/Invalid email or password/i);
        expect(errorMessage).toBeInTheDocument();
    })

    test("should show success message when credentials are correct", async() => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText(/email/i);
        const passwordInput = screen.getByPlaceholderText(/password/i);

        await userEvent.type(emailInput, "user@example.com");
        await userEvent.type(passwordInput, "password123");        

        const loginButton = screen.getByRole("button", { name: /Login/i });
        await loginButton.click();

        const successMessage = screen.getByText(/Login successful/i);
        expect(successMessage).toBeInTheDocument();
    })
})