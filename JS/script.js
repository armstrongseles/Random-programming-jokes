document.addEventListener('DOMContentLoaded', () => {
    fetchJoke();

    // Event listener for fetching new joke
    document.getElementById('fetch-joke').addEventListener('click', fetchJoke);
});

/**
 * Fetch a random programming joke from JokeAPI
 */
function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
        .then(response => response.json())
        .then(data => {
            displayJoke(data.joke);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            displayError('joke', 'Sorry, we couldn\'t fetch a joke at this time. Please try again later.');
        });
}

/**
 * Display the fetched joke in the UI
 * @param {string} joke - Programming joke
 */
function displayJoke(joke) {
    const jokeContainer = document.getElementById('joke');
    jokeContainer.innerHTML = `<p>${joke}</p>`;
}

/**
 * Display an error message in case of a failed fetch
 * @param {string} containerId - The ID of the container to display the error in
 * @param {string} errorMessage - The error message to display
 */
function displayError(containerId, errorMessage) {
    const container = document.getElementById(containerId);
    container.innerHTML = `<p>${errorMessage}</p>`;
}
