let Fajr=document.getElementById('Fajr');
let Sunrise=document.getElementById('Sunrise');
let Dhuhr=document.getElementById('Dhuhr');
let Asr=document.getElementById('Asr');
let Maghrib=document.getElementById('Maghrib');
let Isha=document.getElementById('Isha');
let tFajr=document.getElementById('tFajr');
let tSunrise=document.getElementById('tSunrise');
let tDhuhr=document.getElementById('tDhuhr');
let tAsr=document.getElementById('tAsr');
let tMaghrib=document.getElementById('tMaghrib');
let tIsha=document.getElementById('tIsha');
let d=document.getElementById('date');
let Gregorian=document.getElementById('Gregorian');
let Hijri=document.getElementById('Hijri');

onload=function getUserlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            let latitude=position.coords.latitude;
            let longitude=position.coords.longitude;
            console.log(latitude);
            console.log(longitude);
            axios.get(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=5`)
            .then((Response)=>{
                let time=Response.data.data;
                tFajr.innerHTML= time.timings.Fajr;
                tSunrise.innerHTML= time.timings.Sunrise;
                tDhuhr.innerHTML= time.timings.Dhuhr;
                tAsr.innerHTML= time.timings.Asr;
                tMaghrib.innerHTML= time.timings.Maghrib;
                tIsha.innerHTML= time.timings.Isha;
                Gregorian.innerHTML= time.date.readable;
                let day= time.date.hijri.day;
                let month=time.date.hijri.month.ar;
                let year=time.date.hijri.year
                Hijri.innerHTML= ` ${day} ${month} ${year}`;
                
            })
            .catch(error=>{
                console.log(error);
                
            })

        })

    }

}
getlocation(document.getElementById('city-select').value);
function getlocation(value){
    let [city,country]=value.split(',');
    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`)
    .then((Response)=>{
        let time=Response.data.data;
        tFajr.innerHTML= time.timings.Fajr;
        tSunrise.innerHTML= time.timings.Sunrise;
        tDhuhr.innerHTML= time.timings.Dhuhr;
        tAsr.innerHTML= time.timings.Asr;
        tMaghrib.innerHTML= time.timings.Maghrib;
        tIsha.innerHTML= time.timings.Isha;
        Gregorian.innerHTML= time.date.readable;
        let day= time.date.hijri.day;
        let month=time.date.hijri.month.ar;
        let year=time.date.hijri.year
        Hijri.innerHTML= ` ${day} ${month} ${year}`;
        
    })
    .catch(error=>{
        console.log(error);
        
    })
    
}


