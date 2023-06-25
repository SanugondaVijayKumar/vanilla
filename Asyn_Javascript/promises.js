// const posts=[
//     {title:'Post one',body:'This is post one',createdAt:new Date()},
//     {title:'Post two',body:'This is post two',createdAt:new Date()}
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach(post=>{
//             console.log(post.title);
//             output+=`<li>${post.title} and user's activity:${post.createdAt}</li>`;
//         })
//         document.body.innerHTML=output;
        
//     },3000);
// }

// const updateLastUserActivityTime=()=>{
//     return new Promise((resolve,_reject)=>{
//         setTimeout(()=>{
//             let lastactivityTime=posts[posts.length-1].createdAt;
            
//             resolve(lastactivityTime);
//         },1000);
//     })
// }

// const createPost=(input)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(input);
//             console.log(updateLastUserActivityTime());
    
//             const error=false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Error:Something went wrong!');
//             }
//     },1000);
//     });
    
    
// }

// createPost({title:'Post Three',body:'This is post three',createdAt:new Date()}).then(getPosts).catch(err=>console.log(err));

// //promise.all
// // const promise1=Promise.resolve('Hello world');
// // const promise2=10;
// // const promise3=new Promise((resolve,_reject)=>{
// //     setTimeout(resolve,2000,'Good Bye')
// // });

// Promise.all([createPost,updateLastUserActivityTime]).then((values)=>{
//     getPosts()
    
// }).catch((err)=>{
//     console.log(err)
// });

const posts=[{
    name:'vijay',
    activityTime:new Date().getTime()
}];
function createPost(post){
    return new Promise((resolve,reject)=>{
        posts.push(post);
        post.activityTime=new Date().getTime();
        resolve();
    })
    
}

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output+=`<li>${post.name} : ${post.activityTime}</li>`;
        })
        document.body.innerHTML=output;
    },1000);
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        posts[posts.length-1].activityTime=new Date().getTime();
        resolve(posts[0].activityTime);
    })
    
}

const promise1=createPost({
    name:'Hari charan',
    activityTime:new Date().getTime()
});
const promise2=updateLastUserActivityTime();

Promise.all([promise1,promise2])
.then(([createresolve,updatetimeresolve])=>{
    getPosts();
    console.log(updatetimeresolve)
    })
.catch((err)=>console.log(err));