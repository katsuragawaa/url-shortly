import { useState } from "react";

import { Button } from "./Button";

import "./url.scss";

type UrlProps = {
  shortUrl: string;
  longUrl: string;
};

export function Url({ longUrl, shortUrl }: UrlProps) {
  const [isCopied, setIsCopied] = useState(false);

  function copyUrlToClipboard() {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
  }

  return (
    <div className="url-result">
      <div className="long">{longUrl}</div>
      <div className="short">
        <a
          href={shortUrl}
          className="shorten-link"
          target="_blank"
          rel="noreferrer"
        >
          {shortUrl}
        </a>
        <Button onClick={copyUrlToClipboard}>{isCopied ? "Copied" : "Copy!"}</Button>
      </div>
    </div>
  );
}
