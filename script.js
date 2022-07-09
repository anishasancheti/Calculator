let str2 = ''
function cal(str){
    console.log(str);
    if (str == '=') {
        let ans = eval(str2);
        console.log(ans);
        str2 = ans;
        console.log(str2);
        document.getElementById('out').value = str2;
    }
    else if (str == 'C') {
        str2 = '';
        console.log(str2);
        document.getElementById('out').value = str2;
    }
    else{
        str2 = str2+str;
        console.log(str2);
        document.getElementById('out').value = str2;
    }
}