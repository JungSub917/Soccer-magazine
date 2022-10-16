const tabBox = document.querySelector(".tab-btns-box");
const tabBtns = document.querySelectorAll(".tab-btns a");
const tabList = document.querySelectorAll(".tab-btns li"); // 추가
const tabContent = document.querySelectorAll(".tab-content");
const tabs_attr = [];

[...tabBtns].forEach((tab, item)=>{
   tabs_attr[item] = tab.getAttribute('href');
})

console.log( tabs_attr );
// [ '#tab-content01', '#tab-content02', '#tab-content03', '#tab-content04', '#tab-content05' ]

tabBox.addEventListener( 'click', (event)=>{
    event.preventDefault();
    let target =  event.target.getAttribute('href');
    console.log( target );
    //  target을 배열과 비교하여 같은 인덱스를 구할 수 있음 

 
    [...tabContent].forEach((content, item)=>{
        // console.log( target.substr(1), content.getAttribute('id') );
        if( content.getAttribute('id')  === target.substr(1)){
            //content.style.display = 'block';
            content.classList.add('active');
        }else{
            //content.style.display = 'none';
            content.classList.remove('active');
        }
    });
    [...tabBtns].forEach((btn, item)=>{
        console.log( btn );
        if( btn.getAttribute('href')  === target){
            btn.classList.add('active');
        }else{
            //content.style.display = 'none';
            btn.classList.remove('active');
        }
    })
})
document.querySelector('.tab-btns>li:nth-child(1)>a').click();
// 트리거: 사용자가 클릭한 것처럼 만듬
