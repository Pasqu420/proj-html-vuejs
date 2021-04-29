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
          type:'Commercial',
          hover: true
        },
        {
          img:'images/project1-featured-294276386.jpg',
          title:'Main Modernity',
          type:'Residential',
          hover: true
        },
        {
          img:'images/project3-featured-189023420.jpg',
          title:'Exclusive Urban Living',
          type:'Commercial',
          hover: true
        }
      ],
      cardValues:
      [
        {
          icon:'fas fa-home',
          color:'#4ea4a5',
          title:'Great Services',
          text:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
        },
        {
          icon:'far fa-sun',
          color:'#4e6da5',
          title:'Highest Standards',
          text:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
        },
        {
          icon:'fas fa-users',
          color:'#f6722a',
          title:'Professional Team',
          text:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
        },
        {
          icon:'far fa-lightbulb',
          color:'#a7cf47',
          title:'Creative Solutions',
          text:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
        }
      ],
      slider:
      [
        {
          img:'images/home-testimonial-113165296.jpg',
          overview:'No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.',
          name:'HARRY SMITH',
          type:'NEW HOME OWNER'
        },
        {
          img:'images/home-testimonial-84268399.jpg',
          overview:'Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.',
          name:'JOHN DOE',
          type:'PROPERTY INVESTOR'
        }
      ],
      indSlider:0,
      backgroundSlider:'images/home-parallax-144609983.jpg',
      cardNews:
      [
        {
          img:'images/blog-post-134132600.jpg',
          title:'Redeveloping Florida’s Remote Southern Coast',
          date:'December 7th, 2015',
          type:'Architecture, Buildings, Construction, News',
          overview:'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
        },
        {
          img:'images/blog-post-92486644.jpg',
          title:'How We Manage Large Construction Projects',
          date:'December 7th, 2015',
          type:'Architecture, Construction, Engineering',
          overview:'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
        },
        {
          img:'images/blog-post-332773904.jpg',
          title:'Future proofing a modern home',
          date:'December 6th, 2015',
          type:'Architecture, Construction, Marketing',
          overview:'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
        }
      ],
      sliderLoghi:
      [
        'images/home-logo1-219096700-320x202.png',
        'images/home-logo2-219096700-320x202.png',
        'images/home-logo9-219096700-320x202.png',
        'images/home-logo10-219096700-320x202.png',
        'images/home-logo11-219096700-320x202.png'
      ]
    },
    mounted(){
      this.timing = setInterval(this.animationNumber,0.01);
      setInterval(this.mySlider,4000)
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
      },
      mySlider:function () {
        this.indSlider ++
        if (this.indSlider ==2) {
          this.indSlider = 0
        }
      }
    }
  });
}

function init() {
  initVue();
}
document.addEventListener('DOMContentLoaded',init);
