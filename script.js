// Function to make the window draggable and bring it to the front
function makeDraggableAndBringToFront(modalElement) {
    let isDragging = false;
    let offsetX, offsetY;
    let currentZIndex = 1;

    // Bring the modal to the front when clicked
    modalElement.addEventListener('click', function () {
        modalElement.style.zIndex = currentZIndex++;
    });

    modalElement.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - modalElement.offsetLeft;
        offsetY = e.clientY - modalElement.offsetTop;

        // Bring the modal to the front when it is clicked for dragging
        modalElement.style.zIndex = currentZIndex++;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            modalElement.style.left = e.clientX - offsetX + 'px';
            modalElement.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    // Close the modal
    modalElement.querySelector('.closeWindow').addEventListener('click', function () {
        modalElement.style.display = 'none';
    });
}

// Open Chrome window
document.addEventListener("DOMContentLoaded", function () {
    let openChromeButton = document.querySelector('#openChromeWindow');

    openChromeButton.addEventListener('dblclick', function () {
        let chromeModal = document.getElementById('chrome');
        chromeModal.style.display = 'block';
        makeDraggableAndBringToFront(chromeModal);
    });
});

// Open File Explorer window
document.addEventListener("DOMContentLoaded", function () {
    let openFileExplorerButton = document.querySelector('#openFileExplorer');

    openFileExplorerButton.addEventListener('dblclick', function () {
        let fileExplorerModal = document.getElementById('fileExplorer');
        fileExplorerModal.style.display = 'block';
        makeDraggableAndBringToFront(fileExplorerModal);
    });
});
