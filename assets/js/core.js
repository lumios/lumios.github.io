var user_os = "Unknown";
var user_ico = "question";

if (navigator.appVersion.indexOf("Win") !=-1) {
    user_os = "Windows";
    user_ico = "windows";
}
else if (navigator.appVersion.indexOf("Mac") !=-1) {
    user_os = "Mac OS X";
    user_ico = "apple";
}
if (navigator.appVersion.indexOf("X11") !=-1 || navigator.appVersion.indexOf("Linux") !=-1) {
    user_os = "Linux";
    user_ico = "linux";
}
