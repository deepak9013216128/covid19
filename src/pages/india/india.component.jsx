import React,{useEffect} from 'react';


// https://corona.lmao.ninja/v2/historical/india TIMELINE COUNTRY
const URL = 'https://protected-reaches-03598.herokuapp.com/citydata.json';// INDIA-STATE-CITY

const India = () => {
	
	useEffect(()=>{
		fetch("https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-tracker-india-covid-19.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
		.then(response => {
			console.log(response)
			return response.json()})
		.then(data => console.log(data))
		.catch(error => console.log(error))
	},[])
	return (
		<h1>india</h1>
	)
}
export default India;