var buttonClick = document.querySelector("#button1");
var textArea = document.querySelector(".text");
var myul = document.querySelector(".add");


function newItem() {
    var input = document.createTextNode(textArea.value);
    var newli = document.createElement("li");
    var button = document.createElement("BUTTON");
    var but = document.createTextNode("X");

    if (textArea.value === "") {
        alert("You have to write something");
    } else {
        button.appendChild(but);
        newli.append(input);
        newli.append(button);
        myul.appendChild(newli);

        document.querySelector(".text").value = "";

        newli.addEventListener("click", function() {
            if (newli.style.textDecoration == "none") {
                newli.style.textDecoration = "line-through";
            } else {
                newli.style.textDecoration = "none";
            }

        })

        button.addEventListener("click", function() {
            button.parentNode.remove();
        })
    }

}
buttonClick.addEventListener("click", function() {
    newItem();
})