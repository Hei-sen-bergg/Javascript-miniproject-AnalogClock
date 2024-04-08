let hour = 0;
let minute = 0;
let second = 0;
let d = new Date();

setInterval( function(){
    d = new Date();
    second = d.getSeconds()*6;
    minute = d.getMinutes()*6;
    hour = d.getHours()*30 + Math.round(minute/12);

    document.getElementById("second").style.transform ="rotate("+ second + "deg)";
    document.getElementById("minute").style.transform ="rotate("+ minute + "deg)";
    document.getElementById("hour").style.transform ="rotate("+ hour + "deg)";
},1000

)



function updateDateTime() {

    let now = new Date();
    let timeOption = {

        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        weekday: 'long',                                        
        hour12: true
         
    };

    let dateOption = {
        
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
    };

    let timeString = d.toLocaleString('en-IN', timeOption).toUpperCase();
    let dateString = d.toLocaleString('en-IN', dateOption).toUpperCase();

  
    
    document.getElementById('time').innerHTML = timeString ;
    document.getElementById('date').innerHTML = dateString ;
   
}


updateDateTime();
setInterval(updateDateTime, 1000);
