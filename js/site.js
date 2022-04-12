// Step One - get -controller accept requrests
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    displayValues(startValue, endValue);
}

// final step - display those values
function displayValues(start, end) {

    // First get the ol element from the page
    element = document.getElementById("results");

    // then start the loop

    for (let i = start; i <= end; i++) {

        let item = document.createElement("div");

        if (i % 2 == 0) {
            item.classList.add("boldItem");

        } else {
            item.classList.add("colorRed");
        }
        // and display the results
        item.classList.add("col");
        item.innerHTML = i;
        element.appendChild(item);
    }

}
