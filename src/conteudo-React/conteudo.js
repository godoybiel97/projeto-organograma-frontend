/*
CONCEITOS DE REACT
------------------
- É uma biblioteca para front-end:
    - Ele possui algumas características do JS, mas ele trabalha com a construção de componentes por meio de funções
    - Ele tem propriedades que se parecem com HTML, mas, na verdade, possuem o nome de JSX que, nada mais é, uma forma do React ler blocos de código e "transformar" em DOM
    - Geralmente segue comceitos de SPA (Single Page Application) que se baseia no dinamismo de uma página
    - Existe esse tema biblioteca x framework, justamente porque o React, assim como um biblioteca, aborda uma característica principal, diferente do framework 
    - Real DOM x DOM Virtual
    - Algumas importações não é padrão, ou seja, toda biblioteca externa será importada utilizando {Biblioteca}
    - O React é famoso por ser reativo, mas na verdade ele é uma biblioteca declarativa


NPM - NODE PACKAGE MANAGER
--------------------------
- NPX é um gerenciador de pacotes do Node:
    - É interessante ter conhecimento de Node, porém, nesse projeto, ele será utilizado como ferramente de suporte
    - npx create-react-app + nome do projeto é o comando mais conhecido e usado para a criação de um projeto React
    - npm é utilizado para comando locais, enquanto npx é para comandos remotos

- cd é o comando para acessar pastas

- npm start é o comando para iniciar a aplicação

- O projeto é redirecionado para o endereço padrão localhost 3000:
    - Após isso, é IMPORTANTE editar o arquivo na pasta src/App.js para que o carregamento da página seja automático


COMPONENTES
-----------
- Para melhor gerenciamento e disponibilidade de cógido, é recomendando que a organização de um projeto seja através de separação de componentes de acordo com o assunto tratado

- Os componentes sempre devem começar com letra maiúscula assim como as funções referentes ao componente:
    - Componentes funcionais é a forma mais simples de se criar componentes no React
    - Nesse caso, essas funções são exportadas por padrão:
        function Banner() {

        }
        export default Banner

    - Como boa prática e padrão, geralmente os componentes são criados em constantes:
        - const CampoTexto = () => {

        }
        export default CampoTexto

- Gerlamente as imagens são organizadas na pasta "public", na raíz do projeto

- O index.js é o arquivo principal responsável por startar a aplicação:
    - StrictMode é uma ferramenta de auxílio para mapear erros e e mostrar de forma amigável

- Em relação as importações de componentes, os arquivos .js podem possuir o nome "index", desde que estejam dentro de um componente:
    - import CampoTexto  from "./componentes/CampoTexto" evitando a repetição do nome do arquivo, caso ele seja nomeado igual a pasta

- Ao declarar um componente no App.js, por exemplo, é possível parrar uma parâmetro que obrigatoriamente deve ser decladrado na criação original do componente:
    - Esse conceito é conhecido como "props", ous seja, propriedades que podem ser acessadas através de parâmetros:
        - App.js :  <div>
                        <Banner/>
                        <CampoTexto label="Nome"/>
                        <CampoTexto label="Cargo"/>
                        <CampoTexto label="Imagem"/>
                    </div>
        - index.js: const CampoTexto = (props) => {
                        return (
                            <div className="campo-texto">
                                <label>{props.label}</label> //As propriedades sempre serão encapsuladas em {}
                                <input placeholder="Digite o seu nome"></input>
                            </div>
                        )
                    }

- Uma closure é um componente em bloco


JAVASCRIPT
----------
- key é uma propriedade que refere-se a uma chave única. Geralmente é utilizada em listas e em componentes mais complexos, justamente porque ela controla a ordem de renderização:
    - Em muitos casos será vista a utilização do index, mas é importante atentar-se a atualização das posições em casos de exclusão ou alteração de uma posição do array
    - map(), por sua vez, permite a utilização dos parâmetros "item" e "index"

- Data Binding é o relacionamento do input com o armazenamento de uma variável

- Em alguns casos, quando se tratar de conteúdos que não podem ser passados via props, pode se optar por utilizar children:
    - <Botao> Texto | Ícone | Imagem </Botao>:
        - Nesse caso existe um conteúdo e não uma propriedade, por isso seria utilizado props.children, para que o conteúdo completo fosse passado via props

- preventDefault() é um método que previne o comportamento padrão do navegador e impede o recarregamento da página após um evento

- required é uma propriedade HMLT5 que faz obrigatório o preenchimento de campos

- onChange é um método utilizado para execução de eventos, ou seja, ele captura mudanças:
    - Geralmente é utilizado em inputs:
        - <input value={valor} onChange={digitado} required="true" placeholder="Texto...">/input>

    - target referencia o elemento manipulado 
    - value é o valor do elemento:
        - const digitado = (event) => {
            valor = event.target.value
        }

    - Esse caso, especificamente, trata-se da mudança de estado de um input que, consequentemente, altera um componente:
        - O React possui uma característica muito específica para controlar essas mudanças
        - "use" está associado a um Rook, existem vários, mas o controlador de estado é o useState:
            - const [valor, setValor] = useState(""): o valor que eu preciso e o valor que irei alterar, retornando sempre um array com 2 valores (a variável e a função que irá altera-la)

- É preciso atentar ao uso de map em listas

- A otimização do código é primordial:
    - Trazer informações que serão compartilhadas em vários componentes para o renderizador principal, gerlamente o App.js
    - A utilização de props é frequente, mas podemos desestruturar um objeto para utilizar cada atributo e especificar o seu uso em cada componente:
        - const Colaborador = (props) => { //Utilizar const Colaborador = ({nome, cargo, imagem})
            return (
                <div className="colaborador">
                    <div className="cabecalho">
                        <img src={props.imagem} alt={props.nome}/> //Substituir por <img src={imagem} alt={nome}/>
                    </div>
                    <div className="rodape">
                        <h4>{props.nome}</h4>
                        <h5>{props.cargo}</h5>
                    </div>
                </div>
            )
        }

- Utilização de renderização condicional:
    - (props.colaboradores.length > 0) && retornar alguma coisa
    - (props.colaboradores.length > 0) ? retornar alguma coisa : retornar outra coisa

    */