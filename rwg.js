var do_click = function()
{
  var color;
  if(this.id == "red") {
    color = "#F00";
  } else if (this.id == "white") {
    color = "#FFF";
  } else if (this.id == "green") {
    color = "#0F0";
  }
  chrome.browserAction.setBadgeBackgroundColor({color: color});
  chrome.browserAction.setBadgeText({text:" "});

}
document.addEventListener('DOMContentLoaded', function() {
  var choices = document.getElementsByClassName('choice');
  var i;
  for (i = 0; i < choices.length; i++) {
    choices[i].style.backgroundColor = choices[i].id;
    choices[i].onclick = do_click;
  }

})
