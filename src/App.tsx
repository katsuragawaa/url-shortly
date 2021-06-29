import { Button } from "./components/Button";

import logoImg from "./assets/images/logo.svg";
import illustrationImg from "./assets/images/illustration-working.svg";

import "./style.scss";

function App() {
  return (
    <div>
      <header>
        <div className="content">
          <img src={logoImg} alt="logo" />
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
      </main>
    </div>
  );
}

export default App;
