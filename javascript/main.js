document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // NAVBAR SEARCH
    // ==========================================

    const searchInput =
        document.querySelector(".search-box input");

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key !== "Enter") {
                return;
            }

            const searchText =
                searchInput.value.trim();

            if (searchText === "") {
                return;
            }

            window.location.href =
                "books.html?search=" +
                encodeURIComponent(searchText);

        });

    }


    // ==========================================
    // SEARCH FROM NAVBAR
    // ==========================================

    const urlParams =
        new URLSearchParams(window.location.search);

    const searchQuery =
        urlParams.get("search");


    if (searchQuery) {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        if (currentPage === "books.html") {

            const bookCards =
                document.querySelectorAll(".book-card");

            const noResults =
                document.getElementById("noResults");

            let foundBooks = 0;


            bookCards.forEach(function (book) {

                const bookText =
                    book.textContent.toLowerCase();

                if (
                    bookText.includes(
                        searchQuery.toLowerCase()
                    )
                ) {

                    book.style.display = "block";
                    foundBooks++;

                } else {

                    book.style.display = "none";

                }

            });


            // Book Not Found
            if (noResults) {

                if (foundBooks === 0) {

                    noResults.style.display = "block";

                } else {

                    noResults.style.display = "none";

                }

            }

        }

    }

});