
$("#transferringNav").animate({ left:-$(".socials").innerWidth() },0)

$(".togler i").click(function () {
  if ($("#transferringNav").css("left") == "0px") {
      $("#transferringNav").animate({ left:-$(".socials").innerWidth() }, 1000)


  } else {
      $("#transferringNav").animate({ left: "0px" }, 1000)
  }
})
let areas =[]
async function request() {
    let xhr =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let convert =await xhr.json()
    areas = convert.meals
    displayAreas()
}
request()
function displayAreas() {
    let cartona =``
    for (let i = 0; i < areas.length; i++) {
        cartona+=`
        <div class="col-md-3">
                            <div class="area d-flex flex-column align-items-center text-white my-3">
                                <span class="fa-solid fa-house-laptop fs-1"></span>
                                <h2>${areas[i].strArea}</h2>
                            </div>
                        </div>`        
    }
    document.getElementById("areas").innerHTML = cartona
}
