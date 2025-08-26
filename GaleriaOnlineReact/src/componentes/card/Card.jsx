import "./Card.css"
// import imgCard from "../../assets/img/panteracorderosa.jpg"

import imgPen from "../../assets/img/pen.svg"
import imgTrash from "../../assets/img/trash.svg"

export const Card = ({tituloCard, imgCard, funcaoEditar, funcaoExcluir}) => {
    return(
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img className="imgDoCard" src={imgCard} alt="imagem relacionada ao card." />
                <div className="icons">
                    <img onClick={funcaoEditar} src={imgPen} alt="Icone de caneta para realizar uma alteração." />
                    <img onClick={funcaoExcluir} src={imgTrash} alt="ícone de uma lixeira para realizar a exclusão." />
                </div>
            </div>
        </>
    )
}