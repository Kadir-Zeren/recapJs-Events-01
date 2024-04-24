const langInput = document.querySelector("#input");

const newP = document.createElement("p");
const text = document.createTextNode(langInput.value);

newP.appendChild(text);

console.log(newP);

const main = document.querySelector("main");

main.appendChild(newP);

const itemListSection = document.querySelector(".item-list");
itemListSection.before(newP);

newP.id = "paragraf";
newP.className = "par center";
newP.name = "deneme";

newP.setAttribute("id", "new-id");
newP.setAttribute("class", "new-class");
newP.setAttribute("name", "new-class");
newP.setAttribute("type", "button");

newP.classList.add("bg-danger", "border");

console.log(newP.classList.contains("new-class"));

if (newP.classList.contains("border")) {
  newP.classList.add("border-success");
}

if (newP.classList.contains("new-class")) {
  newP.classList.remove("new-class");
}

newP.classList.toggle("bg-danger");

console.log(newP.id);
console.log(newP.className);

console.log(newP.getAttribute("type"));
console.log(newP.getAttribute("class"));

const ul = document.querySelector("ul");

ul.innerHTML += `
    <li>C++</li>
   <li>java</li>
   <li>C</li>
   <li>go</li>
`;

const newDiv = document.createElement("div");
newDiv.id = "my-div";
itemListSection.after(newDiv);

itemListSection.innerHTML += `

<ul>
  <li>C++</li>
  <li>java</li>
  <li>C</li>
  <li>go</li>
</ul>`;
