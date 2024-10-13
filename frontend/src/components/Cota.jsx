import { useState } from "react"

function Cota(){

    const montant   = 10000
    const nonPaye = 0

    const [isFormVisible,setFormVisible] = useState(false)

    const openForm = () => setFormVisible(true)
    const closeForm = () => setFormVisible(false)
    const confirm = () => {

        closeForm();
    }
    return(
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <button onClick={ openForm } className="btn btn-dark">
                            <i className="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
                <div id="coinDash" className="row">
                    <div id="cotisationDash" className="col-sm-12 col-md-12 col-lg-6 mx-auto mt-2">
                        <Cotisation montant={montant} nonPaye={nonPaye} />
                    </div>
                    <div id="transactionDash" className="col-sm-12 col-md-12 col-lg-5 mx-auto mt-2">
                        <Transaction  />
                    </div>
                </div>
            </div>

            <Form isVisible = { isFormVisible } onConfirm = { confirm } onClose = { closeForm } />
        </>
    )
}

function Cotisation({montant, nonPaye}){
    return(
        <>
            <div id = "cotaTitle" className="row text-light">
                <div className="col-4">
                    <h5 >cotisation : </h5>
                </div>
                <div className="col-8 text-end">
                    <h5>{ montant } MGA / mois </h5>
                </div>
            </div>

            <div id = "cotaTab" className="row overflow-scroll">
                <div className="row">
                    <table className="table table-responsive text-center">
                        <thead>
                            <tr>
                                <th>Nom et prénoms</th>
                                <th>montant</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className= { 'bg-success text-light' }>ANDRIATSIAFORITRARIVO Gildascio Marie Antonio</td>
                                <td className= { 'bg-success text-light' }>10000</td>
                                <td className= { 'bg-success text-light' }>payé</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id = "cotaFooter" className="row text-light">
                <div className="col-12 text-end">
                    <h5 >Non payé : { nonPaye } </h5>
                </div>
            </div>
        </>
    )
}

function Transaction(){

    return(
        <>
            <div id = "transTitle" className="row mt-2 text-light">
                <div className="col-12 text-center">
                    <h5 >Transactions : </h5>
                </div>
            </div>

            <div id = "transTab" className="row overflow-scroll">
                <div className="row">
                    <table className="table table-responsive table- text-center">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Montant</th>
                                <th>venant de</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = { 'bg-primary text-light' }>revenu</td>
                                <td className= { 'bg-primary text-light' }>cotisation</td>
                                <td className= { 'bg-primary text-light' }>10000</td>
                                <td className= { 'bg-primary text-light' }>rakoto</td>
                                <td className= { 'bg-primary text-light' }>01 decembre 2024</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


function Form({ isVisible, onConfirm, onClose }) {
    if (!isVisible) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-container2">
          <h3>Transaction</h3>

          <div className="row">
            <label htmlFor="type">Type :</label>
            <select name="type" className="form-select">
                <option value="revenue">revenue</option>
                <option value="depense">dépense</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="description">Déscription :</label>
            <select name="description" className="form-select">
                <option value="revenue">revenue</option>
                <option value="depense">dépense</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="montant">Montant :</label>
            <input type="number" name="montant" className="form-control"/>
          </div>

          <div className="row">
            <label htmlFor="expediteur">Expediteur :</label>
            <input type="text" name="expediteur" className="form-control"/>
          </div>
          
          <div className="modal-buttons">
            <button className="btn btn-outline-success" onClick={onConfirm}>
              Confirmer
            </button>
            <button className="btn btn-outline-danger" onClick={onClose}>
              Annuler
            </button>
          </div>
        </div>
      </div>
    );
  }
export default Cota;