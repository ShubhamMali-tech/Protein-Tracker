/*
    Protein Tracker
    Custom dropdown + profile form
*/


// Find all custom dropdowns
const dropdowns = document.querySelectorAll(".custom-select");


// Add functionality to every dropdown
dropdowns.forEach((dropdown) => {

    // Get the button
    const button = dropdown.querySelector(".select-button");

    // Get the text inside the button
    const buttonText = button.querySelector("span");

    // Get all options
    const options = dropdown.querySelectorAll(".select-option");

    // Find the hidden input
    const input = document.getElementById(
        dropdown.dataset.select
    );


    // Open or close dropdown
    button.addEventListener("click", () => {

        // Close other dropdowns
        dropdowns.forEach((otherDropdown) => {

            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("open");
            }

        });

        // Toggle current dropdown
        dropdown.classList.toggle("open");

    });


    // Select an option
    options.forEach((option) => {

        option.addEventListener("click", () => {

            // Show selected text
            buttonText.textContent =
                option.textContent.trim();

            // Store selected value
            input.value =
                option.dataset.value;

            // Mark button as selected
            button.classList.add("selected");

            // Close dropdown
            dropdown.classList.remove("open");

        });

    });

});


// Close dropdown when clicking outside
document.addEventListener("click", (event) => {

    dropdowns.forEach((dropdown) => {

        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }

    });

});


// -----------------------------------------
// Profile form
// -----------------------------------------


// Get the profile form
const profileForm =
    document.getElementById("profileForm");


// Run this when the user clicks Continue
profileForm.addEventListener("submit", (event) => {

    // Stop the page from refreshing
    event.preventDefault();


    // Get values entered by the user
    const name =
        document.getElementById("name").value;

    const age =
        document.getElementById("age").value;

    const gender =
        document.getElementById("gender").value;

    const weight =
        document.getElementById("weight").value;

    const height =
        document.getElementById("height").value;

    const goal =
        document.getElementById("goal").value;


    // Put all profile data into one object
    const profile = {

        name: name,

        age: age,

        gender: gender,

        weight: weight,

        height: height,

        goal: goal

    };


    // Save the profile in the browser
    localStorage.setItem(
        "proteinProfile",
        JSON.stringify(profile)
    );


    // Show the saved data in the console
    console.log("Profile saved!");

    console.log(profile);

});