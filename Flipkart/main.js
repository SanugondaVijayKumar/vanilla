

function AddItem(event){
    event.preventDefault();
    console.log("Entered into AddItem Event");
    const sellingPrice=event.target.selling_price.value;
    const productName=event.target.product_name.value;
    console.log(sellingPrice);
    console.log(productName);
    const obj={
        sellingPrice,
        productName
    };
    axios.post('https://crudcrud.com/api/febfe8bcfa3e4cdbbe2f1ec011e08c74/data',obj)
    .then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err);
    })

    showOutput(obj);
}


window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/febfe8bcfa3e4cdbbe2f1ec011e08c74/data')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            showOutput(response.data[i])
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    const value=document.getElementById('totalCost');
    value.innerHTML='<p>Rs 0</p>';
})


function showOutput(user){
    document.getElementById('selling_price').value='';
    document.getElementById('product_name').value='';

    const parentNode=document.getElementById('Items');
    const childHTML=`<li id=${user.productName}> ${user.sellingPrice}-${user.productName}
                    <button onclick=deleteItem('${user.productName}')>Delete Product</button>
                    </li>`;
    parentNode.innerHTML=parentNode.innerHTML+childHTML;

    axios.get('https://crudcrud.com/api/febfe8bcfa3e4cdbbe2f1ec011e08c74/data')
    .then((response)=>{
        let totalCost=0;
        for(var i=0;i<response.data.length;i++){
            totalCost+=parseInt(response.data[i].sellingPrice);
        }
        const value=document.getElementById('totalCost');
        value.innerHTML='Rs '+totalCost;
    }).catch((err)=>{
        console.log(err);
    })

}

function deleteItem(productName){
    axios.get('https://crudcrud.com/api/febfe8bcfa3e4cdbbe2f1ec011e08c74/data')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            let pName=response.data[i].productName;
            if(pName===productName){
                let id=response.data[i]._id;
                //console.log("id=",id);
                let vv='https://crudcrud.com/api/febfe8bcfa3e4cdbbe2f1ec011e08c74/data/'+`${id}`;
                axios.delete(vv).then((res)=>{
                    console.log(res);
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    })

    removeUserFromScreen(productName);
}

function removeUserFromScreen(productName){
    const parentNode=document.getElementById('Items');
    const childElementToBeDeleted=document.getElementById(productName);

    parentNode.removeChild(childElementToBeDeleted);

    axios.get('https://crudcrud.com/api/febfe8bcfa3e4cdbbe2f1ec011e08c74/data')
    .then((response)=>{
        let totalC=0;
        for(var i=0;i<response.data.length;i++){
            totalC+=parseInt(response.data[i].sellingPrice);
        }
        
        const value=document.getElementById('totalCost');
        value.innerHTML='Rs '+totalC;
    }).catch((err)=>{
        console.log(err);
    })
}