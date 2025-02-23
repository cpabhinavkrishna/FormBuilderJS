(function () {
  function buildForm(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.error("Container not found");
      return;
    }

    // Create form element
    const form = document.createElement("form");
    form.setAttribute("id", "dynamicForm");

    // Create field container
    const fieldContainer = document.createElement("div");
    fieldContainer.setAttribute("id", "fieldContainer");
    form.appendChild(fieldContainer);

    // Create add field Combobox
    const chooseField = document.createElement("select");
    chooseField.setAttribute("for", "chooseField");
    chooseField.setAttribute("id", "chooseField");
    chooseField.setAttribute("name", "fieldType");
    const option1 = document.createElement("option");
    option1.setAttribute("value", "text");
    option1.setAttribute("label", "text");
    const option2 = document.createElement("option");
    option2.setAttribute("value", "number");
    option2.setAttribute("label", "number");
    const option3 = document.createElement("option");
    option3.setAttribute("value", "email");
    option3.setAttribute("label", "email");
    const option4 = document.createElement("option");
    option4.setAttribute("value", "password");
    option4.setAttribute("label", "password");
    const option = document.createElement("option");
    option.setAttribute("value", "");
    option.setAttribute("label", "Select an option");
    chooseField.appendChild(option);
    chooseField.appendChild(option1);
    chooseField.appendChild(option2);
    chooseField.appendChild(option3);
    chooseField.appendChild(option4);
    chooseField.addEventListener("change", function () {
      addField(fieldContainer);
    });

    form.appendChild(chooseField);

    container.appendChild(form);
  }

  function addField(container) {
    const fieldWrapper = document.createElement("div");
    fieldWrapper.classList.add("field-wrapper");
    const value = document.getElementById("chooseField").value;
    const input = document.createElement("input");
    if (value === "text") {
        input.type = "text";
      input.placeholder = "Enter text";
    } else if (value === "number") {
      input.type = "text";
      input.placeholder = "Enter number";
    } else if (value === "email") {
        input.type = "email";
      input.placeholder = "Enter email";
    } else if (value === "password") {
        input.type = "password";
      input.placeholder = "Enter password";
    } else {
      return;
    }
 
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function () {
      container.removeChild(fieldWrapper);
    });

    fieldWrapper.appendChild(input);
    fieldWrapper.appendChild(removeButton);
    container.appendChild(fieldWrapper);
  }

  window.buildForm = buildForm;
})();
