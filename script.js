// Function to handle the intersection observer for animation 1
function handleIntersection1(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the "animate" class for animation 1
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    });
}

// Function to handle the intersection observer for animation 2
function handleIntersection2(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the "animate" class for animation 2
            entry.target.classList.add("animate2");
        } else {
            entry.target.classList.remove("animate2");
        }
    });
}

// Create Intersection Observer instances for animation 1 and 2
const observer1 = new IntersectionObserver(handleIntersection1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
});

const observer2 = new IntersectionObserver(handleIntersection2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
});

// Get elements to observe for animation 1 and 2
const stateElements1 = document.querySelectorAll(".state1");
const stateElements2 = document.querySelectorAll(".state2");

// Observe elements for animation 1 and 2 with their respective observers
stateElements1.forEach(element => {
    observer1.observe(element);
});

stateElements2.forEach(element => {
    observer2.observe(element);
});