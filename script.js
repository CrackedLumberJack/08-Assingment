
document.getElementById("write").onclick = function() {
    let myDiv = document.getElementById("output");
    let myTimes = document.getElementById("times").value;
    let mySentence = document.getElementById("sentence").value;

    myDiv.innerHTML = "";

    for(let i = 1; i <= myTimes; i++) {
        let myP = document.createElement("p");
        
        myP.textContent = i + ". " + mySentence;
        myDiv.appendChild(myP);
    }

    body.appendChild(myDiv);
}