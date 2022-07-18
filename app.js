const navbar = document.querySelector('.navbar');
const from = document.getElementById('form');
let getSelectedValue = document.querySelector('input[name="consultation"]:checked');   


window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY >= 40) {
      navbar.style.backgroundColor = 'white';
      navbar.style.boxShadow = '0 4px 2px -2px rgb(242, 242, 242)';
    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.boxShadow = 'none';
    }
});

getSelectedValue.addEventListener('change', ()=>{
  console.log(getSelectedValue)
})

// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   // const selectedConsultation = document.querySelector('.consultation__wrapper');
//   // console.log(selectedConsultation)
//   if(getSelectedValue != null) {   
//     console.log(getSelectedValue.value);  
//   }  
// })