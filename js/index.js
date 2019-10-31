document.addEventListener("DOMContentLoaded", function(){

let forwardButton = document.getElementById("forward");
let backButton = document.getElementById("back");
renderAllMonsters(page);

let createForm = document.getElementById("new-monster-form");
createForm.addEventListener("submit", createMonster);

forwardButton.addEventListener("click", pageUp);
backButton.addEventListener("click", pageDown);

})
var page = 1;

function pageUp(){
    console.log("Page Up");
    page++;
    console.log(page);
    renderNewPage(page);
}
function pageDown(){
    console.log("Page Down");
    page--;
    console.log(page);
    renderNewPage(page);
}

function renderAllMonsters(page){
    fetch(`http://localhost:3000/monsters/?_limit=20&_page=${page}`)
        .then(response => response.json())
            .then(function(monstersArray){
                monstersArray.forEach(monster => {
                    let container = document.getElementById("monster-container");
                    let div = document.createElement('div');
                    // div.classList.add("center");
                    let h2 = document.createElement("h2");
                    h2.innerText = monster.name;
                    let p1 = document.createElement("p");
                    p1.innerText = `Age: ${monster.age}`;
                    let p2 = document.createElement("p");
                    p2.innerText = `Description: ${monster.description}`;

                    div.append(h2);
                    div.append(p1);
                    div.append(p2);

                    container.append(div);
                });
            })
                .catch((error) => console.log(error))
}

function renderNewPage(page){
    fetch(`http://localhost:3000/monsters/?_limit=20&_page=${page}`)
        .then(response => response.json())
            .then(function(monstersArray){
                let container = document.getElementById("monster-container");
                container.innerHTML = "";

                monstersArray.forEach(monster => {
                    let container = document.getElementById("monster-container");
                    let div = document.createElement('div');
                    // div.classList.add("center");
                    let h2 = document.createElement("h2");
                    h2.innerText = monster.name;
                    let p1 = document.createElement("p");
                    p1.innerText = `Age: ${monster.age}`;
                    let p2 = document.createElement("p");
                    p2.innerText = `Description: ${monster.description}`;

                    div.append(h2);
                    div.append(p1);
                    div.append(p2);

                    container.append(div);
                });
            })
                .catch((error) => console.log(error))
}

function createMonster(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let description = document.getElementById("description").value;

    fetch('http://localhost:3000/monsters/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            name: name,
            age: age,
            description: description
        })
    })
    .then(response => response.json())
        .then(function(monster){
            let container = document.getElementById("monster-container");
                    let div = document.createElement('div');
                    // div.classList.add("center");
                    let h2 = document.createElement("h2");
                    h2.innerText = monster.name;
                    let p1 = document.createElement("p");
                    p1.innerText = `Age: ${monster.age}`;
                    let p2 = document.createElement("p");
                    p2.innerText = `Description: ${monster.description}`;

                    div.append(h2);
                    div.append(p1);
                    div.append(p2);

                    container.append(div);
        })

}