
$("#transferringNav").animate({ left:-$(".socials").innerWidth() },0)

$(".togler i").click(function () {
  if ($("#transferringNav").css("left") == "0px") {
      $("#transferringNav").animate({ left:-$(".socials").innerWidth() }, 1000)


  } else {
      $("#transferringNav").animate({ left: "0px" }, 1000)
  }
})


let ingredients = []
async function request() {
  let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  let convert = await xhr.json();
  ingredients = convert.meals;
  displayIngredients();
}
request();
function displayIngredients() {
  let cartona = ``;
  for (let i = 0; i < ingredients.length; i++) {
    let des = ingredients[i].strDescription
    cartona += `
        <div class="col-md-3">
                            <div class="ingredient d-flex flex-column align-items-center text-white my-3">
                                <span class="fa-solid fa-drumstick-bite fa-4x"></span>
                                <h2>${ingredients[i].strIngredient}</h2>
                                <p>${des}</p>
                            </div>
                        </div>`;
  }
  document.getElementById("ingredients").innerHTML = cartona;
}



