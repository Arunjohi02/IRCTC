// alert("welcome to login page!!!!")

var customorname=document.getElementById("username");
var customormail=document.getElementById("email");

function update(){
    var cname=customorname.value;
    console.log(cname);
    var cmail=customormail.value;
    console.log(cmail);

    if(cname,cmail==""){
        // console.log("NO Details");
        alert("Please Enter your Details");
    }

    else{
        // console.log("Thank you");
        alert("Thankyou for our wisit!!");
    }
}