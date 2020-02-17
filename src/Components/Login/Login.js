import React from 'react';
import wmsu from './wmsu.png';
import './Login.css';


const Login = () => {
    return (
        <section className="container-fluid">
            <section className="row justify-content-center">
                <section className="col-12 col-sm-6 col-md-3">
                    <form className="form-container">
                        <div className="form-group">
                            <img id="wmsu" src={wmsu} alt="" />
                            <h1>Welcome!</h1>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Log In</button>
                        <a href="">Forgot Password?</a>
                    </form>
                </section>
            </section>
        </section>
    );
}

export default Login;

