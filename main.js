
const numInput1 = document.getElementById("num1")
const numInput2 = document.getElementById("num2")
const resultDispaly = document.getElementById("result");

function getNumber(){
    const num1 = Number(numInput1.value);
    const num2 = Number(numInput2.value);
    return {num1,num2};
}
const addBtn = ()=>{
   const {num1,num2}=  getNumber()
    const result =  num1 + num2
    resultDispaly.textContent = result;
    console.log(result)
}
const multiBtn = ()=>{
   const {num1,num2}=  getNumber()
    const result =  num1 * num2
    resultDispaly.textContent = result;
}
 const subsBtn = ()=>{
   const {num1,num2}=  getNumber()
    const result =  num1 - num2
    resultDispaly.textContent = result;
}
 const divBtn = ()=>{
   const {num1,num2}=  getNumber()

   if(num2 === 0){
    resultDispaly.textContent = " this division is error"
   }
    else{
    const result =  num1 / num2
    resultDispaly.textContent = result;
    }
}