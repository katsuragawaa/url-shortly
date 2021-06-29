import { Button } from "./components/Button";
import logoImg from "./assets/images/logo.svg";
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
    </div>
  );
}

export default App;
