"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p="Introduction",u={unversionedId:"intro",id:"intro",title:"Introduction",description:"- version: 2.3.x",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/mgilangjanuar/teledrive/edit/staging/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/faq"},next:{title:"Docker",permalink:"/docs/Installation/docker"}},s={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"OS recommendation",id:"os-recommendation",level:3},{value:"Repository",id:"repository",level:3},{value:"Access keys",id:"access-keys",level:3},{value:"Next Steps",id:"next-steps",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"version: 2.3.x"),(0,o.kt)("li",{parentName:"ul"},"updated: 2022-05-13")),(0,o.kt)("p",null,"If you ever heard about cloud storage services like Google Drive, OneDrive, iCloud, Dropbox ","\u2014"," ",(0,o.kt)("strong",{parentName:"p"},"TeleDrive")," is one of them, you can upload photos, videos, documents, or any files for free. But, what makes ",(0,o.kt)("strong",{parentName:"p"},"TeleDrive")," different? We're using the ",(0,o.kt)("a",{href:"https://core.telegram.org/api#telegram-api",target:"_blank"},"Telegram API"),", so you can do uploads without limit and free."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Get started by installing all needed services."),(0,o.kt)("h3",{id:"os-recommendation"},"OS recommendation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ubuntu 20.04"),(0,o.kt)("p",{parentName:"li"},"Install build-essential with command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install build-essential -y\n")))),(0,o.kt)("h3",{id:"repository"},"Repository"),(0,o.kt)("p",null,"Clone the repository by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/mgilangjanuar/teledrive.git\ncd teledrive\n")),(0,o.kt)("h3",{id:"access-keys"},"Access keys"),(0,o.kt)("p",null,"You need to create an application on ",(0,o.kt)("a",{parentName:"p",href:"https://my.telegram.org/"},"Telegram")," first."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/mgilangjanuar/image/upload/v1648508069/teledrive/Screen_Shot_2022-03-29_at_05.52.20_rf4dxt.png",alt:"img"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note.")," ",(0,o.kt)("em",{parentName:"p"},"Save the access keys in the environment variables.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TG_API_ID=[your_api_id]\nTG_API_HASH=[your_api_hash]\n")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Next, you can select where you want to install TeleDrive."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Virtual machine (Ubuntu 20.04) ",(0,o.kt)("em",{parentName:"p"},"(difficulty level: high)")),(0,o.kt)("p",{parentName:"li"},"Clone repository to your virtual machine and choose the installation method:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Running application with ",(0,o.kt)("a",{parentName:"li",href:"/docs/installation/docker"},"Docker"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Then, setup domain with reverse proxy (",(0,o.kt)("a",{parentName:"li",href:"/docs/deoployment/nginx"},"nginx"),")"))),(0,o.kt)("li",{parentName:"ul"},"Or, running with ",(0,o.kt)("a",{parentName:"li",href:"/docs/installation/manual"},"manual"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Daemonize the application with ",(0,o.kt)("a",{parentName:"li",href:"/docs/deoployment/pm2"},"pm2")),(0,o.kt)("li",{parentName:"ul"},"Then, setup domain with reverse proxy (",(0,o.kt)("a",{parentName:"li",href:"/docs/deoployment/nginx"},"nginx"),")"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Heroku ",(0,o.kt)("em",{parentName:"p"},"(difficulty level: low)")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Clone repository to your local machine"),(0,o.kt)("li",{parentName:"ul"},"Deploy to ",(0,o.kt)("a",{parentName:"li",href:"/docs/deployment/heroku"},"Heroku")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Vercel ",(0,o.kt)("em",{parentName:"p"},"(difficulty level: low)")," [Build failed, last update: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mgilangjanuar/teledrive/issues/336#issuecomment-1120316455"},"#336"),"]"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Clone repository to your local machine"),(0,o.kt)("li",{parentName:"ul"},"Build with ",(0,o.kt)("a",{parentName:"li",href:"/docs/installation/manual"},"manual")," method"),(0,o.kt)("li",{parentName:"ul"},"Deploy to ",(0,o.kt)("a",{parentName:"li",href:"/docs/deployment/vercel"},"Vercel"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note.")," ",(0,o.kt)("em",{parentName:"p"},"Vercel doesn't have database service. So, you need to create a database manually in ",(0,o.kt)("a",{parentName:"em",href:"https://supabase.com/"},"Supabase"),", ",(0,o.kt)("a",{parentName:"em",href:"https://elements.heroku.com/addons/heroku-postgresql"},"Heroku Postgres"),", ",(0,o.kt)("a",{parentName:"em",href:"https://www.elephantsql.com/"},"ElephantSQL"),", or any other database service.")))))}d.isMDXComponent=!0}}]);