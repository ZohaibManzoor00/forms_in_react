import { useState } from "react";

export default function UncontrolledForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") return;
    console.log("SUBMITTED", { name, password });
    setName("");
    setPassword("");
  };

  return (
    <div className="flex w-full justify-center border p-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="mr-3">
            Name
          </label>
          <input
            id="name"
            className="rounded-md"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="mr-3">
            Password
          </label>
          <input
            id="password"
            className="rounded-md"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button className="border p-1" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
