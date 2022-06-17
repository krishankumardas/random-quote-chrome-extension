window.onload = function(){
    setTimeout(()=>{
    document.querySelector(".preloader").style.display = "none";
    }, 3000);
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '/*Enter Your API Key Here*/',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(res => res.json())
    .then(data => {
        const quoteElement = document.getElementById("quote");
        quoteElement.innerHTML = data.content;
    })
	.catch(err => console.error(err));
