function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var day = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
    var month = new Array("01","02","03","04","05","06","07","08","09","10","11","12");

    if(minutes < 10)
    {
        minutes = '0' + minutes;
    }

    if(hours < 10)
    {   
        hours = '0' + hours;
    }

    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes;
    document.getElementById('datedisplay').innerHTML = day[date.getDay()]+" " +date.getDate()+ "." + month[date.getMonth()]+ "." + date.getFullYear()
}
setInterval(getDate, 0);

