!function(){"use strict";function a(a){console.log("AboutController Constructor"),this.GruntfilesService=a}angular.module("breastfeedingrecord.components.about",["breastfeedingrecord.service.gruntfiles"]).controller("AboutController",a),a.$inject=["GruntfilesService"],a.prototype.activate=function(){console.log("AboutController Method activate"),b=this;var a=this.GruntfilesService.query().$promise;a.then(c)["catch"](d)};var b,c=function(a){b.list=a},d=function(a){b.error=a}}(),function(){"use strict";function a(){console.log("ContactController Constructor")}angular.module("breastfeedingrecord.components.contact",[]).controller("ContactController",a),a.$inject=[],a.prototype.activate=function(){console.log("ContactController activate Method"),b=this,b.case1=20,c()};var b,c=function(){b.case2=10}}(),function(){"use strict";function a(){console.log("HomeController Constructor")}angular.module("breastfeedingrecord.components.home",[]).controller("HomeController",a),a.$inject=[],a.prototype.activate=function(){console.log("HomeController activate Method")}}(),function(){"use strict";function a(){console.log("RecordController Constructor"),this.storage=localStorage}angular.module("breastfeedingrecord.components.record",[]).controller("RecordController",a),a.$inject=[],a.prototype.activate=function(){console.log("RecordController activate Method"),b=this,b.list=[],this.storage.getItem("breastfeedingrecord.records")&&(b.list=JSON.parse(this.storage.getItem("breastfeedingrecord.records")))},a.prototype.add=function(){console.log("RecordController add Method");var a=new Date,c={id:b.list.length,dateTime:a,description:""};b.list.push(c),this.storage.setItem("breastfeedingrecord.records",JSON.stringify(b.list))};var b}(),function(){"use strict";function a(a){a.html5Mode(!0)}angular.module("breastfeedingrecord.config",[]).config(a),a.$inject=["$locationProvider"]}(),function(){"use strict";function a(a){var b=a("/api/gruntfiles",{query:{transformResponse:function(a){return angular.fromJson(a)}}});return b}angular.module("breastfeedingrecord.service.gruntfiles",["ngResource"]).factory("GruntfilesService",a),a.$inject=["$resource"]}(),function(){"use strict";function a(){}angular.module("breastfeedingrecord",["ngNewRouter","breastfeedingrecord.config","breastfeedingrecord.components.home","breastfeedingrecord.components.about","breastfeedingrecord.components.contact","breastfeedingrecord.components.record"]).controller("AppController",a),a.$routeConfig=[{path:"/",redirectTo:"/record"},{path:"/home",component:"home"},{path:"/about",component:"about"},{path:"/contact",component:"contact"},{path:"/record",component:"record"}],a.$inject=[]}();