export default function useTime() {
  const formatTime = (time) => {
    time = time.split("T");
    return time[0];
  };

  return { formatTime };
}
