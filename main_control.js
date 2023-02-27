

// chuyển tab
function openroom(evt, cityName) {
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

// nút switch living room
document.getElementById('switch_light').onclick = function(e){
    if (this.checked){
        document.getElementById("light_img").src = "public/light_on.png";
        var smartlight = document.getElementById("light");
        smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
      }
      else{
        document.getElementById("light_img").src = "public/light_off.png";
        var smartlight = document.getElementById("light");
        smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
      }
    
}

document.getElementById('switch_wifi').onclick = function(e){
    if (this.checked){
        document.getElementById("wifi_img").src = "public/wifi_on.png";
        var smartwifi = document.getElementById("wifi");
        smartwifi.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
      }
      else{
        document.getElementById("wifi_img").src = "public/wifi_off.png";
        var smartlight = document.getElementById("wifi");
        smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
      }
    
}

document.getElementById('switch_air').onclick = function(e){
    if (this.checked){
        document.getElementById("air_img").src = "public/air_on.png";
        var smartlight = document.getElementById("air");
        smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
      }
      else{
        document.getElementById("air_img").src = "public/air_off.png";
        var smartlight = document.getElementById("air");
        smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
      }
    
}

document.getElementById('switch_music').onclick = function(e){
    if (this.checked){
        document.getElementById("music_img").src = "public/music_on.png";
        var smartlight = document.getElementById("music");
        smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
      }
      else{
        document.getElementById("music_img").src = "public/music_off.png";
        var smartlight = document.getElementById("music");
        smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
      }
    
}

document.getElementById('switch_tv').onclick = function(e){
    if (this.checked){
        document.getElementById("tv_img").src = "public/tv_on.png";
        var smartlight = document.getElementById("tv");
        smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
      }
      else{
        document.getElementById("tv_img").src = "public/tv_off.png";
        var smartlight = document.getElementById("tv");
        smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
      }
    
}

document.getElementById('switch_fan').onclick = function(e){
    if (this.checked){
        document.getElementById("fan_img").src = "public/fan_on.png";
        var smartlight = document.getElementById("fan");
        smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
      }
      else{
        document.getElementById("fan_img").src = "public/fan_off.png";
        var smartlight = document.getElementById("fan");
        smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
      }
    
}

// nut switch  kitchen room
document.getElementById('switch_light1').onclick = function(e){
  if (this.checked){
      document.getElementById("light_img1").src = "public/light_on.png";
      var smartlight = document.getElementById("light1");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("light_img1").src = "public/light_off.png";
      var smartlight = document.getElementById("light1");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_wifi1').onclick = function(e){
  if (this.checked){
      document.getElementById("wifi_img1").src = "public/wifi_on.png";
      var smartlight = document.getElementById("wifi1");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("wifi_img1").src = "public/wifi_off.png";
      var smartlight = document.getElementById("wifi1");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_air1').onclick = function(e){
  if (this.checked){
      document.getElementById("air_img1").src = "public/air_on.png";
      var smartlight = document.getElementById("air1");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("air_img1").src = "public/air_off.png";
      var smartlight = document.getElementById("air1");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_music1').onclick = function(e){
  if (this.checked){
      document.getElementById("music_img1").src = "public/music_on.png";
      var smartlight = document.getElementById("music1");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("music_img1").src = "public/music_off.png";
      var smartlight = document.getElementById("music1");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_tv1').onclick = function(e){
  if (this.checked){
      document.getElementById("tv_img1").src = "public/tv_on.png";
      var smartlight = document.getElementById("tv1");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("tv_img1").src = "public/tv_off.png";
      var smartlight = document.getElementById("tv1");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_fan1').onclick = function(e){
  if (this.checked){
      document.getElementById("fan_img1").src = "public/fan_on.png";
      var smartlight = document.getElementById("fan1");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("fan_img1").src = "public/fan_off.png";
      var smartlight = document.getElementById("fan1");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

// switch bed room
document.getElementById('switch_light2').onclick = function(e){
  if (this.checked){
      document.getElementById("light_img2").src = "public/light_on.png";
      var smartlight = document.getElementById("light2");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("light_img2").src = "public/light_off.png";
      var smartlight = document.getElementById("light2");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_wifi2').onclick = function(e){
  if (this.checked){
      document.getElementById("wifi_img2").src = "public/wifi_on.png";
      var smartlight = document.getElementById("wifi2");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("wifi_img2").src = "public/wifi_off.png";
      var smartlight = document.getElementById("wifi2");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_air2').onclick = function(e){
  if (this.checked){
      document.getElementById("air_img2").src = "public/air_on.png";
      var smartlight = document.getElementById("air2");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("air_img2").src = "public/air_off.png";
      var smartlight = document.getElementById("air2");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_music2').onclick = function(e){
  if (this.checked){
      document.getElementById("music_img2").src = "public/music_on.png";
      var smartlight = document.getElementById("music2");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("music_img2").src = "public/music_off.png";
      var smartlight = document.getElementById("music2");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_tv2').onclick = function(e){
  if (this.checked){
      document.getElementById("tv_img2").src = "public/tv_on.png";
      var smartlight = document.getElementById("tv2");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("tv_img2").src = "public/tv_off.png";
      var smartlight = document.getElementById("tv2");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

document.getElementById('switch_fan2').onclick = function(e){
  if (this.checked){
      document.getElementById("fan_img2").src = "public/fan_on.png";
      var smartlight = document.getElementById("fan2");
      smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
    }
    else{
      document.getElementById("fan_img2").src = "public/fan_off.png";
      var smartlight = document.getElementById("fan2");
      smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
  
}

