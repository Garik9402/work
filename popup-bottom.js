document.addEventListener("DOMContentLoaded", () => {

   //my-resume
   const myResumePopupOverlay = document.querySelector('.overlay-bottom'); //overlay
   const myResumePopupOpenBtn = document.querySelectorAll('.banner-list__btn'); //открыть попап
   const myResumePopUp = document.querySelector('.delete-file');
   const myResumePopUpInner = document.querySelector('.delete-file__inner'); //контент
   const myResumePopUpInnerClass = '.delete-file__inner'; //контент классы 
   const myResumePopUpSwipeClose = document.querySelector('.delete-file__swipe-close');

   const myResumeCancelBtn = document.querySelector('.delete-file__btn--type--cancel');
   const myResumeActionBtn = document.querySelector('.delete-file__btn--type--action');

   const myResumeCloseBtns = [myResumeCancelBtn, myResumeActionBtn];



   const lWidth = document.querySelector('html').clientWidth;
   let scrollY;

   function clickOpenpopup(background, modalWindow, modalInner, modalInnerClass, closeSwipeBtn, closeItems) {
      let html = document.querySelector('html'),
         body = document.querySelector('body');
      // background = document.querySelector('.overlay');
      // заблокировать скролл
      let disableScroll = function () {
         html.style.height = 'calc(100vh - 1px)';
         body.style.height = 'calc(100vh - 1px)';
         body.style.width = 'calc(100vw)';
         body.style.position = 'fixed';
         body.style.overflow = 'hidden';
         if (lWidth < 1140) { }
      }
      // разблокировать скролл
      let enableScroll = function () {
         html.style.height = 'auto';
         body.style.height = 'auto';
         body.style.overflow = 'hidden auto';
         body.style.position = 'static';
      }
      // открытие модального окна
      const openModal = () => {
         scrollY = window.scrollY;
         body.style.top = `-${scrollY}px`;
         body.style.height = `calc(${scrollY}px - 1px + 100vh)`;
         background.classList.add('overlay-bottom--active');
         modalWindow.classList.add('active');
         disableScroll();
      }


      // закрытие модального окна
      const closeModal = () => {
         modalWindow.classList.remove('active');
         background.classList.remove('overlay-bottom--active');
         // cancelBtn.removeEventListener('click', closeModal);
         modalWindow.removeEventListener('swiped-down', closeModalOnInnerSwipe);
         closeSwipeBtn.removeEventListener('swiped-down', closeModal);
         closeSwipeBtn.removeEventListener('click', closeModal);


         closeItems.forEach(item => {
            item.removeEventListener('click', closeModal);
         });

         setTimeout(() => {
            enableScroll();
            body.style.top = `0px`;
            window.scrollTo(0, scrollY);
         }, 200);
      }

      const closeModalOnInnerSwipe = (e) => {
         let target = e.target
         if (target.closest(modalInnerClass) && modalWindow.offsetHeight < modalInner.scrollHeight) {
            e.stopPropagation();
         } else {
            closeModal();
         }
      }

      const onKeydown = (evt) => {
         if (evt.key === "Escape") {
            closeModal();
         }
      };

      function openModalFunction(event) {
         event.preventDefault();

         openModal();

         // Закрытие окна 
         // нажатие на фон
         background.addEventListener('click', (e) => {
            if (e.target == background) {
               closeModal();
            }
         }, {
            once: true
         });
         // скролл по модальному окну
         modalWindow.addEventListener('swiped-down', closeModalOnInnerSwipe, {
            once: true
         });

         // скролл по зоне закрытия модального окна
         closeSwipeBtn.addEventListener('swiped-down', closeModal, {
            once: true
         });
         // нажатие на зону закрытия модального окна
         closeSwipeBtn.addEventListener('click', closeModal, {
            once: true
         });

         document.addEventListener('keydown', onKeydown, {
            once: true
         });


         closeItems.forEach(item => {
            item.addEventListener('click', closeModal);
         });
      }
      openModalFunction(event);

   };


   myResumePopupOpenBtn.forEach(btn => {
      btn.addEventListener('click', () => {
         clickOpenpopup(
            myResumePopupOverlay,
            myResumePopUp,
            myResumePopUpInner,
            myResumePopUpInnerClass,
            myResumePopUpSwipeClose,
            myResumeCloseBtns,
         );

      })
   })
})