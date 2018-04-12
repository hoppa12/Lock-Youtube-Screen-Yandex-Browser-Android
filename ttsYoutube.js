


const youtubeOverlay = ev =>
{
    
    if(/youtube.com\/watch\?/.test(window.location.href))
    {
        if(document.querySelector(".customOverlay"))
        {
            document.querySelector(".customOverlay").parentElement.remove();
          
            return;
        }
        
        const hTarget = document.querySelector(".koya-partial");
        if(ev.target === hTarget)
        {
            
            let newDiv = document.createElement("div"); 
            newDiv.innerHTML = `<div style="z-index:9999999999!important;top:0!important;left:0!important;height:6000px;width:100vw;background-color:black;position:absolute!important" class="customOverlay"></div>`;
            document.body.appendChild(newDiv);
         

            return;
        }
        
    }
  return;

    
}

document.body.addEventListener("dblclick", youtubeOverlay);
