import 'styles.css';


$(".nft-left-overlay").hover(function () {
  $(this).parents(".nft-cube").toggleClass("left");
});
$(".nft-right-overlay").hover(function () {
  $(this).parents(".nft-cube").toggleClass("right");
});
