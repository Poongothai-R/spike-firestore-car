export default function ItemCar({ item }) {
    console.log(item);
  const { company,driver,year,imageURL } = item;


  return (
    <article className="item-student">
     <img src={imageURL} alt="cars"/>
      <ul>
            <li>Company Name : {company}</li>
            <li>Driver Name : {driver}</li>
             <li>Year : {year}</li>
      </ul>
    </article>
  );
}
