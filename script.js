
var displayValue=(num)=>result.value+=num
// function displayValue(num){
//     result.value+=num

    // let res=document.querySelector("#result")
    // res.value+=num
// }
var evaluateExpression=()=>result.value=eval(result.value)
// function evaluateExpression(){
//     // let res=document.querySelector("#result")
//     // let cur_val=res.value
//     // let result=eval(cur_val)
//     // res.value=result
//     result.value=eval(result.value)
// }

var clearBox=()=>result.value=""
// function clearBox(){
//     // document.querySelector("#result").value=""
//    result.value=""
// }
// var backspace=()=>result.value=slice(res.value)
// // function backspace(){
// //     // var res=document.querySelector("#result")
// //     // let cur_val=res.value
// //     // res.value=cur_val.slice(0,-1)

// // }
var backspace=()=>result.value=result.value.slice(0,-1)