var http = require('http');
var fs = require('fs');
var url = require('url'); // fs http url -> 모듈
var qs = require('querystring');

function templateHTML(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>        
    `;
  }

function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i = i + 1;
  }
  list = list + '</ul>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js'; 
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`); 
          response.writeHead(200);
          response.end(template);
        })
      } else{
         fs.readdir('./data', function(error, filelist){
            fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
              var title = queryData.id;
              var list = templateList(filelist);
              var template = templateHTML(title, list, `<h2>${title}</h2>${description}`, 
              `<a href="/create">create</a>
               <a href="/update?id=${title}">update</a>
               <form action="/delete_process" method="post">
                 <input type="hidden" name="id" value="${title}">
                 <input type="submit" value="delete">
               </form>`); 
              response.writeHead(200);
              response.end(template);
            });
         });  
        }
      } else if(pathname === '/create'){
        fs.readdir('./data', function(error, filelist){
          var title = 'Web - Create';
          var list = templateList(filelist);
          var template = templateHTML(title, list, `
            <form action="/create_process" method="post">
            <p><input type='text' name="title" placeholder="title"></p>
            <p>
                <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
                <input type="submit">
            </p>
            </form>
          `, ''); 
          response.writeHead(200);
          response.end(template);
        });
      } else if(pathname === '/create_process'){
        var body = '';
        request.on('data', function(data){
          body = body + data;
        }); // 데이터 들어오면 콜백함수 작동
        request.on('end', function(){
          var post = qs.parse(body);  // qs모듈의 parse 함수. 지금까지 들어온 body 정보에 post 데이터 입력.
          var title = post.title;
          var description = post.description;
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`}); // 302 포트는 리다이렉션 의미(영구x)
            response.end();
          })
        });
      } else if(pathname === '/update'){
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list,
               `
               <form action="/update_process" method="post">
                  <input type="hidden" name="id" value="${title}">
                  <p><input type='text' name="title" placeholder="title" value="${title}"></p>
                  <p>
                      <textarea name="description" placeholder="description" >${description}</textarea>
                  </p>
                  <p>
                      <input type="submit">
                  </p>
               </form>
               `, 
               `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`); 
            response.writeHead(200);
            response.end(template);
          });
       }); 
      } else if(pathname === '/update_process'){
        var body = '';
        request.on('data', function(data){
          body = body + data;
        });
        request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var title = post.title;
          var description = post.description;
          fs.rename(`data/${id}`, `data/${title}`, function(error){
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
              response.writeHead(302, {Location: `/?id=${title}`});
              response.end();
            })
          })
        });     
      }else if(pathname === '/delete_process'){
        var body = '';
        request.on('data', function(data){
          body = body + data;
        });
        request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          fs.unlink(`data/${id}`, function(error){
            response.writeHead(302, {Location: "/"});
            response.end();
          })
        });     
      } else {
        response.writeHead(404); // 200 -> 성공적으로 전송됨,  404 -> 에러
        response.end('Not Found');
      }
 
});
app.listen(3000);

// main.js 파일을 수정하면 node main.js 로 재실행을 해줘야 하지만 data file이 변경되었을 경우엔 페이지 새로고침만 해도 반영됨.

