// EQ
var s=5;$("tr.raterow").each(function(i,e){$(e).children()[s+1].click();})
// RAND
$("tr.raterow").each(function(i,e){var s=Math.floor(Math.random()*5)+1;$(e).children()[s+1].click();})
// RAND > x
var x=4;$("tr.raterow").each(function(i,e){var s=Math.floor(Math.random()*(6-x))+x;$(e).children()[s+1].click();})

// No jq
// 5
var s=5;document.querySelectorAll("tr.raterow").forEach(function(e,i){e.children[s+1].click();});
// 5r
document.querySelectorAll("tr.raterow").forEach(function(e,i){var s=Math.floor(Math.random()*5)+1;e.children[s+1].click();});
// eq
var s=4;document.querySelectorAll("tr.raterow").forEach(function(e,i){e.children[s+1].click();});
// ge
var s=3
document.querySelectorAll("tr.raterow")
  .forEach(function(e,i){var sr=Math.floor(Math.random()*(6-s))+s;e.children[sr+1].click();});

