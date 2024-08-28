import { useState, useEffect, useRef } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(100);
  const [isActive, setIsActive] = useState(false);

  //Här använder vi ref... varför det?

  let intervalRef = useRef(0);

  //Vi ska skapa räknaren med use effects

  /*skapar en interval där -1 dras från timeLeft varje sekund så länge is Active är
   "false. IntervalRef.current används som referens */

  useEffect(() => {
    if (isActive === true) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  });

  return (
    <>
      <div>
        <h2> CurrentVärde {intervalRef.current}</h2>
        <h1>Nedräkningstimer</h1>
        <h2>{timeLeft} sekunder kvar</h2>
        <button onClick={() => setIsActive(true)}>Starta</button>
        <button onClick={() => setIsActive(false)}>Pausa</button>
        <button onClick={() => setTimeLeft(100)}>Återställ</button>
      </div>
      ;
    </>
  );
}

export default CountdownTimer;
