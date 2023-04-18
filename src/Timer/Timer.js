import styles from '../App.module.scss';

const Timer = ({ time }) => {
  const formatTime = (milliseconds) => {
    let ms = milliseconds % 1000;
    milliseconds = (milliseconds - ms) / 1000;
    let secs = milliseconds % 60;
    milliseconds = (milliseconds - secs) / 60;
    let mins = milliseconds % 60;
    let hrs = (milliseconds - mins) / 60;

    return hrs + ':' + mins + ':' + secs + '.' + ms;
  };

  return <div className={styles.component}>{formatTime(time)}</div>;
};

export default Timer;
