(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(13),c=a.n(s),i=(a(25),a(14)),m=a(15),r=a(18),o=a(16),d=a(19),u=(a(26),a(17)),g=a.n(u),h=a(3),b=a.n(h),p=a(2),E=a.n(p),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={topImages:[],search:"",toogleEnable:!1,cardView:!0},a.componentDidMount=function(){g.a.get("https://api.imgur.com/3/gallery/top/time/week",{headers:{Authorization:"Client-ID 18eef0ce23381ff"}}).then((function(e){a.setState({topImages:e.data.data})})).catch((function(e){return console.log(e)}))},a.handleSearch=function(e){a.setState({search:e.target.value})},a.handleToggle=function(){a.setState({toogleEnable:!a.state.toogleEnable})},a.handleCardView=function(){a.setState({cardView:!0,tableView:!1})},a.handleTableView=function(){a.setState({cardView:!1,tableView:!0})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.topImages.filter((function(e){return e.images&&"image/jpeg"===e.images[0].type})).sort((function(e,t){return t.datetime-e.datetime})).filter((function(t){return-1!==t.title.toLowerCase().indexOf(e.state.search.toLowerCase())}));return!0===this.state.toogleEnable&&(t=t.filter((function(e){return(e.score+e.points+e.topic_id)%2===0}))),n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement("div",{className:"row m-0 page-head"},n.a.createElement("div",{className:"col"},n.a.createElement("h1",{className:"page-title"},"Top Images of The Week From ",n.a.createElement("b",{className:"text-dark"},"Imgur")," ","Gallery"),n.a.createElement("div",{className:"search-bar"},n.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search...",value:this.state.search,onChange:this.handleSearch}),n.a.createElement("span",{className:"search-btn"},n.a.createElement("i",{className:"fab fa-sistrix"}))))),n.a.createElement("div",{className:"customize-container p-0"},n.a.createElement("div",{className:"row m-0"},n.a.createElement("div",{className:"col p-0"},n.a.createElement("button",{className:E()("action-btns mr-md-3",{"action-btns-active":this.state.toogleEnable}),onClick:this.handleToggle,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:"This is a toggle button that filter results where the sum of \u201cpoints\u201d, \u201cscore\u201d and \u201ctopic_id\u201d adds up to an even number or not."},n.a.createElement("i",{className:"fas fa-filter"})),n.a.createElement("button",{className:E()("action-btns",{"action-btns-active":!this.state.cardView}),onClick:this.handleTableView,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:"Display results in a table."},n.a.createElement("i",{className:"fas fa-list"})),n.a.createElement("button",{className:E()("action-btns",{"action-btns-active":this.state.cardView}),onClick:this.handleCardView,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:"Display results by cards."},n.a.createElement("i",{className:"fa fa-th"})))),n.a.createElement("div",{className:"row m-0"},n.a.createElement("div",{className:"col p-0"},n.a.createElement("p",{className:"noOfResults"},n.a.createElement("b",null,t.length," results")))),n.a.createElement("div",{className:"row m-0"},n.a.createElement("div",{className:"col p-0"},this.state.cardView?t.map((function(e,t){return n.a.createElement("div",{key:t,className:"card"},n.a.createElement("div",{className:"card-image-div"},n.a.createElement("img",{src:e.images&&e.images[0].link,className:"card-images",alt:e.title})),n.a.createElement("p",{className:"image-count"},e.images_count-1!==0?e.images_count-1:"No"," ","additional images"),n.a.createElement("p",{className:"title"},e.title),n.a.createElement("p",{className:"time"},b.a.unix(e.datetime).format("DD/MM/YYYY HH:mm a")))})):n.a.createElement("div",{className:"table-responsive px-3"},n.a.createElement("table",{className:"table table-bordered table-hover mt-3"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"table-header-row"},n.a.createElement("td",{className:"table-title-col"},"Title"),n.a.createElement("td",{className:"table-date-col"},"Date"),n.a.createElement("td",{className:"table-img-count-col"},"No. of Additional Images"),n.a.createElement("td",{className:"table-image-col"},"Image"))),n.a.createElement("tbody",null,t.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",{className:"table-title"},e.title),n.a.createElement("td",{className:"table-date"},b.a.unix(e.datetime).format("DD/MM/YYYY HH:mm a")),n.a.createElement("td",{className:"table-count-images"},e.images_count-1!==0?e.images_count-1:"-"),n.a.createElement("td",null,n.a.createElement("img",{src:e.images&&e.images[0].link,className:"table-images",alt:e.title})))})))))))),n.a.createElement("div",{className:"row m-0 mt-5",style:{background:"#17252a",fontSize:"14px",cursor:"default"}},n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"text-light text-center mt-3"},"Spritzer Labs - Assessment (Front-end Development - React) by Chamara Madhushanka"))))}}]),t}(l.Component);c.a.render(n.a.createElement(f,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8ed70a96.chunk.js.map