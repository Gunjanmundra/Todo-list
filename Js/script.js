var buttonClick = document.querySelector("#button1");


function newItem() {

    var textArea = document.querySelector(".text").value;
    var myul = document.querySelector(".add");
    var newli = document.createElement("li");
    var input = document.createTextNode(textArea);
    var button = document.createElement("BUTTON");
    var but = document.createTextNode("X");


    if (textArea === "") {
        alert("You have to write something");
    } else {
        button.appendChild(but);
        newli.append(input);
        newli.append(button);
        myul.appendChild(newli);


        document.querySelector(".text").value = "";

        newli.addEventListener("click", function() {
            newli.style.textDecoration = "line-through";
        })
        button.onclick = removeItem;
    }

}
buttonClick.addEventListener("click", function() {
    newItem();
})

function removeItem(e) {
    e.target.parentElement.removeChild(e.newli);

}