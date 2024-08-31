document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const nameInput = document.getElementById('name').value.trim();
    const ageInput = document.getElementById('age').value.trim();

    // Validate inputs
    if (nameInput === '' || ageInput === '') {
        alert('inputs cannot be empty.');
        return;
    }

    const age = parseInt(ageInput, 10);

    // Create a promise that resolves or rejects based on the age
    const ageValidation = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // Simulates a delay of 4 seconds
    });

    ageValidation
        .then(() => {
            alert(`Welcome, ${nameInput}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${nameInput}. You aren't old enough.`);
        });
});
cy.visit(baseUrl + "/main.html"); 
cy.get("button#btn").click();
cy.on("window:alert", str => {
    expect(str).to.equal('inputs cannot be empty.');
});