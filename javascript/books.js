// 
// BOOK SEARCH
// 

const searchInput = document.getElementById("bookSearch");
const bookCards = document.querySelectorAll(".book-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    let foundBooks = 0;

    bookCards.forEach(function (book) {

        const bookText = book.textContent.toLowerCase();

        if (bookText.includes(searchText)) {
            book.style.display = "block";
            foundBooks++;
        } else {
            book.style.display = "none";
        }

    });

    if (foundBooks === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});


// 
// CATEGORY FILTER
// 


const categoryButtons =
    document.querySelectorAll(".category-btn");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active style from all buttons
        categoryButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active style to clicked button
        button.classList.add("active");


        const selectedCategory =
            button.getAttribute("data-category");

        let foundBooks = 0;


        bookCards.forEach(function (book) {

            const bookCategory =
                book.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === bookCategory
            ) {

                book.style.display = "block";
                foundBooks++;

            } else {

                book.style.display = "none";

            }

        });


        if (foundBooks === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

    });

});