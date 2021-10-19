import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='d-flex justify-content-center py-5 signin'>
            <form className="text-start px-5 py-3 border rounded-3">
        <h3 className="heading text-center">Please Sign in</h3>
        <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            id="exampleInputEamil"
          />
        </div>
          <div className="mb-3">
            <label for="exampleInputEmail" className="form-label">
             Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Your Password"
              id="exampleInputEamil"
            />
          </div>
          
        <div className="mb-3 text-center">
          <button className="btn btn-outline-primary fs-5 connect">
            {" "}
            Sign in{" "}
            <span className="arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </span>{" "}
          </button>
        </div>
      </form>
        </div>
    );
};

export default Login;