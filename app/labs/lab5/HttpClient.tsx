"use client";

import { useEffect, useState } from "react";
import { fetchWelcomeMessage } from "./client";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetchWelcomeOnClick = async () => {
    const message = await fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };

  const fetchWelcomeOnLoad = async () => {
    const message = await fetchWelcomeMessage();
    setWelcomeOnLoad(message);
  };

  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div id="wd-http-client" className="space-y-3">
      <h3>HTTP Client</h3>

      <section className="space-y-2">
        <h4>Requesting on Click</h4>
        <button
          id="wd-fetch-welcome"
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={fetchWelcomeOnClick}
        >
          Fetch Welcome
        </button>
        <p>
          Response from server: <b>{welcomeOnClick}</b>
        </p>
      </section>

      <section className="space-y-2">
        <h4>Requesting on Load</h4>
        <p>
          Response from server: <b>{welcomeOnLoad}</b>
        </p>
      </section>
    </div>
  );
}
