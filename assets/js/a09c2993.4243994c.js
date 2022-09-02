"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[4128],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1143:function(e,t,r){r.r(t),r.d(t,{default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Go",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/introduction.md",version:"current",lastUpdatedAt:1662083518,formattedLastUpdatedAt:"9/2/2022",frontMatter:{},sidebar:"docs",next:{title:"Concepts",permalink:"/docs/concept"}},c=[{value:"0. What is go-zero?",id:"0-what-is-go-zero",children:[]},{value:"1. Backgrounds of go-zero",id:"1-backgrounds-of-go-zero",children:[]},{value:"2. Design considerations",id:"2-design-considerations",children:[]},{value:"3. The features of go-zero",id:"3-the-features-of-go-zero",children:[]},{value:"4. Future development plans of go-zero",id:"4-future-development-plans-of-go-zero",children:[]},{value:"5. Installation",id:"5-installation",children:[]},{value:"6. Quick Start",id:"6-quick-start",children:[]},{value:"7. Benchmark",id:"7-benchmark",children:[]},{value:"8. Documents (adding)",id:"8-documents-adding",children:[]},{value:"9. Important notes",id:"9-important-notes",children:[]},{value:"10. Chat group",id:"10-chat-group",children:[]}],p={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-zero-github-repo-stars-github-forks"},"go-zero ",(0,o.kt)("img",{parentName:"h1",src:"https://img.shields.io/github/stars/zeromicro/go-zero?style=social",alt:"GitHub Repo stars"})," ",(0,o.kt)("img",{parentName:"h1",src:"https://img.shields.io/github/forks/zeromicro/go-zero?style=social",alt:"GitHub forks"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/actions"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/zeromicro/go-zero/workflows/Go/badge.svg?branch=master",alt:"Go"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://codecov.io/gh/zeromicro/go-zero"},(0,o.kt)("img",{parentName:"a",src:"https://codecov.io/gh/zeromicro/go-zero/branch/master/graph/badge.svg",alt:"codecov"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://goreportcard.com/report/github.com/zeromicro/go-zero"},(0,o.kt)("img",{parentName:"a",src:"https://goreportcard.com/badge/github.com/zeromicro/go-zero",alt:"Go Report Card"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/zeromicro/go-zero.svg?style=flat-square",alt:"Release"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"}))),(0,o.kt)("h2",{id:"0-what-is-go-zero"},"0. What is go-zero?"),(0,o.kt)("p",null,"go-zero is a web and rpc framework with lots of engineering best practices builtin. It\u2019s born to ensure the stability of the busy services with resilience design, and has been serving sites with tens of millions users for years."),(0,o.kt)("p",null,"go-zero contains simple API description syntax and code generation tool called ",(0,o.kt)("inlineCode",{parentName:"p"},"goctl"),". You can generate Go, iOS, Android, Kotlin, Dart, TypeScript, JavaScript from .api files with ",(0,o.kt)("inlineCode",{parentName:"p"},"goctl"),"."),(0,o.kt)("p",null,"Advantages of go-zero:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"improve the stability of the services with tens of millions of daily active users"),(0,o.kt)("li",{parentName:"ul"},"builtin chained timeout control, concurrency control, rate limit, adaptive circuit breaker, adaptive load shedding, even no configuration needed"),(0,o.kt)("li",{parentName:"ul"},"builtin middlewares also can be integrated into your frameworks"),(0,o.kt)("li",{parentName:"ul"},"simple API syntax, one command to generate couple of different languages"),(0,o.kt)("li",{parentName:"ul"},"automatically validate the request parameters from clients"),(0,o.kt)("li",{parentName:"ul"},"plenty of builtin microservice management and concurrent toolkits")),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/architecture-en.png",alt:"Architecture",width:"1500"}),(0,o.kt)("h2",{id:"1-backgrounds-of-go-zero"},"1. Backgrounds of go-zero"),(0,o.kt)("p",null,"At the beginning of 2018, we decided to re-design our system, from a monolithic architecture with Java+MongoDB to a microservice architecture. After researches and comparisons, we chose to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Golang based",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"great performance"),(0,o.kt)("li",{parentName:"ul"},"simple syntax"),(0,o.kt)("li",{parentName:"ul"},"proven engineering efficiency"),(0,o.kt)("li",{parentName:"ul"},"extreme deployment experience"),(0,o.kt)("li",{parentName:"ul"},"less server resource consumption"))),(0,o.kt)("li",{parentName:"ul"},"Self-designed microservice architecture",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"I have rich experience on designing microservice architectures"),(0,o.kt)("li",{parentName:"ul"},"easy to locate the problems"),(0,o.kt)("li",{parentName:"ul"},"easy to extend the features")))),(0,o.kt)("h2",{id:"2-design-considerations"},"2. Design considerations"),(0,o.kt)("p",null,"Stability and productivity are two major goals that we wanted to archive. From the very beginning, we set the following design principles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"keep it simple"),(0,o.kt)("li",{parentName:"ul"},"high availability"),(0,o.kt)("li",{parentName:"ul"},"stable on high concurrency"),(0,o.kt)("li",{parentName:"ul"},"easy to extend"),(0,o.kt)("li",{parentName:"ul"},"resilience design, failure-oriented programming"),(0,o.kt)("li",{parentName:"ul"},"business logic development friendly while encapsulating the complexity as possible"),(0,o.kt)("li",{parentName:"ul"},"one thing, one way")),(0,o.kt)("p",null,"After almost half a year, we finished the transfer from a monolithic system to a microservice system, and deployed on August 2018. The new system guaranteed the business growth, and the system stability."),(0,o.kt)("h2",{id:"3-the-features-of-go-zero"},"3. The features of go-zero"),(0,o.kt)("p",null,"go-zero is a web and rpc framework that integrates lots of engineering practices. The highlights of the features are listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"powerful tool included, less code to write"),(0,o.kt)("li",{parentName:"ul"},"simple interfaces"),(0,o.kt)("li",{parentName:"ul"},"fully compatible with net/http"),(0,o.kt)("li",{parentName:"ul"},"middlewares are supported, easy to extend"),(0,o.kt)("li",{parentName:"ul"},"high performance"),(0,o.kt)("li",{parentName:"ul"},"failure-oriented programming, resilience design"),(0,o.kt)("li",{parentName:"ul"},"builtin service discovery, load balancing"),(0,o.kt)("li",{parentName:"ul"},"builtin concurrency control, adaptive circuit breaker, adaptive load shedding, auto trigger, auto recover"),(0,o.kt)("li",{parentName:"ul"},"automatic validation of API request parameters"),(0,o.kt)("li",{parentName:"ul"},"chained timeout control"),(0,o.kt)("li",{parentName:"ul"},"automatic management of data caching"),(0,o.kt)("li",{parentName:"ul"},"call tracing, metrics and monitoring"),(0,o.kt)("li",{parentName:"ul"},"high concurrency protected")),(0,o.kt)("p",null,"As shown below, go-zero implements layers of protection mechanisms:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/resilience-en.png",alt:"Resilience"})),(0,o.kt)("h2",{id:"4-future-development-plans-of-go-zero"},"4. Future development plans of go-zero"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"automatic generation of API mock server code, make the client debugging easier"),(0,o.kt)("li",{parentName:"ul"},"automatic generation of simple integration tests for the server side from the .api files")),(0,o.kt)("h2",{id:"5-installation"},"5. Installation"),(0,o.kt)("p",null,"Run the following command under your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go get -u github.com/zeromicro/go-zero\n")),(0,o.kt)("h2",{id:"6-quick-start"},"6. Quick Start"),(0,o.kt)("ol",{start:0},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Full examples can be checked out from below:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-doc/blob/main/doc/shorturl-en.md"},"Rapid development of microservice systems")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-doc/blob/main/doc/bookstore-en.md"},"Rapid development of microservice systems - multiple RPCs"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install goctl"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"goctl")," can be read as ",(0,o.kt)("inlineCode",{parentName:"p"},"go control"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"goctl")," means not to be controlled by code, instead, we control it. The inside ",(0,o.kt)("inlineCode",{parentName:"p"},"go")," is not ",(0,o.kt)("inlineCode",{parentName:"p"},"golang"),". At the very beginning, the tool was aimed to help us improve the productivity, and make our lives easier."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"GO111MODULE=on go get -u github.com/zeromicro/go-zero/tools/goctl\n")),(0,o.kt)("p",{parentName:"li"},"make sure goctl is executable.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an API file, like greet.api, you can install the plugin of goctl in vs code, api syntax is supported."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Request struct {\n  Name string `path:"name,options=you|me"` // parameters are auto validated\n}\n\ntype Response struct {\n  Message string `json:"message"`\n}\n\nservice greet-api {\n  @handler GreetHandler\n  get /greet/from/:name(Request) returns (Response);\n}\n')),(0,o.kt)("p",{parentName:"li"},"The .api files also can be generate by goctl, like below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"goctl api -o greet.api\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate the go server side code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"goctl api go -api greet.api -dir greet\n")),(0,o.kt)("p",{parentName:"li"},"The generated files look like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 greet\n\u2502\xa0\xa0 \u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 greet-api.yaml        // configuration file\n\u2502\xa0\xa0 \u251c\u2500\u2500 greet.go                  // main file\n\u2502\xa0\xa0 \u2514\u2500\u2500 internal\n\u2502\xa0\xa0     \u251c\u2500\u2500 config\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 config.go         // configuration definition\n\u2502\xa0\xa0     \u251c\u2500\u2500 handler\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 greethandler.go   // get/put/post/delete routes are defined here\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 routes.go         // routes list\n\u2502\xa0\xa0     \u251c\u2500\u2500 logic\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 greetlogic.go     // request logic can be written here\n\u2502\xa0\xa0     \u251c\u2500\u2500 svc\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 servicecontext.go // service context, mysql/redis can be passed in here\n\u2502\xa0\xa0     \u2514\u2500\u2500 types\n\u2502\xa0\xa0         \u2514\u2500\u2500 types.go          // request/response defined here\n\u2514\u2500\u2500 greet.api                     // api description file\n")),(0,o.kt)("p",{parentName:"li"},"The generated code can be run directly:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd greet\ngo mod init\ngo mod tidy\ngo run greet.go -f etc/greet-api.yaml\n")),(0,o.kt)("p",{parentName:"li"},"By default, it is listening on port 8888. The port can be changed in the configuration file."),(0,o.kt)("p",{parentName:"li"},"You can check it by curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://localhost:8888/greet/from/you\n")),(0,o.kt)("p",{parentName:"li"},"The response looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\nTraceparent: 00-45fa9e7a7c505bad3a53a024e425ace9-eb5787234cf3e308-00\nDate: Sun, 30 Aug 2020 15:32:35 GMT\nContent-Length: 0\n\nnull\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write the business logic code"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the dependencies can be passed into the logic within servicecontext.go, like mysql, reds etc."),(0,o.kt)("li",{parentName:"ul"},"add the logic code in logic package according to .api file"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate code like Java, TypeScript, Dart, JavaScript etc. just from the api file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"goctl api java -api greet.api -dir greet\ngoctl api dart -api greet.api -dir greet\n...\n")))),(0,o.kt)("h2",{id:"7-benchmark"},"7. Benchmark"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/benchmark.png",alt:"benchmark"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/smallnest/go-web-framework-benchmark"},"Checkout the test code")),(0,o.kt)("h2",{id:"8-documents-adding"},"8. Documents (adding)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-doc/blob/main/doc/shorturl-en.md"},"Rapid development of microservice systems")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-doc/blob/main/docs/zero/bookstore-en.md"},"Rapid development of microservice systems - multiple RPCs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-examples"},"Examples"))),(0,o.kt)("h2",{id:"9-important-notes"},"9. Important notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use grpc 1.29.1, because etcd lib doesn\u2019t support latter versions."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"google.golang.org/grpc v1.29.1"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For protobuf compatibility, use ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol-gen@v1.3.2"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"}," go get -u github.com/golang/protobuf/protoc-gen-go@v1.3.2")))),(0,o.kt)("h2",{id:"10-chat-group"},"10. Chat group"),(0,o.kt)("p",null,"Join the chat via ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/go-zeroworkspace/shared_invite/zt-m39xssxc-kgIqERa7aVsujKNj~XuPKg"},"https://join.slack.com/t/go-zeroworkspace/shared_invite/zt-m39xssxc-kgIqERa7aVsujKNj~XuPKg")))}m.isMDXComponent=!0}}]);