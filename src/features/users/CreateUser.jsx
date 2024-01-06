import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 ">
      <p className="m-4 p-2 text-sm">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 placeholder:text-center"
      />
      <div className={` transition-all duration-500 ${username !== "" ? "" : "hidden"}`}>
        <Button>Start ordering</Button>
      </div>
    </form>
  );
}

export default CreateUser;
