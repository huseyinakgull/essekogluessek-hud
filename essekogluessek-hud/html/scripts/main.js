$(function () {
    window.addEventListener('message', function (event) {
      if (event.data.action = "update"){
        $(".layer-3 .wrapper .ar").css("width", `calc(${event.data.armour+"%"} - 4px)`)
        $(".layer-1 .wrapper .ar").html(`${event.data.armour}`)
        $(".layer-2 .wrapper .hp").css("width", `calc(${event.data.health+"%"} - 4px)`)
        $(".layer-1 .wrapper .hp").html(`${event.data.health}`)
        $(".weapon-image").attr("src", `images/weapons/${event.data.weapon}.png`)
        if (typeof event.data.ammo != "undefined"){
          $(".ammo").html(event.data.ammo)
        }else{
          $(".ammo").html(`<img src="images/inf.png">`)
        }
      }

      let armour = event.data.armour
      let steps = document.getElementsByClassName('step');

      [...steps].forEach(e => {
        armorBar(armour);
      });
      
      function armorBar(i) {
        let percent = (i / (100 / steps.length)).toFixed(2);
        let [lastId, width] = percent.toString().split(".");
      
        [...steps].forEach((e, id) => {
            let current = id == lastId ? width : (id <= percent ? 100 : 0) 

            $(e).attr("style", `--width: ${current}%`)
        })
      }
    })
})