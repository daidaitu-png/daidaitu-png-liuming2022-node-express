let extendsStatic=require("./5.extendsStatic")

function People(name,sex,phone){
  this.name=name
  this.sex=sex
  this.phone=phone
}
People.count = 300

function ChinesePeople(name,sex,phone,national){
  People.call(this,name,sex,phone)
  this.national=national
}
extendsStatic(ChinesePeople,People)
console.log("ChinesePeople.count",ChinesePeople.count);