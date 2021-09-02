// Locationiq Info
const locationToken = '';
const locationUrl = 'https://us1.locationiq.com/v1/reverse.php'

// OpenWeather Info
const openWeatherKey = '';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Currency Info
const currencyUrl = 'https://restcountries.eu/rest/v2/capital'

// Movies Info
const movieUrl = 'https://tmdb.sandbox.zoosh.ie/dev/graphql'


class Prowider {
	static async getCity(lat, lon){
		const urlToFetch = `${locationUrl}?key=${locationToken}&lat=${lat}&lon=${lon}&format=json`;
		
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();					
			return jsonResponse
		}
	} catch (error) {
		console.log(error);
	}
}
	
	static async getWeather(location){
		  const urlToFetch = `${weatherUrl}?&q=${location}&APPID=${openWeatherKey}`;
			
		try {
			const response = await fetch(urlToFetch);
			if (response.ok) {
				const jsonResponse = await response.json();				
				return jsonResponse
			}
		} catch (error) {
			console.log(error);
		}
	}

	static async getCurrency(location){
		const urlToFetch = `${currencyUrl}/${location}`;
		
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();				
			return jsonResponse
		}
	} catch (error) {
		console.log(error);
	}
}

static async getMovies(){
	const urlToFetch = `${movieUrl}`;
	
try {
	const response = await fetch(urlToFetch);
	if (response.ok) {
		const jsonResponse = await response.json();				
		return jsonResponse
	}
} catch (error) {
	console.log(error);
}
}
};


Prowider.getCity('51.5074 ', '0.1278 ').then(i =>{
	console.log('The name of the city in search:', i.address.city);
})

Prowider.getWeather('london').then(i =>{    
  console.log('The weather in', i.name, 'is', i.weather[0].description);   
});

Prowider.getCurrency('london').then(i =>{
	console.log('The currency of london is:', i[0].currencies[0].name);
})

Prowider.getMovies().then(i =>{
	console.log('The movies are:', i);
})



