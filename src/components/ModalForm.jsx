


export default function ModalForm() {
    return (
        <form className="modal_form" >
            <input type="text" placeholder="enter the company name"/>
            <input type="text" placeholder="enter the driver name"/>
            <input type="text" placeholder="enter the image URL"/>
            <input type="text" placeholder="enter the year"/>
            <button className="button_primary">Submit</button>
            <button className="button_secondary">
                Cancel
            </button>
        </form>
    );
}