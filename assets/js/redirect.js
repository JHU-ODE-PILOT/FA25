// Open PDF and different websites in a new page

document.addEventListener("DOMContentLoaded", function () {
  const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');  // Select all PDF links

  // Attach click event listener to each PDF link
  pdfLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      const pdfUrl = link.getAttribute('href'); // Open the PDF renderer in a new tab with the PDF URL as a query parameter
      window.open('https://jhu-ode-pilot.github.io/FA25/assets/html/pdf-reader.html?pdf=' + encodeURIComponent(pdfUrl), '_blank');
    });
  });
});

document.querySelectorAll('a').forEach(link => {
    if (link.closest('navbar')) return;

    const href = link.getAttribute('href');

    if (href && href.toLowerCase().startsWith('https://')) {
      link.setAttribute('target', '_blank');
    }
  });
