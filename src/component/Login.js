import React from "react";
import "bulma/css/bulma.min.css";

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form className="box">
                <h3 className="title has-text-primary">Login</h3>
                <div class="field">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Masukkan email"
                  />
                </div>
                <div class="field">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Masukkan password"
                  />
                </div>
                <div class="field">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
