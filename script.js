// Usuário informa seu nome ao entrar na page OK
// Enviar nome digitado com axios.post OK
// Aparecer 'fulano entrou no chat'
// Enviar mensagem (usar onclick)

let seuNome = prompt('Insira o seu nome: ');
const entrou = {name: `${seuNome}`};
console.log(seuNome);


const enviarParticipantes = axios.post('https://mock-api.driven.com.br/api/v4/uol/participants', entrou).then(participante).catch(erroParticipante);

function participante(participante){
    console.log('Participante enviado com sucesso')
}
function erroParticipante(erroParticipante){
    console.log('Ta dando erro');
    seuNome = prompt('Insira o seu nome: ');
}



function manterConexao(mozilla) {
    console.log('manter conexão enviado com sucesso');
    
}


function erroConexao(erroConectar){
    location.reload();
}

setInterval(() => {
    const enviarConexao = axios.post('https://mock-api.driven.com.br/api/v4/uol/status', entrou).then(manterConexao).catch(erroConexao);

    console.log('Solicitação de conexão de usuários');
}, 5000);


const pegarParticipantes = axios.get('https://mock-api.driven.com.br/api/v4/uol/participants');

const pegarMensagens = axios.get('https://mock-api.driven.com.br/api/v4/uol/messages').then(solicitarMensagens).catch(erroSolicitarMensagens);

function solicitarMensagens(adicionaMensagens){
    console.log('Mensagens Solicitadas com sucesso');

    if(solicitarMensagens){

        for(let i = 0; i<adicionaMensagens.length; i++){

            let mensagensNoChat = document.querySelector('.chat')
            
                chat.innerHTML += `
                <ul class="infoMensagens status">
                <p class="time">(09:38:22)</p>
                <span class="from">` `</span>
                <p class="text">entrou</p>
                </ul>
                `;
        }
    }
}
function erroSolicitarMensagens(){
    console.log('Erro na solicitação das msg');
}

function tratarErro(erro) {
    console.log(erro.data);
    
    while(erro.status === 400){
        seuNome = prompt('Já existe um usuário com esse nome, por favor escolha outro nome: ');
        entrou = {name: `${seuNome}`};
    }
}

function tratarSucesso(sucesso) {
    console.log(sucesso.data);
    
    buscarMensagens;
}

pegarParticipantes.then(tratarSucesso);
pegarParticipantes.catch(tratarErro);

function loopErro(erroLoop) {
    // console.log(erroLoop.data);
    
    while(erroLoop.status === 400){
        // console.log('Erro de Conexão');
    }
}

function loopConexao(sucessoLoop) {
    console.log('Sucesso manter conexão LOOP');

    const enviarConexao = axios.post('https://mock-api.driven.com.br/api/v4/uol/status', entrou);

    const chat = document.querySelector('.chat')
    
    if(loopConexao){

        for(let i = 0; i<sucessoLoop.length; i++){
            
                entrou.innerHTML += `
                <ul class="infoMensagens status">
                <p class="time">(09:38:22)</p>
                <span class="from">` `</span>
                <p class="text">entrou</p>
                </ul>
                `;
        }
    }

}

loopConexao;
// setInterval(loopConexao, 5000);

// enviarConexao.then(loopConexao);
// enviarConexao.catch(loopErro);

// enviarConexao.then(loopConexao);
// enviarConexao.catch(loopErro);

function buscarMensagens(text){
    console.log('Deu bom nas MSG')

    if(pegarMensagens){

        const pegarMensagens = axios.get('https://mock-api.driven.com.br/api/v4/uol/messages');

        const chat = document.querySelector('.chat')

        for(let i = 0; i<pegarMensagens.length; i++){
            
                chat.innerHTML += `
                <ul class="chat status">
                <p class="time">(09:38:22)</p>
                <span class="from">` `</span>
                <p class="text">entrou</p>
                </ul>
                `;
        }
    }

}
setInterval(buscarMensagens, 5000);

function erroMensagens(erroMsg){
    console.log(erroMsg.data);
    console.log('DEU RUIM NAS MSG')
}
pegarMensagens.then(buscarMensagens);
pegarMensagens.catch(erroMensagens);


function digitarMensagem(){
    const novaMensagem = document.querySelector('.escrevaAqui');
    escrevaAqui.innerHTML = '';
    novaMensagem.innerHTML = Input();
}
