import React from "react";
import useForm from "../hooks/useForm";

const FormWithHooks = () => {
  const [formValues, handleInputChange, handleSubmit] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  return (
    <form className="m-5" onSubmit={handleSubmit}>
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
      <input
        type="password"
        name="password"
        placeholder="password"
        className="form-control m-4 w-50"
        value={password}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn btn-primary m-4">
        Enviar
      </button>
    </form>
  );
};

export default FormWithHooks;
