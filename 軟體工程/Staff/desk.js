var num = 0;
var sum = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
window.onload = function(){
  document.getElementById('num').innerHTML = num;
  document.getElementById('sum').innerHTML = sum;
  document.getElementById('count1').innerHTML = count1;
  document.getElementById('count2').innerHTML = count2;
  document.getElementById('count3').innerHTML = count3;
}

function get(obj){
    num++;
    document.getElementById('num').innerHTML = num;
    if (obj.id == 'firstMeal'){
      sum += 260;
      count1+= 1;
    }
    else if (obj.id == 'secondMeal'){
      sum += 260;
      count2 += 1;
    }
    else if (obj.id == 'thirdMeal'){
      sum += 200;
      count3 += 1;
    }
    document.getElementById('sum').innerHTML = sum; 
}

function checkDetermine(){
  var checkbox = document.getElementById('determine');
  if (checkbox.checked = true){
    window.location.assign("deskStep2.html"); 
  }
}

function checkCancel1(){
  var checkbox = document.getElementById('cancel');
  if (checkbox.checked = true){
    num = 0;
    document.getElementById('num').innerHTML = num;
    sum = 0;
    document.getElementById('sum').innerHTML = sum;
  }
}

function onClick(){
    alert('訂單已送出，請稍等送餐。');
    window.location.assign("staff.html");  
}

function checkCancel2(){
  var checkbox = document.getElementById('cancel');
  if (checkbox.checked = true){
    window.location.assign("deskStep1.html");  
  }
}

