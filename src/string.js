
function add(num){

    //spliting the string
    num = num.split('');
    var neg = 0,
    minus = '-',
    sum = 0,
    newNum = 0;

    //looping through everything to get the negatives
    for(var a=0; a<num.length; a++){
        if(num[a] == minus){
            neg += num[a+1];
        }
    }

    //if the string is empty, 0 will be returned
    if(num == ""){
        return 0;

    //if there is a negative, an exception will be thrown
    } else if (neg) {
        neg = neg.split('');

        for(var a=0; a<neg.length; a++){
            neg[a] *= -1;
    }
        neg = neg.join('');
        throw new Error("no negatives are allowed" + " " + neg); 

    //if there are positives, sum will be returned
    } else {
    for(var a=0; a<num.length; a++){
        var divide = num[a] / 1;; 

        if(Number(divide)){
            newNum += num[a];
        }
    }

    for(var a=0; a<newNum.length; a++){
        sum += parseInt(newNum[a]);
    }
        return sum; 
    }
}

