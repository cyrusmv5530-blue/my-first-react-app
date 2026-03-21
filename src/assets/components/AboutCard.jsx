function AboutCard({myTitle, mySubtitle, text, img1, img2}) {

  return (
    <>
    <div className = 'bg-gray-300 border-slate-700 p-6 m-4 '>
    <h1 className = 'font-bold font-sans text-center'>{myTitle}</h1>
    <h4 className = 'text-center font-serif'>{mySubtitle}</h4>
    <p>{text}</p>
    <img src={img1} alt="picture" width = "200"></img>
    <img src={img2} alt="picture" width = "200"></img>


    </div>
    </>
  );
}

export default AboutCard;
