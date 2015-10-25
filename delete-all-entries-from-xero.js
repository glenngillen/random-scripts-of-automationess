var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
setTimeout(function() {
  jQuery.noConflict();
}, 2000);
var idx = 1;
setInterval(function() {
  Reconcile.confirmDeleteSelected(idx);
  window["_reconcile"+idx].markAsDuplicate()
  idx += 1;
}, 600);
setInterval(function() { jQuery('.x-window em.medium.green.button button').click(); }, 300);


var idx = 1;
var dedupe = function() {
  for(i=0; i<10; i++) {
    setTimeout(function() {
      console.log("Deleting "+(i+idx));
      console.log(window["_reconcile"+(i+idx)]);
      window["_reconcile"+(i+idx)].markAsDuplicate();
    }, i * 200);
  }
  setTimeout(function() { idx += 10; dedupe(); }, 10000);
}
dedupe();


els.each(function(idx, el) {
  wait = idx * (timer + spacer);
  setTimeout(function() {
    jQuery(el).click();
    setTimeout(function() {
      jQuery('.x-window em.medium.green.button button').click()
    }, spacer);
  }, wait);
});
setTimeout(function() { jQuery(‘.x-window em.medium.green.button button’).click(); }, 300);})
