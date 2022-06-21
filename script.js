let item = document.querySelectorAll(".accordion-item");
let questions = document.querySelectorAll(".accordion-question");
item.forEach((elem, index) => {
    elem.children[0].onclick = () => {
        if (elem.children[1].classList.contains("active")) {
            elem.children[1].classList.remove("active");
            questions[index].classList.remove("flipIcon");
        }
        else {
            elem.children[1].classList.add("active");
            questions[index].classList.add("flipIcon");
            item.forEach((element, i) => {
                if (element != elem) {
                    element.children[1].classList.remove("active");
                    questions[i].classList.remove("flipIcon")
                }
            });
        }
    }
})