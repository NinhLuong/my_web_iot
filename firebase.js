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

// connect firebase

const firebaseConfig = {
    apiKey: "AIzaSyDn7jJaQ1XCJuCxEF_tm2lVZ8Y9-PP3mH8",
    authDomain: "web-iot-76829.firebaseapp.com",
    databaseURL: "https://web-iot-76829-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "web-iot-76829",
    storageBucket: "web-iot-76829.appspot.com",
    messagingSenderId: "365506634955",
    appId: "1:365506634955:web:946773f2bac32bfbb5274e",
    measurementId: "G-TZEQ5HS8H1"};
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  // Auto load Temperature-------------------------
  firebase.database().ref("/TT_IoT/nhietdo").on("value",function(snapshot){
    var nd = snapshot.val();  
    document.getElementById("nhietdo").innerHTML = nd;
    console.log(nd);
});

    // Auto load Hum-------------------------
  firebase.database().ref("/TT_IoT/doam").on("value",function(snapshot){
    var nd = snapshot.val();  
    document.getElementById("doam").innerHTML = nd;
    console.log(nd);
  });

   // Auto load light-------------------------
   firebase.database().ref("/TT_IoT/anhsang").on("value",function(snapshot){
    var nd = snapshot.val();  
    document.getElementById("anhsang").innerHTML = nd;
    console.log(nd);
  });

  // Auto load gas-------------------------
  firebase.database().ref("/TT_IoT/khiga").on("value",function(snapshot){
    var nd = snapshot.val();  
    document.getElementById("khiga").innerHTML = nd;
    console.log(nd);
    });

    //   auto load switch LIVING ROOM------------------------
    firebase.database().ref("/TT_IoT/wifi").on("value",function(snapshot){
    if(snapshot.exists()){
      console.log(snapshot.val())
  
      var wifi_status = snapshot.val()

      if (wifi_status == "on"){
        document.getElementById("wifi_img").src = "public/wifi_on.png";
        var smartwifi = document.getElementById("wifi");
        smartwifi.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
        document.getElementById("switch_wifi").checked = true;
        
      }
      else{
        document.getElementById("wifi_img").src = "public/wifi_off.png";
        var smartwifi = document.getElementById("wifi");
        smartwifi.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
        document.getElementById("switch_wifi").checked = false;
      }

      document.getElementById('switch_wifi').onclick = function(e){
        if (this.checked){
            document.getElementById("wifi_img").src = "public/wifi_on.png";
            var smartwifi = document.getElementById("wifi");
            smartwifi.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            firebase.database().ref("/TT_IoT").update({
                "wifi": "on"
              })

          }
          else{
            document.getElementById("wifi_img").src = "public/wifi_off.png";
            var smartwifi = document.getElementById("wifi");
            smartwifi.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            firebase.database().ref("/TT_IoT").update({
                "wifi": "off"
              })
          }
        
    }
    }
    else
      console.log("No data available!")
  });

    firebase.database().ref("/TT_IoT/light").on("value",function(snapshot){
    if(snapshot.exists()){
        console.log(snapshot.val())

        var light_status = snapshot.val()

        if (light_status == "on"){
        document.getElementById("light_img").src = "public/light_on.png";
        var smartlight = document.getElementById("light");
        smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
        document.getElementById("switch_light").checked = true;
        
        }
        else{
        document.getElementById("light_img").src = "public/light_off.png";
        var smartlight = document.getElementById("light");
        smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
        document.getElementById("switch_light").checked = false;
        }

        document.getElementById('switch_light').onclick = function(e){
        if (this.checked){
            document.getElementById("light_img").src = "public/light_on.png";
            var smartlight = document.getElementById("light");
            smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            firebase.database().ref("/TT_IoT").update({
                "light": "on"
                })

            }
            else{
            document.getElementById("light_img").src = "public/light_off.png";
            var smartlight = document.getElementById("light");
            smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            firebase.database().ref("/TT_IoT").update({
                "light": "off"
                })
            }
        
    }
    }
    else
        console.log("No data available!")
    });

    firebase.database().ref("/TT_IoT/air").on("value",function(snapshot){
        if(snapshot.exists()){
          console.log(snapshot.val())
      
          var air_status = snapshot.val()
    
          if (air_status == "on"){
            document.getElementById("air_img").src = "public/air_on.png";
            var smartair = document.getElementById("air");
            smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            document.getElementById("switch_air").checked = true;
            
          }
          else{
            document.getElementById("air_img").src = "public/air_off.png";
            var smartair = document.getElementById("air");
            smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            document.getElementById("switch_air").checked = false;
          }
    
          document.getElementById('switch_air').onclick = function(e){
            if (this.checked){
                document.getElementById("air_img").src = "public/air_on.png";
                var smartair = document.getElementById("air");
                smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "air": "on"
                  })
    
              }
              else{
                document.getElementById("air_img").src = "public/air_off.png";
                var smartair = document.getElementById("air");
                smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "air": "off"
                  })
              }
            
        }
        }
        else
          console.log("No data available!")
    });
    
    firebase.database().ref("/TT_IoT/music").on("value",function(snapshot){
        if(snapshot.exists()){
          console.log(snapshot.val())
      
          var music_status = snapshot.val()
    
          if (music_status == "on"){
            document.getElementById("music_img").src = "public/music_on.png";
            var smartmusic = document.getElementById("music");
            smartmusic.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            document.getElementById("switch_music").checked = true;
            
          }
          else{
            document.getElementById("music_img").src = "public/music_off.png";
            var smartmusic = document.getElementById("music");
            smartmusic.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            document.getElementById("switch_music").checked = false;
          }
    
          document.getElementById('switch_music').onclick = function(e){
            if (this.checked){
                document.getElementById("music_img").src = "public/music_on.png";
                var smartmusic = document.getElementById("music");
                smartmusic.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "music": "on"
                  })
    
              }
              else{
                document.getElementById("music_img").src = "public/music_off.png";
                var smartmusic = document.getElementById("music");
                smartmusic.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "music": "off" 
                  })
              }
            
        }
        }
        else
          console.log("No data available!")
    });
    
    firebase.database().ref("/TT_IoT/tv").on("value",function(snapshot){
        if(snapshot.exists()){
            console.log(snapshot.val())
    
            var tv_status = snapshot.val()
    
            if (tv_status == "on"){
            document.getElementById("tv_img").src = "public/tv_on.png";
            var smarttv = document.getElementById("tv");
            smarttv.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            document.getElementById("switch_tv").checked = true;
            
            }
            else{
            document.getElementById("tv_img").src = "public/tv_off.png";
            var smartlight = document.getElementById("tv");
            smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            document.getElementById("switch_tv").checked = false;
            }
    
            document.getElementById('switch_tv').onclick = function(e){
            if (this.checked){
                document.getElementById("tv_img").src = "public/tv_on.png";
                var smartlight = document.getElementById("tv");
                smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "tv": "on"
                    })
    
                }
                else{
                document.getElementById("tv_img").src = "public/tv_off.png";
                var smartlight = document.getElementById("tv");
                smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "tv": "off"
                    })
                }
            }
        }
        else
          console.log("No data available!")
    });

    firebase.database().ref("/TT_IoT/fan").on("value",function(snapshot){
        if(snapshot.exists()){
          console.log(snapshot.val())
      
          var fan_status = snapshot.val()
    
          if (fan_status == "on"){
            document.getElementById("fan_img").src = "public/fan_on.png";
            var smartair = document.getElementById("fan");
            smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            document.getElementById("switch_fan").checked = true;
            
          }
          else{
            document.getElementById("fan_img").src = "public/fan_off.png";
            var smartair = document.getElementById("fan");
            smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            document.getElementById("switch_fan").checked = false;
          }
    
          document.getElementById('switch_fan').onclick = function(e){
            if (this.checked){
                document.getElementById("fan_img").src = "public/fan_on.png";
                var smartair = document.getElementById("fan");
                smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "fan": "on"
                  })
    
              }
              else{
                document.getElementById("fan_img").src = "public/fan_off.png";
                var smartair = document.getElementById("fan");
                smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "fan": "off"
                  })
              }
            
        }
        }
        else
          console.log("No data available!")
    });

  //   auto load switch Kitchen ROOM------------------------
  firebase.database().ref("/TT_IoT/wifi1").on("value",function(snapshot){
    if(snapshot.exists()){
      console.log(snapshot.val())
  
      var wifi_status1 = snapshot.val()

      if (wifi_status1 == "on"){
        document.getElementById("wifi_img1").src = "public/wifi_on.png";
        var smartwifi = document.getElementById("wifi1");
        smartwifi.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
        document.getElementById("switch_wifi1").checked = true;
        
      }
      else{
        document.getElementById("wifi_img1").src = "public/wifi_off.png";
        var smartwifi = document.getElementById("wifi1");
        smartwifi.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
        document.getElementById("switch_wifi1").checked = false;
      }

      document.getElementById('switch_wifi1').onclick = function(e){
        if (this.checked){
            document.getElementById("wifi_img1").src = "public/wifi_on.png";
            var smartwifi = document.getElementById("wifi1");
            smartwifi.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            firebase.database().ref("/TT_IoT").update({
                "wifi1": "on"
              })

          }
          else{
            document.getElementById("wifi_img1").src = "public/wifi_off.png";
            var smartwifi = document.getElementById("wifi1");
            smartwifi.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            firebase.database().ref("/TT_IoT").update({
                "wifi1": "off"
              })
          }
        
    }
    }
    else
      console.log("No data available!")
  });

    firebase.database().ref("/TT_IoT/light1").on("value",function(snapshot){
    if(snapshot.exists()){
        console.log(snapshot.val())

        var light_status1 = snapshot.val()

        if (light_status1 == "on"){
        document.getElementById("light_img1").src = "public/light_on.png";
        var smartlight = document.getElementById("light1");
        smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
        document.getElementById("switch_light1").checked = true;
        
        }
        else{
        document.getElementById("light_img1").src = "public/light_off.png";
        var smartlight = document.getElementById("light1");
        smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
        document.getElementById("switch_light1").checked = false;
        }

        document.getElementById('switch_light1').onclick = function(e){
        if (this.checked){
            document.getElementById("light_img1").src = "public/light_on.png";
            var smartlight = document.getElementById("light1");
            smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            firebase.database().ref("/TT_IoT").update({
                "light1": "on"
                })

            }
            else{
            document.getElementById("light_img1").src = "public/light_off.png";
            var smartlight = document.getElementById("light1");
            smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            firebase.database().ref("/TT_IoT").update({
                "light1": "off"
                })
            }
        
    }
    }
    else
        console.log("No data available!")
    });

    firebase.database().ref("/TT_IoT/air1").on("value",function(snapshot){
        if(snapshot.exists()){
          console.log(snapshot.val())
      
          var air_status1 = snapshot.val()
    
          if (air_status1 == "on"){
            document.getElementById("air_img1").src = "public/air_on.png";
            var smartair = document.getElementById("air1");
            smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            document.getElementById("switch_air1").checked = true;
            
          }
          else{
            document.getElementById("air_img1").src = "public/air_off.png";
            var smartair = document.getElementById("air1");
            smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            document.getElementById("switch_air1").checked = false;
          }
    
          document.getElementById('switch_air1').onclick = function(e){
            if (this.checked){
                document.getElementById("air_img1").src = "public/air_on.png";
                var smartair = document.getElementById("air1");
                smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "air1": "on"
                  })
    
              }
              else{
                document.getElementById("air_img1").src = "public/air_off.png";
                var smartair = document.getElementById("air1");
                smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "air1": "off"
                  })
              }
            
        }
        }
        else
          console.log("No data available!")
    });
    
    firebase.database().ref("/TT_IoT/music1").on("value",function(snapshot){
        if(snapshot.exists()){
          console.log(snapshot.val())
      
          var music_status1 = snapshot.val()
    
          if (music_status1 == "on"){
            document.getElementById("music_img1").src = "public/music_on.png";
            var smartmusic = document.getElementById("music1");
            smartmusic.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            document.getElementById("switch_music1").checked = true;
            
          }
          else{
            document.getElementById("music_img1").src = "public/music_off.png";
            var smartmusic = document.getElementById("music1");
            smartmusic.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            document.getElementById("switch_music1").checked = false;
          }
    
          document.getElementById('switch_music1').onclick = function(e){
            if (this.checked){
                document.getElementById("music_img1").src = "public/music_on.png";
                var smartmusic = document.getElementById("music1");
                smartmusic.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "music1": "on"
                  })
    
              }
              else{
                document.getElementById("music_img1").src = "public/music_off.png";
                var smartmusic = document.getElementById("music1");
                smartmusic.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "music1": "off" 
                  })
              }
            
        }
        }
        else
          console.log("No data available!")
    });
    
    firebase.database().ref("/TT_IoT/tv1").on("value",function(snapshot){
        if(snapshot.exists()){
            console.log(snapshot.val())
    
            var tv_status1 = snapshot.val()
    
            if (tv_status1 == "on"){
            document.getElementById("tv_img1").src = "public/tv_on.png";
            var smarttv = document.getElementById("tv1");
            smarttv.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            document.getElementById("switch_tv1").checked = true;
            
            }
            else{
            document.getElementById("tv_img1").src = "public/tv_off.png";
            var smartlight = document.getElementById("tv1");
            smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            document.getElementById("switch_tv1").checked = false;
            }
    
            document.getElementById('switch_tv1').onclick = function(e){
            if (this.checked){
                document.getElementById("tv_img1").src = "public/tv_on.png";
                var smartlight = document.getElementById("tv1");
                smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "tv1": "on"
                    })
    
                }
                else{
                document.getElementById("tv_img1").src = "public/tv_off.png";
                var smartlight = document.getElementById("tv1");
                smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "tv1": "off"
                    })
                }
            }
        }
        else
          console.log("No data available!")
    });

    firebase.database().ref("/TT_IoT/fan1").on("value",function(snapshot){
        if(snapshot.exists()){
          console.log(snapshot.val())
      
          var fan_status1 = snapshot.val()
    
          if (fan_status1 == "on"){
            document.getElementById("fan_img1").src = "public/fan_on.png";
            var smartair = document.getElementById("fan1");
            smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
            document.getElementById("switch_fan1").checked = true;
            
          }
          else{
            document.getElementById("fan_img1").src = "public/fan_off.png";
            var smartair = document.getElementById("fan1");
            smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
            document.getElementById("switch_fan1").checked = false;
          }
    
          document.getElementById('switch_fan1').onclick = function(e){
            if (this.checked){
                document.getElementById("fan_img1").src = "public/fan_on.png";
                var smartair = document.getElementById("fan1");
                smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "fan1": "on"
                  })
    
              }
              else{
                document.getElementById("fan_img1").src = "public/fan_off.png";
                var smartair = document.getElementById("fan1");
                smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                firebase.database().ref("/TT_IoT").update({
                    "fan1": "off"
                  })
              }
            
        }
        }
        else
          console.log("No data available!")
    }); 

    //   auto load switch Bed ROOM------------------------
    firebase.database().ref("/TT_IoT/wifi2").on("value",function(snapshot){
      if(snapshot.exists()){
        console.log(snapshot.val())
    
        var wifi_status2 = snapshot.val()
  
        if (wifi_status2 == "on"){
          document.getElementById("wifi_img2").src = "public/wifi_on.png";
          var smartwifi = document.getElementById("wifi2");
          smartwifi.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
          document.getElementById("switch_wifi2").checked = true;
          
        }
        else{
          document.getElementById("wifi_img2").src = "public/wifi_off.png";
          var smartwifi = document.getElementById("wifi2");
          smartwifi.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
          document.getElementById("switch_wifi2").checked = false;
        }
  
        document.getElementById('switch_wifi2').onclick = function(e){
          if (this.checked){
              document.getElementById("wifi_img2").src = "public/wifi_on.png";
              var smartwifi = document.getElementById("wifi2");
              smartwifi.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
              firebase.database().ref("/TT_IoT").update({
                  "wifi2": "on"
                })
  
            }
            else{
              document.getElementById("wifi_img2").src = "public/wifi_off.png";
              var smartwifi = document.getElementById("wifi2");
              smartwifi.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
              firebase.database().ref("/TT_IoT").update({
                  "wifi2": "off"
                })
            }
          
      }
      }
      else
        console.log("No data available!")
    });
  
      firebase.database().ref("/TT_IoT/light2").on("value",function(snapshot){
      if(snapshot.exists()){
          console.log(snapshot.val())
  
          var light_status2 = snapshot.val()
  
          if (light_status2 == "on"){
          document.getElementById("light_img2").src = "public/light_on.png";
          var smartlight = document.getElementById("light2");
          smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
          document.getElementById("switch_light2").checked = true;
          
          }
          else{
          document.getElementById("light_img2").src = "public/light_off.png";
          var smartlight = document.getElementById("light2");
          smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
          document.getElementById("switch_light2").checked = false;
          }
  
          document.getElementById('switch_light2').onclick = function(e){
          if (this.checked){
              document.getElementById("light_img2").src = "public/light_on.png";
              var smartlight = document.getElementById("light2");
              smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
              firebase.database().ref("/TT_IoT").update({
                  "light2": "on"
                  })
  
              }
              else{
              document.getElementById("light_img2").src = "public/light_off.png";
              var smartlight = document.getElementById("light2");
              smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
              firebase.database().ref("/TT_IoT").update({
                  "light2": "off"
                  })
              }
          
      }
      }
      else
          console.log("No data available!")
      });
  
      firebase.database().ref("/TT_IoT/air2").on("value",function(snapshot){
          if(snapshot.exists()){
            console.log(snapshot.val())
        
            var air_status2 = snapshot.val()
      
            if (air_status2 == "on"){
              document.getElementById("air_img2").src = "public/air_on.png";
              var smartair = document.getElementById("air2");
              smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
              document.getElementById("switch_air2").checked = true;
              
            }
            else{
              document.getElementById("air_img2").src = "public/air_off.png";
              var smartair = document.getElementById("air2");
              smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
              document.getElementById("switch_air2").checked = false;
            }
      
            document.getElementById('switch_air2').onclick = function(e){
              if (this.checked){
                  document.getElementById("air_img2").src = "public/air_on.png";
                  var smartair = document.getElementById("air2");
                  smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                  firebase.database().ref("/TT_IoT").update({
                      "air2": "on"
                    })
      
                }
                else{
                  document.getElementById("air_img2").src = "public/air_off.png";
                  var smartair = document.getElementById("air2");
                  smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                  firebase.database().ref("/TT_IoT").update({
                      "air2": "off"
                    })
                }
              
          }
          }
          else
            console.log("No data available!")
      });
      
      firebase.database().ref("/TT_IoT/music2").on("value",function(snapshot){
          if(snapshot.exists()){
            console.log(snapshot.val())
        
            var music_status2 = snapshot.val()
      
            if (music_status2 == "on"){
              document.getElementById("music_img2").src = "public/music_on.png";
              var smartmusic = document.getElementById("music2");
              smartmusic.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
              document.getElementById("switch_music2").checked = true;
              
            }
            else{
              document.getElementById("music_img2").src = "public/music_off.png";
              var smartmusic = document.getElementById("music2");
              smartmusic.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
              document.getElementById("switch_music2").checked = false;
            }
      
            document.getElementById('switch_music2').onclick = function(e){
              if (this.checked){
                  document.getElementById("music_img2").src = "public/music_on.png";
                  var smartmusic = document.getElementById("music2");
                  smartmusic.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                  firebase.database().ref("/TT_IoT").update({
                      "music2": "on"
                    })
      
                }
                else{
                  document.getElementById("music_img2").src = "public/music_off.png";
                  var smartmusic = document.getElementById("music2");
                  smartmusic.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                  firebase.database().ref("/TT_IoT").update({
                      "music2": "off" 
                    })
                }
              
          }
          }
          else
            console.log("No data available!")
      });
      
      firebase.database().ref("/TT_IoT/tv2").on("value",function(snapshot){
          if(snapshot.exists()){
              console.log(snapshot.val())
      
              var tv_status2 = snapshot.val()
      
              if (tv_status2 == "on"){
              document.getElementById("tv_img2").src = "public/tv_on.png";
              var smarttv = document.getElementById("tv2");
              smarttv.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
              document.getElementById("switch_tv2").checked = true;
              
              }
              else{
              document.getElementById("tv_img2").src = "public/tv_off.png";
              var smartlight = document.getElementById("tv2");
              smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
              document.getElementById("switch_tv2").checked = false;
              }
      
              document.getElementById('switch_tv2').onclick = function(e){
              if (this.checked){
                  document.getElementById("tv_img2").src = "public/tv_on.png";
                  var smartlight = document.getElementById("tv2");
                  smartlight.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                  firebase.database().ref("/TT_IoT").update({
                      "tv2": "on"
                      })
      
                  }
                  else{
                  document.getElementById("tv_img2").src = "public/tv_off.png";
                  var smartlight = document.getElementById("tv2");
                  smartlight.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                  firebase.database().ref("/TT_IoT").update({
                      "tv2": "off"
                      })
                  }
              }
          }
          else
            console.log("No data available!")
      });
  
      firebase.database().ref("/TT_IoT/fan2").on("value",function(snapshot){
          if(snapshot.exists()){
            console.log(snapshot.val())
        
            var fan_status2 = snapshot.val()
      
            if (fan_status2 == "on"){
              document.getElementById("fan_img2").src = "public/fan_on.png";
              var smartair = document.getElementById("fan2");
              smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
              document.getElementById("switch_fan2").checked = true;
              
            }
            else{
              document.getElementById("fan_img2").src = "public/fan_off.png";
              var smartair = document.getElementById("fan2");
              smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
              document.getElementById("switch_fan2").checked = false;
            }
      
            document.getElementById('switch_fan2').onclick = function(e){
              if (this.checked){
                  document.getElementById("fan_img2").src = "public/fan_on.png";
                  var smartair = document.getElementById("fan2");
                  smartair.style.backgroundImage = "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)";
                  firebase.database().ref("/TT_IoT").update({
                      "fan2": "on"
                    })
      
                }
                else{
                  document.getElementById("fan_img2").src = "public/fan_off.png";
                  var smartair = document.getElementById("fan2");
                  smartair.style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
                  firebase.database().ref("/TT_IoT").update({
                      "fan2": "off"
                    })
                }
              
          }
          }
          else
            console.log("No data available!")
      });
    