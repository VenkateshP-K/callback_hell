let div = document.createElement("div");
let heading = document.createElement("h1");
div.append(heading);
document.body.append(div);

var count = 11;

setTimeout(()=>{
    heading.innerHTML=count-=1;
    setTimeout(()=>{
        heading.innerHTML=count-=1;
        setTimeout(()=>{
            heading.innerHTML=count-=1;
            setTimeout(()=>{
                heading.innerHTML=count-=1;
                setTimeout(()=>{
                    heading.innerHTML=count-=1;
                    setTimeout(()=>{
                        heading.innerHTML=count-=1;
                        setTimeout(()=>{
                            heading.innerHTML=count-=1;
                            setTimeout(()=>{
                                heading.innerHTML=count-=1;
                                setTimeout(()=>{
                                    heading.innerHTML=count-=1;
                                    setTimeout(()=>{
                                        heading.innerHTML=count-=1; 
                                        setTimeout(()=>{
                                             heading.innerHTML="HAPPY INDEPENDENCE DAY !"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)