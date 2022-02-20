export {}

type funcType1=(one:number,two:string)=>string
type funcType2=(one:number)=>string

let func:funcType1=function(one:number):string{
  return "sda"
}

func(3,"Ad")

function testFunc(func:funcType1){
  func(3,"sd")
}

testFunc(function(one:number):string){
  return "sda"
}
