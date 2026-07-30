function removeItem(button) {
  // Bosilgan tugmaning qatorini (tr) topib olamiz va o'chiramiz
  const row = button.closest('tr');
  row.remove();

  // Qolgan mahsulotlar sonini sanab, badge raqamini yangilaymiz
  const remainingItems = document.querySelectorAll('.wishlist-item');
  const countElement = document.getElementById('wishlistCount');
  
  if (countElement) {
    countElement.innerText = remainingItems.length;
  }

  // Agar hamma mahsulot o'chirib yuborilsa, jadval o'rniga bo'sh ekanligi haqida xabar chiqaramiz
  const tableBody = document.getElementById('wishlistTableBody');
  if (remainingItems.length === 0 && tableBody) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 40px; color: #77878f; font-size: 15px;">
          Your wishlist is empty.
        </td>
      </tr>
    `;
  }
}