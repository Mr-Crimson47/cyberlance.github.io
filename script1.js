// Function to handle the intersection observer for animation 1
function handleIntersection1(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the "animate" class for animation 1
            entry.target.classList.add("animate");
        }
    });
}

// Function to handle the intersection observer for animation 2
function handleIntersection2(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the "animate" class for animation 2
            entry.target.classList.add("animate2");
        }
    });
}

// Create Intersection Observer instances for animation 1 and 2
const observer1 = new IntersectionObserver(handleIntersection1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
});

const observer2 = new IntersectionObserver(handleIntersection2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
});

// Get elements to observe for animation 1 and 2
const reasonsElements1 = document.querySelectorAll(".reasons");
const servicesElements2 = document.querySelectorAll(".services");

// Observe elements for animation 1 and 2 with their respective observers
reasonsElements1.forEach(element => {
    observer1.observe(element);
});

servicesElements2.forEach(element => {
    observer2.observe(element);
});