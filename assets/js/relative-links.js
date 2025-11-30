document.addEventListener("DOMContentLoaded", function() {
  const prefix = "/marica-rj";  // subdiretório do GitHub Pages
  document.querySelectorAll('a[href^="/legislatura"]').forEach(a => {
    a.href = prefix + a.getAttribute('href');
  });
});