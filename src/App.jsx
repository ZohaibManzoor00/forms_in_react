import { useState } from "react";
import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
import HookedForm from "./components/HookedForm";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const controlledFormData = { name, setName, password, setPassword };


  return (
    <div className="">
      {/* <UncontrolledForm />
      <ControlledForm formData={controlledFormData} /> */}
      <HookedForm />
    </div>
  );
}

export default App;
