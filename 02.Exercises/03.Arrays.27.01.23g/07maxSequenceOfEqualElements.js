function maxSequence(input) {

        let longestSequence=[];

        for(let i=0; i<input.length; i++){
            let currenSequence=[];
            currenSequence.push(input[i]);
            for(let j=i+1; j<input.length;j++){
                if((input[i])===(input[j])){
                    currenSequence.push(input[j]);
                }
                else{
                    break;
                }           
            }
            if(currenSequence.length>longestSequence.length){
                longestSequence=currenSequence;
            }
        }
        console.log(longestSequence.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])