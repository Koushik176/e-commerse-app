import React, { useState } from "react";
import classes from './ContactusPageContent.module.css';

const ContactusPageContent = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneNoChangeHandler = (event) => {
    setEnteredPhoneNo(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const customerData = {
      name: enteredName,
      email: enteredEmail,
      phoneNo: enteredPhoneNo,
    };
    const response = await fetch(
      "https://ecomerse-website-default-rtdb.firebaseio.com/customer.json",
      {
        method: "POST",
        body: JSON.stringify(customerData),
        headers: {
          Content_Type: "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhoneNo("");
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.formcontainer}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={enteredName}
        onChange={nameChangeHandler}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={enteredEmail}
        onChange={emailChangeHandler}
      />
      <label htmlFor="phoneNo">Phone Number</label>
      <input
        id="phoneNo"
        type="number"
        value={enteredPhoneNo}
        onChange={phoneNoChangeHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactusPageContent;
