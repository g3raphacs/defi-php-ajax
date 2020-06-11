let form = document.getElementById('form');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let mail = document.getElementById('mail');
let pass = document.getElementById('password');
let msgFirst = document.getElementById('msg-firstName');
let msgLast = document.getElementById('msg-lastName');
let msgMail = document.getElementById('msg-mail');
let msgPass = document.getElementById('msg-password');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    fetch( 'ajax.php', { method : "post" , body : formData } )
        .then( res => res.json() ).then( data =>{
            msgFirst.innerHTML = data.msg1;
        });
});