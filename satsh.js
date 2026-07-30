function handlePlaceOrder(event) {
  event.preventDefault(); // Sahifa avtomatik yangilanishini to'xtatadi
  
  // Ma'lumotlar to'ldirilganini tekshirib, muvaffaqiyatli sahifaga o'tkazadi
  window.location.href = 'success.html'; // Yoki Figma dagi success sahifasi nomi
}