const fs = require('fs'); // Import the file system module

// ... (rest of your code)

// 1. Callback Approach (using fs.readFile)
function fetchPokemonCallback(url, callback) {
  fs.readFile(url, 'utf8', (err, data) => {  // Use fs.readFile
    if (err) {
      callback(err, null);
      return;
    }
    try {
      const jsonData = JSON.parse(data); // Parse the JSON string
      callback(null, jsonData);
    } catch (parseError) {
      callback(parseError, null); // Handle JSON parsing errors
    }
  });
}

// 2. Promise Approach (using promises and fs.promises)
const { promises: fsPromises } = require('fs'); // Import fs.promises

function fetchPokemonPromise(url) {
  return fsPromises.readFile(url, 'utf8')
    .then(data => JSON.parse(data)) // Parse JSON directly in the promise chain
    .catch(error => {
      console.error("Error fetching or parsing data (Promise):", error);
      throw error; // Re-throw the error
    });
}

// 3. Async/Await Approach (using async/await and fs.promises)
async function fetchPokemonAsync(url) {
  try {
    const data = await fsPromises.readFile(url, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching or parsing data (Async/Await):", error);
    throw error;
  }
}

// ... (displayPokemonData function remains the same)

// Example usage (adjust paths if necessary):

const pokemonDatasetURL = "sample1.json"; // Path to your JSON file (relative to the script)


// Callback
fetchPokemonCallback(pokemonDatasetURL, (error, pokemonData) => {
  if (error) {
    console.error("Callback Error:", error);
    return;
  }
  displayPokemonData(pokemonData);
});

// Promise
fetchPokemonPromise(pokemonDatasetURL)
  .then(pokemonData => displayPokemonData(pokemonData))
  .catch(error => console.error("Promise Error Caught:", error));

// Async/Await
async function callAsyncFetch() {
  try {
    const pokemonData = await fetchPokemonAsync(pokemonDatasetURL);
    displayPokemonData(pokemonData);
  } catch (error) {
    console.error("Async/Await Error Caught:", error);
  }
}

callAsyncFetch();