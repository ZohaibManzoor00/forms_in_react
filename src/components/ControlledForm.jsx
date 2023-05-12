export default function ControlledForm({ formData }) {
  const { name, setName, password, setPassword } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="">
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
