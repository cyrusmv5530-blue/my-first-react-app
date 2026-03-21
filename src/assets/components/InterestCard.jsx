
function InterestCard() {
  const title = 'Favorite Hobby';
  const description = 'My favorite hobby is going to the gym. I go a couple times a week and i like it because its like a personal challenge. ';
  const rating = '5/5';

  return (
    <div className="InterestCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <h2>{rating}</h2>
    </div>
  );
}

export default InterestCard;
