// time

let time_extracted = 0;
let time_remainder = 0;
const countdown = document.querySelector("#heroCountdown");
const time_section = {day: 86400, hour: 3600, minute: 60};

setInterval(() => convertTimeToText(), 1000);

// tls : time-left-in-seconds
function setDaysLeft(tls) {
  time_extracted = parseInt(tls / time_section.day);
  time_remainder = tls % time_section.day;
  return {time_extracted, time_remainder};
} // setDaysLeft()

// console.log(setDaysLeft(1699687665002));

function setHoursLeft(tls) {
  time_extracted = parseInt(tls / time_section.hour);
  time_remainder = tls % time_section.hour;
  return {time_extracted, time_remainder};
} // setHoursLeft()

function setMinutesLeft(tls) {
  time_extracted = parseInt(tls / time_section.minute);
  time_remainder = tls % time_section.minute;
  return {time_extracted, time_remainder};
} // setMinutesLeft()

// function setSecondsLeft(tls) {
//   time_extracted = parseInt(tls / time_section.minute);
//   time_remainder = tls % time_section.minute;
//   return {time_extracted, time_remainder};
// } // setSecondsLeft()

function convertTimeToText() {
  const targetDate = new Date("12/25/2023");
  const today = new Date();
  let timeLeft = 0;
  // let dayLeft = 0;
  // let remainder_in_seconds = 0;
  let the_days = [];
  let the_hours = [];
  let the_minutes = [];  
  timeLeft = parseInt((targetDate.getTime() - today.getTime()) / 1000);
  // dayLeft = (timeLeft / 1000);
  
  if (timeLeft >= time_section.day) {
    the_days = setDaysLeft(timeLeft);
    // console.log(days_extracted, days_remainder);
  }
  // console.log(days_remainder, days_remainder);
  if (the_days.time_remainder >= time_section.hour) {
    the_hours = setHoursLeft(the_days.time_remainder);
  }

  if (the_hours.time_remainder >= time_section.minute) {
    the_minutes = setMinutesLeft(the_hours.time_remainder);
  }
  
  countdown.innerText = `${(the_days.time_extracted > 0) ? the_days.time_extracted + ((the_days.time_extracted > 1) ? " days" : " day") : ""} ${(the_hours.time_extracted > 0) ? " " + the_hours.time_extracted + ((the_hours.time_extracted > 1) ? " hours" : " hour") : ""} ${(the_minutes.time_extracted > 0) ? " : " + the_minutes.time_extracted + ((the_minutes.time_extracted > 1) ? " minutes" : " minute") : ""} ${(the_minutes.time_remainder > 0) ? " : " + the_minutes.time_remainder + ((the_minutes.time_remainder > 1) ? " seconds" : " second") : ""}`;
  console.log(the_days.time_extracted,'-',the_hours.time_extracted,'-',the_minutes.time_extracted,'-',the_minutes.time_remainder);
  
} // convertTimeToText()