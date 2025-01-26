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

window.onload = function() {
    // Chọn nút đầu tiên làm mặc định
    document.querySelector('.button').classList.add('active');

    // Hiển thị nội dung mặc định
    changeContent1('content1');
    changeContent2('content1');
};

function changeContent1(contentId) {
    // Lấy phần tử chứa nội dung
    const contentElement = document.getElementById('content-1');
    // Thay đổi nội dung của phần tử dựa trên id truyền vào
    if (contentId === 'content1') {
        const buttonContent = document.querySelector('.button-content-1').innerHTML;
        contentElement.innerHTML = buttonContent;
    } else if (contentId === 'content2') {
        const buttonContent = document.querySelector('.button-content-2').innerHTML;
        contentElement.innerHTML = buttonContent;
    } else if (contentId === 'content3') {
        const buttonContent = document.querySelector('.button-content-3').innerHTML;
        contentElement.innerHTML = buttonContent;
    } else if (contentId === 'content4') {
        const buttonContent = document.querySelector('.button-content-4').innerHTML;
        contentElement.innerHTML = buttonContent;
    } else {
        const buttonContent = document.querySelector('.button-content-1').innerHTML;
        contentElement.innerHTML = buttonContent;
    }
}

function changeContent2(contentId) {
    // Lấy phần tử chứa nội dung
    const contentElement = document.getElementById('content-2');
    // Thay đổi nội dung của phần tử dựa trên id truyền vào
    if (contentId === 'content1') {
        const buttonContent = document.querySelector('.button-content-1').innerHTML;
        contentElement.innerHTML = buttonContent;
    } else if (contentId === 'content2') {
        const buttonContent = document.querySelector('.button-content-2').innerHTML;
        contentElement.innerHTML = buttonContent;
    } else if (contentId === 'content3') {
        const buttonContent = document.querySelector('.button-content-3').innerHTML;
        contentElement.innerHTML = buttonContent;
    } else if (contentId === 'content4') {
        const buttonContent = document.querySelector('.button-content-4').innerHTML;
        contentElement.innerHTML = buttonContent;
    } else {
        const buttonContent = document.querySelector('.button-content-1').innerHTML;
        contentElement.innerHTML = buttonContent;
    }
}