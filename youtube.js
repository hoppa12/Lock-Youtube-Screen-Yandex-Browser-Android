
const createButton = e =>
{

    if(e.target !== document.querySelector('button[title="Settings"]').firstChild
        && e.target !== document.querySelector('button[title="Settings"]')
        && e.target !== document.querySelector('button[title="Settings"]').parentElement)
    {   
       
        return;
    }

    const newDiv = document.createElement("a"); 
    newDiv.onclick = () => 
    {
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

document.body.addEventListener("click", createButton);
