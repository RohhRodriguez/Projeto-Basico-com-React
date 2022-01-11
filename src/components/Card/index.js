import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [valor, setValor] = useState(0);

    function Adicionar () {
        setValor(valor+1)
    }
    function Remover () {
        setValor(valor-1)
    }

    return(
         <div class="card">
             <div className="card-header">
                Clique nos botões abaixo  para Adicionar ou Remover (início em "0")
             </div>
             <div className="card-body">
                 <Button
                    className="btn btn-success"
                    onClick={Adicionar}>Adicionar
                 </Button>

                 <Button
                    className="btn btn-danger"
                    onClick={Remover}>Remover
                 </Button>

                 <p>{valor}</p>
             </div>
         </div>
    )
}

export default Card;