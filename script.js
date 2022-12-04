

const src = document.querySelector(".popup__line")
let clientY
window.addEventListener('touchmove', (e) => {
   if (src.contains(e.target)) {
      let parent = src.closest('.popup__body')
      console.log(parent)
      clientY = e.touches[0].clientY;
      parent.style.top = clientY + 'px'
      let hg = 700
      if ((clientY > hg)) {
         parent.classList.add('popup__body--js-active')
      }
      console.log(clientY)
   }
})















