function create(words) {
   const contentBoxRef = document.getElementById("content");
   const newDivElements = document.querySelector("#content");

   for (let word of words) {
      let newDiv = document.createElement("div");
      let newParagraph = document.createElement("p");

      newParagraph.textContent = word;
      newParagraph.style.display = "none";

      newDiv.appendChild(newParagraph);
      contentBoxRef.appendChild(newDiv);
   }

   let newDivElementsArray = Array.from(newDivElements.children);
   for (let eachDiv of newDivElementsArray) {
      eachDiv.addEventListener("click", showHandler);
   }

   function showHandler(e) {
      let pRef = e.currentTarget.children[0];
      pRef.style.display = pRef.style.display === "block" ? "none" : "block";
   }

}