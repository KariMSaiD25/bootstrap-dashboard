

const sideBar = document.getElementById('sidebar')


if (localStorage.getItem('isSmall')==='yes') 
  sideBar.classList.remove("small-sidebars")
else
sideBar.classList.add("small-sidebars")

 function toggleSideBar  () {
  console.log("Element clicked!"); 
  sideBar.classList.toggle('small-sidebars')
  
  
   if (localStorage.getItem('isSmall')==='yes') 
    
      localStorage.setItem('isSmall' , 'no')
   else
 localStorage.setItem('isSmall' , 'yes')


};