

$("#transferringNav").animate({ left:-$(".socials").innerWidth() },0)

$(".togler i").click(function () {
  if ($("#transferringNav").css("left") == "0px") {
      $("#transferringNav").animate({ left:-$(".socials").innerWidth() }, 1000)


  } else {
      $("#transferringNav").animate({ left: "0px" }, 1000)
  }
})

// initialize inputs
let inName = document.getElementById("inName")
let inMail = document.getElementById("inMail")
let inPhone = document.getElementById("inPhone")
let inAge = document.getElementById("inAge")
let inPassword = document.getElementById("inPassword")
let inRepassword = document.getElementById("inRepassword")

//initialize input regex 
let nameRegex = /^[a-zA-Z]{3,10}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phoneRegex = /^(002|\+2)?01[0125][0-9]{8}$/;
let ageRegex = /^(1[89]|[2-9]\d)$/;
let passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

//initialize error messages
let nameError = document.getElementById("nameError")
let mailError = document.getElementById("mailError")
let phoneError = document.getElementById("phoneError")
let ageError = document.getElementById("ageError")
let passError = document.getElementById("passError")
let repassError = document.getElementById("repassError")

let submitBtn = document.getElementById("submitBtn")

function validateForm() {
    // Validate name input
    inName.addEventListener("blur",()=>{
        if (!nameRegex.test(inName.value)) {
            nameError.classList.remove("d-none")
          }
    })
    
    
    // Validate email input
    inMail.addEventListener("blur",()=>{
        if (!emailRegex.test(inMail.value)) {
            mailError.classList.remove("d-none")
        }
    })
    
    
    // Validate phone input
    inPhone.addEventListener("blur",()=>{
        if (!phoneRegex.test(inPhone.value)) {
            phoneError.classList.remove("d-none")
         
        }
    })
    
    
    // Validate age input
    inAge.addEventListener("blur",()=>{
        if (!ageRegex.test(inAge.value)) {
            ageError.classList.remove("d-none")
         
        }
    })
    
    
    // Validate password input
    inPassword.addEventListener("blur",()=>{
        if (!passwordRegex.test(inPassword.value)) {
            passError.classList.remove("d-none")
          
        }
    })
    
    
    // Validate repassword input
    inRepassword.addEventListener("blur",()=>{
        if (inPassword.value !== inRepassword.value) {
            repassError.classList.remove("d-none")
          
        }
    })
    
    
    // If all inputs are valid, submit form
    if (nameRegex.test(inName.value)&&emailRegex.test(inMail.value)&&phoneRegex.test(inPhone.value)&&ageRegex.test(inAge.value)&&passwordRegex.test(inPassword.value)&&inPassword.value !== inRepassword.value) {
        submitBtn.removeAttribute("disabled")
    }
}
  
validateForm()

