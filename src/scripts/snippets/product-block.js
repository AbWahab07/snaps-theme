$(document).ready(function() {

  $(".product-block").click(function() { 
    window.location.href = $(this).data('product-url'); 
  });
});