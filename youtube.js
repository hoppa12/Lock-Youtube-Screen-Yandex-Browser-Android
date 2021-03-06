chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
    if (request.overlay === "check") {
      //check to set value of toggle switch
      let check = document.querySelector(".customOverlay") ? true : false;
      console.log(sender);
      sendResponse({ overlay: check });
      return;
    }
  
    if (request.overlay === "set") {
      let check = document.querySelector(".customOverlay");
  
      if (check) {
        check.removeEventListener("dblclick", preventDBlClick, false);
        document.body.removeChild(check);
      } else {
        let html = `<div class="customOverlay"></div>`;
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        document.body.appendChild(doc.querySelector("div"));
  
        document
          .querySelector(".customOverlay")
          .addEventListener("dblclick", preventDBlClick);
  
        return;
      }
  
      return;
    }
  });
  
  const preventDBlClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  
