async function sendCode() {
    const editor = window.editor;
    const output = document.getElementById('output');

    const code = editor.getValue();

    try {
        console.log('Sending code to API:', code); 
        const response = await fetch('https://python-compilor-api.vercel.app/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain' 
            },
            body: code 
        });


        const result = await response.text();
        console.log('Received response from API:', result); 
        output.textContent = result; 


    } catch (error) {
        console.error('An error occurred:', error); 
        output.textContent = 'An error occurred: ' + error.message;
    }
}

