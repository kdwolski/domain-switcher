'use strict';

$( document ).ready(function() {
  // populate select field
  	getDomains();

});

$( "#dselect" ).change(function() {
	var url = '';
	var selected = $(this).val();
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
   	  url = tabs[0].url;

   	  var parts = urlData(url);
   	  var newUrl = parts.protocol + '://' + selected + parts.port + parts.path + parts.search + parts.hash;

      $(".status").html(newUrl).fadeIn("fast");

      // load new URL in tab
      chrome.tabs.getSelected(null, function(tab){
      	  chrome.tabs.update(tab.id, {url: newUrl});
	   });

   });
});

function getDomains() {
 
  chrome.storage.local.get("domains", function(fetchedData) {
    //console.log(fetchedData);
    var domains = fetchedData.domains;
 
    if (!domains) {
      return;
    }
 	
 	var vals = domains.match(/[^\r\n]+/g);
 	//console.log(vals.length);
 	for(var i=0; i<vals.length; i++){
 		$("#dselect").append('<option value=' + vals[i] +'> ' + vals[i] + '</option>');
 	}

   	$('#dlist').val(domains);
 
  });
 
}

function urlData(url) {
  // object for data that will be returned
  var redata = {protocol: '', domain: '', port: '', path: '', file: '', search: '', hash: ''};

  // creates an anchor element, and adds the url in "href" attribute
  var a_elm  = document.createElement('a');
  a_elm.href = url;

  // adds URL data in redata object, and returns it
  redata.protocol = a_elm.protocol.replace(':', '');
  redata.domain = a_elm.hostname;//.replace('www.', '');
  if(a_elm.port != '') redata.port = a_elm.port;
  redata.path = a_elm.pathname;
  if(a_elm.pathname.match(/[^\/]+[\.][a-z0-9]+$/i) != null) redata.file = a_elm.pathname.match(/[^\/]+[\.][a-z0-9]+$/i);
  redata.search = a_elm.search;//.replace('?', '');
  redata.hash = a_elm.hash;//.replace('#', '');
  return redata;
}
