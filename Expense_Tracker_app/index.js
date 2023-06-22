const myform=document.getElementById('my-form');
const expense_amount=document.getElementById('expense_amount');
const description=document.getElementById('description');
const category=document.getElementById('category');
const message=document.querySelector('.message');
const userList=document.getElementById('users');

myform.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(expense_amount.value==='' || description.value===''){
        message.classList.add('error');
        message.innerHTML='Please enter all fields';
        message.style.color='red';
        setTimeout(()=>message.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${expense_amount.value}-${category.value}-${description.value}`));
        userList.appendChild(li);
        //adding delete button
        var deleteBtn=document.createElement('button');
        deleteBtn.className='btn btn-sm btn-danger float-right delete';

        //adding edit button
        var editBtn=document.createElement('button');
        editBtn.class='btn btn-sm btn-warning float-right delete';

        deleteBtn.appendChild(document.createTextNode('Delete Expense'));
        editBtn.appendChild(document.createTextNode('Edit Expense'));

        deleteBtn.onclick=()=>{
            expense_amount.value=``;
            description.value=``;
            localStorage.removeItem(myobj.expense_amount);
            userList.removeChild(li);
        }
        editBtn.onclick=()=>{
            expense_amount.value=`${myobj.expense_amount}`;
            description.value=`${myobj.description}`;
            localStorage.removeItem(myobj.expense_amount);
            userList.removeChild(li);
        }
        const myobj={
            expense_amount:expense_amount.value,
            description:description.value,
            category:category.value
        };
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        

        //adding to local storage
        localStorage.setItem(JSON.parse(JSON.stringify(myobj.expense_amount)),JSON.stringify(myobj))
    }
}