// Function to make the window draggable and bring it to the front
function makeDraggableAndBringToFront(modalElement) {
    let isDragging = false;
    let offsetX, offsetY;
    let currentZIndex = 1;

    function bringToFront() {
        modalElement.style.zIndex = currentZIndex++;
    }

    // Bring the modal to the front on single click
    modalElement.addEventListener("mousedown", bringToFront);

    modalElement.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - modalElement.offsetLeft;
        offsetY = e.clientY - modalElement.offsetTop;

        // Bring the modal to the front when it is clicked for dragging
        bringToFront();
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            modalElement.style.left = e.clientX - offsetX + "px";
            modalElement.style.top = e.clientY - offsetY + "px";
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });

    // Close the modal
    modalElement.querySelector(".closeWindow").addEventListener("click", function () {
        modalElement.style.display = "none";
    });
}

// Open Edge window
document.addEventListener("DOMContentLoaded", function () {
    let openEdgeButton = document.querySelector("#openEdgeWindow");

    openEdgeButton.addEventListener("mousedown", function () {
        let edgeModal = document.getElementById("edge");
        edgeModal.style.display = "block";
        makeDraggableAndBringToFront(edgeModal);
    });
});

// Open Chrome window
document.addEventListener("DOMContentLoaded", function () {
    let openChromeButton = document.querySelector("#openChromeWindow");

    openChromeButton.addEventListener("mousedown", function () {
        let chromeModal = document.getElementById("chrome");
        chromeModal.style.display = "block";
        makeDraggableAndBringToFront(chromeModal);
    });
});

// Open File Explorer window
document.addEventListener("DOMContentLoaded", function () {
    let openFileExplorerButton = document.querySelector("#openFileExplorer");

    openFileExplorerButton.addEventListener("mousedown", function () {
        let fileExplorerModal = document.getElementById("fileExplorer");
        fileExplorerModal.style.display = "block";
        makeDraggableAndBringToFront(fileExplorerModal);
    });
});

document.getElementById("openGithub").onclick = openGithub;

function openGithub() {
    window.open("https://github.com/functionpdf/windows-11-web");
}
