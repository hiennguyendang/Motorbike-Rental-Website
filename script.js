function openModal() {
    const modal = document.getElementById("popup-modal");
    modal.style.display = "block"; // Hiển thị nền mờ
    const content = modal.querySelector(".modal-content");
    content.classList.add("slide-in"); // Kích hoạt hiệu ứng trượt
}

function closeModal() {
    const modal = document.getElementById("popup-modal");
    const content = modal.querySelector(".modal-content");
    content.classList.remove("slide-in"); // Đưa modal về bên phải
    setTimeout(() => {
        modal.style.display = "none"; // Ẩn nền mờ sau khi trượt xong
    }, 400); // Đồng bộ với thời gian hiệu ứng CSS
}

    // Đóng modal khi nhấn vào nền mờ
window.onclick = function (event) {
    const modal = document.getElementById("popup-modal");
    if (event.target === modal) {
        closeModal();
    }
};