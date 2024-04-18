document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletterform");
    const emailInput = document.getElementById("emailbox");

    form.addEventListener("submit", function (event) {
        const errors = [];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errors.push("Please enter a valid email address.");
        }

        if (errors.length > 0) {
            event.preventDefault();
        alert(errors.join("\n"));
    }
});
});