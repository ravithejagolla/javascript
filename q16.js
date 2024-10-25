let n=10

for(let i=1;i<=n;i++){
    let bag=""
    if(i%7===0){
        break;
    }else{
        for(let j=1;j<i;j++){
            if(j%3===0){
                continue;
            }else{
                bag+=j+" "
            }
    }
    }
    console.log(bag)
}