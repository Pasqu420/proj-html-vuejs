function initVue() {
  new Vue({
    el:'#app',
    data:{
      logo: {name:'Avada Construction',img:'images/construction_mobile_logo.png'},
      navBar:
      [
        {
          nav:'HOME',
          menu:true
        },
        {
          nav:'ABOUT',
          menu:true
        },
        {
          nav:'SERVICES',
          menu:true
        },
        {
          nav:'WORK',
          menu:true
        },
        {
          nav:'ARTICLES',
          menu:true
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
      ],
      imgCounter:'images/home-244125289.jpg',
      counter:
      [
        {
          icon:'fas fa-suitcase',
          initCount: 0,
          num:'3534',
          text:'PLANNING APPLICATIONS'
        },
        {
          icon:'far fa-building',
          initCount: 0,
          num:'896',
          text:'COMPLETED PROJECTS'
        },
        {
          icon:'fas fa-users',
          initCount: 0,
          num:'172',
          text:'TRAINED PROFESSIONALS'
        },
        {
          icon:'fas fa-globe',
          initCount: 0,
          num:'19',
          text:'INTERNATIONAL OFFICES'
        }
      ],
      timing:null,
      cardWork:
      [
        {
          img:'images/project2-featured-15013609.jpg',
          title:'Florida Heath Facility',
          type:'Commercial'
        },
        {
          img:'images/project1-featured-294276386.jpg',
          title:'Main Modernity',
          type:'Residential'
        },
        {
          img:'images/project3-featured-189023420.jpg',
          title:'Exclusive Urban Living',
          type:'Commercial'
        }
      ]
    },
    mounted(){
      this.timing = setInterval(this.animationNumber,0.01);
    },
    methods:{
      changeCard: function (item) {
        item.hover = !item.hover;
      },
      animationNumber: function () {
        for (let i = 0; i < this.counter.length; i++) {
          const elem = this.counter[i];
          if(this.counter[0].initCount==this.counter[0].num){
            clearInterval(this.timing);
          }
          if (elem.initCount < elem.num) {
            elem.initCount ++;
          }
        }
      }
    }
  });
}

function init() {
  initVue();
}
document.addEventListener('DOMContentLoaded',init);
