import '../styles/Login.css'

function Login(){
    return(
        <>
            <div className="container-fluid">
                <div id='header' className="row col-12 text-center">
                    <h2>AssoManage</h2>
                </div>
                <div className="row col-12 col-md-5 col-lg-5 text-center mt-5 mx-auto p-5 shadow rounded-4 bg-light " id="loginForm">
                    <form>
                        <label className="form-laber" htmlFor="userName">Nom d'utilisateur</label>
                        <input className="form-control" type="text" />
                        <label className="form-laber" htmlFor="userName">Mot de passe :</label>
                        <input className="form-control" type="password" />
                        <div className='row col-12 col-md-7 col-lg-5 mx-auto'>
                            <button type='button' className='btn btn-outline-dark'>se connecter</button>
                        </div>
                        <div className='row col-12 col-md-9 col-lg-9 mx-auto'>
                            <button id='forgot' className='btn text-secondary'>mot de passe oublié</button>
                        </div>
                    </form>
                </div>

                <div id='version' className="row col-12 text-center py-2">
                    <h6>v.1.0.0</h6>
                </div>
            </div>
        </>
    )
}


export default Login;

