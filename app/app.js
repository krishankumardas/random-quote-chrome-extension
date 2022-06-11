window.onload = function(){
    setTimeout(()=>{
    document.querySelector(".preloader").style.display = "none";
    }, 3000);
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c40540d1c0msh8628052740f59f9p15381bjsn946fc56c5402',
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