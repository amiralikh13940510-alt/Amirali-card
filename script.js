const splash = document.getElementById("splash");
const card = document.getElementById("card");

setTimeout(() => {

    splash.style.opacity = "0";

    setTimeout(() => {
        splash.style.display = "none";
        card.classList.remove("hidden");

        setTimeout(()=>{
            card.classList.add("show");
        },100);

    },1000);

},2200);


// تغییر زبان

let fa=true;

const name=document.getElementById("nameFa");
const job=document.getElementById("jobFa");
const desc=document.getElementById("descFa");
const btn=document.getElementById("lang");

btn.onclick=function(){

    name.classList.remove("fade");
    job.classList.remove("fade");
    desc.classList.remove("fade");

    void name.offsetWidth;

    name.classList.add("fade");
    job.classList.add("fade");
    desc.classList.add("fade");

    if(fa){

        name.innerHTML="AmirAli Khorshidi";
        job.innerHTML="Sixth Grade Student";
        desc.innerHTML="Gamer & Computer Enthusiast";
        btn.innerHTML="🇮🇷 فارسی";

    }else{

        name.innerHTML="امیرعلی خورشیدی";
        job.innerHTML="دانش آموز پایه ششم";
        desc.innerHTML="علاقه مند به گیم و کامپیوتر";
        btn.innerHTML="🌐 English";

    }

    fa=!fa;

}
