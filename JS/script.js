// //Datatypes
// var p = 20;//NUmber
// var q = "Hello";//String
// var bool = true;//Boolean
// var r;//undefiend
// var s=null;//null

// var arr = [1,2,3,4,5];
// console.log(arr);

// var obj = {
//     name:"Aravind",
//     age:25
// }
// let a = 20;

// if(a%2===0){
//     console.log("Even number!!")
// }
// marks = 90
// var res = (marks>=90)?"Good":"bad";
// console.log(res);




// // arr = [1,2,3,4,5]
// // arr.forEach((val,index)=>{
// //     console.log(val,index)
// // }
// // )

// class Person{
//     name;
//     age;
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     display(){
//         console.log(this.name,this.age)
//     }
// }
// var p1 = new Person("Aravind",19)
// p1.display();


//  n = 9;
//  for(let i=2;i<=n;i++){
//     if(n%i==0){
//         console.log("Its a prime")
//         break;
//     }
//  }


// String = "23432";
// int = 0;
// float = String.length-1
// bool = false;
// while(int<=float){
//     if(String[int++]!=String[float--]){
//         bool=true
//         console.log("NOt a Palindrome")
//         return

//     }
// }
// console.log("Palindrome") 

// var demo = ()=>{
//     console.log("Hello world")
// }
// var main = (call)=>{
//     console.log("Main called");
//     call();
// }
// main(demo)



// var main = (call)=>{
//     console.log("Main called");
//     call();
// }
// main(()=>{
//   console.log("Hello world")
// })


// var add = (a,b,callback)=>{
//     var result = a+b;
//     callback(result);
// }
// add(1,2,(r)=>{
//     console.log(r);
// })\



//SetTimeout
// console.log("Hello timeout");
// var Demo = ()=>{
//     setTimeout(()=>{
//         console.log("Processing...");
//     },2000)
// }
// Demo();




//Template literals
// var age = 24;
// var str = `Aravind`;
// var sen = `${str} is of ${age} years Old!!`
// console.log(sen)

//Map

// console.log(arr.map((num)=>num*2))


//Filter
// var arr = [1,2,3,4,5]
// var even = arr.filter((num)=>num%2==0)
// console.log(even)

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var evencount = arr.map(num=>num**3).filter(num=>num%2==0).reduce((sum,num)=>(sum+1),0);
// console.log(evencount)

// const promise = new Promise((resolve,reject)=>{
//     var success = false
//     if(success){
//         resolve("Success")
//     }else{
//         reject("Failed");
//     }
// })
// promise.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))


// var getdata = ()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// getdata().then((msg)=>msg.json())
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err))


// const getData = async()=>{
//     var res = await fetch('https://jsonplaceholder.typicode.com/posts')
//        var data = await res.json();
//        console.log(data);
// }
// getData()

const getData = async(req,res)=>{
    try{
        var res = await fetch('https://jsonplaceholder.typicode.com/posts');
        var data = await res.json();
        console.log(data);
    }catch(err){
        console.log(err)
    }
}
getData()