//using reduce method

let  itemsCost = [1100, 1250, 1402, 205, 865, 564, 850];
 let totalBill = itemsCost.reduce((accumulator, num) => accumulator + num,0);

 console.log(totalBill); 

//using slice method
 let  list = [1100, 1250, 1402, 205, 865, 564, 850];
 let result = list.slice((0,3));
 console.log(result); 


 let javascriptHeading  = document.getElementById('heading'); 


 let changeNameBtn = document.getElementById('main');
 
 
 
 changeNameBtn.onclick =  () => {
     javascriptHeading.textContent = "You completed reading";
 
     changeNameBtn.style.color = "blue";
     changeNameBtn.style.backgroundColor = "black";
     changeNameBtn.style.padding = '10px';
     javascriptHeading.style.backgroundColor = "blue";
 }