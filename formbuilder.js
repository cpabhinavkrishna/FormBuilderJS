(function () {
    function buildForm(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error('Container not found');
            return;
        }

        // Create form element
        const form = document.createElement('form');
        form.setAttribute('id', 'dynamicForm');

        // Create field container
        const fieldContainer = document.createElement('div');
        fieldContainer.setAttribute('id', 'fieldContainer');
        form.appendChild(fieldContainer);

        // Create add field Combobox
        const chooseFieldLable = document.createElement('input');
        chooseFieldLable.setAttribute("for","chooseField");
        chooseFieldLable.setAttribute("id","chooseField");
        chooseFieldLable.setAttribute("name","fieldType");
        const fieldTypeDataList = document.createElement("datalist");
        fieldTypeDataList.setAttribute("id","fieldTypeList");
        const option1 = document.createElement("option").setAttribute("value","text");
        const option2 = document.createElement("option").setAttribute("value","number");
        const option3 = document.createElement("option").setAttribute("value","email");
        const option4 = document.createElement("option").setAttribute("value","password");
        const chooseFieldInput = document.createElement("input");
        fieldTypeDataList.appendChild(option1);
        fieldTypeDataList.appendChild(option2);
        fieldTypeDataList.appendChild(option3);
        fieldTypeDataList.appendChild(option4);
        chooseFieldInput.setAttribute("list","fieldTypeList");
        chooseFieldInput.setAttribute("id","chooseField");
        chooseFieldLable.addEventListener('click', function (e) {
            addField(fieldContainer);
        });
        
        // Create submit button
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'submit';
        form.appendChild(chooseFieldLable);
        form.appendChild(submitButton);

        container.appendChild(form);
    }

    function addField(container) {
        const fieldWrapper = document.createElement('div');
        fieldWrapper.classList.add('field-wrapper');

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter value';

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.type = 'button';
        removeButton.addEventListener('click', function () {
            container.removeChild(fieldWrapper);
        });

        fieldWrapper.appendChild(input);
        fieldWrapper.appendChild(removeButton);
        container.appendChild(fieldWrapper);
    }

    window.buildForm = buildForm;
})();
