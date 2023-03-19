
$("#transferringNav").animate({ left:-$(".socials").innerWidth() },0)

$(".togler i").click(function () {
  if ($("#transferringNav").css("left") == "0px") {
      $("#transferringNav").animate({ left:-$(".socials").innerWidth() }, 1000)


  } else {
      $("#transferringNav").animate({ left: "0px" }, 1000)
  }
})
//https://www.themealdb.com/api/json/v1/1/list.php?c=list
let categories =[]
async function request() {
    let xhr =await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let convert =await xhr.json()
    categories = convert.categories
    displayCategories()    
}
request()
function displayCategories() {
    let cartona =``
    for (let i = 0; i < categories.length; i++) {
        cartona+=`
        <div class="col-md-3 my-3">
                        <div class="item w-100 position-relative overflow-hidden
                            rounded-3 ">
                            <img src="${categories[i].strCategoryThumb}"
                                class="w-100 "
                                alt="..." />
                            <div class="caption bg-white w-100 position-absolute
                                h-100 d-flex align-items-center d-flex flex-column align-items-center p-2">
                                <h2 class="text-black">${categories[i].strCategory}</h2>
                                <p class="mb-3">${categories[i].strCategoryDescription}</p>
                            </div>
                        </div>
                    </div>`        
    }
    document.getElementById("categoryMeals").innerHTML = cartona
}
