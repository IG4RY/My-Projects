let selectedRow = null

function onFormSubmit() {
    event.preventDefault();
    let formData = readFormData()
    if (selectedRow == null)
        insertNewRecord(formData)
    else
        updateRecord(formData)
    resetForm()
}

function readFormData() {
    let formData = {}

    formData["userName"] = document.getElementById("usrNme").value
    formData["email"] = document.getElementById("eml").value
    formData["password"] = document.getElementById("pswd").value
    formData["password2"] = document.getElementById("pswd2").value

    return formData
}