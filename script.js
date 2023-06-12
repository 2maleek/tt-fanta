const fruitGrape  = document.getElementsByClassName('fruit')[0];
const fruitApple  = document.getElementsByClassName('fruit')[1];
const fruitOrange  = document.getElementsByClassName('fruit')[2];
const containerTextGrape  = document.getElementsByClassName('container-text')[0];
const containerTextApple  = document.getElementsByClassName('container-text')[1];
const containerTextOrange  = document.getElementsByClassName('container-text')[2];
fruitGrape.style.width = "110%";
fruitGrape.style.height = "110%";
containerTextGrape.style.transform = "translateY(0%)"



let variant = 'grape';
const grape = document.getElementById('grape');
const apple = document.getElementById('apple');
const orange = document.getElementById('orange');
const list = document.getElementById('list');
apple.style.display = 'none';
orange.style.display = 'none';
list.style.display = 'none';

function changeVariant() {
  resetSize();
  if(variant === 'grape'){
    variant = 'apple';
    grape.style.display = 'none';
    apple.style.display = 'flex';
    orange.style.display = 'none';
    fruitApple.style.transition = ".6s ease-in-out";
    setTimeout(()=>{
      fruitApple.style.top = "50%";
      fruitApple.style.width = "87%";
      fruitApple.style.height = "87%";  
      containerTextApple.style.transform = "translateY(0%)"

   },1)
 
  }else if(variant === 'apple'){
    variant = 'orange';
    grape.style.display = 'none';
    apple.style.display = 'none';
    orange.style.display = 'flex';
    fruitOrange.style.transition = ".6s ease-in-out";
    setTimeout(()=>{
      fruitOrange.style.top = "50%";
      fruitOrange.style.width = "100%";
      fruitOrange.style.height = "100%";
      containerTextOrange.style.transform = "translateY(0%)"
   },1)
  }else if(variant === 'orange'){
  //   variant = 'grape';
  //   grape.style.display = 'flex';
  //   apple.style.display = 'none';
  //   orange.style.display = 'none';
  //   fruitGrape.style.transition = ".6s ease-in-out";
  //   setTimeout(()=>{
  //     fruitGrape.style.top = "56%";
  //     fruitGrape.style.width = "110%";
  //     fruitGrape.style.height = "110%";
  //     containerTextGrape.style.transform = "translateY(0%)"
  //  },1)
    variant = '';
    grape.style.display = 'none';
    apple.style.display = 'none';
    orange.style.display = 'none';
    list.style.display = 'flex';
    list.style.transition = ".6s ease-in-out";
    setTimeout(()=>{
      list.style.transform = "translateY(0%)"
   },1)
  }
}

function resetSize(){
  fruitGrape.style.width = "30%";
  fruitGrape.style.height = "30%";
  fruitOrange.style.width = "30%";
  fruitOrange.style.height = "30%";
  fruitApple.style.width = "30%";
  fruitApple.style.height = "30%";
  containerTextGrape.style.transform = "translateY(-150%)"
  containerTextApple.style.transform = "translateY(-150%)"
  containerTextOrange.style.transform = "translateY(-150%)"
}