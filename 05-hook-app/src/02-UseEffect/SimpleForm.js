import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  useEffect(() => {
    console.log(`nombre cambio => ${name}`);
  }, [name]);
  useEffect(() => {
    console.log(`email cambio => ${email}`);
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState(() => ({
      ...formState,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="m-5">
      <h2>UseEffect</h2>
      <hr />
      <input
        type="text"
        name="name"
        className="form-control m-4 w-50"
        placeholder="Tu nombre"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        className="form-control m-4 w-50"
        placeholder="IDemail@gmail.com"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />

      {name === "123" && <Message />}
    </div>
  );
};

export default SimpleForm;
