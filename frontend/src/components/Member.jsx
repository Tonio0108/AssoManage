import { useState } from "react";
import Modal from "./modal";
function Member(){

    const [page,setPage] = useState('list')
    const [isModalVisible, setModalVisible] = useState(false)

    const showModal = () => setModalVisible(true)
    const hideModal = () => setModalVisible(false)

    const message = "Etes-vous sûr d'ajouter ce nouveau membre ?"
    const confirm = () => {

        hideModal()
    }


    return(
        <> 
            <div className = "container mt-5 over">

                {
                    page === 'list' && (
                        <List setPage={setPage} />
                    )
                }

                {
                    page === 'info' && (
                        <Info setPage={setPage} />
                    )
                }

                {
                    page === 'new' && (
                        <NewMember setPage={setPage} showModal={showModal} />
                    )
                }

                <Modal 
                    title = {'Ajouter un membre'} 
                    message = {message} 
                    isVisible = {isModalVisible}
                    onConfirm = {confirm}
                    onClose = {hideModal}
                    />
                
            </div>
        </>
    )
}

function List({setPage}){
    return(
        <>
            <div className="row text-center">
                <h3 className="mt-2">Liste des membres :</h3>

                <div className="row">
                    <div className="col-1">
                        <button onClick={() => setPage('new')} className="btn btn-dark">
                            <i className="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
                <table className="table table-responsive mt-3">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénoms</th>
                            <th>Surnom</th>
                            <th>Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                                <button className="btn btn-info" onClick={() => setPage('info')}>plus d'info</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


function Info({setPage}){
    
    return(
        <>
            <div id="info">
                <div className="row">
                    <div id="photo" className=" col-6 col-lg-2 shadow mx-auto text-center rounded">
                        <h5 className="my-auto">photo</h5>
                    </div>
                    <div className="col-lg-9 mt-5 mx-auto my-auto">
                        <h3>Nom et prénoms</h3>
                        <h5>Surnom </h5>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-calendar-date me-2"></i>
                            Date de naissance :
                        </h5>
                    </div>
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-heart-fill me-2"></i>
                            Situation matrimoniale :
                        </h5>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-person-fill me-2"></i>
                            Nombre d'enfants :
                        </h5>
                    </div>
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-briefcase-fill me-2"></i>
                            Profession :
                        </h5>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-rulers me-2"></i>
                            Taille :
                        </h5>
                    </div>
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-bag me-2"></i>
                            Pointure chaussure :
                        </h5>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-house-fill me-2"></i>
                            Adresse :
                        </h5>
                    </div>
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-telephone-fill me-2"></i>
                            Téléphone :
                        </h5>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-facebook me-2"></i>
                            Facebook :
                        </h5>
                    </div>
                    <div className="col-12 col-lg-5 mx-auto">
                        <h5>
                            <i className="bi bi-whatsapp me-2"></i>
                            WhatsApp :
                        </h5>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-11 text-center">
                        <button className="btn btn-outline-secondary">
                            <i className="bi bi-pencil me-2"></i>
                            Modifier
                        </button>
                        <button className="btn btn-danger ms-5">
                            <i className="bi bi-trash me-2"></i>
                            Supprimer
                        </button>
                        <button className="btn btn-light ms-5" onClick={() => setPage('list')}>
                            <i className="bi bi-arrow-left me-2"></i>
                            retour
                        </button>
                    </div>
                </div>

            </div>
            
        </>
    )
}

function NewMember({setPage, showModal}){
    return(
        <>
            <div className="row text-center">
                <form>
                    <div className="row">
                        <div className="col-11 text-center">
                            <h3>Nouveau membre</h3>
                        </div>

                        <div className="col-1">
                            <button onClick={() => setPage('list')} className="btn btn-danger">
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4 mx-auto">
                            <label htmlFor="name">Nom :</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-12 col-md-5 col-lg-4">
                            <label htmlFor="prenoms">Prénoms :</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4 mx-auto">
                            <label htmlFor="surnom">Surnom :</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-12 col-md-5 col-lg-4">
                            <i className="bi bi-calendar-date me-2"></i>
                            <label htmlFor="datenais">Date de naissance :</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4 mx-auto">
                            <i className="bi bi-heart-fill me-2"></i>
                            <label htmlFor="situation">Situation matrimoniale :</label>
                            <select name="situation" id="" className="form-select">
                                <option value="celibataire">Célibataire</option>
                                <option value="marie">Marié</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-5 col-lg-4">
                            <i className="bi bi-person-fill me-2"></i>
                            <label htmlFor="enfants">Nombre d'enfants :</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4 mx-auto">
                            <i className="bi bi-briefcase-fill me-2"></i>
                            <label htmlFor="profession">Profession :</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-12 col-md-5 col-lg-4">
                            <i className="bi bi-rulers me-2"></i>
                            <label htmlFor="taille">Taille :</label>
                            <input type="number" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4 mx-auto">
                            <i className="bi bi-bag me-2"></i>
                            <label htmlFor="pointure">Pointure chaussure :</label>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="col-12 col-md-5 col-lg-4">
                            <i className="bi bi-house-fill me-2"></i>
                            <label htmlFor="adress">Adresse :</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4 mx-auto">
                            <i className="bi bi-telephone-fill me-2"></i>
                            <label htmlFor="tel">Téléphone :</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-12 col-md-5 col-lg-4">
                            <i className="bi bi-facebook me-2"></i>
                            <label htmlFor="facebook">Facebook :</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4 mx-auto">
                            <i className="bi bi-whatsapp me-2"></i>
                            <label htmlFor="whatsapp">WhatsApp :</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-12 col-md-5 col-lg-4">
                            <i className="bi bi-camera-fill me-2"></i>
                            <label htmlFor="photo">Photo :</label>
                            <input type="file" className="form-control" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center mx-auto">
                            <button type="button" onClick={showModal} className="btn btn-success">
                                <i className="bi bi-pencil me-2"></i>
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Member;