export const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  const duration = 250; // Reduced from 1800 to 500ms
  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Simple easeOutQuad function
    const ease = t => t * (2 - t);
    
    window.scrollTo(0, startPosition + (distance * ease(progress)));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}; 
