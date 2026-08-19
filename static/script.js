// Shows the selected page
function showPage(pageName, button) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active-page");
    });


    // Show selected page
    document.getElementById(pageName).classList.add("active-page");


    // Remove active style from all navigation buttons
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });


    // Add active style to clicked button
    if (button) {
        button.classList.add("active");
    }
}


// Show today's date
const today = new Date();

document.getElementById("todayDate").textContent =
    today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });