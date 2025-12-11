function first(callback){
    setTimeout(()=> console.log("A"), 0);
    callback();
}

first(() => console.log("B"));