function Header(){
    return(
        <>
            <div id="header" className="row bg-dark text-light">
                <div className="col-10">
                    <h3>AssoManage</h3>
                    <h6>V.1.0.0</h6>
                </div>
                <div className="col-2 text-end">
                    <button className="btn btn-outline-light">
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;