const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('pdf');

const canvas = document.getElementById('pdf-render');
const ctx = canvas.getContext('2d');
const loadingMsg = document.getElementById('loading');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (!url) {
    loadingMsg.textContent = "Invalid URL.";
}

let pdfDoc = null;
let pageNum = 1;
let pageCount = 0;
let scale = 5.0;

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

function renderPage(num) {
loadingMsg.style.display = 'block';

pdfDoc.getPage(num).then(page => {
    const viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
    canvasContext: ctx,
    viewport: viewport
    };

    page.render(renderContext).promise.then(() => {
    loadingMsg.style.display = 'none';
    document.getElementById('page-num').textContent = pageNum;
    });
});
}

function queueRenderPage(num) {
    if (num >= 1 && num <= pageCount) {
        pageNum = num;
        renderPage(pageNum);
    }
    checkPage();
}

function nextPage() {
    if (pageNum < pageCount) {
        queueRenderPage(pageNum + 1);
    }
}

function prevPage() {
    if (pageNum > 1) {
        queueRenderPage(pageNum - 1);
    }
}

function zoomIn() {
    scale += 0.25;
    renderPage(pageNum);
}

function zoomOut() {
if (scale > 0.5) {
    scale -= 0.25;
    renderPage(pageNum);
}
}

function checkPage() {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
    if (pageNum >= pageCount) {
        nextBtn.disabled = true;
    }
    if (pageNum <= 1) {
        prevBtn.disabled = true;
    }
}

// Load the PDF
pdfjsLib.getDocument({
    url: url,
}).promise.then(doc => {
    pdfDoc = doc;
    pageCount = doc.numPages;
    document.getElementById('page-count').textContent = pageCount;
    renderPage(pageNum);
}).catch(err => {
    console.error("PDF load error:", err);
    loadingMsg.textContent = "Failed to load PDF.";
});