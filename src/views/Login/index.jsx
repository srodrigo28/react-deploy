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
            <div className="form col-6 mx-auto">
                <h1 className="mt-5 mb-5">Bem vindo</h1>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="e-mail" />
                    </div>
                    <div className="col">
                        <input type="password" className="form-control text-center" placeholder="*******" />
                    </div>
                    <div className="row">
                        <div className="col p-3 d-flex gap-3">
                            <button onClick={Entrar} className="btn btn-outline-primary w-25">Entrar</button>
                            <button onClick={Registar} className="btn btn-outline-success w-25">Registar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}