// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// // console.log(headerTitle);
// // // headerTitle.textContent='Hello';
// // // headerTitle.innerText='Good Bye';
// // // console.log(headerTitle.textContent);
// // // console.log(headerTitle.innerText);
// // headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='3px solid #000';
// var addItems=document.querySelector('h2');

// addItems.style.color='green';

//Get elements by class name
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';

// items.style.backgroundColor='#f4f4f4';
// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }
// items[2].style.backgroundColor='green';
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

//Get elements by Tagname
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// //li.style.backgroundColor='#f4f4f4';
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

//QUERYSELECTOR//
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
