function AboutCard({myTitle, mySubtitle, text, img1, img2}) {

  return (
    <>
    <div className = 'bg-secondaryBox2 border-accent2  border p-6 m-6 shadow-xl/15 rounded-md'>
      <div className = "border-l-accent2 border-r-accent2 border-r-2 border-l-2 p-6">
        <h1 className = 'text-4xl font-bold font-sgummy text-center w-fit m-auto bg-border-secondaryBox'>{myTitle}</h1>
        <h4 className = 'text-center text-2xl font-sgummy'>{mySubtitle}</h4>
        <p className = "font-sgummy text-text text-xl m-6">{text}</p>
      </div>
    </div>
    </>
  );
}

export default AboutCard;
