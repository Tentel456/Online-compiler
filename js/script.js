document.getElementById('submitBtn').addEventListener('click', async () => {
    const codeInput = document.getElementById('codeInput').value;
    const output = document.getElementById('output');

    try {
        const response = await fetch('/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code: codeInput })
        });

        if (response.ok) {
            const result = await response.json();
            output.innerHTML = result.output;
        } else {
            output.innerHTML = 'Error: ' + response.statusText;
        }
    } catch (error) {
        output.innerHTML = 'Error: ' + error.message;
    }
});
