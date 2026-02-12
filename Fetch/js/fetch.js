async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const output = document.getElementById('output');

    output.textContent = "Logging in...";

    try {
        const response = await fetch('http://localhost/api/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Login failed");
        }

        output.style.color = "green";
        output.textContent = "Login successful! Redirecting...";

        // ✅ Redirect to the Student List HTML page
        setTimeout(() => {
            window.location.href = "student-list.html";
        }, 1000);

    } catch (error) {
        output.style.color = "red";
        output.textContent = error.message;
    }
}
