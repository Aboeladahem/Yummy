
$("#transferringNav").animate({ left:-$(".socials").innerWidth() },0)

$(".togler i").click(function () {
  if ($("#transferringNav").css("left") == "0px") {
      $("#transferringNav").animate({ left:-$(".socials").innerWidth() }, 1000)


  } else {
      $("#transferringNav").animate({ left: "0px" }, 1000)
  }
})
let randomMeals = [];

function getRequest( q = "") {
  let url = new XMLHttpRequest();
  url.open("GET", `https:themealdb.com/api/json/v1/1/search.php?s=${q}`);
  url.send();
  url.addEventListener("readystatechange", function () {
    if (url.readyState == 4) {
      randomMeals = JSON.parse(url.response).meals;
      displayRandomMeals();
    }
  });
}
getRequest();

function displayRandomMeals() {
  let box = ``;
  for (let i = 0; i < randomMeals.length; i++) {
    box += `
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
  document.getElementById("defaultMeals").innerHTML = box;
}