export const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  const duration = 1800; // Longer duration for smoother feel
  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  let startTime = null;

  // Prepare the section for animation
  element.style.transition = 'all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
  element.style.transform = 'scale(0.99) translateY(10px)';
  element.style.opacity = '0.8';
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Custom easing function combining ease-out-cubic with a slight bounce
    const ease = t => {
      // Smooth ease-out-cubic for most of the animation
      const baseEase = 1 - Math.pow(1 - t, 3);
      
      // Add subtle bounce at the end
      if (t > 0.95) {
        const bounceProgress = (t - 0.95) / 0.05;
        return baseEase + Math.sin(bounceProgress * Math.PI) * 0.02;
      }
      
      return baseEase;
    };
    
    window.scrollTo(0, startPosition + (distance * ease(progress)));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Final animation sequence
      element.style.transform = 'scale(1.01) translateY(-5px)';
      element.style.opacity = '1';
      
      setTimeout(() => {
        element.style.transform = 'scale(1) translateY(0)';
      }, 200);
    }
  }

  requestAnimationFrame(animation);
}; 
