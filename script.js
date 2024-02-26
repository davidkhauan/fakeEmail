const enviarEmail = require ('./envia-email')

//Banco de dados
const bancoEmails = [
    { name: "Antônia da Silveira", email: "ANTONIASILVA1036@gmail.com", flag: true },
    { name: "Maicol Santos Rocha", email: "maicolsantos5567@gmail.com", flag: true },
    { name: "Giselle Freitas de Lima", email: "giselleFreitas0986@gmail.com", flag: false },
    { name: "Jefferson de Souza", email: "souzaJEFFERSON756@gmail.com", flag: false }
]

// console.log (bancoEmails)
// console.log (bancoEmails [0].name)

function verificarDia () {
    var semanaDias = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
        'Quinta-feira', 'Sexta-feira', 'Sábado'
    ]

    var dataAtual = new Date()
    var diaSemanaAtual = dataAtual.getDay()

    return semanaDias [diaSemanaAtual]
}

var diaSemanaAtual = verificarDia()

// console.log (diaSemanaAtual)

function montarEmail (nome, semanaDias) {
    var mensagem = `Olá ${nome},\n\n`

    switch (semanaDias) {
        case 'Domingo':
            mensagem += "Espero que esteja aproveitando o seu domingo!"
            break
        case 'Segunda-feira':
            mensagem += "Tenha uma ótima semana!"
            break
        case 'Terça-feira':
            mensagem += "Desejo a você um dia produtivo!"
            break
        case 'Quarta-feira':
            mensagem += "Metade da semana já passou. Continue firme!"
            break
        case 'Quinta-feira':
            mensagem += "Estamos quase lá! Continue persistindo!"
            break
        case 'Sexta-feira':
            mensagem += "Finalmente sexta-feira! Bom fim de semana!"
            break
        case 'Sábado':
            mensagem += "Aproveite o seu sábado ao máximo!"
            break
        default:
            mensagem += "Tenha um ótimo dia!"
    }

    return mensagem
}

var nome = bancoEmails.name
var corpoEmail = montarEmail (nome, diaSemanaAtual)

// console.log (corpoEmail)

function enviarEmail (bancoEmails) {
    bancoEmails.forEach (function (cliente) {
        if (cliente.flag) {
            corpoEmail = montarEmail (cliente.name, verificarDia())

            montarEmail()

            console.log (`E-mail enviado para ${cliente.email}:`)
            console.log (corpoEmail)
            console.log ("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+")
        } else {
            console.log (`O cliente ${cliente.name} não aceita receber comunicações de marketing`)
            console.log ("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+")
        }
    })
}

enviarEmail (bancoEmails)



console.log (enviarEmail("davidkhauan@gmail.com", "kjdk", "oijgohjki"))