const inquirer = require("inquirer");

const cp = require('child_process')


function displayList(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["About", "Skills", "Academics", "Projects"],
         },
       ])
       .then(function (answer) {
         if (answer.selection == "About") {
           console.log(`A passionately curious Web developer 
           who just found out that making websites and seeing 
           the magic happen on the Internet is what excites him the most.`);
           displayNext()
         } else if (answer.selection == "Skills") {
           console.log("JavaScript , Java , React , React Native , Golang , Android");
           displayNext()
         } else if (answer.selection == "Academics") {
           cp.execSync('start Chrome https://drive.google.com/file/d/1h6NAq41Sq1JVvs4Rb9f9z5ro7o7eovXe/view?usp=drivesdk')
           displayNext()
         } else if (answer.selection == "Projects") {
           cp.execSync('start chrome https://github.com/Aakash-Kumar-karn ')
           displayNext()
         }
       });
}


displayList()


function displayNext(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["Go Back" , 'Exit'],
         },
       ])
       .then(function (answer) {
         if (answer.selection == "Go Back") {
            displayList()
         } else if (answer.selection == "Exit") {
             console.log('Resume Closed')
         } 
       });
}
