import { useState } from "react";

function Member(){

    const [page,setPage] = useState('list')

    return(
        <> 
            <div className="container mt-5 over">
                {
                    page === 'list' && (
                        <List setPage={setPage} />
                    )
                }

                {
                    page === 'info' && (
                        <Info />
                    )
                }
            </div>
        </>
    )
}

function List({setPage}){
    return(
        <>
            <div className="row text-center">
                <h3 className="mt-2">Liste des membres :</h3>
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
                                <button className="btn btn-dark" onClick={() => setPage('info')}>plus d'info</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


function Info(){
    return(
        <>
            <div id="info">
                <div className="row">
                    <div id="photo" className=" col-6 col-lg-2 shadow mx-auto text-center rounded">
                        <h5 className="my-auto">photo</h5>
                    </div>
                    <div className="col-lg-9 mt-5 mx-auto my-auto">
                        <h3>Nom et prénoms : ANDRIATSIAFORITRARIVO Gildascio Marie Antonio</h3>
                        <h5>Surnom :</h5>
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
                            Whatsapp :
                        </h5>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Member;