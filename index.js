let savedLeads = []
const inputBar = document.getElementById("input-bar")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")

saveBtn.addEventListener("click", function() {
    savedLeads.push(inputBar.value)
    inputBar.value = ""
    showLeads()
})

function showLeads() {
    let itemList = ""
    for (let i = 0; i<savedLeads.length; i++) {
        itemList += `
            <li>
                <a target='_blank' href='${savedLeads[i]}'>
                    ${savedLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = itemList
}