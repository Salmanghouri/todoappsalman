var todolist = document.getElementById("todolist");

function Additem() {

        var todoitem = document.getElementById("todoitem");
        if (todoitem.value !="") {
        var li = document.createElement("li");
        var item = document.createTextNode(todoitem.value);
        li.appendChild(item);

        //create delete button
        var button = document.createElement("button");
        var buttontext = document.createTextNode("Delete");
        button.appendChild(buttontext);
        button.setAttribute("class", "inlinebttn")
        button.setAttribute("onclick", "Deleteli(this)")
        li.appendChild(button);

        //create edit button
        var button = document.createElement("button");
        var buttontext = document.createTextNode("Edited");
        button.appendChild(buttontext);
        button.setAttribute("class", "inlinebttn")
        button.setAttribute("onclick", "Editedli(this)")
        li.appendChild(button);

        var hr = document.createElement("hr");
        li.appendChild(hr);
        todolist.appendChild(li);
        todoitem.value = "";
    }
    else{
        alert("Please Enter same value");
    }
}

function Deleteli(dltbttn) {
    dltbttn.parentNode.remove();
}

function Editedli(editbttn) {
    var updateditem = prompt("Enter your updated value and your previous value is", editbttn.parentNode.firstChild.nodeValue);
    editbttn.parentNode.firstChild.nodeValue = updateditem;
}

function deleteall() {
    document.getElementById("todolist").innerHTML = "";
}




