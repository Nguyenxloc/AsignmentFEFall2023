function leet(){
    const num = [3,2,3];
    let result = [];
    let count=0;
    //input
    for (let i = 0; i < num.length; i++) {
         for(let j =i+1;j<num.length;j++){
            if(num[i]==num[j]){
                count ++;
                if(count>=((num.length/3))){
                    result.push(num[i]);
                    count==0;
                }
            }
         }
      }
      console.log(result);
}
leet();