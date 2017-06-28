class Test {
  constructor(value) {
       this.value = value;
  }
    
  a = () => {
    console.log(this.value)
  } 
  
  b() {
    console.log(this.value)
  }

  c() {
    console.log(42)
  }

}

const test = new Test(23);

setTimeout(test.a, 1000);
setTimeout(test.b, 1000);
setTimeout(test.c(), 1000);
