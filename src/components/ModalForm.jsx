import addData from "../scripts/addData";
import "./modalForm.css";


export default function ModalForm({setModal}) {
    async function addCarItem(e) {
       e.preventDefault();
        const data = {
             "company": e.target.form[0].value,
                     "driver": e.target.form[1].value,
                  "imageURL": e.target.form[2].value,
                     "year": e.target.form[3].value,
                 };
         await addData(data);
        resetForm(e);
        window.location.reload(false);
    }
    function resetForm(e) {
         e.target.form[0].value = "";
        e.target.form[1].value = "";
        e.target.form[2].value = "";
        e.target.form[3].value = "";
         setModal(null);
     }
    return (
        <form className="modal_form" >
            <h1>Add New Item</h1>
            <label htmlFor="name">Company Name</label>
            <input type="text" />
            <label>Driver Name</label>
            <input type="text" />
            <label>Image URL</label>
            <input type="text"  />
            <label>Year</label>
            <input type="number" />
            <button onClick={addCarItem}>Submit</button>
            <button onClick={resetForm}>
                Cancel
            </button>
        </form>
    );
}