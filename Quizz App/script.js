var submitBtn=document.querySelector("#submit");

function result(){
    var score =0;
    
    if (document.getElementById(correct1).checked){
        //alert("correct")
        score++;
    }
   // else{
      //  alert("wrong")
   // }
    if (document.getElementById(correct2).checked){
       // alert("correct")
        score++;
    }
   // else{
        //alert("wrong")
    //}
    if (document.getElementById(correct3).checked){
        //alert("correct")
        score++;
    }
    //else{
       // alert("wrong")
    //}
    if (document.getElementById(correct4).checked){
        //alert("correct")
        score++;
    }
   // else{
        //alert("wrong")
    //}
    if (document.getElementById(correct5).checked){
        //alert("correct")
        score++;
    }
    //else{
        //alert("wrong")
    //}
    //return  score;
    document.write("Your Score is: "+result());
}
//submitBtn.addEventListener("onclick", result());
