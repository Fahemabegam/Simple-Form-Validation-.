function validateForm(){
    //get inputs
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;

document.getElementById('nameError').innerHTML='';
document.getElementById('emailError').innerHTML='';

//validate name
if(name===''){
    document.getElementById('emailError').innerHTML='Name is Required';
    return false;
    }
var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
{
     document.getElementById('emailError').innerHTML='Email is Required';
     return false;

}
}