const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../views')));

const users = [
  {id : 'test01', pw : '12345'},
  {id : 'test02', pw : '12345'},
  {id : 'test03', pw : '12345'},
  {id : 'test04', pw : '12345'},
  {id : 'test05', pw : '12345'}
]

app.get('/', (req, res)=>{ 
  res.sendFile( path.join( __dirname, 'views', 'index.html' ))
})
app.get('/subscribe', (req, res)=>{ 
  res.sendFile( path.join( __dirname, 'views', 'subscribe.html' ))
})
app.get('/login', (req, res)=>{ 
  res.sendFile( path.join( __dirname, 'views', 'login.html' ))
})
app.post('/login', (req, res)=>{ 
  // console.log( req.body.id  );
  
  // for(let a = 0 ; a<users.length; a++){
  //       if( users[a].id == req.body.id ){
  //           if( users[a].pw == req.body.pw ){
  //             res.send( { success :  `${req.body.id}님 안녕하세요.`} );
  //             res.end();
  //           }else{
  //             res.send( { success : "id 또는 pw를 확인하세요."} );
  //             res.end();
  //           }
  //       }else{
  //         res.send( { success : "id 또는 pw를 확인하세요."} );
  //         res.end();
  //       }
  // }
    // console.log( 'test', req.body );
    const user = users.find( user => user.id === req.body.id )

    // 문자든 0이  아닌 숫자 : true
    // 0, false, null, undefined  : false
    if( user ) res.send( { success : true, message: `${user.id}님 안녕하세요.`} );
    else  res.send( { success : false, message: "id 또는 pw를 확인하세요."} );
})
app.get('/support', (req, res)=>{ 
  res.sendFile( path.join( __dirname, 'views', 'support.html' ))
})
app.get('/record', (req, res)=>{ 
  res.sendFile( path.join( __dirname, 'views', 'record.html' ))
})
app.get('/register', (req, res)=>{ 
  res.sendFile( path.join( __dirname, 'views', 'register.html' ))
})
app.get('/*', (req, res)=>{ 
  res.sendFile( path.join( __dirname, 'views', '404.html' ))
})

app.listen(PORT, ()=>{
  console.log(`server running on PORT ${PORT}`);
});