function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', number);
    const obj = {
        name,
        email,
        number
    }
    // let obj_serialized = JSON.stringify(obj);
    // localStorage.setItem(obj.email, obj_serialized);
    axios.post('https://crudcrud.com/api/1f4d321a88864a69aa3f5cad21293645/data',obj)
    .then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err);
    })

    showNewUserOnScreen(obj);
}


window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/1f4d321a88864a69aa3f5cad21293645/data')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i])
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    
})

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';

    const parentNode = document.getElementById('ListOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email} 
                       <button onclick = deleteItem('${user.email}')>Delete User </button>
                       <button onclick = editUserdetails('${user.email}','${user.name}','${user.number}')>Edit user</button>
                       </li>`;
    
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserdetails(email, name, number){
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    document.getElementById('number').value = number;

    deleteItem(email);
}

function deleteItem(email){
    axios.get('https://crudcrud.com/api/1f4d321a88864a69aa3f5cad21293645/data')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            let em=response.data[i].email;
            if(em===email){
                let id=response.data[i]._id;
                console.log("id=",id);
                let vv='https://crudcrud.com/api/1f4d321a88864a69aa3f5cad21293645/data/'+`${id}`;
                axios.delete(vv).then((res)=>{
                    console.log(res);
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    })
    //console.log(email);
    //localStorage.removeItem(email);
    removeUserFromScreen(email);
}

function removeUserFromScreen(email){
    const parentNode = document.getElementById('ListOfUsers');
    const childElementToBeDeleted = document.getElementById(email);

    parentNode.removeChild(childElementToBeDeleted);
}