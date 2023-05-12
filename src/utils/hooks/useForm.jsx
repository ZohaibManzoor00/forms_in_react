import { useState } from "react";

const useForm = (startingValues) => {
  const [form, setForm] = useState(startingValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setForm(startingValues);

  return {
    form,
    handleChange,
    resetForm,
  };
};

export default useForm;
