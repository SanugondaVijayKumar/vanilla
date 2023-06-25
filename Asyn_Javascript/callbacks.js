const posts=[
    {title:'Post one',body:'This is post one'},
    {title:'Post two',body:'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach(post=>{
            console.log(post.title);
            output+=`<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;
        console.log('executing');
    },1000);
}

function createPost(input){
    console.log("post called");
    console.log(input);
    
    setTimeout(()=>{
        posts.push(input);
    },1000);
}


const post4 = {title:'Post Three',body:'This is post three'};
createPost(post4);
getPosts();
