

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

const cardsNode = document.querySelector('.header__items')
const btnInvi = document.querySelector('.button-invitation')
const btnView = document.querySelector('.button-no-view')
const btnNoView = document.querySelector('.button-view')
const btnRefusal = document.querySelector('.button-refusal')
const cardNode = document.querySelectorAll('.card')
btnInvi.addEventListener('click', funcDataDesc)
function funcDataDesc() {
   const cardsNode = document.querySelector('.header__items')
   let items = cardsNode.childNodes;
   let itemsArr = [];
   for (let i in items) {
      if (items[i].nodeType == 1) {
         itemsArr.push(items[i]);
      }
   }
   itemsArr.sort(function (a, b) {
      return parseFloat(a.getAttribute('data-refusal')) == parseFloat(b.getAttribute('data-refusal')) ?
         0 :
         (parseFloat(a.getAttribute('data-refusal')) < parseFloat(b.getAttribute('data-refusal')) ? 1 : -1);
   });
   for (let i = 0; i < itemsArr.length; ++i) {
      if (itemsArr[i].hasAttribute('data-refusal')) {
         cardsNode.insertBefore(itemsArr[i], cardsNode.firstChild)
      }
   }
}

btnInvi.addEventListener('click', funcDataDesс)
function funcDataDesс() {
   let contI = document.querySelector('.content__inner')
   let items = contI.childNodes;
   let itemsArr = [];
   for (let i in items) {
      if (items[i].nodeType == 1) {
         itemsArr.push(items[i]);
      }
   }
   itemsArr.sort(function (a, b) {
      return parseFloat(a.getAttribute('data-refusal')) == parseFloat(b.getAttribute('data-refusal')) ?
         0 :
         (parseFloat(a.getAttribute('data-refusal')) < parseFloat(b.getAttribute('data-refusal')) ? 1 : -1);
   });
   for (let i = 0; i < itemsArr.length; ++i) {
      if (itemsArr[i].hasAttribute('data-refusal')) {
         contI.insertBefore(itemsArr[i], contI.firstChild)
      }
   }
}


btnRefusal.addEventListener('click', funcSort)
console.log(btnRefusal)
function funcSort() {
   const cardsNode = document.querySelector('.header__items')
   let items = cardsNode.childNodes;
   let itemsArr = [];
   for (let i in items) {
      if (items[i].nodeType == 1) {
         itemsArr.push(items[i]);
      }
   }
   itemsArr.sort(function (a, b) {
      return parseFloat(a.getAttribute('data-id')) == parseFloat(b.getAttribute('data-id')) ?
         0 :
         (parseFloat(a.getAttribute('data-id')) > parseFloat(b.getAttribute('data-id')) ? 1 : -1);
   });
   for (let i = 0; i < itemsArr.length; ++i) {
      cardsNode.appendChild(itemsArr[i]);
   }
}
// child.forEach(el => {
//    if (el.hasAttribute('data-refusal')) {
//       console.log(el)
//       gh.push(el)
//       gh.reverse()

//       cardsNode.insertBefore(el, cardsNode.firstChild)

//    }



// const dataInc = document.getElementById('data-increase').addEventListener('click', funcDataInc)
// const dataDesc = document.getElementById('data-descending').addEventListener('click', funcDataDesc)

// function funcDataInc() {
//    // let activedNode = document.querySelector('#actived')
//    const cardsNode = document.querySelector('.header__items')
//    card.forEach(el)
// }
// function funcDataDesc() {
//    let activedNode = document.querySelector('#actived')
//    let items = activedNode.childNodes;
//    let itemsArr = [];
//    for (let i in items) {
//       if (items[i].nodeType == 1) {
//          itemsArr.push(items[i]);
//       }
//    }
//    itemsArr.sort(function (a, b) {
//       return parseFloat(a.getAttribute('data-id')) == parseFloat(b.getAttribute('data-id')) ?
//          0 :
//          (parseFloat(a.getAttribute('data-id')) > parseFloat(b.getAttribute('data-id')) ? 1 : -1);
//    });
//    for (let i = 0; i < itemsArr.length; ++i) {
//       activedNode.appendChild(itemsArr[i]);
//    }
// }
