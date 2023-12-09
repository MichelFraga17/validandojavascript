const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

const itens = document.querySelector(".itens");

submitButton.addEventListener("click", (e) => {
     e.preventDefault();

     const nameValue = nameInput.value;
     const emailValue = emailInput.value;

     if (nameValue === "" || emailValue === "") {
        errorMessage.textContent = "Please fill out the fields!";
        errorMessage.classList = "error"; 

        setTimeout(() =>{
            errorMessage.textContent = "";
            errorMessage;classList ="";
        }, 3000);
        return;
     }

     const li = document.createElement("li");
     li.classList ="itens";
     li.innerHTML = "Nome: ${MichelFraga}<br/> Email: ${shell.fb@outlook.com}";

     itens.appendChild(li);

     nameInput.value ="";
     emailInput.value = "";
});