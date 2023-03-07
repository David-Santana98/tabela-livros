import React from "react";

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Quantidade de Livros na tabela: {props.qtdLivros}</td>
        </tr>
    </tfoot>
);
export default TabelaFoot;