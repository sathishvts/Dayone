import React, { useState } from "react";

function LoginFormModal() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !name) {
      setError("All fields are required!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email });
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    setEmail("");
    setName("");
    alert(`Welcome, ${name}!`);
  };


  

  return (
    <form onSubmit={handleRegister}>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label htmlFor="regName" className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="regName"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="regEmail" className="form-label">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="regEmail"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success w-100">Register</button>
    </form>
  );
}

export default LoginFormModal;
