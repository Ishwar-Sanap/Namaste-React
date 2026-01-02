const { render, screen } = require("@testing-library/react")
import "@testing-library/jest-dom"
import Footer from "../components/Footer"

test('footer should be loaded', () => { 
    
    render(<Footer/>)

    //Quering..
    const heading = screen.getByRole("heading")

    //If we want to get all the heading we can use screen.getAllByRole("heading") and it will return an array..

    // console.log(heading)  // It will print the Fiber node from the react virtual dom.
    //Assesrtation

    expect(heading).toBeInTheDocument(); // toBeInTheDocument() will check wheter the heading found or not
 })