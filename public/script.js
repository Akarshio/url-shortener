const button = document.getElementById("generateBtn");

button.addEventListener("click", async () => {

    const originalurl = document.getElementById("urlInput").value;

    const response = await fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalurl })
    });

    const {shortUrl} = await response.json();
    

    document.getElementById("result").innerHTML =
    `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
});