import "./Galeria.css";
import icon from "../../assets/img/upload.svg";
import { Botao } from "../../componentes/botao/Botao";
import { Card } from "../../componentes/card/Card";
export const Galeria = () => {
  return (
    <>
      <h1 className="tituloGaleria">Galeria Online</h1>

      <form className="formulario" onSubmit="">
        <div className="campoNome">
          <label>Nome</label>
          <input type="text" className="inputNome" />
        </div>
        <div className="campoImagem">
          <label className="arquivoLabel">
            <i>
              <img src={icon} alt="icone de upload de imagem" />
            </i>
            <input type="file" className="arquivoInput" />
          </label>
        </div>
        <Botao nomeBotao="Cadastrar" />
      </form>

      <div className="campoCards">
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
        <Card tituloCard="Pantera Cor-de-Rosa" />
      </div>
    </>
  );
};

export default Galeria;
