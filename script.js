function removeChar() {
    var str = document.getElementById("str").value;
    var i = document.getElementById("i").value;
    var total = str.replace(str.charAt(i) ,'');
    document.querySelector(".result").innerHTML = total;
 } 
