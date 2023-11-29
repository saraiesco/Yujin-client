import './Form.scss';
import axios from 'axios';


function Form({show,setShow,handleClose}){

    const handleSubmit = (event) => {
      event.preventDefault();

      const age = parseInt(event.target.elements.age.value);
      const conditions = event.target.elements.conditions.value.split(',');

      axios.post("http://localhost:8080/clients", {
        name : event.target.elements.name.value,
        age : age,
        conditions : conditions
        })
            .then((response) => {
                let data = response.data;
                console.log(data)
            })
            .catch((error) => {
                console.log(error);
            });
  
     
      handleClose();
    };
  
    return (
      <div>
  
       (
          <div className="modal-backdrop">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Add Patient</h2>
                <span className="close-button" onClick={handleClose}>X</span>
              </div>
  
              <form className="modal-form" onSubmit={handleSubmit}>
                <label className="modal-label">Name:</label>
                <input type="text" className="modal-input" name="name" />
  
                <label className="modal-label">Age:</label>
                <input type="text" className="modal-input" name="age" />
  
                <label className="modal-label">Diagnosis:</label>
                <textarea className="modal-input" name="conditions" />
  
                <button className="modal-button" type="submit">Submit</button>
              </form>
            </div>
          </div>
        )
      </div>
    );
}

export default Form;