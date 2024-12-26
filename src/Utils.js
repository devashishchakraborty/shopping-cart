import fullStar from "./assets/star.svg";
import halfStar from "./assets/star-half.svg";

const generateStars = (rating) => {
  let stars = [];
  let fullStars = Math.floor(rating);
  for (let i = 0; i < fullStars; i++) stars.push(fullStar);

  let rem = rating - fullStars;
  if (rem > 0.2 && rem < 0.8) stars.push(halfStar);
  else if (rem > 0.7) stars.push(fullStar);

  return stars;
};

const trimTitle = (title) => title.length > 40 ? `${title.slice(0, 37)}...` : title;

export { generateStars, trimTitle };
