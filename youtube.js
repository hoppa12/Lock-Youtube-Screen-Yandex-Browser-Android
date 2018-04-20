const createButton = e =>
{
    let targetElem = document.querySelector('button[title="Settings"]')

    if (!targetElem)
    {
        return;
    }

    if(e.target !== targetElem
        && e.target !== targetElem.firstChild
        && e.target !== targetElem.parentElement.parentElement)
    {   
       
        return;
    }

    const newDiv = document.createElement("a"); 
    newDiv.onclick = () => 
    {
        let overlayDiv = document.createElement("div"); 
        overlayDiv.innerHTML = `
        <div ondblclick="removeCustomElem()"
         class="customOverlay"></div>`;
        document.body.appendChild(overlayDiv);
       
        document.querySelector("#cancel_button").click();
    };
    let elem = document.querySelector('.koya-partial > .koya-komponent-binding > a');
    newDiv.href = "#";
    newDiv.className = 
    elem.classList
    .value;
    newDiv.textContent="Lock Screen";
    newDiv.id="customLockScreen";
    elem.parentElement
    .appendChild(newDiv);
    
};

const removeCustomElem = () => 
{   
  document.querySelector(".customOverlay").parentElement.remove();
};

document.body.addEventListener("click", createButton);

