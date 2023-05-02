function newElement() {
    let toDO = document.querySelector("#task").value;
    let toast;
    if(toDO.trim().length > 0) {
        let toDoLi = document.createElement("li");
        let toDoList = document.querySelector("#list");
        toDoLi.innerHTML = toDO;
        toDoList.append(toDoLi);
        document.querySelector("#task").value = "";
        //triggering the toast that will be shown when the item added.
        let toastSuccess = document.querySelector("#liveToast-success")
        toast = new bootstrap.Toast(toastSuccess);
        toast.show();
    } else {
        //triggering the toast that will be shown when the item couldn't be added.
        let toastError = document.querySelector("#liveToast-error")
        toast = new bootstrap.Toast(toastError);
        toast.show();
    }
}