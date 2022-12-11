

// const src = document.querySelectorAll(".popup__line")
// const wr = document.querySelectorAll('.popup')
// let clientY
// window.addEventListener('touchmove', (e) => {
//    src.forEach(element => {
//       if (element.contains(e.target)) {
//          let parent = element.closest('.popup__body')
//          console.log(parent)
//          clientY = e.touches[0].clientY;
//          parent.style.top = clientY + 'px'
//          let none = 560
//          if (clientY < none) {
//             parent.style.top = none + 'px'
//          }
//          let hg = 800
//          if ((clientY > hg)) {
//             parent.classList.add('popup__body--js-active')
//             wr.forEach(elem => {
//                elem.classList.remove('popup--js-active')
//             })
//          }
//       }
//       console.log(clientY)
//    })
// })

// const btn = document.querySelectorAll('.button-w')
// btn.forEach(el => {
//    el.addEventListener('click', function () {
//       let index = this.dataset.id
//       console.log(index)
//       wr.forEach(elem => {
//          wr[index].classList.add('popup--js-active')
//       })
//    })
// })



document.querySelector('.btn').addEventListener('click', funcApp)
function funcApp() {
   const contentNode = document.querySelector('.content__inner')
   const checkboxMain = document.querySelector('.main-checkbox')
   const cardCheck = document.querySelectorAll('.card__real-checkbox')
   checkboxMain.addEventListener('click', function () {
      if (checkboxMain.checked == true) {
         cardCheck.forEach(e => {
            e.checked = true
         })
      }
      if (checkboxMain.checked == false) {
         cardCheck.forEach(e => {
            e.checked = false
         })
      }

   })
   cardCheck.forEach(el => {
      if (el.checked == true) {
         let card = el.closest('.card')
         card.remove()
      }
   })
   cardCheck.forEach(el => {
      el.addEventListener('click', () => {
         checkboxMain.checked = false

      })
   })
}
funcApp()







