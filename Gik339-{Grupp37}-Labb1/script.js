// Hämta element
const button = document.getElementById("submitbutton");
const inputField = document.getElementById("content");
const colorField = document.getElementById("color");
const checkbox = document.getElementById("divstyle");
const outputDiv = document.getElementById("output");

// Eventlyssnare för textfält
document.addEventListener("input", (e) => {
    const target = e.target;

    console.log("Target element:", target);
    console.log("Target name:", target.name);

    if (target.id === "content") {
        outputDiv.textContent = target.value; // Uppdatera div med textfältets innehåll
    }
});

// Eventlyssnare för checkbox
checkbox.addEventListener("change", () => {
    const color = colorField.value; // Hämta färgvärdet från fältet
    outputDiv.style.backgroundColor = color; // Ändra bakgrundsfärg på div
});

// Eventlyssnare för knapp
button.addEventListener("click", () => {
    outputDiv.textContent = ""; // Rensa innehållet i div utan att ta bort elementet
    console.log("Innehållet i div har rensats!");
});

// Debug: Kontrollera om alla element har hämtats korrekt
console.log("Checkbox element:", checkbox);
console.log("Text fields:", inputField);
console.log("Button element:", button);
console.log("Div element:", outputDiv);