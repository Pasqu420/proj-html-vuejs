function initVue() {
  new Vue({
    el:'#app',
    data:{
      logo: {name:'Avada Construction',img:'images/construction_mobile_logo.png'},
      navBar:
      [
        {
          nav:'HOME',
          menu:false
        },
        {
          nav:'ABOUT',
          menu:false
        },
        {
          nav:'SERVICES',
          menu:false
        },
        {
          nav:'WORK',
          menu:false
        },
        {
          nav:'ARTICLES',
          menu:false
        }
      ]
    }
  });
}

function init() {
  initVue();
}
document.addEventListener('DOMContentLoaded',init);
