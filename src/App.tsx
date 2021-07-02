import { FormEvent, useState } from "react";

import { Button } from "./components/Button";
import { Url } from "./components/Url";

import logoImg from "./assets/images/logo.svg";
import illustrationImg from "./assets/images/illustration-working.svg";

import "./style.scss";
import { getShortUrl } from "./services/shrtcodel";

function App() {
  const [navbarIsOn, setNavbarIsOn] = useState(false);
  const [urlToShorten, setUrlToShorten] = useState("");
  const [returnedUrls, setReturnedUrls] = useState<string[][]>([]);
  const [waiting, setWaiting] = useState(false);

  function handleNavbarClick() {
    setNavbarIsOn(!navbarIsOn);
  }

  async function handleShortenUrlClick(event: FormEvent) {
    event.preventDefault();
    try {
      setWaiting(true);
      const { id, newShortUrl, newLongUrl } = await getShortUrl(urlToShorten);
      setWaiting(false);
      setUrlToShorten("");
      setReturnedUrls(returnedUrls.concat([[id, newShortUrl, newLongUrl]]));
    } catch {
      setWaiting(false);
      alert("Invalid URL");
    }
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
            <input
              onChange={(event) => setUrlToShorten(event.target.value)}
              value={urlToShorten}
            />
            <Button
              className={`btn ${waiting ? "waiting" : ""}`}
              onClick={handleShortenUrlClick}
            >
              {waiting ? "Getting It!" : "Shorten It!"}
            </Button>
          </form>
        </div>
        <div className="result-container">
          {returnedUrls.map(([id, shortUrl, longUrl]) => {
            return <Url key={id} shortUrl={shortUrl} longUrl={longUrl} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
