function newElement() {
    let toDO = document.querySelector("#task").value;
    if(toDO.trim().length > 0) {
        let toDoLi = document.createElement("li");
        let toDoList = document.querySelector("#list");
        toDoLi.innerHTML = toDO;
        toDoList.append(toDoLi);
        document.querySelector("#task").value = "";
        //triggering the toast that will be shown when the item added.
        $(".success").toast("show");
    } else {
        //triggering the toast that will be shown when the item couldn't be added.
        $(".error").toast("show");
    }
}

