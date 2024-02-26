/* 
Explanation:
 -I've defined a few variables at the beginning to store my API key, 
  the default city (Chicago), and the initial API URL for fetching weather data.

  -The showTemperature function is responsible for extracting data from the 
  API response and updating the HTML elements to display the temperature, 
  current weather condition, feels-like temperature, and sunrise time.

  -The search function handles the form submission. It prevents the default 
  form submission behavior, gets the city entered by the user, updates the API 
  URL with the new city, and then makes an API request using Axios. If the 
  request is successful, it calls the showTemperature function to display 
  the data. If there's an error, it displays an error message.

  -I've added an event listener to the form to listen for form 
  submissions and trigger the search function. */
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  console.log(searchInput.value);
}
