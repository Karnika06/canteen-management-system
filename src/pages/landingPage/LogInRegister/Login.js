import React from 'react'
import "./LoginRegister.css";
import {Link} from 'react-router-dom';
import Navbar from '../../../components/shared/Navbar'


export default function Login() {
  return (
    <>
    <Navbar/>
    <section className='login'>
            {/* <div className='container'> */}
            
                <div className='login-content'>
                    
                    <div className='login-form'>
                        <h2 className='form-title'>Sign up</h2>
                        <form className='form-content' id='register-form'>
                            <div className='form-group'>
                                <i class="fa-solid fa-user"></i>
                                <input type = "text" name="email" id ="name" autoCapitalize='off' placeholder='Your email'/>
                            </div>
                            
                            <div className='form-group'>
                                <i class="fa-solid fa-lock"></i>
                                <input type = "password" name="password" id ="name" autoCapitalize='off' placeholder='Your password'/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className='form-submit' value="Register"/>
                            </div>
                            <div className="form-group">
                                <p>Don't have an account?<Link to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className='login-image'>
                            <img src='demo.jpg' alt='registration pic'/>
                    </div>
                    
                    {/* </div> */}
        </section>
    </>
  )
}
