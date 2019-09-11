function expand_settings() {
  document.getElementById("settings").style.width = "250px";
  document.getElementById("configuration").style.width = "0px";
}
function collapse_settings() {
  document.getElementById("settings").style.width = "0px";
}
function expand_configuration() {
  document.getElementById("configuration").style.width = "250px";
  document.getElementById("settings").style.width = "0px";
}
function collapse_configuration() {
  document.getElementById("configuration").style.width = "0px";
}
function activate() {
    collapse_settings();
}
