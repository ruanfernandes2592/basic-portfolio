import "./App.css";

import ruanImg from "./assets/images/ruanFernandes2.jpg";

import tempFlatsImg from "./assets/images/tempFlatsImg.png";
import portfGitHubImg from "./assets/images/PortfApiGitHub.png";
import minhasTarefas from "./assets/images/minhasTarefas.png";
import metaPpImg from "./assets/images/metaPpImg.png";
import imcImg from "./assets/images/ImcImg.png";
import twdImg from "./assets/images/twdImg.png";

import { useState } from "react";

import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleChangeName = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const handleChangeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value);
  };

  const sendMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      alert("O nome deve ter pelo menos 3 letras.");
      return;
    }

    if (msg.trim().length < 10) {
      alert("A mensagem deve ter pelo menos 10 caracteres.");
      return;
    }

    const text = `Olá! Me chamo ${name} e gostaria de saber mais sobre você. ${msg}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/5581994016336?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="particulas"></div>
      <nav className="navegacao">
        <ul className="menu">
          <li>
            <a className="menu-link" href="#inicio">
              Início
            </a>
          </li>
          <li>
            <a className="menu-link" href="#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a className="menu-link" href="#projetos">
              Projetos
            </a>
          </li>
          <li>
            <a className="menu-link" href="#contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <main id="inicio" className="cabecalho">
        <img
          src={ruanImg}
          className="foto-perfil"
          alt="Foto de Ruan Fernandes"
        />
        <h1>Ruan Fernandes</h1>
        <p className="cabecalho-sub-titulo">Desenvolvedor Front End</p>
        <ul className="redes">
          <li>
            <a
              href="https://www.linkedin.com/in/ruanfernandes-dev/"
              target="_blank"
            >
              <FaLinkedin style={{ width: "24px", height: "24px" }} />
            </a>
          </li>
          <li>
            <a href="https://github.com/ruanfernandes2592" target="_blank">
              <FaGithub style={{ width: "24px", height: "24px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ruanfernandes92/"
              target="_blank"
            >
              <FaInstagram style={{ width: "24px", height: "24px" }} />
            </a>
          </li>
          <li>
            <a href="#contato">
              <FaWhatsapp style={{ width: "24px", height: "24px" }} />
            </a>
          </li>
        </ul>
      </main>

      <section id="sobre" className="sobre">
        <h2 className="sobre-titulo">Sobre Mim</h2>
        <div className="sobre-caixa">
          <p className="sobre-paragrafo">
            Meu primeiro contato com o desenvolvimento web aconteceu em 2008
            quando fiz um curso de 6 meses em uma escola de informática no tempo
            em que morava em João Pessoa - PB, onde descobri a linguagem de
            marcação HTML e de estilo CSS entre outras ferramentas. Naquela
            época com 16 anos mudei de cidade e a vida me levou para outro campo
            profissional. Hoje estou em processo de transição de carreira.
            Cursando Análise e Desenvolvimento de Sistemas busco evoluir a cada
            dia para me tornar um profissional mais completo.
          </p>
        </div>
      </section>

      <section id="projetos" className="projetos">
        <h2 className="projetos-titulo">Meus Projetos</h2>
        <div className="projetos-caixa">
          <div className="projetos-card">
            <img
              src={tempFlatsImg}
              className="projetos-imagem"
              alt="Projeto 1"
            />
            <div className="caixa-texto-projetos">
              <div className="title-button">
                <h3 className="info-projetos">Temp Flats</h3>
                <a
                  className="button-visitar"
                  href="http://tempflats.vercel.app"
                  target="_blank"
                >
                  Visitar
                </a>
              </div>
              <p className="paragrafo-projetos">
                Landing page para divulgação de flats para aluguel por
                temporada. <br />
                Desenvolvido com <span>ReactJs</span>, <span>TypeScript</span>,{" "}
                <span>react-google-maps/api</span>,{" "}
                <span>Styled Components</span> e <span>Wa.me</span>
              </p>
            </div>
            <a
              href="https://github.com/ruanfernandes2592/tempflats"
              target="_blank"
              className="button-repos"
            >
              <FaGithub
                style={{ width: "18px", height: "18px", color: "#fff" }}
              />
            </a>
          </div>

          <div className="projetos-card">
            <img
              src={portfGitHubImg}
              className="projetos-imagem"
              alt="Projeto 1"
            />
            <div className="caixa-texto-projetos">
              <div className="title-button">
                <h3 className="info-projetos">Portfólio GitHub - Desktop</h3>
                <a
                  className="button-visitar"
                  href="https://github-perfil-sigma.vercel.app"
                  target="_blank"
                >
                  Visitar
                </a>
              </div>
              <p className="paragrafo-projetos">
                Repositórios GitHub integrado com API <br />
                Desenvolvido com <span>ReactJs</span> e{" "}
                <span>JavaScript Fetch API</span> para realizar a integração
              </p>
            </div>
            <a
              href="https://github.com/ruanfernandes2592/github_perfil"
              target="_blank"
              className="button-repos"
            >
              <FaGithub
                style={{ width: "18px", height: "18px", color: "#fff" }}
              />
            </a>
          </div>

          <div className="projetos-card">
            <img
              src={minhasTarefas}
              className="projetos-imagem"
              alt="Projeto 1"
            />
            <div className="caixa-texto-projetos">
              <div className="title-button">
                <h3 className="info-projetos">Minhas Tarefas - Desktop</h3>
                <a
                  className="button-visitar"
                  href="https://minhas-tarefas-navy.vercel.app/"
                  target="_blank"
                >
                  Visitar
                </a>
              </div>
              <p className="paragrafo-projetos">
                Gerenciador de tarefas com funcionalidades como filtros e
                edição. Elementos desenvolvidos em componentes para melhor
                manutenção e escalabilidade. <br />
                Desenvolvido com <span>ReactJs</span>, <span>TypeScript</span> e{" "}
                <span>Styled Components</span>
              </p>
            </div>
            <a
              href="https://github.com/ruanfernandes2592/minhas-tarefas"
              target="_blank"
              className="button-repos"
            >
              <FaGithub
                style={{ width: "18px", height: "18px", color: "#fff" }}
              />
            </a>
          </div>

          <div className="projetos-card">
            <img src={metaPpImg} className="projetos-imagem" alt="Projeto 1" />
            <div className="caixa-texto-projetos">
              <div className="title-button">
                <h3 className="info-projetos">Calculadora de meta</h3>
                <a
                  className="button-visitar"
                  href="https://metapp-nu.vercel.app"
                  target="_blank"
                >
                  Visitar
                </a>
              </div>
              <p className="paragrafo-projetos">
                Projeto de extensão para o curso de ADS <br />
                Desenvolvido com <span>HTML</span>, <span>CSS</span>,{" "}
                <span>JavaScript</span> e <span>jQuery Mask Plugin</span>
              </p>
            </div>
            <a
              href="https://github.com/ruanfernandes2592/metapp"
              target="_blank"
              className="button-repos"
            >
              <FaGithub
                style={{ width: "18px", height: "18px", color: "#fff" }}
              />
            </a>
          </div>

          <div className="projetos-card">
            <img src={imcImg} className="projetos-imagem" alt="Projeto 1" />
            <div className="caixa-texto-projetos">
              <div className="title-button">
                <h3 className="info-projetos">Calculadora IMC</h3>
                <a
                  className="button-visitar"
                  href="https://imc-react-six.vercel.app"
                  target="_blank"
                >
                  Visitar
                </a>
              </div>
              <p className="paragrafo-projetos">
                Desenvolvido com <span>ReactJs</span>
              </p>
            </div>
            <a
              href="https://github.com/ruanfernandes2592/imc-react"
              target="_blank"
              className="button-repos"
            >
              <FaGithub
                style={{ width: "18px", height: "18px", color: "#fff" }}
              />
            </a>
          </div>

          <div className="projetos-card">
            <img src={twdImg} className="projetos-imagem" alt="Projeto 1" />
            <div className="caixa-texto-projetos">
              <div className="title-button">
                <h3 className="info-projetos">
                  Clone landing page Netflix - The Walking Dead
                </h3>
                <a
                  className="button-visitar"
                  href="https://clone-landingpage-twd-netflix.vercel.app"
                  target="_blank"
                >
                  Visitar
                </a>
              </div>
              <p className="paragrafo-projetos">
                Landing page para estudo. <br />
                Desenvolvido com <span>HTML</span>, <span>CSS</span>,{" "}
                <span>JavaScript</span> e <span>GulpJs</span>
              </p>
            </div>
            <a
              href="https://github.com/ruanfernandes2592/clone_landingpage_twd_netflix"
              target="_blank"
              className="button-repos"
            >
              <FaGithub
                style={{ width: "18px", height: "18px", color: "#fff" }}
              />
            </a>
          </div>
        </div>
      </section>

      <section id="contato" className="contato">
        <h2 className="contato-titulo">Entre em Contato</h2>
        <form className="formulario-contato" onSubmit={sendMsg} id="formulario">
          <div className="grupo-form">
            <input
              type="text"
              className="campo-form"
              onChange={handleChangeName}
              placeholder="Nome"
            />
          </div>
          <div className="grupo-form">
            <textarea
              className="campo-form"
              rows={6}
              onChange={handleChangeMsg}
              placeholder="Digite sua Mensagem"
            />
          </div>

          <button type="submit" className="botao-form">
            Enviar WhatsApp
          </button>
        </form>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
