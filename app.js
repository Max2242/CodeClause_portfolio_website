let i=0;
let time=3000;

const projects=[
    {
        id:1,
        img:"images/Medium-Start-reading.jpg",
        projectName:"Medium Clone",
        techUsed: "HTML, CSS, JavaScript",
        link:""
    },
    {
        id:2,
        img:"images/colorFlipper.png",
        projectName:"Color Flipper",
        techUsed: "HTML, CSS, JavaScript",
        link:""
    },
    {
        id:3,
        img:"images/clock.png",
        projectName:"Simple Clock",
        techUsed: "HTML, CSS, JavaScript",
        link:""
    },
    {
        id:4,
        img:"images/jsdrumkit.png",
        projectName:"DrumKit",
        techUsed: "HTML, CSS, JavaScript",
        link:""
    }
];


const projectName=document.getElementById("p-name");
const img=document.getElementById("pro-image");
const techUsed=document.getElementById("lang");

const prevBtn= document.querySelector(".prev");
const nextBtn= document.querySelector(".next");

window.addEventListener("DOMContentLoaded",function(){
   showProject(i);
})


function showProject(i){
const items= projects[i];
img.src= items.img;
projectName.textContent=items.projectName;
techUsed.textContent=items.techUsed;
img.onclick=function(){
    window.location.href=link;
};

}

 function changeImg(){

    showProject(i);
    //  img.src= projects[i];
    //  projectName.textContent=projects.projectName;
    //  techUsed.textContent=projects.techUsed;
        // i>1?i=0:i++;
        if(i==3){
            i=0;
        }else{
            i++;
        }
}

 window.onload=function(){
    setInterval(changeImg,3000);
};

// index page

document.querySelector(".cross").style.display="none";
document.querySelector(".hambrgr").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".ham").style.display="inline";
        document.querySelector(".cross").style.display="none";
    }
    else{
        document.querySelector(".ham").style.display="none";
        setTimeout(()=>{
        document.querySelector(".cross").style.display="inline";
    },350);
    }
})