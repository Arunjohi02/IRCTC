var station=document.getElementById("mainstation");
var number=document.getElementById("pnrnumber");
function submit(){
    var fname=station.value;
    var fnumber=number.value;

    console.log(fname);
    console.log(fnumber);

    if(fname,fnumber){
        alert("Succsess!!");
    }

    else{
        alert("Plese Enter Your Details");
    }
}