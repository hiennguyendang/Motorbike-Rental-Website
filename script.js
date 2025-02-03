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

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 290}px)`; // Mỗi slide có chiều rộng là 350px
    updateActiveDot();
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 5 : currentIndex - 1;
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 5) ? 0 : currentIndex + 1;
    updateSliderPosition();
});