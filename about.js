let thisCat = document.getElementById('catImg')
thisCat.addEventListener("mouseover", () => {
	alert('why are you so great')
})

function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log(alert('submission successful'));
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);