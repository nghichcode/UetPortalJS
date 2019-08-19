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

function f1(rid){$.post("http://dangkyhoc.vnu.edu.vn/chon-mon-hoc/"+rid+"/1/1", function(dt,st){ console.log(dt);f2(); });}
function f2(){$.post("http://dangkyhoc.vnu.edu.vn/xac-nhan-dang-ky/1", function(dt,st){ console.log(dt);f3() });}
var f3=function(){console.log("Renew");
	$.post("http://dangkyhoc.vnu.edu.vn/danh-sach-mon-hoc-da-dang-ky/1", function(data,status){
		$("#registered-container table tbody").html(data);
	});
}
