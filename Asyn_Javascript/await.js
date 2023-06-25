console.log('person1:shows ticket');
console.log('person2:shows ticket');

// const wifeBringsTicket=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// });

// const getPopCorn=wifeBringsTicket.then((t)=>{
//     console.log(`wife:I have the tickets`);
//     console.log(`husband:we should go in`);
//     console.log(`wife:No I am hungry`);
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} popcorn`)
//     })
// })

// const getButter=getPopCorn.then((t)=>{
//     console.log(`husband:I got some popcorn`);
//     console.log(`husband:we should go in`);
//     console.log(`wife:I need butter on my popcorn`);
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} butter`);
//     })
    
//     });

// getButter.then((t)=>{
//         console.log(t);
//     })

const preMovie=async ()=>{
    const wifeBringsTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });

    let ticket='';
    try{
        const getPopCorn=new Promise((resolve,reject)=>{
            resolve('popcorn');
        })
        const getCandy=new Promise((resolve,reject)=>{
            resolve('candy');
        })
        const getCoke=new Promise((resolve,reject)=>{
            resolve('coke');
        })
        const getColdDrinks=new Promise((resolve,reject)=>{
            resolve('colddrinks');
        })

        ticket=await wifeBringsTicket;
        // console.log(`wife:I have the ${ticket}`);
        // console.log(`husband:we should go in`);
        // console.log(`wife:No I am hungry`);

        let [popcorn,candy,coke,colddrinks]=await Promise.all([getPopCorn,getCandy,getCoke,getColdDrinks]);
        console.log(`${popcorn},${candy},${coke},${colddrinks}`);
        // console.log(`husband:I got some ${popcorn}`);
        // console.log(`husband:we should go in`);
        // console.log(`wife:I need butter on my popcorn`);
        

        //let butter=await addButter;
        // console.log(`husband:I got some ${butter}`);
        // console.log(`husband:Anything else darling?`);
        // console.log(`wife:I want cold drinks`);
        

        //let colddrinks=await getColdDrinks;
        // console.log(`husband:I got ${colddrinks}`);
        // console.log(`wife:lets go we are getting late`);
        // console.log(`husband:Thanks for reminding *grins`);
        
        }catch(err){
        console.log(err);
    }
    return ticket;

};
preMovie().then((m)=>console.log(`person3:shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');