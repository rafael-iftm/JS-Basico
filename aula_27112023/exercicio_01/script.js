window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        var p = document.createElement("p");
        p.textContent = document.getElementById("name").value;
        document.getElementById("box").appendChild(p);

    })
});