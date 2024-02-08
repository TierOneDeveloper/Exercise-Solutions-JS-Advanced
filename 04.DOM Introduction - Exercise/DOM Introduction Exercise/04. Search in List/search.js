function search() {
   let towns = document.querySelectorAll("#towns li");
   let input = document.getElementById("searchText").value;
   let counter = 0;
   let townsArr = Array.from(towns);

   for (let each of townsArr) {
      if (each.textContent.includes(input)) {
         counter++;
         each.style.textDecoration = "underline";
         each.style.fontWeight = "bold";
      }
   }
   document.getElementById("result").textContent = `${counter} matches found`;
}
