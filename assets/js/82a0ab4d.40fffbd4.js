"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2209],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(o),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6413:function(e,t,o){o.r(t),o.d(t,{default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],c={},l={unversionedId:"goctl/api",id:"goctl/api",isDocsHomePage:!1,title:"API Commands",description:"goctl api is one of the core modules in goctl. It can quickly generate an api service through the .api file with one click. If you just start a go-zero api demo project,",source:"@site/docs/goctl/api.md",sourceDirName:"goctl",slug:"/goctl/api",permalink:"/docs/goctl/api",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/goctl/api.md",version:"current",lastUpdatedAt:1662083518,formattedLastUpdatedAt:"9/2/2022",frontMatter:{},sidebar:"goctl",previous:{title:"Golang Installation",permalink:"/docs/goctl/installation"},next:{title:"RPC Commands",permalink:"/docs/goctl/zrpc"}},s=[{value:"API command description",id:"api-command-description",children:[]},{value:"Usage example",id:"usage-example",children:[]}],p={toc:s};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"goctl api is one of the core modules in goctl. It can quickly generate an api service through the .api file with one click. If you just start a go-zero api demo project,\nYou can complete an api service development and normal operation without even coding. In traditional api projects, we have to create directories at all levels, write structures,\nDefine routing, add logic files, this series of operations, if calculated according to the business requirements of a protocol, it takes about 5 to 6 minutes for the entire coding to actually enter the writing of business logic.\nThis does not consider the various errors that may occur during the writing process. With the increase of services and the increase of agreements, the time for this part of the preparation work will increase proportionally.\nThe goctl api can completely replace you to do this part of the work, no matter how many agreements you have, in the end, it only takes less than 10 seconds to complete."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The structure is written, and the route definition is replaced by api, so in general, it saves you the time of creating folders, adding various files and resource dependencies."))),(0,a.kt)("h2",{id:"api-command-description"},"API command description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api -h\nNAME:\n   goctl api - generate api related files\n\nUSAGE:\n   goctl api command [command options] [arguments...]\n\nCOMMANDS:\n   new       fast create api service\n   format    format api files\n   validate  validate api file\n   doc       generate doc files\n   go        generate go files for provided api in yaml file\n   java      generate java files for provided api in api file\n   ts        generate ts files for provided api in api file\n   dart      generate dart files for provided api in api file\n   kt        generate kotlin code for provided api file\n   plugin    custom file generator\n\nOPTIONS:\n   -o value        output a sample api file\n   --home value    the goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n   --remote value  the remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n                   The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure\n   --branch value  the branch of the remote repo, it does work with --remote\n   --help, -h      show help\n")),(0,a.kt)("p",null,"As you can see from the above, according to the different functions, the api contains a lot of self-commands and flags, let\u2019s focus on it here\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," subcommand, which function is to generate golang api services, let's take a look at the usage help through ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl api go -h"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api go -h\nNAME:\n   goctl api go - generate go files for provided api in yaml file\n\nUSAGE:\n   goctl api go [command options] [arguments...]\n\nOPTIONS:\n   --dir value     the target dir\n   --api value     the api file\n   --style value   the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --home value    the goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n   --remote value  the remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n                   The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure\n   --branch value  the branch of the remote repo, it does work with --remote\n")),(0,a.kt)("h2",{id:"usage-example"},"Usage example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api go -api user.api -dir . -style gozero\n")))}m.isMDXComponent=!0}}]);