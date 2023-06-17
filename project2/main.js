var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

//addItem function
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem=document.getElementById('item').value;

    //create li element
    var li=document.createElement('li');
    li.className='list-group-item';
    // console.log(li);

    li.appendChild(document.createTextNode(newItem));

    //delete button
    var deleteBtn=document.createElement('button');
    var editBtn=document.createElement('button');
    
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.className='btn btn-primary btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Edit'));


    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentNode;
            itemList.removeChild(li);
        }
    }
}