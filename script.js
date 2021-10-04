let color_of_a = "black"
let color_of_b = "black"
let color_of_c = "black"
let color_of_d = "black"

function color_a() {
    var list_a = document.getElementsByName("a");

    if (color_of_a === "black") {
        color_of_a = "blue"
        for (let i=0; i<list_a.length; i++) {
            list_a[i].style.color = "blue";
        }
    }
    else {
        color_of_a = "black"
        for (let j=0; j<list_a.length; j++) {
            list_a[j].style.color = "black";
        }
    }
}