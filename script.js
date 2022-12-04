

const src = document.querySelectorAll(".button")
let clientY
window.addEventListener('touchmove', (e) => {
   src.forEach(src => {
      if (src.contains(e.target)) {
         let parent = src.closest('.button-w')
         clientY = e.touches[0].clientY;
         parent.style.top = clientY + 'px'
         let dpx = 0
         if ((clientY < dpx)) {
         }
         let hg = 200
         if ((clientY > 200)) {
            parent.classList.add('button-w--transform')
         }
      }
   })
   console.log(clientY)
})















