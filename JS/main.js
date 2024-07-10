let bookMarkInput = document.getElementById("book-name");
let websiteUrlInput = document.getElementById("website-url");

let bookMarkAndWebsites = [];

if (localStorage.getItem("Form-inputs") != null) {
  bookMarkAndWebsites = JSON.parse(localStorage.getItem("Form-inputs"));
  displayItems();
}

function addInputs() {
  let inputsForm = {
    bookMarkName: bookMarkInput.value,
    websiteUrl: websiteUrlInput.value,
  };
  bookMarkAndWebsites.push(inputsForm);
  localStorage.setItem("Form-inputs", JSON.stringify(bookMarkAndWebsites));
  displayItems();
  clearInputs();
}

function displayItems() {
  let box = ``;
  for (i = 0; i < bookMarkAndWebsites.length; i++) {
    box += `
<div class="col-3">
<hr class="m-0" />
<div class="h-100 d-flex align-items-center justify-content-center"><span>${i}</span>
</div>
</div>
<div class="col-3">
<hr class="m-0" />
<div class="h-100 d-flex align-items-center justify-content-center"><span>${bookMarkAndWebsites[i].bookMarkName}</span></div>
</div>
<div class="col-3">
<hr class="m-0" />
<a href="${bookMarkAndWebsites[i].websiteUrl}" class="btn btn-warning my-2"
  ><i class="fa-solid fa-eye"></i> Visit</a
>
</div>
<div class="col-3">
<hr class="m-0" />
<button type="button" class="btn btn-danger my-2 " onclick="deleteItems (${i})">Delete</button>
</div>
`;
  }
  document.getElementById("report").innerHTML = box;
}

function deleteItems(index) {
  bookMarkAndWebsites.splice(index, 1);
  localStorage.setItem("Form-inputs", JSON.stringify(bookMarkAndWebsites));
  displayItems();
}

function clearInputs() {
  bookMarkInput.value = "";
  websiteUrlInput.value = "";
}
