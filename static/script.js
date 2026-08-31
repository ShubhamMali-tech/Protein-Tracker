/*
    Protein Tracker
    Custom dropdown + profile form
*/


// =========================================
// CUSTOM DROPDOWNS
// =========================================

const dropdowns = document.querySelectorAll(".custom-select");

dropdowns.forEach((dropdown) => {

    const button = dropdown.querySelector(".select-button");
    const buttonText = button.querySelector("span");
    const options = dropdown.querySelectorAll(".select-option");

    const input = document.getElementById(
        dropdown.dataset.select
    );


    // Open / close dropdown
    button.addEventListener("click", (event) => {

        event.stopPropagation();

        // Close other dropdowns
        dropdowns.forEach((otherDropdown) => {

            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("open");
            }

        });

        dropdown.classList.toggle("open");

    });


    // Select option
    options.forEach((option) => {

        option.addEventListener("click", () => {

            // Show selected text
            buttonText.textContent =
                option.textContent.trim();

            // Save selected value
            input.value =
                option.dataset.value;

            // Mark as selected
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


// =========================================
// PROFILE FORM
// =========================================

const profileForm =
    document.getElementById("profileForm");


if (profileForm) {

    profileForm.addEventListener("submit", (event) => {

        // Prevent normal form submission
        event.preventDefault();


        // -----------------------------------------
        // Get form values
        // -----------------------------------------

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


        // -----------------------------------------
        // Validate form
        // -----------------------------------------

        if (
            name === "" ||
            age === "" ||
            gender === "" ||
            weight === "" ||
            height === "" ||
            goal === ""
        ) {

            alert("Please complete all fields.");

            return;
        }


        // -----------------------------------------
        // Create profile object
        // -----------------------------------------

        const profile = {

            name: name,
            age: age,
            gender: gender,
            weight: weight,
            height: height,
            goal: goal

        };


        // -----------------------------------------
        // Save profile
        // -----------------------------------------

        localStorage.setItem(
            "proteinProfile",
            JSON.stringify(profile)
        );


        console.log("Profile saved!");
        console.log(profile);


        // -----------------------------------------
        // GO TO DASHBOARD
        // -----------------------------------------

        window.location.href = "/dashboard";

    });

}


// =========================================
// LOAD SAVED PROFILE
// =========================================

const savedProfile =
    localStorage.getItem("proteinProfile");


if (savedProfile) {

    const profile =
        JSON.parse(savedProfile);


    // Fill normal inputs
    const nameInput =
        document.getElementById("name");

    const ageInput =
        document.getElementById("age");

    const weightInput =
        document.getElementById("weight");

    const heightInput =
        document.getElementById("height");


    if (nameInput) {
        nameInput.value = profile.name || "";
    }

    if (ageInput) {
        ageInput.value = profile.age || "";
    }

    if (weightInput) {
        weightInput.value = profile.weight || "";
    }

    if (heightInput) {
        heightInput.value = profile.height || "";
    }


    // Fill hidden select inputs
    const genderInput =
        document.getElementById("gender");

    const goalInput =
        document.getElementById("goal");


    if (genderInput) {
        genderInput.value =
            profile.gender || "";
    }

    if (goalInput) {
        goalInput.value =
            profile.goal || "";
    }


    // Update custom dropdown UI
    dropdowns.forEach((dropdown) => {

        const input =
            document.getElementById(
                dropdown.dataset.select
            );

        const button =
            dropdown.querySelector(".select-button");

        const buttonText =
            button.querySelector("span");


        if (!input) {
            return;
        }


        const selectedOption =
            dropdown.querySelector(
                `.select-option[data-value="${input.value}"]`
            );


        if (selectedOption) {

            buttonText.textContent =
                selectedOption.textContent.trim();

            button.classList.add("selected");

        }

    });

}