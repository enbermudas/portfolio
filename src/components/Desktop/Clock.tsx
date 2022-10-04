import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState<Date>(new Date());

  const getCurrentTime = () => {
    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();

    if (hours <= 9) hours = "0" + String(hours);
    if (minutes <= 9) minutes = "0" + String(minutes);

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <div data-testid="clock-testid">
      {getCurrentTime()}
    </div>
  )
};

export default Clock;
