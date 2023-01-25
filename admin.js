// ============= code to register master ===================


function adminreg(){
    var aid=document.getElementById("adminid").value;
    var apass=document.getElementById("adminpass").value;
    localStorage.setItem(aid,apass);
    alert("admin registered succesfully");
    
}
// ============= code to login master ===================

function adminlogin(){
    alert("are you sure");
    var aid=document.getElementById("adminid").value;
    var apass=document.getElementById("adminpass").value;
    var ap=localStorage.getItem(aid);
    if(apass==ap){
       
        window.location.href="adminhome.html";  
        alert("login succes");     
    }
    else{
        alert("incorrect id or password");
    }

}

// ============= code to add question ===================

function addquestion(){
    var q=document.getElementById("question").value;
    localStorage.setItem("q",q);
    alert("question added");
}