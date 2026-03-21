function JobCard() {
  const title = 'Dream Job: Mechanical Engineer';
  const companies = 'Companies: Microsoft, Apple, Google, Intel';
  const why = 'I have an intrest in engineering and desiging things.';
  const salary = '$100,000 - $110,000';

  return (
    <div className="card bg-red-300 border border-blue-600 p-6 m-4 hover:bg-green-200 shadow-md hover:shadow-xl transiton-all duration-150">
      <h3 className = "font-bold text-center text-blue-700" >{title}</h3>
      <h5>{companies}</h5>
      <p>{why}</p>
      <h4>{salary}</h4>
    </div>
  );
}

export default JobCard;
