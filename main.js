function onScroll() {
    if (scrollY > 0) {
      return navigation.classList.add('scroll')
    } 
      navigation.classList.remove('scroll')
    
  }
  
   
  function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }