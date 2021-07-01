import { useState } from "react";

import { Button } from "./components/Button";
import { Url } from "./components/Url";

import logoImg from "./assets/images/logo.svg";
import illustrationImg from "./assets/images/illustration-working.svg";

import "./style.scss";

function App() {
  const [navbarIsOn, setNavbarIsOn] = useState(false);

  function handleNavbarClick() {
    setNavbarIsOn(!navbarIsOn);
  }

  return (
    <div>
      <header>
        <div className={`content ${navbarIsOn ? "responsive" : ""}`}>
          <img src={logoImg} alt="logo" />
          <div className="inner-content">
            <div className="nav">
              <span>Features</span>
              <span>Pricing</span>
              <span>Resources</span>
            </div>
            <div className="login">
              <button id="login">Login</button>
              <Button>Sign Up</Button>
            </div>
          </div>
          <i className="fas fa-bars" onClick={handleNavbarClick}></i>
        </div>
      </header>
      <main>
        <div className="banner">
          <div>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              yours links are performing.
            </p>
            <Button>Get Started</Button>
          </div>
          <img src={illustrationImg} alt="Person working on a computer" />
        </div>
        <div className="url-container">
          <form>
            <input />
            <Button>Shorten It!</Button>
          </form>
        </div>
        <div>
          <Url />
        </div>
      </main>
    </div>
  );
}

export default App;
