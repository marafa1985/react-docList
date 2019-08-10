import React from "react";
import ReactDOM from 'react-dom';
import Header from './Header'

describe("Header component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("it shows the expected user profile firstName and LastName when it passed", () => {
    ReactDOM.render(<Header profile={{firstName:"Micheal", lastName:"Mena"}}/>, container);
    const firstNameInput = container.querySelector('#firstName');
    const lastNameInput = container.querySelector('#lastName');
    expect(firstNameInput.innerHTML).toBe("Micheal");
    expect(lastNameInput.innerHTML).toBe("Mena");
  });

});