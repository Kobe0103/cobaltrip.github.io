document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

document.getElementById('expand-button').addEventListener('click', function () {
  const hiddenFeatures = document.getElementById('hidden-features');
  const button = document.getElementById('expand-button');

  if (hiddenFeatures.classList.contains('hidden')) {
    hiddenFeatures.classList.remove('hidden');
    button.textContent = 'Hide Features';
  } else {
    hiddenFeatures.classList.add('hidden');
    button.textContent = 'Show All Features';
  }
});