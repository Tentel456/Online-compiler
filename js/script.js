function compile() {
    const code = document.getElementById("code").value;
    const output = document.getElementById("output");
    const iframe = document.createElement("iframe");
    iframe.srcdoc = `
        <html>
            <head>
                <style>
                    pre {
                        white-space: pre-wrap;
                        background-color: #f0f0f0;
                    }
                </style>
            </head>
            <body>
                <pre>${code}</pre>
            </body>
        </html>
    `;
    output.parentNode.replaceChild(iframe, output);
    output.appendChild(iframe);
}
