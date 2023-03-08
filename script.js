let input = document.querySelector("input");
input.addEventListener("input", function () {
    if(input.value.length >= input.placeholder.length)
        input.style.width = (input.value.length + 1)*8 + "px"; //8: font-size
});
let ifAnnot;
let newPlace = document.getElementById('newPlace');
newPlace.addEventListener('mouseover', function (evt) {
    ifAnnot = document.createElement("div");
    ifAnnot.className = "annot";
    document.body.append(ifAnnot);
    ifAnnot.innerText = "Городоцька, 1";
    ifAnnot.style.width = ifAnnot.innerText.length*8 + 'px';
    let coords = newPlace.getBoundingClientRect();
    ifAnnot.style.left = coords.left + "px";
    ifAnnot.style.top = coords.top - newPlace.offsetHeight - 10 + "px";
    console.log(ifAnnot.style.top);
});

newPlace.addEventListener("mouseout", function (evt) {
    if(ifAnnot) {
        ifAnnot.remove();
    }
});

// let userAgent = navigator.userAgent;
// let browserName = nameBrowser(userAgent);
// alert(nameOperationSystem(userAgent));
// alert(browserName);
// let classNamePrompt = prompt("Введіть ім'я класу:");
// let colorNamePrompt = prompt("Введіть колір:");
// let elems = document.querySelectorAll(classNamePrompt);
// elems.forEach((el) => {
//     el.style.background = colorNamePrompt;
// });
// let resConfirm = confirm("Чи хочете ви перейти на сторінку GOOGLE");
// if(resConfirm === true) {
//     window.location.href = "https://www.google.com/";
// } else if (resConfirm === false) {
//     alert("Перехід на GOOGLE скасовано");
// }
function nameBrowser(userAgent) {
    if (userAgent.includes("MSIE")) {
        return retName("Internet Explorer", "MSIE", userAgent);
    } else if(userAgent.includes("rv: ")) {
        return retName("Internet Explorer", "rv: ", userAgent);
    } else if(userAgent.includes("Chrome")) {
        return retName("Chrome", "Chrome", userAgent);
    } else if (userAgent.includes("Firefox")) {
        return retName("Firefox", "Firefox", userAgent);
    } else if (userAgent.includes("Safari")) {
        return retName("Safari", "Safari", userAgent);
    } else if (userAgent.includes("OP")) {
        return retName("Opera", "OP", userAgent);
    } else if (userAgent.includes("Edge")) {
        return retName("Microsoft Edge", "Edge", userAgent);
    }
}

function retName(name, findName, userAgent) {
    let str = userAgent.substring(userAgent.indexOf(findName), userAgent.length);
    if(str.lastIndexOf(" ") > -1) {
        return "Name: " + name + ", version: " + str.substring(0, str.lastIndexOf(" "));
    } else {
        return "Name: " + name + ", version: " + str;
    }
}

function nameOperationSystem(os) {
    return "Operation System: " + os.substring(os.indexOf("(") + 1, os.indexOf(")"));
}

let openWindow = document.getElementById("openWindow");
let closeWindow = document.getElementById("closeWindow");
let newWindow;
openWindow.addEventListener("click", function() {
    newWindow = window.open("https://lpnu.ua/", "newWindow", `width=400,height=400,location=no,scrollbars=no,toolbar=no`);
});

closeWindow.addEventListener("click", function () {
    newWindow.close();
});
