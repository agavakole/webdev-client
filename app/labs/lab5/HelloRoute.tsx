"use client";

import { useEffect, useState } from "react";
import { fetchHello } from "./client";

type HelloMessage = {
  message?: string;
};

export default function HelloRoute() {
  const [hello, setHello] = useState<HelloMessage>({});

  useEffect(() => {
    fetchHello().then(setHello);
  }, []);

  return (
    <div id="wd-hello-route" className="space-y-2">
      <h3>GET /api/lab5/hello (Next.js Route Handler)</h3>
      <pre className="rounded bg-gray-100 p-3 text-sm">
        {JSON.stringify(hello, null, 2)}
      </pre>
      <p>{hello.message}</p>
    </div>
  );
}
