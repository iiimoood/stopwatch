import Timer from './Timer/Timer';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react';
import styles from './App.module.scss';

const App = () => {
  const [time, setTime] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
    );
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.timer}>
        <Timer time={time} />
        <div>
          <button className={styles.button} onClick={(e) => start()}>
            Start
          </button>
          <button className={styles.button} onClick={(e) => stop()}>
            Stop
          </button>
          <button className={styles.button} onClick={(e) => reset()}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
