import React from 'react';
import './App.css';

class Formulario extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            nome: null,
            idade: null,
            bairro: null
        };

        
    }

    mudarNome = (ev) => {
        this.setState({
            nome: ev.target.value,
         });
    }

    mudarIdade = (ev) => {
        this.setState ({
            idade: ev.target.value,
         });
         
    }

    mudarBairro = (ev) => {
        
        this.setState({
            bairro: ev.target.value,
          });
         
    }

 

    render(){
        return (
            <div className="App">

                <label>
                    Nome:
                </label>
                <input
                    onChange={this.mudarNome}
                    type="text"
                    className="botao"
                />
                <p>{this.state.nome}</p>

                <label>
                    Idade:
                </label>
                <input onChange={this.mudarIdade} 
                type="text" 
                className="botao" 
                />

                <p>{this.state.idade}</p>

                <label>
                    Bairro:
                </label>
                <input 
                onChange={this.mudarBairro} 
                type="text" 
                className="botao"  
                />

                <p>{this.state.bairro}</p>

                 <button onClick={this.botaoSend} className="botao">Enviar</button> 

            </div>
        )
    }
}

export default Formulario; 

