function subbtn(){
 var burger = parseFloat(document.getElementById("burger").value)  
 var McPlant = parseFloat(document.getElementById("McPlant").value)
 var Wings = parseFloat(document.getElementById("Wings").value)
 var Drums = parseFloat(document.getElementById("Drums").value)
 var Lollypop = parseFloat(document.getElementById("Lollypop").value)
 var bacon = parseFloat(document.getElementById("bacon").value)
 var salad = parseFloat(document.getElementById("salad").value)
 var Pizza = parseFloat(document.getElementById("Pizza").value)

var totalBill = (burger*90)+(McPlant*360)+(Wings*200)+(Drums*220)+(Lollypop*260)+(bacon*290)+(salad*290)+(Pizza*150);

var cg = document.getElementById("cg").innerHTML = (9/100)*totalBill;
var sg = document.getElementById("sg").innerHTML = (9/100)*totalBill;
document.getElementById("TT").innerHTML = (cg+sg);
document.getElementById("GT").innerHTML =(cg+sg+totalBill);

}