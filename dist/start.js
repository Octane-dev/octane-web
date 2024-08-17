let stored = sessionStorage.getItem("session") === "true";

document.addEventListener("DOMContentLoaded", function() {
    const navigationEntries = performance.getEntriesByType('navigation');

    if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
        document.querySelector("body").classList.add("loaded");
        document.querySelector(".loaded #loader-wrapper").style.visibility = "hidden";
        document.querySelector(".loaded #loader").style.opacity = "0";
    } else {
        setTimeout(function() {
            window.scrollTo(0, 0);
            document.querySelector("body").classList.add("loaded");
        }, 10);
    }

    sessionStorage.setItem("session", true);

//     // FORM
//     document.getElementById("inquire").addEventListener("submit", function (e) {
//         e.preventDefault();
//         const contactForm = document.getElementById('inquire');
//         let data = new FormData(contactForm);

//         const formKeepEndpoint = `https://formkeep.com/f/cc872ba8e1b3`;
//         console.log(data)
//         fetch(formKeepEndpoint, { method: "POST", body: data })
//             .then(() => {
//                 console.log("Form submitted successfully!");
//             })
//             .catch((error) => {
//                 console.error("Form submission failed:", error);
//             });

//         contactForm.reset();
//         window.location.href = "/thanks"
//     });
});