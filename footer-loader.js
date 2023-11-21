// footer-loader.js
document.addEventListener("DOMContentLoaded", function () {
    // Create a new <footer> element
    var footer = document.createElement("footer");

    // Use fetch to load the footer content from footer.html
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            // Set the content of the <footer> element
            footer.innerHTML = data;

            // Append the <footer> to the body of the document
            document.body.appendChild(footer);
        })
        .catch(error => console.error("Error loading footer:", error));
});
