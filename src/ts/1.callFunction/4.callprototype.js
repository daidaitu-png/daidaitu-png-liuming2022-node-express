function Parent(name,age){
  this.name=name
  this.age=age
}
Parent.prototype.friends = ["Zss","sda"]
Parent.prototype.eat=function(){
  console.log(this.name+"eat....");
}

function Son(name,age,favor,sex){
  this.favor= favor
  this.sex = sex
  Parent.call(this,name,age)
}

Son.prototype=new Parent()
let sonObj2 = new Son('lisi',34,"pingpong","boy")
console.log("sonObj2",sonObj2);
console.log("sonObj2.friends",sonObj2.friends);