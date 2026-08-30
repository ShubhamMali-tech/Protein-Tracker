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
        document.getElementById("name").value.trim();

    const age =
        document.getElementById("age").value.trim();

    const gender =
        document.getElementById("gender").value;

    const weight =
        document.getElementById("weight").value.trim();

    const height =
        document.getElementById("height").value.trim();

    const goal =
        document.getElementById("goal").value;


    // Check if any field is empty
    if (
        name === "" ||
        age === "" ||
        gender === "" ||
        weight === "" ||
        height === "" ||
        goal === ""
    ) {

        // Tell the user to complete the form
        alert("Please complete all fields.");

        // Stop here
        return;
    }


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


// -----------------------------------------
// Load saved profile
// -----------------------------------------


// Get the saved profile from the browser
const savedProfile =
    localStorage.getItem("proteinProfile");


// Check if a profile already exists
if (savedProfile) {

    // Convert saved JSON back into an object
    const profile =
        JSON.parse(savedProfile);


    // Put saved values back into the form
    document.getElementById("name").value =
        profile.name;

    document.getElementById("age").value =
        profile.age;

    document.getElementById("gender").value =
        profile.gender;

    document.getElementById("weight").value =
        profile.weight;

    document.getElementById("height").value =
        profile.height;

    document.getElementById("goal").value =
        profile.goal;


    // Update the custom dropdown text
    dropdowns.forEach((dropdown) => {

        const input = document.getElementById(
            dropdown.dataset.select
        );

        const button = dropdown.querySelector(
            ".select-button"
        );

        const buttonText = button.querySelector(
            "span"
        );

        const selectedOption =
            dropdown.querySelector(
                `.select-option[data-value="${input.value}"]`
            );


        // Show the saved option
        if (selectedOption) {

            buttonText.textContent =
                selectedOption.textContent.trim();

            button.classList.add("selected");

        }

    });


    console.log("Profile loaded!");
    // Open the dashboard after saving the profile
    //window.location.href = "/dashboard";

}