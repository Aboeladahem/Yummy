
$("#transferringNav").animate({ left:-$(".socials").innerWidth() },0)

$(".togler i").click(function () {
  if ($("#transferringNav").css("left") == "0px") {
      $("#transferringNav").animate({ left:-$(".socials").innerWidth() }, 1000)


  } else {
      $("#transferringNav").animate({ left: "0px" }, 1000)
  }
})
function searchItems() {
  let searchInName = document.getElementById("searchInName");
  let searchInFirstLetter = document.getElementById("searchInFirstLetter");
  let cartona = ``;
  for (let i = 0; i < randomMeals.length; i++) {
    if (randomMeals[i].strMeal.toLowerCase().includes(searchInName.value)) {
      cartona += `
      <div class="col-md-3 my-3">
      <div class="item w-100 position-relative overflow-hidden
      rounded-3 ">
      <img src="${randomMeals[i].strMealThumb}" class="w-100 "
      alt="..." />
      <div class="caption bg-white w-100 position-absolute
      h-100 d-flex align-items-center">
      <h2 class="text-black">${randomMeals[i].strMeal}</h2>

      </div>
      </div>
      </div>`;
    }
  }
  document.getElementById("searching").innerHTML = cartona;
}
