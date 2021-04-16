function change(){
    let slide2=document.getElementById("slide2");
    let slide1=document.getElementById("slide1");
    
    if(slide2.style.display=="none"){
        slide2.style.display="grid";
        slide1.style.display="none";
    }
    else{
        slide1.style.display="grid";
        slide2.style.display="none";
    }
}

