
let countdown = (dateString, element) => {
  let eventDate = new Date(dateString);
  let currentDate = new Date();
  let data;

  let interval = setInterval(()=>{
    if (currentDate.getTime() > eventDate.getTime()) {
      clearInterval(interval);
    }
    currentDate = new Date();
    data = getTimeRemaining(eventDate, currentDate);
    updateUI();
  }, 1000);

  let updateUI = () => {
    let { total, days, hours, minutes, seconds } = data;
    let str = total > 0 ? `${days}:${hours}:${minutes}:${seconds}` : `Theresa IS in town!`
    element.innerHTML = str;
  };

  let getTimeRemaining = (endTime, startTime) => {
    const total = Date.parse(endTime) - Date.parse(startTime);
    const seconds = zeroPadded(Math.floor( (total/1000) % 60 ));
    const minutes = zeroPadded(Math.floor( (total/1000/60) % 60 ));
    const hours = zeroPadded(Math.floor( (total/(1000*60*60)) % 24 ));
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };
  
  let zeroPadded = (number) => {
    let str = String(number);
    if (str.length === 0) return '';
    if (str.length === 1) return `0${str}`;
    return str;
  };

};