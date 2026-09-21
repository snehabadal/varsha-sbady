document.addEventListener('DOMContentLoaded', () => {
  const flames = Array.from(document.querySelectorAll('.flame'));
  const smokes = Array.from(document.querySelectorAll('.smoke'));
  const hint = document.getElementById('hint');
  const wishItems = Array.from(document.querySelectorAll('.wish-list li'));
  const resetBtn = document.getElementById('resetBtn');
  const confettiLayer = document.getElementById('confettiLayer');
  const memoriesSection = document.getElementById('memoriesSection');
  let blownCount = 0;

  const confettiColors = ['#E3A857', '#E8768C', '#FAF3EA', '#D9AEBB'];

  function burstConfetti() {
    for (let i = 0; i < 70; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      piece.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      piece.style.animationDelay = (Math.random() * 0.4) + 's';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      confettiLayer.appendChild(piece);
      setTimeout(() => piece.remove(), 5200);
    }
  }

  function blowOut(idx) {
    const flame = flames[idx];
    const smoke = smokes[idx];
    const wish = wishItems.find(li => Number(li.dataset.idx) === idx);
    if (flame.classList.contains('out')) return;

    flame.classList.add('out');
    smoke.classList.add('show');
    if (wish) wish.classList.add('visible');
    blownCount++;

    if (blownCount === flames.length) {
      hint.classList.add('hidden');
      setTimeout(() => {
        resetBtn.classList.add('show');
        burstConfetti();
        memoriesSection.classList.add('revealed');
        memoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }

  flames.forEach((flame, idx) => {
    flame.addEventListener('click', () => blowOut(idx));
    flame.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        blowOut(idx);
      }
    });
  });

  resetBtn.addEventListener('click', () => {
    flames.forEach(f => f.classList.remove('out'));
    smokes.forEach(s => s.classList.remove('show'));
    wishItems.forEach(li => li.classList.remove('visible'));
    blownCount = 0;
    hint.classList.remove('hidden');
    resetBtn.classList.remove('show');
    memoriesSection.classList.remove('revealed');
  });
});
