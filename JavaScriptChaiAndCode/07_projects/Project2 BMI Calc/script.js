const form = document.querySelector('form');


form.addEventListener('submit',(e)=> {

    e.preventDefault();

const height = document.querySelector('#height').value
const weight = document.querySelector('#weight').value
const results = document.querySelector('#results')


if(height === "" ||  height <0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
}else if(weight === "" ||  weight <0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
}else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);

if(bmi < 18.6){
    results.innerHTML = `BMI is <span>${bmi}(Under Weight)</span>` 
}else if(bmi >= 18.6 && bmi <= 24.9 ){
    results.innerHTML = `BMI is <span>${bmi}(Normal)</span>` 
}else{
    results.innerHTML = `BMI is <span>${bmi}(Over Weight)</span>` 
}

}

})