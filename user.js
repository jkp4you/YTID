// ============= code to register user ===================
function userreg(){
    var uid=document.getElementById("userid").value;
    var upass=document.getElementById("userpass").value;
    localStorage.setItem(uid,upass);
    alert("user registered succesfully");
}
// ============= code to login user ===================
function userlogin(){
    alert("are you sure");
    var uid=document.getElementById("userid").value;
    var upass=document.getElementById("userpass").value;
    var up=localStorage.getItem(uid);
    if(upass==up){
        window.location.href="userhome.html";  
        alert("login succes"); 
        
    }
    else{
        alert("incorrect id or password");
    }

}