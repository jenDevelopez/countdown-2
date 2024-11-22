import React, { useState, useEffect } from "react";

export default function App() {
  
  const [countdownDate, setCountdownDate] = useState("");
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    // const savedDate = localStorage.getItem("countdownDate");
    // setCountdownDate(savedDate);
    // setIsCountdownActive(!!savedDate); 

    const interval = setInterval(() => {
      //  if (countdownDate) {
        const targetDate = new Date("2024-11-22T22:30:00");
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        if (difference <= 0) {
          clearInterval(interval);
          setTimeLeft(0);
        } else {
          setTimeLeft(difference);
        }
      // }
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  // const handleDateChange = (event) => {
  //   const newDate = event.target.value;
  //   setCountdownDate(newDate);
  //   setIsCountdownActive(true); 
  // };

  // const handleClick = () => {
  //  localStorage.setItem("countdownDate", countdownDate);
  // };

  // const cleanLocalStorage = () => {
  //   localStorage.clear()
  //   setIsCountdownActive(false);
  //   setTimeLeft(null);
  //   setCountdownDate("");
  // };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center fondo bg-center bg-cover"
      style={{ backgroundImage: 'url("/fondo.webp")' }}
    >
      <div className="bg-transparent p-4 rounded-lg shadow-md ">
            <div className="text-center mb-4">
              <h2 className="text-4xl font-bold text-yellow-400">
                Cuenta atrás
              </h2>
              <p className="text-gray-500">Hasta el evento</p>
            </div>
        {/* {isCountdownActive  && (
          <>
            <div className="flex justify-center">
              <input
                type="datetime-local"
                value={countdownDate || ''}
                onChange={handleDateChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
              onClick={() => handleClick()}
                className="bg-yellow-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
              >
                Iniciar cuenta atrás
              </button>
            </div>
          </>
        )} */}
       
        <div className="text-center mt-4 text-white text-2xl">
          {timeLeft !== null && (
            <div className="text-3xl">{formatTime(timeLeft)}</div>
          )}
        </div>
        {/* {isCountdownActive && (
          <button onClick={cleanLocalStorage} className="bg-yellow-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Parar cuenta atrás</button>

        )} */}
      </div>
    </div>
  );
}

