export function checkImageURL(url) {
  return !url ? false : (
    new RegExp(
      '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 
      'i'
    ).test(url)
  );
}