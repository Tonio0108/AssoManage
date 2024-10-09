function Header(){
    return(
        <>
            <div id="header" className="row bg-dark text-light">
                <div className="col-11">
                    <h3>AssoManage</h3>
                    <h6>V.1.0.0</h6>
                </div>
                <div className="col-1 text-center">
                    <button className="btn btn-outline-light mt-2">
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;