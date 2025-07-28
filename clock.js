const clock = document.getElementById("clock");
const dateElement = document.getElementById("date");

const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

clock.textContent = `${hours}:${minutes}:${seconds}`;
};

const updateDate = () =>{
    const now = new Date();
    let day = now.getDate();
    let months = now.getMonth() + 1;
    let year = now.getFullYear();

    day = day < 10 ? "0" + day : day;
months = months < 10 ? "0" + months : months;
year = year < 10 ? "0" + year : year;

    dateElement.textContent =`${day}/${months}/${year}`;
};

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);
updateTime(); 
updateDate();