import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function quiz() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div
        className="bg-light border p-4 rounded shadow-sm"
        style={{ width: '500px', backgroundColor: '#FFF9E3' }}
      >
        <h1 className="text-center">
          Welcome to Eat Healthy+
        </h1>
        <p className="text-center">
          What is your name?
        </p>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
          />
        </div>
        <button className="btn btn-danger w-100 mt-3">
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default quiz;
