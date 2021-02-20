function removeChar() {
    var str = document.getElementById("str").value;
    var i = document.getElementById("i").value;
    var total = str.replace(str.charAt(i) ,'');
    // var one = str.substring(0,i);
    // var two = str.substring(i+1,str.length+1);
    // var total = one + two;
    document.querySelector(".result").innerHTML = total;
 } 