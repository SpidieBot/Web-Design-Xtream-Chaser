// Get the modal (semua image)
var modal = document.getElementById("modalImage");

// buat per image bisa di gedein gambarnya (nambahin gambar nambahin js disini)
var img1 = document.getElementById("myImg1");
// <p>text1</p>
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img0 = document.getElementById("myImg0");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// per code buat pop up image (w gatau bisa ga jdiin satu codenya)
img1.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img5.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img6.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img7.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img8.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img9.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img0.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// closebtn span buat close modal
var span = document.getElementsByClassName("closeBtn")[0];

// ketika diklik (x), bakal tutup
span.onclick = function()
{
    modal.style.display="none";
}
