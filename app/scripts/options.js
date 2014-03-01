// Saves options to localStorage.
function save_options() {
  var domains = $('#dlist').val();
 
  chrome.storage.local.set({'domains': domains}, function() {
 
    $('#status').fadeIn(800, function(){
      setTimeout(function() {
      $('#status').fadeOut(400);
    }, 2000);
    });
 
  });
 
}
 
// Restores select box state to saved value from localStorage.
function restore_options() {
 
  chrome.storage.local.get("domains", function(fetchedData) {
    //console.log(fetchedData);
    var domains = fetchedData.domains;
 
    if (!domains) {
      return;
    }
 
   $('#dlist').val(domains);
 
  });
 
}
 
$(document).ready(function(){
  restore_options();
})
 
document.querySelector('#sbtn').addEventListener('click', save_options)



/*window.onload = function(){

var sButton = document.getElementById("sbtn");
var txtArea = document.getElementById("dlist");
sButton.addEventListener('click',saveOptions, false);

txtArea.value = getOptions();

}

function saveOptions(){
	console.log("in saveOptions");
	// get text field contents
    var dlist = document.getElementById("dlist").value;
    console.log("Storing:" + dlist);
    // store in chrome storage
    chrome.storage.local.set({'options':{domains:dlist}}, function () {
    	console.log("Options stored to chrome storage.");
    	txtArea.value = dlist;
    });

}

function getOptions(){
	var options;
	chrome.storage.local.get('opt', function (result) {
        options = result.domains;
        console.log(result.domains);
        //$("#channels").val(channels);
    });

	return options;

}*/