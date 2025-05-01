function updateColck(){
    now = new Date;
    let hour = now.getHours().toString().padStart(2 ,0);
    const meridian = Number(hour)>=12 ? "PM" : "AM" ;
    hour = Number(hour) % 12 || 12
    const minute = now.getMinutes().toString().padStart(2 ,0);
    const second = now.getSeconds().toString().padStart(2 ,0);
    const time = `${hour}:${minute}:${second} ${meridian}`;
    document.getElementById("clock").textContent = time;
}

updateColck();
setInterval(updateColck , 1000);