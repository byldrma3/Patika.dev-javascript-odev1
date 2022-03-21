const firstName = prompt("Adınızı Girin")
const myName = document.querySelector("#myName")
myName.innerHTML = `${firstName}`

function showTime(){
    let myClock = document.querySelector("#myClock")
    let date = new Date()
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();	
    myClock.innerHTML = `${hour}:${minute}:${second} ${days[date.getDay()]}`
    setTimeout("showTime()", 1000);
}