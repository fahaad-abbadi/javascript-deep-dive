function qselector() {
    document.querySelector(".test-btn")
        .style.color = "red";
}

function qselectorall() {
    var x = document.querySelectorAll(".test-btn");

    for (var i = 0; i < x.length; i++) {
        if (i % 2 == 0)
            x[i].style.color = "red"
        else
            x[i].style.color = "blue";
    }
}

//visit gfg for more details