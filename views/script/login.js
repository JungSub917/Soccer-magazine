const loginbtn = document.querySelector('.loginbtn');
const userName = document.querySelector('#userName');
const userPwd = document.querySelector('#userPwd');

loginbtn.addEventListener('click', function(){
  // console.log(userName.value, userPwd.value);
  // const user = { id : id.value, pw : pw.value}

  fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({ id : id.value, pw : pw.value}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then((res) => res.json())
.then(json => {
if(json.success){
  document.cookie = 'login=ok'
  location.replace('http://localhost:3000/');
  //리다이렉트 : index.html
}
else{
  alert(json.message);
}
});
});