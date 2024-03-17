
const darkModeInfo = localStorage.getItem('dark');
const img = document.querySelector(".dark"),
      img1 = document.querySelector(".light")

if(darkModeInfo === 'bexruz'){
    addLocalStorageData()
    img.style.display = "block"
    img1.style.display = "none"



    
}


function addLocalStorageData(){
    document.body.classList.add('darkMode');
    localStorage.setItem('dark', 'bexruz');
    img.style.display = "block"
   
}

function removeStorage(){
    document.body.classList.remove('darkMode');
    localStorage.setItem('dark', undefined);
    img.style.display = "block"
    img1.style.display = "none"
}

function ClickAddChange(){
    const darkStorage = localStorage.getItem('dark')
    if(darkStorage !== 'bexruz'){
        addLocalStorageData()
        img.style.display = "block"
        img1.style.display = "none"
       
    }else{
        removeStorage()
        img.style.display = "none"
        img1.style.display = "block"
    }
}
