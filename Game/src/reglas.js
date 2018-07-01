/*
function Person() {
	contrucor
  this.id =id;
}
Person.prototype.setName = function(name) {
  this.name = name.charAt(0).toUpperCase() + name.slice(1);
};
Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
};

*/

function MyObject(bar) {
  this.bar = bar;
}

MyObject.prototype.foo = function foo() {
  return this.bar;
};

module.exports = MyObject;
