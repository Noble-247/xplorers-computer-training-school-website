/*
import { useEffect, useState } from "react";

function CountDownTimer() {
  //Display the launch date
  const dateObj = new Date("2023-12-31");
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const theYear = dateObj.getUTCFullYear();
  const newdate = theYear + " - " + month + " - " + day;

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section>
      <h1>COUNTDOWN TO LAUNCH DATE</h1>
      <h1>{newdate}</h1>
      <h1>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </h1>
    </section>
  );
}

export default CountDownTimer;

*/
