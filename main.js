document.getElementById('formResult').style.display = 'none'
const count = document.querySelector('#count')
const tinggiBadanInput = document.querySelector('#tinggiBadanInput')
const beratBadanInput = document.querySelector('#beratBadanInput')

count.addEventListener('click', () => {

   if (!tinggiBadanInput.value && !beratBadanInput.value) {
        alert('isi dulu banh');
        return
   } 

   document.getElementById('formResult').style.display = 'block'
   document.getElementById('form').style.display = 'none'
   let tinggiMeter = tinggiBadanInput.value / 100
   let bmi = beratBadanInput.value / (tinggiMeter ** 2)
   bmi = bmi.toFixed(1)

   if (bmi <= 18.5) {
    document.querySelector('#bmiResult').innerHTML = (bmi)
    document.querySelector('#txtResult').innerHTML = ('kekurangan berat badan')
    document.querySelector('#txtResult2').innerHTML = ('(Underweight)')

   } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.querySelector('#bmiResult').innerHTML = (bmi)
    document.querySelector('#txtResult').innerHTML = ('memiliki tubuh ideal')
    document.querySelector('#txtResult2').innerHTML = ('(Healthy weight)')

   } else if (bmi >= 25 && bmi <= 29.9) {
    document.querySelector('#bmiResult').innerHTML = (bmi)
    document.querySelector('#txtResult').innerHTML = ('kelebihan berat badan')
    document.querySelector('#txtResult2').innerHTML = ('(Overweight)')
   } else {
    document.querySelector('#bmiResult').innerHTML = (bmi)
    document.querySelector('#txtResult').innerHTML = ('mengalami obesitas')
    document.querySelector('#txtResult2').innerHTML = ('(Obesity)')
   }
})

const btnBack = document.querySelector('#btnBack')

btnBack.addEventListener('click', () => {
    location.reload()
})
