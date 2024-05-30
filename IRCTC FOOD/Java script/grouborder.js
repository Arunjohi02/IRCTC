var customorname=document.getElementById("customer-name");
var customormobile=document.getElementById("customer-number");
var customormail=document.getElementById("customer-mail");
var customorseatnum=document.getElementById("customer-count");
var customorPNR=document.getElementById("customer-pnr");
var customorreviwe=document.getElementById("customer-reviwe");
var checkbox=true;

function Submit(){
    var cname=customorname.value;
    var cmobile=customormobile.value;
    var cmail=customormail.value;
    var cnum=customorseatnum.value;
    var cpnr=customorPNR.value;
    var creview=customorreviwe.value;

    console.log(cname);
    console.log(cmobile);
    console.log(cmail);
    console.log(cnum);
    console.log(cpnr);
    console.log(creview);

    if(cname,cmobile,cmail,cnum,cpnr,creview){
        alert("Register Succsessfully!!");
    }

    else{
        alert("Please Full the form");
        console.error("Form NOT FULL;");
    }
}