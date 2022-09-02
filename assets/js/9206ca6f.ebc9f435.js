"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8113],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return g}});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(o),g=l,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||r;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function g(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,a=new Array(r);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},941:function(e,t,o){o.r(t),o.d(t,{default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=o(7462),l=o(3366),r=(o(7294),o(3905)),a=["components"],i={},s={unversionedId:"blog/tool/logx",id:"blog/tool/logx",isDocsHomePage:!1,title:"logx",description:"Example",source:"@site/docs/blog/tool/logx.md",sourceDirName:"blog/tool",slug:"/blog/tool/logx",permalink:"/docs/blog/tool/logx",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/tool/logx.md",version:"current",lastUpdatedAt:1662083518,formattedLastUpdatedAt:"9/2/2022",frontMatter:{},sidebar:"blog",previous:{title:"Efficient keyword replacement and sensitive word filtering tool",permalink:"/docs/blog/tool/keywords"},next:{title:"Fx",permalink:"/docs/blog/concurrency/fx"}},u=[{value:"Example",id:"example",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Level",id:"level",children:[]},{value:"Log mode",id:"log-mode",children:[]},{value:"Disable log",id:"disable-log",children:[]},{value:"Close log",id:"close-log",children:[]},{value:"Duration",id:"duration",children:[]},{value:"TraceLog",id:"tracelog",children:[]},{value:"SysLog",id:"syslog",children:[]},{value:"Mode",id:"mode",children:[]},{value:"Path",id:"path",children:[]},{value:"Level",id:"level-1",children:[]},{value:"Compress",id:"compress",children:[]},{value:"KeepDays",id:"keepdays",children:[]},{value:"StackCooldownMillis",id:"stackcooldownmillis",children:[]}],p={toc:u};function c(e){var t=e.components,o=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var c logx.LogConf\n// Initialize the configuration from the yaml file\nconf.MustLoad("config.yaml", &c)\n\n// logx is initialized according to the configuration\nlogx.MustSetup(c)\n\nlogx.Info("This is info!")\nlogx.Infof("This is %s!", "info")\n\nlogx.Error("This is error!")\nlogx.Errorf("this is %s!", "error")\n\nlogx.Close()\n')),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"logx has many configurable items, you can refer to the definition in logx.LogConf. Currently available"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"logx.MustSetUp(c)\n")),(0,r.kt)("p",null,"Perform the initial configuration. If the initial configuration is not performed, all the configurations will use the default configuration."),(0,r.kt)("h2",{id:"level"},"Level"),(0,r.kt)("p",null,"The print log levels supported by logx are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"info"),(0,r.kt)("li",{parentName:"ul"},"error"),(0,r.kt)("li",{parentName:"ul"},"server"),(0,r.kt)("li",{parentName:"ul"},"fatal"),(0,r.kt)("li",{parentName:"ul"},"slow"),(0,r.kt)("li",{parentName:"ul"},"stat")),(0,r.kt)("p",null,"You can use the corresponding method to print out the log of the corresponding level.\nAt the same time, in order to facilitate debugging and online use, the log printing level can be dynamically adjusted. The level can be set through ",(0,r.kt)("strong",{parentName:"p"},"logx.SetLevel(uint32)")," or through configuration initialization. The currently supported parameters are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    // Print all levels of logs\n    InfoLevel = iotas\n    // Print errors, slows, stacks logs\n    ErrorLevel\n    // Only print server level logs\n    SevereLevel\n)\n")),(0,r.kt)("h2",{id:"log-mode"},"Log mode"),(0,r.kt)("p",null,"At present, the log printing mode is mainly divided into two types, one is file output, and the other is console output. The recommended way, when using k8s, docker and other deployment methods, you can output the log to the console, use the log collector to collect and import it to es for log analysis. If it is a direct deployment method, the file output method can be used, and logx will automatically create log files corresponding to 5 corresponding levels in the specified file directory to save the logs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 access.log\n\u251c\u2500\u2500 error.log\n\u251c\u2500\u2500 severe.log\n\u251c\u2500\u2500 slow.log\n\u2514\u2500\u2500 stat.log\n")),(0,r.kt)("p",null,"At the same time, the file will be divided according to the natural day. When the specified number of days is exceeded, the log file will be automatically deleted, packaged and other operations."),(0,r.kt)("h2",{id:"disable-log"},"Disable log"),(0,r.kt)("p",null,"If you don't need log printing, you can use ",(0,r.kt)("strong",{parentName:"p"},"logx.Close()")," to close the log output. Note that when log output is disabled, it cannot be opened again. For details, please refer to the implementation of ",(0,r.kt)("strong",{parentName:"p"},"logx.RotateLogger")," and ",(0,r.kt)("strong",{parentName:"p"},"logx.DailyRotateRule"),"."),(0,r.kt)("h2",{id:"close-log"},"Close log"),(0,r.kt)("p",null,"Because logx uses asynchronous log output, if the log is not closed normally, some logs may be lost. The log output must be turned off where the program exits:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"logx.Close()\n")),(0,r.kt)("p",null,"Log configuration and shutdown related operations have already been done in most places such as rest and zrpc in the framework, so users don't need to care.\nAt the same time, note that when the log output is turned off, the log cannot be printed again."),(0,r.kt)("p",null,"Recommended writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/zeromicro/go-zero/core/proc"\n\n// grace close log\nproc.AddShutdownListener(func() {\n    logx.Close()\n})\n')),(0,r.kt)("h2",{id:"duration"},"Duration"),(0,r.kt)("p",null,"When we print the log, we may need to print the time-consuming situation, we can use ",(0,r.kt)("strong",{parentName:"p"},"logx.WithDuration(time.Duration)"),", refer to the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'startTime := timex.Now()\n// Database query\nrows, err := conn.Query(q, args...)\nduration := timex.Since(startTime)\nif duration > slowThreshold {\n    logx.WithDuration(duration).Slowf("[SQL] query: slowcall - %s", stmt)\n} else {\n    logx.WithDuration(duration).Infof("sql query: %s", stmt)\n}\n')),(0,r.kt)("p",null,"Will output the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"@timestamp":"2020-09-12T01:22:55.552+08","level":"info","duration":"3.0ms","content":"sql query:..."}\n{"@timestamp":"2020-09-12T01:22:55.552+08","level":"slow","duration":"500ms","content":"[SQL] query: slowcall - ..."}\n')),(0,r.kt)("p",null,"In this way, it is easy to collect statistics about slow sql related information."),(0,r.kt)("h2",{id:"tracelog"},"TraceLog"),(0,r.kt)("p",null,"tracingEntry is customized for link tracing log output. You can print the traceId and spanId information in the context. With our ",(0,r.kt)("strong",{parentName:"p"},"rest")," and ",(0,r.kt)("strong",{parentName:"p"},"zrpc"),", it is easy to complete the related printing of the link log. The example is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'logx.WithContext(context.Context).Info("This is info!")\n')),(0,r.kt)("h2",{id:"syslog"},"SysLog"),(0,r.kt)("p",null,"Some applications may use system log for log printing. Logx uses the same encapsulation method, which makes it easy to collect log-related logs into logx."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"logx.CollectSysLog()\n")),(0,r.kt)("h1",{id:"log-configuration-related"},"Log configuration related"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LogConf")," Define the basic configuration required for the logging system"),(0,r.kt)("p",null,"The complete definition is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type LogConf struct {\n    ServiceName         string `json:",optional"`\n    Mode                string `json:",default=console,options=console|file|volume"`\n    Path                string `json:",default=logs"`\n    Level               string `json:",default=info,options=info|error|severe"`\n    Compress            bool   `json:",optional"`\n    KeepDays            int    `json:",optional"`\n    StackCooldownMillis int    `json:",default=100"`\n}\n')),(0,r.kt)("h2",{id:"mode"},"Mode"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mode")," defines the log printing method. The default mode is ",(0,r.kt)("strong",{parentName:"p"},"console"),", which will print to the console."),(0,r.kt)("p",null,"The currently supported modes are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"console",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Print to the console"))),(0,r.kt)("li",{parentName:"ul"},"file",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Print to access.log, error.log, stat.log and other files in the specified path"))),(0,r.kt)("li",{parentName:"ul"},"volume",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In order to print to the storage that the mount comes in in k8s, because multiple pods may overwrite the same file, the volume mode automatically recognizes the pod and writes separate log files according to the pod.")))),(0,r.kt)("h2",{id:"path"},"Path"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path")," defines the output path of the file log, the default value is ",(0,r.kt)("strong",{parentName:"p"},"logs"),"."),(0,r.kt)("h2",{id:"level-1"},"Level"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Level")," defines the log printing level, and the default value is ",(0,r.kt)("strong",{parentName:"p"},"info"),".\nThe currently supported levels are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"info"),(0,r.kt)("li",{parentName:"ul"},"error"),(0,r.kt)("li",{parentName:"ul"},"severe")),(0,r.kt)("h2",{id:"compress"},"Compress"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compress")," defines whether the log needs to be compressed, the default value is ",(0,r.kt)("strong",{parentName:"p"},"false"),". When Mode is file mode, the file will finally be packaged and compressed into a .gz file."),(0,r.kt)("h2",{id:"keepdays"},"KeepDays"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"KeepDays")," defines the maximum number of days to keep logs. The default value is 0, which means that old logs will not be deleted. When Mode is file mode, if the maximum retention days are exceeded, the old log files will be deleted."),(0,r.kt)("h2",{id:"stackcooldownmillis"},"StackCooldownMillis"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"StackCooldownMillis")," defines the log output interval, the default is 100 milliseconds."))}c.isMDXComponent=!0}}]);