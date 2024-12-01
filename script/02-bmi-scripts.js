let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.querySelector('button');
let result = document.querySelector('.result');
let score = document.querySelector('#score');


button.addEventListener('click', function(){
  let newHeight =  Number(height.value);
  let newWeight =  Number(weight.value);
  // console.log(newHeight);
  // console.log(newWeight);
  newHeight = newHeight / 100;
  // console.log(newHeight);
  let sqrHeight = newHeight * newHeight;

  let bmi = (newWeight / sqrHeight).toFixed(2);
  // console.log(bmi);
  result.style.display = 'block';
  let bmiScore = score.textContent = bmi;{
    if(bmiScore < 18.6){
      score.style.backgroundColor = '#E6C767';
    }else if(bmiScore >= 18.6 && bmiScore < 24.9){
      score.style.backgroundColor = '#347928';
    }else{
      score.style.backgroundColor = '#C62E2E';
    }
  }
})