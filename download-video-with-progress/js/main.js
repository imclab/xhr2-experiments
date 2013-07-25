var media = "html5-video-element-test.mp4";

var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress, false);
oReq.addEventListener("load", transferComplete, false);
oReq.addEventListener("error", transferFailed, false);
oReq.addEventListener("abort", transferCanceled, false);

// progress on transfers from the server to the client (downloads)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = (oEvent.loaded / oEvent.total) * 100;
    $('#progress-counter').html(Math.round(percentComplete, 100) + '%');
    $('#progress').width(percentComplete + '%');
  } else {
    // Unable to compute progress information since the total size is unknown
    alert("Unable to compute progress information since the total size is unknown");
  }
}

function transferComplete(evt) {
  $('#status').html("The transfer is complete.");
  $('#media').attr("src", media);
  document.getElementById('media').play();
}

function transferFailed(evt) {
  $('#status').html("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  $('#status').html("The transfer has been canceled by the user.");
}

console.log("opening request..", oReq);
// XMLHttpRequest.open(method, url, async, user, password)
oReq.open("get", media, true);
oReq.send(null);