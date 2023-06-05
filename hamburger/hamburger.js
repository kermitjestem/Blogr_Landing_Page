


function displayMenu(e) 

{
  const hamburger=document.querySelector(".mobile-menu")
  hamburger.classList.toggle("mobile-menu-active")


  
const hamburgerClosed=document.querySelector(".hamburger_close")
  hamburgerClosed.classList.toggle("hamburger_close_active")

  const hamburgerImg=document.querySelector(".hamburger")
  hamburgerImg.classList.toggle("hamburger_onclick")
}


function closeMenu (e) {

    document.querySelector(".mobile-menu").classList.remove("mobile-menu-active")
    document.querySelector(".hamburger_close").classList.remove("hamburger_close_active")
document.querySelector(".hamburger").classList.remove("hamburger_onclick")
}







const dropDownProduct1=document.querySelector(".mobile-menu-list1")
const dropDownProduct2=document.querySelector(".mobile-menu-list2")
const dropDownProduct3=document.querySelector(".mobile-menu-list3")


function dropDownMenu (e) {


    dropDownProduct1.classList.toggle("mobile-menu-list1-active")

    dropDownProduct2.classList.remove("mobile-menu-list1-active2")
    dropDownProduct3.classList.remove("mobile-menu-list1-active3")
}

function dropDownMenu2 (e) {


    dropDownProduct2.classList.toggle("mobile-menu-list1-active2")
    dropDownProduct1.classList.remove("mobile-menu-list1-active")
    dropDownProduct3.classList.remove("mobile-menu-list1-active3")


    
    
}


function dropDownMenu3 (e) {
   

    dropDownProduct3.classList.toggle("mobile-menu-list1-active3")

    dropDownProduct1.classList.remove("mobile-menu-list1-active")
    dropDownProduct2.classList.remove("mobile-menu-list1-active2")
}

