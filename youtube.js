
const createButton = () =>
{
    if(document.querySelector("#customLockScreen"))
    {
        return;
    }

    const newDiv = document.createElement("a"); 
    newDiv.onclick = function () {
        let newDiv = document.createElement("div"); 
        newDiv.innerHTML = `
        <div ondblclick="removeCustomElem()"
         class="customOverlay"></div>`;
        document.body.appendChild(newDiv);
       
        document.querySelector("#cancel_button").click();
    };
    newDiv.href = "#";
    newDiv.className = "cub wtb";;
    newDiv.textContent="Lock Screen";
    newDiv.id="customLockScreen";
    document.querySelector('.koya-partial > .koya-komponent-binding > a')
    .parentElement
    .appendChild(newDiv);
    
};

const removeCustomElem = () => 
{   
   
    document.querySelector(".customOverlay").parentElement.remove();
};





const sleep = wait => new Promise(resolve => setTimeout(resolve,wait));
const checkForButton = async (e) =>
{
  
  if(e.target !== document.querySelector('button[title="Settings"]').firstChild)
  {
      return;
  }
    const elemExist = () => document.querySelector(".koya-partial > .koya-komponent-binding > a");
    const overlayOption = () => document.querySelector('#customLockScreen');
    
    if(overlayOption())
    {
       
        return;
    }

   
    while(!elemExist())
    {
        
        await sleep(500);
        
    }

    createButton();
   
    return;
    
};

document.body.addEventListener("click", e => checkForButton(e));
