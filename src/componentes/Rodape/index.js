import "./Rodape.css"

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <h3>Entre em contato:</h3>
                    <li>
                        <a href="https://www.linkedin.com/in/gabriel-godoy-45ba83207/" target="_blank">
                            <img src="/imagens/linkedin.png" alt="Linkedin"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/godoybiel97" target="_blank">
                            <img src="/imagens/github.png" alt="GitHub"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto: godoybiel97@gmail.com" target="_blank">
                            <img src="/imagens/mail4.png" alt="Gmail"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5511952773857" target="_blank">
                            <img src="/imagens/whatsapp.png" alt="Whatsapp"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="perfil">
                <img src="https://github.com/godoybiel97.png"/>
                <p>Desenvolvido por: 
                    <br/><strong>Gabriel Godoy - FrontEnd Junior</strong>
                </p>
            </section>
        </footer>
    )
}

export default Rodape