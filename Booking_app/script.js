

var form=document.getElementById('form');
var message=document.querySelector('#message');


form.addEventListener('submit',addItem);

function addItem(event){
    event.preventDefault();
    var username=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone_number=document.getElementById('phone_number').value;
    
    //creating li elements
    var item=document.createElement('li');
    item.className='list-group-item list';
    
    item.appendChild(document.createTextNode(username+" "+email+" "+phone_number));
    var obj={
        "username":username,
        "email":email,
        "phone number":phone_number
    };

    message.appendChild(item);
    localStorage.setItem(username,JSON.stringify(obj));
    
}