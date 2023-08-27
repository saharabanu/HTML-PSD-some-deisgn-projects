const chart = document.querySelector("#chart").getContext("2d");
// console.log(chart, "djhjdsgg")

// create a new chart instance 

new Chart(chart, {
    type:'line',
    data:{
        labels:["Jan","Feb","Mar","jApr","May","June","July","Aug","Sep","Oct","Nov"],

        datasets:[
            {
                label:"BTC",
                data:[978568,465748,765487,34345,686754,87989,56346,314235,567993,989675,546758],
                borderColor:"red",
                borderWidth:2
            },
            {
                label:"ETH",
                data:[999967,35465,77897,242,41,24353,879879,76980,456557,889853,485634,6870980],
                borderColor:"blue",
                borderWidth:2
            },
        ]
    },
    options:{
        responsive:true,
        // plugins: {
        //     legend: {
        //       position: 'top',
        //     },
        //     title: {
        //       display: true,
        //       text: 'Chart.js Line Chart'
        //     }
        //   }
    }
});




const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click",()=>{
    sidebar.style.display ="block"
})
closeBtn.addEventListener("click",()=>{
    sidebar.style.display= "none"
})


// change  theme 

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
    themeBtn.querySelector("span:last-child").classList.toggle("active");
})
