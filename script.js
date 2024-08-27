document.getElementById('simpleForm').addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value.trim();
    let age=parseInt(document.getElementById('age').value.trim());
    if (name==="" && isNaN(age)) {
        alert("inputs cannot be empty.");
    }
})