export function stopScroll(){
  document.body.classList.add('cander-stop-scroll');
}

export function startScroll(){
  document.body.classList.remove('cander-stop-scroll');
}