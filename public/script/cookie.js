
const cookieBox = document.querySelector('#cookie-box');
let cookieCtrl = false; 
// 내 사이트에 접속 했을 때 회사가 고객을 구분하기 위해서도 쿠키 사용
document.querySelector('.close-btn').addEventListener('click', function(){
  // cookieBox.classList.add('hide');
  cookieBox.style.display = "none";
})
document.querySelector('.accept').addEventListener('click', function(){
  document.cookie = "brandName=brand; max-age=60*60*24*30";
  // cookieBox.classList.add('hide'); 
  cookieBox.style.display = "none";
})
    
document.querySelector('.cookieCheck').addEventListener('change', function(){
       cookieCtrl = !cookieCtrl; 
       if( !cookieCtrl ){
          document.cookie = "brandName=brand; max-age=60*60*24";
       }else{
          document.cookie = "brandName=brand; max-age=0";
       }
    })
    
    function  getCookeName(name){
        // match 정규표현식 중 문자열에서 일치되는 문자열 찾는 함수 
        var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
        return r ? r[1]: '';
    }
    
    window.onload = ()=>{
        let findName = getCookeName('brandName');
        console.log( findName );
        if( findName === 'brand'){
            cookieBox.style.display = "none";
        }else{
            cookieBox.style.display = "flex";
        }
    }

    const loginBtn = document.querySelector('#loginBtn');
    const registerBtn = document.querySelector('#registerBtn');
    const logoutBtn = document.querySelector('#logoutBtn');
    if(document.cookie){
      loginBtn.classList.add('hide');
      registerBtn.classList.add('hide');
      logoutBtn.classList.remove('hide');
    }else{
      logoutBtn.classlist.add('hide');
    }
    
    logoutBtn.addEventListener('click', ()=>{
      document.cookie = 'login=ok; max-age=0';
      document.cookie = 'brandName=brand; max-age=0';
      loginBtn.classList.remove('hide');
      registerBtn.classList.remove('hide');
      logoutBtn.classList.add('hide');
    })