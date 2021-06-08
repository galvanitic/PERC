import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';


console.log('This is the background page.');
console.log('Put the background scripts here.');

class RuntimeState {
  secondDegreeScrapeState: boolean;
  constructor(secondDegreeScrapeState=false){
    this.secondDegreeScrapeState = secondDegreeScrapeState;
  }
  // Second Degree Scrape methods
  complete(){
    this.secondDegreeScrapeState = true;
    console.log(`Completing... state is now ${this.secondDegreeScrapeState}`);
  }
  reset(){
    this.secondDegreeScrapeState = false;
    console.log(`Resetting... state is now ${this.secondDegreeScrapeState}`);
  }
  getSecondDegreeScrapeState(){
    return this.secondDegreeScrapeState;
  }
}

let RTState = new RuntimeState();

chrome.storage.local.set({
  RTState
});

chrome.runtime.onMessage.addListener((req, sender, response) => {
  if(req.msg == "COMPLETE"){
    RTState.complete();
    response(RTState.getSecondDegreeScrapeState());
  }else if(req.msg == "RESET"){
    RTState.reset();
    response(RTState.getSecondDegreeScrapeState());
  }else if(req.msg == "GET_STATE"){
    response(RTState.getSecondDegreeScrapeState());
  }
});

chrome.runtime.onConnect.addListener(port => {
  console.assert(port.name == "SCRAPE");
  port.onMessage.addListener(msg => {
    console.log(msg);
    switch(msg.req) {
      case "COMPLETE":
        console.log("Okiee.... I was triggered.");
        RTState.complete();
        port.postMessage({second_deg_state: RTState.getSecondDegreeScrapeState()});
        break;
      case "RESET":
        RTState.reset();
        port.postMessage({second_deg_state: RTState.getSecondDegreeScrapeState()});
        break;
      case "GET_STATE":
        port.postMessage({second_deg_state: RTState.getSecondDegreeScrapeState()});
        break;
      default:
        port.postMessage({second_deg_state: RTState.getSecondDegreeScrapeState()});
    }
  })
})