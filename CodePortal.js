// Show PES
$("tr[title]").each(function(){if(this.children[4].innerHTML.search("PES")<0) {$(this).toggle();}});
// Toggle Hide
$("tr[title]").each(function(){if(this.children[0].children.length==0) {$(this).toggle();}});
// ShowNotFull
$("tr[title]").each(function(){if(parseInt(this.children[5].innerHTML)<=parseInt(this.children[6].innerHTML)) {$(this).toggle();}});

// Auto Submit with crdid/ ma mon hoc
var p="",c=parseInt(p);
if (Number.isNaN(c)) {
	q=document.querySelectorAll("tr[title='']");
	for(var i=0;i<q.length;i++){
		var d=q[i].children[0].children;
		if(q[i].children[4].innerHTML.search(p)>=0 && d.length>0){
			c=parseInt(q[i].children[0].children[0].getAttribute("data-rowindex"));break;
		}
	}
}
Pending(c);
// Click lien tuc nut confirm
sr=setInterval(function(){if($("tr.pending").length>0){clearInterval(sr);$(".confirm-registration").click()}},1000);

// Sample data
// <td style=" text-align:center;"><input data-rowindex="42" data-crdid="0008752" data-numcrd="1" value="" class="order" type="checkbox"></td>

// ---------------
// # Old Code
var se="PES";var f=function(){console.clear();console.log(new Date().toLocaleString());
	si=setTimeout(f,(Math.floor(Math.random()*30+20))*1000);
	$.post("http://112.137.128.121/danh-sach-mon-hoc/1/1", function(data,status){
		if(data==$("#divDSDK table tbody").html()){console.log("Same"); return;}
		x=new DOMParser().parseFromString("<ncroot>"+data+"</ncroot>","text/xml");
		q=x.querySelectorAll("tr[title]");
		d=function(c){clearTimeout(si);window.open("https://www.youtube.com/watch?v=WUCNabpv-CU");if(c==="-1"){return;};Pending(parseInt(c));sr=setInterval(function(){if($("tr.pending").length>0){clearInterval(sr);$(".confirm-registration").click()}},500);alert("Found");}
		e=function(s){s.split(/[\n\s\b]/g).join(""); return s.trim().split(/\n/g)[0];}
		for(var i=0;i<q.length;i++){var ft=q[i].children[4].innerHTML;var fp=(ft.search(se)>=0);if(q[i].children[0].children.length>0){console.log(e(q[i].children[1].textContent));var c=q[i].children[0].children[0].getAttribute("data-crdid");if(fp){d(c);}} if(parseInt(q[i].children[5].innerHTML)>parseInt(q[i].children[6].innerHTML) && fp){d("-1");}}
			$("#divDSDK table tbody").html(data);
	});}
var si=setTimeout(f,4000);
