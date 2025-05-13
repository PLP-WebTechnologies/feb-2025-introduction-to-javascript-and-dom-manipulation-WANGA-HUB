#index.html
<!DOCTYPE html>
<html lang="en">    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Interaction</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="title">Welcome to JavaScript Dynamic Actions!</h1>
    
    <button onclick="changeText()">Change Text</button>
    <button onclick="toggleElement()">Add/Remove Element</button>

    <div id="container"></div>

    <script src="script.js"></script>
</body>
</html>

#style.css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 50px;
}

h1 {
    color: blue;
}

.new-style {
    color: red;
    font-weight: bold;
}

#script.js
function changeText() {
    let title = document.getElementById("title");
    title.textContent = "Text Changed! 🎉";
    title.classList.toggle("new-style");  
}


function toggleElement() {
    let container = document.getElementById("container");
    
    if (document.getElementById("dynamic-text")) {
        container.innerHTML = "";  // Remove element
    } else {
        let newElement = document.createElement("p");
        newElement.id = "dynamic-text";
        newElement.textContent = "This is a dynamically added paragraph!";
        container.appendChild(newElement);
    }
}
