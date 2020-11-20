//Load json data
$(document).ready(function () {
    const datajson = '../assets/json/category_quotidien.json' // provide file location
    async function fetchData() {
        let response = await fetch('../assets/json/category_quotidien.json');
        let data = await response.json();
        return data;
    }

    async function main() {
        let data2 = await fetchData()

       //Format date month
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var container = $("#app");
        container.html("");
        container.append("<br>");
        console.table(data2.issues.length)
        for (let i = 0; i < data2.issues.length; i++) {
            addViewer(container, data2.issues[i], monthNames)
        }
    }
//function for display json data

    function addViewer(container, article, monthNames) {
        console.table(article)
        var d = new Date(article.releaseDate)
        var dd = d.getDate() + " " + monthNames[d.getMonth()] + ". " + d.getFullYear()
        container.append("<div class='press'>" +
            "<figure>" +
            "<img width='212px' height='291px' alt='img not found' src='" + article.coverUrl + "'>" +
            "<figcaption> " +
            "<p style='font-size: 14px;'>" + article.publication.title + "</p>" +
            "<p style='color: #536067; font-size: 12px'>" + dd + "</p>" +
            "</figcaption> " +
            "</figure>" +
            "</div>");
    }
    main();

});

