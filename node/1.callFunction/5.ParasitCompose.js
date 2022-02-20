function People(name,sex,phone){
  this.name=name
  this.sex=sex
  this.phone=phone
}

People.prototype.doEat=function(){
  console.log(this.name+"eat...");
}

function Middle(){

}

function ChinesePeople(name,sex,phone,national){
  People.call(this,name,sex,phone)
  this.national=national
}

Middle.prototype = People.prototype
ChinesePeople.prototype = new Middle()
ChinesePeople.prototype.constructor = ChinesePeople
const cp1 = new ChinesePeople("力士","boy",12345,"han")
const cp2 = new ChinesePeople("小雪","girl",22222,"weiwuer")
console.log("cp1",cp1);
console.log("cp2",cp2);