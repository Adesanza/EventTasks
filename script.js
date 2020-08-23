document.addEventListener("DOMContentLoaded", function(){
})

// 2. Replace the text "Change me" with "Hello World!".
var changeText = document.getElementById("change_heading")
changeText.innerText = "Hello World!";

// 3.When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
var section = document.querySelector("section");
section.addEventListener("mouseover", function(event){
    var selectedColor = document.querySelector('.selected');
    selectedColor.innerText = event.target.className;
})

// 4. Create a new div element
var newDiv = document.createElement("div")

// 5. Give your new div a class of purple and style it so that it has a background color of purple.
newDiv.classList.add("purple")
console.log(newDiv)

// 6. Append your new div to the page to the section tag.
var section = document.querySelector("section");
section.appendChild(newDiv)
