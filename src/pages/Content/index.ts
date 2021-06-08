"use strict";

import { printLine } from './modules/print';
import { write } from "./modules/csvHandler";
import fs from 'fs';
console.log('Content script works!');

const extensionID = "gbdolgkeknipmllaoppeagkgnpminapk";

const un:string = "rjg3268";
const pw:string = "V464!uM3S"
const levels:Array<string> = ['L', 'U', 'G'];
var isSecondDegreeScrapeComplete:boolean = false;
let ccyys:string = `20212`;
let search_type_main:string = `FIELD`
var port = chrome.runtime.connect({name: "SCRAPE"});


// port.onMessage.addListener(msg => {
//   console.log("I HEARD SOMETHING BACK FROM BACKGROUND!!!");
//   isSecondDegreeScrapeComplete = msg.second_deg_state;
// });

let getState:Function = () => {
  console.log("Get state was called!");
  // Let's update the second degree scrape right from the start.
  chrome.runtime.sendMessage(extensionID, {msg: "GET_STATE"}, (res:boolean) => {
    isSecondDegreeScrapeComplete = res;
  });
  return isSecondDegreeScrapeComplete;
  
}

let signInSequence:Function = () => {
  if(document.getElementById("login-button")){
    let signInButton:HTMLInputElement = document.getElementById("login-button")?.children[0] as HTMLInputElement;
    let username: HTMLInputElement = document.getElementById("username") as HTMLInputElement;
    let password: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    username.value = un;
    password.value = pw;
    signInButton.value = "Begin Scraping";
    setTimeout(() => {
      signInButton.click();
      console.log('Sign in button pressed');
    }, 2000);
  }
}


let scrapingSeqence:Function = () => {
  if(window.location.href === "https://utdirect.utexas.edu/apps/registrar/course_schedule/20212/"){ // If we are in the main registration page
    firstDegreeScrape(0, 1);
  }
  if(window.location.hostname == "utdirect.utexas.edu"){ // Make sure that we're on a proper hostname
    secondDegreeScrape();
  }
}


function secondDegreePromise(url:string) : Promise<string> {
  /// Open up a new tab with the generated URL
  window.open(url, '_blank');
  // console.log(url);
  return new Promise (function callback(resolve, reject) {
    // Grab the state from the background and update the local variable
    // chrome.runtime.sendMessage(extensionID, {msg: "GET_STATE"}, (res:boolean) => {
    //   isSecondDegreeScrapeComplete = res;
    // });
    if (getState() === false){ // If the second degree state is still not done
      console.log('Still waiting for 2nd degree scrape to finish...'+' Its state is '+isSecondDegreeScrapeComplete);
      // port.onMessage.addListener(msg => {
      //   isSecondDegreeScrapeComplete = msg.second_deg_state;
      // });
      setTimeout(callback, 5000); //    repeat promise after n-seconds until state is true.
    }else if(getState() === true){ // If the promise is complete
      // Reset the scrape state (Turns it false) & update the local variable
      chrome.runtime.sendMessage(extensionID, {msg: "RESET"}, (res:boolean) => {
        console.log("Updating local variable from background...");
        isSecondDegreeScrapeComplete = res;
      });
      resolve("2nd degree scrape was complete!");
      // port.onMessage.addListener(msg => {
      //         isSecondDegreeScrapeComplete = msg.second_deg_state;
      //       });
    }else {
      reject("Oopsie woopsieeee, OooooOOoooo.");
    }
  })
}




// Two base cases, 1: it reaches the end of the levels array, 2: it reaches the end of the FOS list.
let firstDegreeScrape:Function = (levelNum: number, fosNum: number) => {
  if (levelNum < levels.length){ // If not base case #1
    const fosParent:HTMLElement|null = document.getElementById("fos_fl"); // Define the FOS parent element.
    if(fosParent){  // If the fosParent is present. (Will most likely return true... just for extra safety)
      let fosChildren = fosParent.children;
      if(fosNum < fosChildren.length){ // If not base case #2
        let fos:HTMLOptionElement = fosChildren[fosNum] as HTMLOptionElement; // The individual field of study.
        let fosValue:string = fos.value.split(' ').join('+'); // Format FOS
        const url:string = `https://utdirect.utexas.edu/apps/registrar/course_schedule/20212/results/?ccyys=${ccyys}&search_type_main=${search_type_main}&fos_fl=${fosValue}&level=${levels[levelNum]}`;
        secondDegreePromise(url)
          .then((res)=>{ // If the second degree scrape promise is resolved
            
            // port.postMessage({req: "RESET"});
            // port.onMessage.addListener(msg => {
            //   isSecondDegreeScrapeComplete = msg.second_deg_state;
            // });
            console.log(res+"Now moving along to next URL.");
            firstDegreeScrape(levelNum, fosNum+1); // Generate the next URL and scrape it
          })
          .catch(res=>{console.log(res)});
        
      }else { 
        firstDegreeScrape(levelNum+1, 1);
      }
    }
  }
}

let secondDegreeScrape:Function = () => {
  // make sure that there is something to scrape
  let table: HTMLTableElement = document.getElementsByClassName('rwd-table')[0] as HTMLTableElement;

  if(table){
    let t_rows:HTMLCollection = table.children[1].children as HTMLCollection;
    let t_rows_arr:Element[] = Array.from(t_rows);
    for(let i=0; i < t_rows_arr.length; i++){
      // console.log(t_rows_arr[i].childElementCount);
      if(t_rows_arr[i].childElementCount == 1){ // If the row is a title
        let course_title:any = t_rows_arr[i].childNodes[1].firstChild?.firstChild?.textContent;
        let divisionRegex = /^[a-z\s]{0,3}/gi;
        let courseNumRegex = /\d*\w/m;

        console.log("Division: "+course_title.match(divisionRegex)[0]);
        course_title = course_title.replace(divisionRegex, "");
        console.log("Course Number: "+course_title.match(courseNumRegex)[0]);
        course_title = course_title.replace(courseNumRegex, "");
        console.log("Course Name: "+course_title);
        
      }else { // If it's a sub-column
        let row = t_rows_arr[i];
        let rowChildren = row.childNodes;
        let unique = rowChildren[1].childNodes[0].childNodes[0].textContent; //
        console.log("Unique: "+unique);

        let days = rowChildren[3].textContent;
        console.log("Days: "+days); 
        
        let hour = rowChildren[5].textContent; 
        console.log("Hour: "+hour); 
        
        // let room;
        
        let instruction_mode = rowChildren[9].textContent;
        console.log("Instruction Mode: "+instruction_mode); 
        
        let instructor = rowChildren[11].textContent;
        console.log("Instructor: "+instructor);
        
        let status = rowChildren[13].textContent;
        console.log("Status: "+status);

        let flags = rowChildren[15].textContent;
        console.log("Flags: "+flags);
        
        let core = rowChildren[17].textContent;
        console.log("Core: "+core);
        console.log("\n"); 
      }
    }
    if(document.getElementById("next_nav_link")){ // If there is a next page
      setTimeout(()=>{
        document.getElementById("next_nav_link")?.click(); // Click the next button
      }, 5000)
    }else {
      setTimeout(()=>{
        // Let's complete the 2nd degree scrape (Sets true) & update the local variable
        chrome.runtime.sendMessage(extensionID, {msg: "COMPLETE"}, (res:boolean) => {
          console.log(res+" was returned from background line 175.");
          isSecondDegreeScrapeComplete = res;
        });
        // port.postMessage({req: "COMPLETE"});
        // port.onMessage.addListener(msg => {
        //   isSecondDegreeScrapeComplete = msg.second_deg_state;
        // });
        //close the tab
        window.close();
      }, 5000)
    }
  } 
}

let main:Function = () => {
  signInSequence();
  scrapingSeqence();
}

main();