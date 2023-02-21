// Project files
import ItemCar from "../components/itemCar";
import ModalForm from "../components/ModalForm";

export default function CarsPage({ data , setModal}) {
    console.log(setModal);
  // Components
  const Items = data.map((item) => <ItemCar key={item.id} item={item} />);

  return (
    <div id="students-page">
      <h2>Cars</h2>
      {Items}
        <button onClick={() =>
            setModal(
                <ModalForm setModal={setModal}/>
            )
        }>Add New Car</button>
    </div>
  );
}
