export function Login(){
    return(
        <div className="container text-center">
            <div className="form col-6 mx-auto">
                <h1 className="mt-5 mb-5">Bem vindo</h1>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="e-mail" />
                    </div>
                    <div className="col">
                        <input type="password" className="form-control" placeholder="*******" />
                    </div>
                    <div className="row">
                        <div className="col p-3 d-flex gap-3">
                            <button className="btn btn-outline-primary w-25">Entrar</button>
                            <button className="btn btn-outline-success w-25">Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}