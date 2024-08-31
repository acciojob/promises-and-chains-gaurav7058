document.getElementById('simpleForm').addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value.trim();
    let age=parseInt(document.getElementById('age').value.trim());
	let dataInfo=document.getElementById("data-info");
    if (name==="" && isNaN(age)) {
        alert("inputs cannot be empty.");
    }

	let promise=new Promise((resolved,rejected)=>{
    if(age>=18){
			resolved(`Welcome, ${name}. You can vote.`)
		}
		else{
			rejected(`Oh sorry ${name}. You aren't old enough.`)
		}
})
promise.then((message)=>{
    dataInfo.innerHTML=message
}).catch(Error=>{
    dataInfo.innerHTML=Error
})
})