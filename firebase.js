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
        smartwifi.style.backgroundColor = "#ff8f45";
        document.getElementById("switch_wifi").checked = true;
        
      }
      else{
        document.getElementById("wifi_img").src = "public/wifi_off.png";
        var smartwifi = document.getElementById("wifi");
        smartwifi.style.backgroundColor = "#E8E8E8";
        document.getElementById("switch_wifi").checked = false;
      }

      document.getElementById('switch_wifi').onclick = function(e){
        if (this.checked){
            document.getElementById("wifi_img").src = "public/wifi_on.png";
            var smartwifi = document.getElementById("wifi");
            smartwifi.style.backgroundColor = "#ff8f45";
            firebase.database().ref("/TT_IoT").update({
                "wifi": "on"
              })

          }
          else{
            document.getElementById("wifi_img").src = "public/wifi_off.png";
            var smartwifi = document.getElementById("wifi");
            smartwifi.style.backgroundColor = "#E8E8E8";
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
        smartlight.style.backgroundColor = "#ff8f45";
        document.getElementById("switch_light").checked = true;
        
        }
        else{
        document.getElementById("light_img").src = "public/light_off.png";
        var smartlight = document.getElementById("light");
        smartlight.style.backgroundColor = "#E8E8E8";
        document.getElementById("switch_light").checked = false;
        }

        document.getElementById('switch_light').onclick = function(e){
        if (this.checked){
            document.getElementById("light_img").src = "public/light_on.png";
            var smartlight = document.getElementById("light");
            smartlight.style.backgroundColor = "#ff8f45";
            firebase.database().ref("/TT_IoT").update({
                "light": "on"
                })

            }
            else{
            document.getElementById("light_img").src = "public/light_off.png";
            var smartlight = document.getElementById("light");
            smartlight.style.backgroundColor = "#E8E8E8";
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
            smartair.style.backgroundColor = "#ff8f45";
            document.getElementById("switch_air").checked = true;
            
          }
          else{
            document.getElementById("air_img").src = "public/air_off.png";
            var smartair = document.getElementById("air");
            smartair.style.backgroundColor = "#E8E8E8";
            document.getElementById("switch_air").checked = false;
          }
    
          document.getElementById('switch_air').onclick = function(e){
            if (this.checked){
                document.getElementById("air_img").src = "public/air_on.png";
                var smartair = document.getElementById("air");
                smartair.style.backgroundColor = "#ff8f45";
                firebase.database().ref("/TT_IoT").update({
                    "air": "on"
                  })
    
              }
              else{
                document.getElementById("air_img").src = "public/air_off.png";
                var smartair = document.getElementById("air");
                smartair.style.backgroundColor = "#E8E8E8";
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
            smartmusic.style.backgroundColor = "#ff8f45";
            document.getElementById("switch_music").checked = true;
            
          }
          else{
            document.getElementById("music_img").src = "public/music_off.png";
            var smartmusic = document.getElementById("music");
            smartmusic.style.backgroundColor = "#E8E8E8";
            document.getElementById("switch_music").checked = false;
          }
    
          document.getElementById('switch_music').onclick = function(e){
            if (this.checked){
                document.getElementById("music_img").src = "public/music_on.png";
                var smartmusic = document.getElementById("music");
                smartmusic.style.backgroundColor = "#ff8f45";
                firebase.database().ref("/TT_IoT").update({
                    "music": "on"
                  })
    
              }
              else{
                document.getElementById("music_img").src = "public/music_off.png";
                var smartmusic = document.getElementById("music");
                smartmusic.style.backgroundColor = "#E8E8E8";
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
            smarttv.style.backgroundColor = "#ff8f45";
            document.getElementById("switch_tv").checked = true;
            
            }
            else{
            document.getElementById("tv_img").src = "public/tv_off.png";
            var smartlight = document.getElementById("tv");
            smartlight.style.backgroundColor = "#E8E8E8";
            document.getElementById("switch_tv").checked = false;
            }
    
            document.getElementById('switch_tv').onclick = function(e){
            if (this.checked){
                document.getElementById("tv_img").src = "public/tv_on.png";
                var smartlight = document.getElementById("tv");
                smartlight.style.backgroundColor = "#ff8f45";
                firebase.database().ref("/TT_IoT").update({
                    "tv": "on"
                    })
    
                }
                else{
                document.getElementById("tv_img").src = "public/tv_off.png";
                var smartlight = document.getElementById("tv");
                smartlight.style.backgroundColor = "#E8E8E8";
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
            smartair.style.backgroundColor = "#ff8f45";
            document.getElementById("switch_fan").checked = true;
            
          }
          else{
            document.getElementById("fan_img").src = "public/fan_off.png";
            var smartair = document.getElementById("fan");
            smartair.style.backgroundColor = "#E8E8E8";
            document.getElementById("switch_fan").checked = false;
          }
    
          document.getElementById('switch_fan').onclick = function(e){
            if (this.checked){
                document.getElementById("fan_img").src = "public/fan_on.png";
                var smartair = document.getElementById("fan");
                smartair.style.backgroundColor = "#ff8f45";
                firebase.database().ref("/TT_IoT").update({
                    "fan": "on"
                  })
    
              }
              else{
                document.getElementById("fan_img").src = "public/fan_off.png";
                var smartair = document.getElementById("fan");
                smartair.style.backgroundColor = "#E8E8E8";
                firebase.database().ref("/TT_IoT").update({
                    "fan": "off"
                  })
              }
            
        }
        }
        else
          console.log("No data available!")
    });

    // //   auto load switch KITCHEN ROOM------------------------
    // firebase.database().ref("/TT_IoT/wifi").on("value",function(snapshot){
    //     if(snapshot.exists()){
    //       console.log(snapshot.val())
      
    //       var wifi_status = snapshot.val()
    
    //       if (wifi_status == "on"){
    //         document.getElementById("wifi_img").src = "public/wifi_on.png";
    //         var smartwifi = document.getElementById("wifi");
    //         smartwifi.style.backgroundColor = "#ff8f45";
    //         document.getElementById("switch_wifi").checked = true;
            
    //       }
    //       else{
    //         document.getElementById("wifi_img").src = "public/wifi_off.png";
    //         var smartwifi = document.getElementById("wifi");
    //         smartwifi.style.backgroundColor = "#E8E8E8";
    //         document.getElementById("switch_wifi").checked = false;
    //       }
    
    //       document.getElementById('switch_wifi').onclick = function(e){
    //         if (this.checked){
    //             document.getElementById("wifi_img").src = "public/wifi_on.png";
    //             var smartwifi = document.getElementById("wifi");
    //             smartwifi.style.backgroundColor = "#ff8f45";
    //             firebase.database().ref("/TT_IoT").update({
    //                 "wifi": "on"
    //               })
    
    //           }
    //           else{
    //             document.getElementById("wifi_img").src = "public/wifi_off.png";
    //             var smartwifi = document.getElementById("wifi");
    //             smartwifi.style.backgroundColor = "#E8E8E8";
    //             firebase.database().ref("/TT_IoT").update({
    //                 "wifi": "off"
    //               })
    //           }
            
    //     }
    //     }
    //     else
    //       console.log("No data available!")
    //   });
    
    //     firebase.database().ref("/TT_IoT/light").on("value",function(snapshot){
    //     if(snapshot.exists()){
    //         console.log(snapshot.val())
    
    //         var light_status = snapshot.val()
    
    //         if (light_status == "on"){
    //         document.getElementById("light_img").src = "public/light_on.png";
    //         var smartlight = document.getElementById("light");
    //         smartlight.style.backgroundColor = "#ff8f45";
    //         document.getElementById("switch_light").checked = true;
            
    //         }
    //         else{
    //         document.getElementById("light_img").src = "public/light_off.png";
    //         var smartlight = document.getElementById("light");
    //         smartlight.style.backgroundColor = "#E8E8E8";
    //         document.getElementById("switch_light").checked = false;
    //         }
    
    //         document.getElementById('switch_light').onclick = function(e){
    //         if (this.checked){
    //             document.getElementById("light_img").src = "public/light_on.png";
    //             var smartlight = document.getElementById("light");
    //             smartlight.style.backgroundColor = "#ff8f45";
    //             firebase.database().ref("/TT_IoT").update({
    //                 "light": "on"
    //                 })
    
    //             }
    //             else{
    //             document.getElementById("light_img").src = "public/light_off.png";
    //             var smartlight = document.getElementById("light");
    //             smartlight.style.backgroundColor = "#E8E8E8";
    //             firebase.database().ref("/TT_IoT").update({
    //                 "light": "off"
    //                 })
    //             }
            
    //     }
    //     }
    //     else
    //         console.log("No data available!")
    //     });
    
    //     firebase.database().ref("/TT_IoT/air").on("value",function(snapshot){
    //         if(snapshot.exists()){
    //           console.log(snapshot.val())
          
    //           var air_status = snapshot.val()
        
    //           if (air_status == "on"){
    //             document.getElementById("air_img").src = "public/air_on.png";
    //             var smartair = document.getElementById("air");
    //             smartair.style.backgroundColor = "#ff8f45";
    //             document.getElementById("switch_air").checked = true;
                
    //           }
    //           else{
    //             document.getElementById("air_img").src = "public/air_off.png";
    //             var smartair = document.getElementById("air");
    //             smartair.style.backgroundColor = "#E8E8E8";
    //             document.getElementById("switch_air").checked = false;
    //           }
        
    //           document.getElementById('switch_air').onclick = function(e){
    //             if (this.checked){
    //                 document.getElementById("air_img").src = "public/air_on.png";
    //                 var smartair = document.getElementById("air");
    //                 smartair.style.backgroundColor = "#ff8f45";
    //                 firebase.database().ref("/TT_IoT").update({
    //                     "air": "on"
    //                   })
        
    //               }
    //               else{
    //                 document.getElementById("air_img").src = "public/air_off.png";
    //                 var smartair = document.getElementById("air");
    //                 smartair.style.backgroundColor = "#E8E8E8";
    //                 firebase.database().ref("/TT_IoT").update({
    //                     "air": "off"
    //                   })
    //               }
                
    //         }
    //         }
    //         else
    //           console.log("No data available!")
    //     });
        
    //     firebase.database().ref("/TT_IoT/music").on("value",function(snapshot){
    //         if(snapshot.exists()){
    //           console.log(snapshot.val())
          
    //           var music_status = snapshot.val()
        
    //           if (music_status == "on"){
    //             document.getElementById("music_img").src = "public/music_on.png";
    //             var smartmusic = document.getElementById("music");
    //             smartmusic.style.backgroundColor = "#ff8f45";
    //             document.getElementById("switch_music").checked = true;
                
    //           }
    //           else{
    //             document.getElementById("music_img").src = "public/music_off.png";
    //             var smartmusic = document.getElementById("music");
    //             smartmusic.style.backgroundColor = "#E8E8E8";
    //             document.getElementById("switch_music").checked = false;
    //           }
        
    //           document.getElementById('switch_music').onclick = function(e){
    //             if (this.checked){
    //                 document.getElementById("music_img").src = "public/music_on.png";
    //                 var smartmusic = document.getElementById("music");
    //                 smartmusic.style.backgroundColor = "#ff8f45";
    //                 firebase.database().ref("/TT_IoT").update({
    //                     "music": "on"
    //                   })
        
    //               }
    //               else{
    //                 document.getElementById("music_img").src = "public/music_off.png";
    //                 var smartmusic = document.getElementById("music");
    //                 smartmusic.style.backgroundColor = "#E8E8E8";
    //                 firebase.database().ref("/TT_IoT").update({
    //                     "music": "off" 
    //                   })
    //               }
                
    //         }
    //         }
    //         else
    //           console.log("No data available!")
    //     });
        
    //     firebase.database().ref("/TT_IoT/tv").on("value",function(snapshot){
    //         if(snapshot.exists()){
    //             console.log(snapshot.val())
        
    //             var tv_status = snapshot.val()
        
    //             if (tv_status == "on"){
    //             document.getElementById("tv_img").src = "public/tv_on.png";
    //             var smarttv = document.getElementById("tv");
    //             smarttv.style.backgroundColor = "#ff8f45";
    //             document.getElementById("switch_tv").checked = true;
                
    //             }
    //             else{
    //             document.getElementById("tv_img").src = "public/tv_off.png";
    //             var smartlight = document.getElementById("tv");
    //             smartlight.style.backgroundColor = "#E8E8E8";
    //             document.getElementById("switch_tv").checked = false;
    //             }
        
    //             document.getElementById('switch_tv').onclick = function(e){
    //             if (this.checked){
    //                 document.getElementById("tv_img").src = "public/tv_on.png";
    //                 var smartlight = document.getElementById("tv");
    //                 smartlight.style.backgroundColor = "#ff8f45";
    //                 firebase.database().ref("/TT_IoT").update({
    //                     "tv": "on"
    //                     })
        
    //                 }
    //                 else{
    //                 document.getElementById("tv_img").src = "public/tv_off.png";
    //                 var smartlight = document.getElementById("tv");
    //                 smartlight.style.backgroundColor = "#E8E8E8";
    //                 firebase.database().ref("/TT_IoT").update({
    //                     "tv": "off"
    //                     })
    //                 }
    //             }
    //         }
    //         else
    //           console.log("No data available!")
    //     });
    
    //     firebase.database().ref("/TT_IoT/fan").on("value",function(snapshot){
    //         if(snapshot.exists()){
    //           console.log(snapshot.val())
          
    //           var fan_status = snapshot.val()
        
    //           if (fan_status == "on"){
    //             document.getElementById("fan_img").src = "public/fan_on.png";
    //             var smartair = document.getElementById("fan");
    //             smartair.style.backgroundColor = "#ff8f45";
    //             document.getElementById("switch_fan").checked = true;
                
    //           }
    //           else{
    //             document.getElementById("fan_img").src = "public/fan_off.png";
    //             var smartair = document.getElementById("fan");
    //             smartair.style.backgroundColor = "#E8E8E8";
    //             document.getElementById("switch_fan").checked = false;
    //           }
        
    //           document.getElementById('switch_fan').onclick = function(e){
    //             if (this.checked){
    //                 document.getElementById("fan_img").src = "public/fan_on.png";
    //                 var smartair = document.getElementById("fan");
    //                 smartair.style.backgroundColor = "#ff8f45";
    //                 firebase.database().ref("/TT_IoT").update({
    //                     "fan": "on"
    //                   })
        
    //               }
    //               else{
    //                 document.getElementById("fan_img").src = "public/fan_off.png";
    //                 var smartair = document.getElementById("fan");
    //                 smartair.style.backgroundColor = "#E8E8E8";
    //                 firebase.database().ref("/TT_IoT").update({
    //                     "fan": "off"
    //                   })
    //               }
                
    //         }
    //         }
    //         else
    //           console.log("No data available!")
    //     });
    