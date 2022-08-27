function foo() {
    console.log(a);
    var a = 1;
    console.log(a);
    var a = function() {}
    console.log(a);
  }
  foo();