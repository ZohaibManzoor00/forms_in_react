import React from "react";
import useForm from "../utils/hooks/useForm";

export default function HookedForm() {
  const {
    form: { name, password },
    resetForm,
    handleChange,
  } = useForm({ name: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" && password === "") return;
    console.log("SUBMITTED", { name, password });
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" value={name} onChange={handleChange} />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="text"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
