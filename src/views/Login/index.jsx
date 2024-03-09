import { toast } from 'react-toastify';

export function Login(){

    const Entrar = () => {
        toast("Usuário ou senha não conferi :(")
    }

    function Registar() {
        toast("Servidor offline volte mais tarde ...")
    }

    return(
        <div className="container text-center">
            <div className="form">
                <h1 className="mt-5 mb-5">Bem vindo</h1>
                <div className="row p-3">
                    <div className="col-md-6 col-sm-12 mb-3">
                        <input type="text" className="form-control" placeholder="e-mail" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <input type="password" className="form-control text-center" placeholder="*******" />
                    </div>
                    <div className="row">
                        <div className="col p-3 d-flex gap-3">
                            <button onClick={Entrar} className="btn btn-outline-primary">Entrar</button>
                            <button onClick={Registar} className="btn btn-outline-success">Registar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}