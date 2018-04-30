let notYoutube = `<div class="container">
                 <h1>Only Available On Youtube</h1>
                 </div>`;

let toggle = bool => {
  return `
    <div class="container">   
    <h1>Turn ${!bool ? "On" : "Off"} Overlay </h1>     

        <input type="checkbox" class="switch_1">
    
      </div>`;
};

const setToggleSwitch = bool => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(toggle(bool), "text/html");
  document.body.appendChild(doc.querySelector(".container"));

  document.querySelector(".switch_1").checked = bool;
  document.querySelector(".switch_1").addEventListener("click", e => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { overlay: "set" }, response => {});
    });
    let togState = e.target.checked;
    document.querySelector("h1").textContent = `Turn ${
      !togState ? "On" : "Off"
    } Overlay`;
  });
};
chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  if (tabs[0].url.includes("youtube.com/watch")) {
    chrome.tabs.sendMessage(tabs[0].id, { overlay: "check" }, response => {
      setToggleSwitch(response.overlay);
    });
  } else {
    let parser = new DOMParser();
    let doc = parser.parseFromString(notYoutube, "text/html");
    document.body.appendChild(doc.querySelector(".container"));
  }
});
