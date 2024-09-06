function toggleMode() {
   const html = document.documentElement //pegando o html
   html.classList.toggle('light') // fazendo as troca de classes dark,light
    
   // pegar a tag img
   const img = document.querySelector('#profile img')
   
   //subistituir a imagem
   if(html.classList.contains('light')) {
      //se tiver light mode, adcionar a imagem light
     img.setAttribute('src', './assets/avatar-light.png')
   } else {
      //ser tiver sem light mode , manter a imagem normal
      img.setAttribute('src', './assets/avatar.png')
   } 
}