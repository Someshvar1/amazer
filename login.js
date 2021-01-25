function addUser(){
    var player1=document.getElementById("player1_name_input").value;
    localStorage.setItem("player1_name",player1);
    window.location="amazer.html";
}