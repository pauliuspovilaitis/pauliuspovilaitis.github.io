// Fallback for browsers without ::details-content: expand collapsed sections while printing.
let reopened = [];

window.addEventListener("beforeprint", () => {
    reopened = [...document.querySelectorAll("details:not([open])")];
    reopened.forEach((details) => { details.open = true; });
});

window.addEventListener("afterprint", () => {
    reopened.forEach((details) => { details.open = false; });
    reopened = [];
});
