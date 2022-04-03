function getCrew(index) {
    fetch("./data.json") // Fetch the data.json file
        .then((response) => response.json()) // Parse as JSON and return the response
        .then((data) => {
            // Use the data

            let crew = data.crew; // Get the crew array

            let crewMember = crew[index]; // Get the crew member at the index specified in the function call (index)

            let name = document.getElementById("name"); // Get the name element from the HTML file
            name.innerHTML = crewMember.name; // Set the name element in HTML file to the name of the crew member

            let role = document.getElementById("profession"); // Get the profession element from the HTML file
            role.innerHTML = crewMember.role; // Set the profession element in HTML file to the profession of the crew member

            let image = document.getElementById("commander-image"); // Get the image element from the HTML file
            image.src = crewMember.images.png; // Set the image element in HTML file to the image of the crew member

            let bio = document.getElementById("story"); // Get the story element from the HTML file
            bio.innerHTML = crewMember.bio; // Set the story element in HTML file to the bio of the crew member
        })
        .catch((error) => console.log(error)); // If there is an error, log it to the console
}
