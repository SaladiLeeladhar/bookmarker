// listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);
//save book mark
function saveBookmark(e){

//get form values
const siteName=document.getElementById('siteName').value;
console.log('siteName');
//prevent fform from submitiing
    e.preventDefault();
}