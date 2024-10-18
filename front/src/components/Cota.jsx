import { useState, useEffect } from "react"
import Axios from 'axios'
function Cota(){

    const montant   = 0
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
                    <div id="cotisationDash" className="col-sm-12 col-md-12 col-lg-5 mx-auto mt-2">
                        <Cotisation montant={montant} nonPaye={nonPaye} />
                    </div>
                    <div id="transactionDash" className="col-sm-12 col-md-12 col-lg-6 mx-auto mt-2">
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
                                <td className= { 'bg-secondary text-light' }>ANDRIATSIAFORITRARIVO Gildascio Marie Antonio</td>
                                <td className= { 'bg-secondary text-light' }>10000</td>
                                <td className= { 'bg-secondary text-light' }>payé</td>
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

function EditForm({ isVisible, onConfirm, onClose, transaction }) {
    const [description, setDescri] = useState(transaction.description);
    const [selectValue, setSelectValue] = useState(transaction.description === 'cotisation' ? 'cotisation' : 'autre');
    const [montant, setMontant] = useState(transaction.montant);
    const [expediteur, setExpediteur] = useState(transaction.expediteur);
    const [type, setType] = useState(transaction.type);
    const [date, setDate] = useState(transaction.date); // Ajouté pour gérer la date

    if (!isVisible) return null;

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')} ${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}:${dateObj.getSeconds().toString().padStart(2, '0')}`;
    };

    const handleSubmit = async () => {
        const data = {
            type,
            description,
            montant,
            expediteur,
            date: formatDate(date), // Formater la date avant de l'envoyer
        };

        try {
            const response = await Axios.put(`http://localhost:3000/api/transactions/${data.date}`, data);
            console.log('Réponse du serveur :', response.data);
            onConfirm(); // Ferme le formulaire après la confirmation
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la transaction:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container2">
                <h3>Modifier Transaction</h3>

                <div className="row">
                    <label htmlFor="type">Type :</label>
                    <select
                        name="type"
                        className="form-select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="revenue">revenue</option>
                        <option value="depense">dépense</option>
                    </select>
                </div>

                <div className="row">
                    <label htmlFor="description">Déscription :</label>
                    <select
                        onChange={(e) => {
                            setSelectValue(e.target.value);
                            setDescri(e.target.value === 'autre' ? '' : e.target.value);
                        }}
                        name="description"
                        className="form-select"
                        value={selectValue}
                    >
                        <option value="cotisation">cotisation</option>
                        <option value="autre">autre</option>
                    </select>
                </div>

                {selectValue === 'autre' && (
                    <div className="row">
                        <input
                            type="text"
                            name="description2"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescri(e.target.value)}
                        />
                    </div>
                )}

                <div className="row">
                    <label htmlFor="montant">Montant :</label>
                    <input
                        type="number"
                        name="montant"
                        className="form-control"
                        value={montant}
                        onChange={(e) => setMontant(e.target.value)}
                    />
                </div>

                <div className="row">
                    <label htmlFor="expediteur">Expediteur :</label>
                    <input
                        type="text"
                        name="expediteur"
                        className="form-control"
                        value={expediteur}
                        onChange={(e) => setExpediteur(e.target.value)}
                    />
                </div>

                <div className="modal-buttons">
                    <button className="btn btn-outline-success" onClick={handleSubmit}>
                        Mettre à jour
                    </button>
                    <button className="btn btn-outline-danger" onClick={onClose}>
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    );
}

function Transaction() {
    const [transactions, setTransactions] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTransaction, setCurrentTransaction] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await Axios.get('http://localhost:3000/api/transactions');
                setTransactions(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    const handleEdit = (transaction) => {
        setCurrentTransaction(transaction);
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
        setCurrentTransaction(null);
    };
    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')} ${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}:${dateObj.getSeconds().toString().padStart(2, '0')}`;
    };

    const handleDelete = async (date) => {
        try {
            const formattedDate = formatDate(date)

            await Axios.delete(`http://localhost:3000/api/transactions/${formattedDate}`);
            setTransactions(transactions.filter(transaction => transaction.date !== date));
            console.log('Transaction supprimée avec succès');
        } catch (error) {
            console.error('Erreur lors de la suppression de la transaction:', error);
        }
    };
    

    return (
        <>
            <div id="transTitle" className="row text-light">
                <div className="col-12 text-center">
                    <h5>Transactions :</h5>
                </div>
            </div>

            <div id="transTab" className="row overflow-scroll">
                <div className="row">
                    <table className="table table-responsive table text-center">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Montant</th>
                                <th>Venant de</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.date}>
                                    <td className={'bg-success text-light'}>{transaction.type}</td>
                                    <td className={'bg-success text-light'}>{transaction.description}</td>
                                    <td className={'bg-success text-light'}>{transaction.montant}</td>
                                    <td className={'bg-success text-light'}>{transaction.expediteur}</td>
                                    <td className={'bg-success text-light'}>
                                        {new Date(transaction.date).toLocaleString()}
                                    </td>
                                    <td className={'bg-success text-light'}>
                                        <button className="btn btn-sm btn-light" onClick={() => handleEdit(transaction)}>
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                        <button className="btn btn-sm btn-danger ms-2" onClick={() => handleDelete(transaction.date)}>
                                        <i className="bi bi-trash"></i>
                                            
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isEditing && (
                <EditForm 
                    isVisible={isEditing} 
                    onConfirm={handleCloseEdit} 
                    onClose={handleCloseEdit} 
                    transaction={currentTransaction} 
                />
            )}
        </>
    );
}


  


function Form({ isVisible, onConfirm, onClose }) {
    const [description, setDescri] = useState('cotisation');
    const [selectValue, setSelectValue] = useState('');
    const [montant, setMontant] = useState('');
    const [expediteur, setExpediteur] = useState('');
    const [type, setType] = useState('revenue');
  
    if (!isVisible) return null;
    
    const handleSubmit = async () => {
      const data = {
        type,
        description,
        montant,
        expediteur,
      };
  
      try {
        const response = await Axios.post('http://localhost:3000/api/create_transactions', data);
        console.log('Réponse du serveur :', response.data);
      } catch (error) {
        if (error.response) {
          // Erreur côté serveur (ex : 400)
          console.log('Erreur côté serveur:', error.response.status);
          console.log('Message d’erreur:', error.response.data.error);
        } else if (error.request) {
          // Aucune réponse reçue du serveur
          console.log('Aucune réponse reçue du serveur:', error.request);
        } else {
          // Erreur lors de la configuration de la requête
          console.log('Erreur de configuration de la requête:', error.message);
        }
      }
      
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal-container2">
          <h3>Transaction</h3>
  
          <div className="row">
            <label htmlFor="type">Type :</label>
            <select
              name="type"
              className="form-select"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="revenue">revenue</option>
              <option value="depense">dépense</option>
            </select>
          </div>
  
          <div className="row">
            <label htmlFor="description">Déscription :</label>
            <select
              onChange={(e) => setSelectValue(e.target.value)}
              name="description"
              className="form-select"
            >
              <option value="cotisation">cotisation</option>
              <option value="autre">autre</option>
            </select>
          </div>
  
          {selectValue === 'autre' && (
            <div className="row">
              <input
                type="text"
                name="description2"
                className="form-control"
                onChange={(e) => setDescri(e.target.value)}
              />
            </div>
          )}
  
          <div className="row">
            <label htmlFor="montant">Montant :</label>
            <input
              type="number"
              name="montant"
              className="form-control"
              onChange={(e) => setMontant(e.target.value)}
            />
          </div>
  
          <div className="row">
            <label htmlFor="expediteur">Expediteur :</label>
            <input
              type="text"
              name="expediteur"
              className="form-control"
              onChange={(e) => setExpediteur(e.target.value)}
            />
          </div>
  
          <div className="modal-buttons">
            <button className="btn btn-outline-success" onClick={handleSubmit}>
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
// descri
export default Cota;