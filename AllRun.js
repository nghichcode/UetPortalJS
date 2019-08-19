// 0. Auto Find
var se="PES",NN=Date.now();var f=function(){	
	if( Date.now()-NN<(Math.floor(Math.random()*30+20))*1000 ) {console.log(">");return;}
	NN=Date.now();console.clear();console.log(new Date().toLocaleString());
	$.post("http://dangkyhoc.vnu.edu.vn/danh-sach-mon-hoc/1/1", function(data,status){
		if(data==$("#divDSDK table tbody").html()){console.log("Same"); return;}
		x=new DOMParser().parseFromString("<ncroot>"+data+"</ncroot>","text/xml");
		q=x.querySelectorAll("tr[title]");set=new Set();
		d=function(c){clearInterval(si);if(c!="-1"){f1(c);console.log("Found");}}
		e=function(s){s.split(/[\n\s\b]/g).join(""); return s.trim().split(/\n/g)[0];}
		for(var i=0;i<q.length;i++){
			if($(q[i].children).first().html().search("data-rowindex")>=0){
				set.add(e(q[i].children[1].textContent));
				var c=q[i].children[0].children[0].getAttribute("data-rowindex");
				if(q[i].children[4].innerHTML.search(se)>=0){d(c);break;}
			}
		}
			console.table(Array.from(set));$("#divDSDK table tbody").html(data);
	});}
var si=setInterval(f,10000);
// Da DK
// 1. Chon mon hoc
function f1(rid){$.post("http://dangkyhoc.vnu.edu.vn/chon-mon-hoc/"+rid+"/1/1", function(dt,st){ console.log(dt);f2(); });}
// 2. Xac nhan
function f2(){$.post("http://dangkyhoc.vnu.edu.vn/xac-nhan-dang-ky/1", function(dt,st){ console.log(dt);f3() });}
// 3. Refresh
var f3=function(){console.log("Renew");
	$.post("http://dangkyhoc.vnu.edu.vn/danh-sach-mon-hoc-da-dang-ky/1", function(data,status){
		$("#registered-container table tbody").html(data);
	});
}

// ===========================================
// 1. http://dangkyhoc.vnu.edu.vn/kiem-tra-tien-quyet/0005462/1
// 2. http://dangkyhoc.vnu.edu.vn/chon-mon-hoc/367/1/1
// 3. http://dangkyhoc.vnu.edu.vn/danh-sach-mon-hoc/1/1
// 4. http://dangkyhoc.vnu.edu.vn/danh-sach-mon-hoc-da-dang-ky/1

// Chua DK
// #divDSDK table tbody
// Da DK
// #registered-container table tbody

// ===========================================
// POST /kiem-tra-tien-quyet/0005462/1 HTTP/1.1
// Host: dangkyhoc.vnu.edu.vn
// Connection: keep-alive
// Content-Length: 0
// Accept: application/json, text/javascript, */*; q=0.01
// Origin: http://dangkyhoc.vnu.edu.vn
// X-Requested-With: XMLHttpRequest
// User-Agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
// Referer: http://dangkyhoc.vnu.edu.vn/dang-ky-mon-hoc-nganh-1
// Accept-Encoding: gzip, deflate
// Accept-Language: vi-VN,vi;q=0.9,en;q=0.8
// Cookie: _ga=GA1.3.448255916.1560432782; __zlcmid=smiJEDocgW9oaB; __RequestVerificationToken=Ev5Pd1IOzpCkxbei5Pu0y3GGUpHeBLVXqXArfBpsepD6_oidntlURVyBdCwImLW8tn_45PqI0veFYKiiQ8z7eaXV7gM1; ASP.NET_SessionId=2jzk0cjixxo3xevqofphscsj; _gid=GA1.3.757069430.1566203135; _gat=1

// POST /chon-mon-hoc/367/1/1 HTTP/1.1
// Host: dangkyhoc.vnu.edu.vn
// Connection: keep-alive
// Content-Length: 0
// Accept: application/json, text/javascript, */*; q=0.01
// Origin: http://dangkyhoc.vnu.edu.vn
// X-Requested-With: XMLHttpRequest
// User-Agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
// Referer: http://dangkyhoc.vnu.edu.vn/dang-ky-mon-hoc-nganh-1
// Accept-Encoding: gzip, deflate
// Accept-Language: vi-VN,vi;q=0.9,en;q=0.8
// Cookie: _ga=GA1.3.448255916.1560432782; __zlcmid=smiJEDocgW9oaB; __RequestVerificationToken=Ev5Pd1IOzpCkxbei5Pu0y3GGUpHeBLVXqXArfBpsepD6_oidntlURVyBdCwImLW8tn_45PqI0veFYKiiQ8z7eaXV7gM1; ASP.NET_SessionId=2jzk0cjixxo3xevqofphscsj; _gid=GA1.3.757069430.1566203135; _gat=1

// POST /danh-sach-mon-hoc-da-dang-ky/1 HTTP/1.1
// Host: dangkyhoc.vnu.edu.vn
// Connection: keep-alive
// Content-Length: 0
// Accept: text/html, */*; q=0.01
// Origin: http://dangkyhoc.vnu.edu.vn
// X-Requested-With: XMLHttpRequest
// User-Agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
// Referer: http://dangkyhoc.vnu.edu.vn/dang-ky-mon-hoc-nganh-1
// Accept-Encoding: gzip, deflate
// Accept-Language: vi-VN,vi;q=0.9,en;q=0.8
// Cookie: _ga=GA1.3.448255916.1560432782; __zlcmid=smiJEDocgW9oaB; __RequestVerificationToken=Ev5Pd1IOzpCkxbei5Pu0y3GGUpHeBLVXqXArfBpsepD6_oidntlURVyBdCwImLW8tn_45PqI0veFYKiiQ8z7eaXV7gM1; ASP.NET_SessionId=2jzk0cjixxo3xevqofphscsj; _gid=GA1.3.757069430.1566203135; _gat=1

// POST /xac-nhan-dang-ky/1 HTTP/1.1
// Host: dangkyhoc.vnu.edu.vn
// Connection: keep-alive
// Content-Length: 0
// Accept: application/json, text/javascript, */*; q=0.01
// Origin: http://dangkyhoc.vnu.edu.vn
// X-Requested-With: XMLHttpRequest
// User-Agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
// Referer: http://dangkyhoc.vnu.edu.vn/dang-ky-mon-hoc-nganh-1
// Accept-Encoding: gzip, deflate
// Accept-Language: vi-VN,vi;q=0.9,en;q=0.8
// Cookie: _ga=GA1.3.448255916.1560432782; __zlcmid=smiJEDocgW9oaB; __RequestVerificationToken=Ev5Pd1IOzpCkxbei5Pu0y3GGUpHeBLVXqXArfBpsepD6_oidntlURVyBdCwImLW8tn_45PqI0veFYKiiQ8z7eaXV7gM1; ASP.NET_SessionId=2jzk0cjixxo3xevqofphscsj; _gid=GA1.3.757069430.1566203135
