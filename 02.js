var addTwoNumbers = function(l1, l2) {
    let revl1=[];
    for(let i = l1.length-1; i>=0; i--){
        revl1.push(l1[i]);
    }
    let revl1Num = Number(revl1.join(''));

    let revl2=[];
    for(let i = l2.length-1; i>=0; i--){
        revl2.push(l2[i]);
    }
    let revl2Num = Number(revl2.join(''));
    
    let finalRslt = revl1Num+revl2Num;
    let arr = finalRslt.toString().split('').map(x=> parseInt(x))
    return arr;
};