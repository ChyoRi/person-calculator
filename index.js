const priceArray = [12000, 10000, 5000, 0];
const minusBtn = document.querySelectorAll('.minus');
const plusBtn = document.querySelectorAll('.plus');
const totalSpan = document.querySelector('.total-price');
let agePriceArray = [0, 0, 0, 0];
console.log(agePriceArray);
let prevTotalPrice = 0;
let totalPrice = 0;
// let adultPrice = 0;
// let studentPrice = 0;
// let kidPrice = 0;
// let babyPrice = 0

// 일반
// const priceCalc = (target, targetCount) => {
//   switch(target.className) {
//     case 'person-count adult':
//       adultPrice = targetCount * priceArray[0]
//       break;
//     case 'person-count student':
//       studentPrice = targetCount * priceArray[1]
//       break;
//     case 'person-count kid':
//       kidPrice = targetCount * priceArray[2]
//       break;
//     default:
//       babyPrice = targetCount * priceArray[3]
//       break;
//   }

//   totalPrice = adultPrice + studentPrice + kidPrice + babyPrice;
//   totalSpan.innerHTML = `Total: ${totalPrice}원`;

// }


// 배열
const priceCalc = (target, targetCount) => {
  switch(target.className) {
    case 'person-count adult':
      agePriceArray[0] = targetCount * priceArray[0]
      break;
    case 'person-count student':
      agePriceArray[1] = targetCount * priceArray[1]
      break;
    case 'person-count kid':
      agePriceArray[2] = targetCount * priceArray[2]
      break;
    default:
      agePriceArray[3] = targetCount * priceArray[3]
      break;
  }

  agePriceArray.forEach(item => {
    totalPrice += item
  })
  
  totalSpan.innerHTML = `Total: ${totalPrice}원`;


}

const minus = (e) => {
  let target = e.currentTarget;
  let personCountEl = target.nextElementSibling;
  let personCount = Number(target.nextElementSibling .textContent);
  if(personCount === 0 ) {
    return;
  } else {
    personCount = personCount - 1;
    priceCalc(personCountEl, personCount);
  }

  personCountEl.innerHTML = personCount;
}

const plus = (e) => {
  let target = e.currentTarget;
  let personCountEl = target.previousElementSibling;
  let personCount = Number(target.previousElementSibling.textContent);
  personCount = personCount + 1;
  personCountEl.innerHTML = personCount;
  priceCalc(personCountEl, personCount);
}

minusBtn.forEach(item => {
  item.addEventListener('click', minus);
});

plusBtn.forEach(item => {
  item.addEventListener('click', plus);
});

totalSpan.innerHTML = `Total: ${totalPrice}원`;