define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Title</title>\n</head>\n<body>\n\n        <p>\n            My First Backbone Reference Project"
    + escapeExpression(((stack1 = depth0.model),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </p>\n</body>\n</html>\n";
  return buffer;
  });

return this["Handlebars"]["templates"];

});