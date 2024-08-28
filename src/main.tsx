import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CountdownTimer from "./CountdownTimer.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountdownTimer />
  </StrictMode>
);
