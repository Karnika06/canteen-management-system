import React from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import Navbar from '../../../components/shared/Navbar'


const Register = () => {
  return (
    <>
    <Navbar/>
      <section className="register">
        {/* <div className='container'> */}
        <div className="signup-image">
          <img src="demo.jpg" alt="registration pic" />
        </div>
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form className="form-content" id="register-form">
              <div className="form-group">
                <i class="fa-solid fa-user"></i>

                <input
                  type="text"
                  name="username"
                  id="name"
                  autoCapitalize="off"
                  placeholder="Your username"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoCapitalize="off"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-envelope"></i>
                <input
                  type="text"
                  name="E-mail"
                  id="name"
                  autoCapitalize="off"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-phone"></i>
                <input
                  type="text"
                  name="Contact number"
                  id="name"
                  autoCapitalize="off"
                  placeholder="Contact Number"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="New password"
                  id="name"
                  autoCapitalize="off"
                  placeholder="New password"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="Confirm password"
                  id="name"
                  autoCapitalize="off"
                  placeholder="Confirm password"
                />
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
              <div className="form-group">
                <p>
                  Already have an account?<Link to="/login">Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* </div> */}
      </section>
    </>
  );
};

export default Register;
