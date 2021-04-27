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
      ],
      jumbotron:'images/construction_thumbnail.jpg',
      cardSpecialist:
      [
        {
          title:'Buildings',
          icon:'far fa-building',
          front:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
          back_p:'ARTFULLY CRAFTED',
          back:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
        },
        {
          title:'Renovate',
          icon:'fas fa-sync-alt',
          front:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
          back_p:'FRESHLY NEW',
          back:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
        },
        {
          title:'Construct',
          icon:'fas fa-home',
          front:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
          back_p:'PERFECT LINES',
          back:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
        },
        {
          title:'Exclusive',
          icon:'fas fa-truck',
          front:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
          back_p:'PLANNING',
          back:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
        }
      ]
    }
  });
}

function init() {
  initVue();
}
document.addEventListener('DOMContentLoaded',init);
