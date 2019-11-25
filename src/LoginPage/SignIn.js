import React from 'react';
import { login } from '../_helpers/utils';
import LoginForm from './LoginForm';
const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }

    return (
        <div className="container-fluid bg-light py-3 h-100 main-wrap">
        <main className="wrap-main-in">
          <section className="wrap-authentication mx-auto bg-white my-4">
            <h1 className="text-center text-uppercase mb-3">
              <img
                src="https://content.e-hallpass.com/public/images/logo.png"
                alt="logo"
              />
              <br /> TV Mode{" "}
            </h1>
          <LoginForm />
            <div className="link-wrap mt-3 text-center">
              <a href="https://www.eduspiresolutions.org/terms-of-use">
                Terms of Use{" "}
              </a>{" "}
              |{" "}
              <a href="https://www.eduspiresolutions.org/privacy-policy">
                Privacy policy{" "}
              </a>
            </div>
          </section>
        </main>
      </div>
    );
};

export default SignIn;