// chuyển tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// nút switch
document.getElementById('switch_light').onclick = function(e){
    if (this.checked){
        document.getElementById("light_img").src = "public/light_on.png";
        var smartlight = document.getElementById("light");
        smartlight.style.backgroundColor = "#ff8f45";
      }
      else{
        document.getElementById("light_img").src = "public/light_off.png";
        var smartlight = document.getElementById("light");
        smartlight.style.backgroundColor = "#E8E8E8";
      }
    
}

document.getElementById('switch_wifi').onclick = function(e){
    if (this.checked){
        document.getElementById("wifi_img").src = "public/wifi_on.png";
        var smartlight = document.getElementById("wifi");
        smartlight.style.backgroundColor = "#ff8f45";
      }
      else{
        document.getElementById("wifi_img").src = "public/wifi_off.png";
        var smartlight = document.getElementById("wifi");
        smartlight.style.backgroundColor = "#E8E8E8";
      }
    
}


