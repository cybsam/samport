
// Preloader

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    document.body.classList.remove("active");
});




/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (window.scrollY >= 800) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }

})

// Contact Form 


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform validation (you can add your own validation logic here)
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    // Create an object to store the form data
    var formData = {
        name: name,
        email: email,
        message: message
    };

    // You can now send the form data to your server using Ajax or fetch API
    // Here's an example using fetch:
    fetch("your-server-endpoint", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            if (response.ok) {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset(); // Reset the form
            } else {
                throw new Error("Error: " + response.status);
            }
        })
        .catch(function (error) {
            alert("An error occurred. Please try again later.");
            console.log(error);
        });
});

