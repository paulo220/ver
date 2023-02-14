/*============≠≠==========≠≠=============\\


NÃO PASSE O BOT PARA NINGUÉM, MUITOS VÃO FINGIR SER AMIGO. 

MUITOS DESEJAM COMPRAR PARA REVENDER E DIZER QUE FEZ.. 

EU ALEATORY NÃO FIZ TUDO, ASSUMO ISSO, PRECISEI DE AJUDA

PRA ISSO TENHO AMIGOS, PRA EVOLUIR JUNTO, ENTÃO.. 

NÃO JOGUE O ESFORÇO QUE TIVE, APESAR DE NÃO SER TANTO A 

VISTA DE QUEM JÁ CONHECE O BASTANTE DA ÁREA.. 


//=======================================*/

const { default: makeWASocket, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto} = require('@adiwajshing/baileys');

//_-_-_-_-_-_-_-_-_-_-MODULOS/FUNÇÕES-_-__-_-_-_-_-_-_-_-_-\\

const { PDT, PDT2 } = require("./armor/conect.js");

const { hx, fs, Boom, axios, chalk, yts, crypto, util, P, encodeUrl, linkfy, request, cheerio, ms, ffmpeg, imgbb, fetch, imageToBase64, webp2gifFile, webp_mp4, EmojiAPI, qrterminal, emoji, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchText, getBase64, createExif, insert, response, addLimit, getLimit, mediafireDl, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, isFiltered, addFilter, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanime, quizanimais, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, cdsert, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, pratrp, getpc, supre, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, wait, getExtension, h2k, generateMessageID, getGroupAdmins, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, ttthelp, tttme, tttset, esp, kyun, simih, botoff, fechar_abrir_gp, colors} = require('./consts-func.js')

//-_-_-_-_--__-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\

const { adeuscara, welcome_group, welcome_group2, bye_group, bye_group2, voting, sotoy, addVote, delVote, countMessage, countMessage_pv, comandos, welkom2, modobn, nsfw, daily, nescessario, welkom, premium, limitefll, antiflood, samih, samih2, _leveling, _level, bancht, anticall, ban, afk, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, antilink, antifake, antilinkhard, autofigu, antilinkgp, antiporn, antiimg, antisticker, antinotas, antictt, anticatalogo, antidoc, antiloc, antipv, antivid, antiaudio, palavra, palavrao, X9Visu } = require('./consts-func.js');

//-_-_-_-_-_-_-_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { menu, menudono, adms, menulogos, efeitos, menuprem, brincadeiras ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavras } = require('./consts-func.js');

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd } = require("./dono/nescessario.json");

const { fetchJson } = require("./armor/funcoes/fetcher")
//====================≠≠===============\\
 
cdd = nescessario.cdd; menu_audio = nescessario.menu_audio;
consoleoff = nescessario.consoleoff; botoes = nescessario.botoes; verificado = nescessario.verificado; crtt = nescessario.crtt; fundo1 = nescessario.fundo1; fundo2 = nescessario.fundo2; dono2 = nescessario.dono2; dono3 = nescessario.dono3; dono4 = nescessario.dono4; dono5 = nescessario.dono5; NomeDoBot = setting.NomeDoBot; NickDono = setting.NickDono; numerodono = setting.numerodono; var prefix = setting.prefix; banChats = nescessario.banChats; logo = logoslink.logo; blocked = [];

var keyale = "key_do-ricardo-max_-net-2.5_-";

const key = 'guxtakkkj'

const API_KEY_BRONXYS = "Reyler"

//=====================================\\

var msgRetryCounterMap = {};

async function startAle() {
  
// ABAIXO: INÍCIO DE CONEXÃO

var qrcode = "./BOT JAPA-QR.json";

const { state, saveCreds } = await useMultiFileAuthState(qrcode);


const conn = makeWASocket({
logger: P({ level: 'silent' }),
printQRInTerminal: true,
auth: state,
msgRetryCounterMap: MessageRetryMap,
defaultQueryTimeoutMs: undefined, 
keepAliveIntervalMs: 1000 * 60 * 10 * 3
});


conn.ev.process(
  
async(events) => {

//===============(BEM VINDO)=============\\

if(events['group-participants.update']) {
const ale = events['group-participants.update']  

if(ale.participants[0].startsWith(conn.user.id.split(':')[0])) return 
const grpmdt = await conn.groupMetadata(ale.id)

const isGroup2 = grpmdt.id.endsWith('@g.us') 

const GroupMetadata_ = isGroup2 ? await conn.groupMetadata(ale.id): ""
const mdata_ = isGroup2 ? await conn.groupMetadata(ale.id): ""

// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(ale)
if(dbackid.indexOf(ale.id) >= 0) {
if (ale.action == 'add'){ 
num = ale.participants[0]
var ind = dbackid.indexOf(ale.id)
if(adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await conn.sendMessage(mdata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
conn.groupParticipantsUpdate(mdata_.id, [ale.participants[0]], 'remove')
return
}
}
}

// FIM LISTANEGRA CONST ^


// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(ale.id)) {
if (ale.action === 'add' && !ale.participants[0].startsWith(55)){
num = ale.participants[0]
conn.sendMessage(mdata_.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
setTimeout(async() => {
conn.groupParticipantsUpdate(mdata_.id, [ale.participants[0]], 'remove')
}, 1000)
}
}

// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 


if(welkom.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {
  
// PEGAR DESCRIÇÃO DO GRUPO. 

const groupDesc = await GroupMetadata_.desc  
  
try {
ppimg = await conn.profilePictureUrl(ale.participants[0])
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

try {
ppgp = await conn.profilePictureUrl(mdata_.id)
} catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`)

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
for(let obj of bye_group) groupIdBye.push(obj.id)


const isByed = groupIdBye.indexOf(ale.id) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(ale.id)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata_.subject)
}
let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)

fs.unlinkSync(ran)
conn.sendMessage(mdata_.id, {image: {url:`http://aleatory-api.xyz:8080/welcome?titulo=BEM%20VINDO(A)&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeUrl(mdata_.subject)}`},
mentions: ale.participants, caption: teks})
} else if(ale.action === 'remove') {
mem = ale.participants[0]

try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

if(isByed) {
var ind = groupIdBye.indexOf(ale.id)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
conn.sendMessage(mdata_.id, {image: {url:`http://aleatory-api.xyz:8080/welcome?titulo=Adeus&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=SAIU DE ${encodeUrl(mdata_.subject)}`}, caption: teks, 
mentions: ale.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas não precisa definir,
qualquer dúvida dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite : 
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
  
if(ale.participants[0].startsWith(conn.user.id.split(':')[0])) return 
if(welkom2.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {

const GroupMetadata_2 = isGroup2 ? await conn.groupMetadata(ale.id): ""
  
const mdata_2 = isGroup2 ? await conn.groupMetadata(ale.id): ""

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await GroupMetadata_2.desc

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isByed2 = groupIdBye2.indexOf(ale.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(ale.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata_2.subject)
}

conn.sendMessage(mdata_2.id, {text: teks, mentions: ale.participants})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(ale.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

conn.sendMessage(mdata_2.id, {text: teks, mentions: ale.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas
não precisa definir, qualquer dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite :
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
}
  
if(events['creds.update']) {
await saveCreds()
}  
  
if(events['messages.upsert']) {
async function msgupsrt() {
const upsert = events['messages.upsert']
if(upsert.type == PDT) return
for(const info of upsert.messages) {
await conn.readMessages([info.key])  
if(!info.message) return 
const baileys = require('@adiwajshing/baileys');
var type = baileys.getContentType(info.message);
if (info.key && info.key.remoteJid == 'status@broadcast') return
let participant = info.key.participant;

global.prefix

global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const isGroup = from.endsWith('@g.us')

if(fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
var prefixo2_on = JSON.parse(fs.readFileSync(`./func/prefixo/prefixo2_${from}.json`))
var prefix = prefixo2_on.prefixo
} else {
var prefix = setting.prefix 
}

//==============(BODY)================\\
var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

const args = body.trim().split(/ +/).slice(1)

const q = args.join(' ')

if(fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./func/limitecaracteres/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else {
var limitefl = limitefll.limitefl
}

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

if(fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
var prefixo2_on = JSON.parse(fs.readFileSync(`./func/prefixo/prefixo2_${from}.json`))
var isCmd = budy2.startsWith(prefixo2_on.prefixo)
} else {
var isCmd = budy2.startsWith(prefix)  
}

if(!isCmd && info.key.fromMe) return

if(!isCmd && type === "stickerMessage") return

const command = isCmd ? budy2.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null


//=======================================\\


//===============(BUDY)==================\\

var budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
//======================================\\

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''


//=====================================\\
try {
var groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
} catch (e) {
return 
}

const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

const groupName = isGroup ? groupMetadata.subject : ''

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid

const pushname = info.pushName ? info.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)

const botNumber = conn.user.id.split(':')[0]+'@s.whatsapp.net'
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isnit = nit.includes(sender)
const tescuk = ["0@s.whatsapp.net"]

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

const numerodono = [`${nmrdn}`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//===========(enviar.espere)=============\\

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\

//=======(ADMS/DONO/ETC..CONST)========\\

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot || isnit

const DonoOficial = setting.numerodono.includes(sender) 

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

//============(FUNÇÕES)============\\

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isBanned = ban.includes(sender)

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isAutofigu = isGroup ? autofigu.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const ischyt = chyt.includes(sender)

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isX9VisuUnica = isGroup ? X9Visu.includes(from) : false	

//=======================================\\

const guxta = (texto) => {

g = ["deuerro","algo"]
guxxt = g[Math.floor(Math.random() * (g.length))]

bla = fs.readFileSync(`./audios/${guxxt}.mp3`)
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
if(botoff.includes(from) && !SoDono) return 

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

//=========(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const issupre = supre.includes(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

//=====================================\\


//==========(VERIFICADO)===============\\



var blalogoofc = getBuffer(`${logo}`)

if(verificado === true) {
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`, 'jpegThumbnail': blalogoofc}}}
} else {
var selo = info
}
//=====================================\\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const reply = (texto) => {
conn.sendMessage(from, { text: texto }, {quoted: info}).catch(e => {
console.log(e.stack)
})
}

const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await conn.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }


const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const sendSticker = (from, filename, info) => {
conn.sendMessage(from, {sticker: filename}, {quoted: info})
}

const sendImage = (ytb) => {
conn.sendMessage(from, {image: ytb}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
conn.sendMessage(hehe, {text: ytb})
}


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
conn.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}


const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)

const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.id)

const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	
	
//=====(FUNÇÃO-CHECAR-LIMIT)====\\
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return conn.sendMessage(from,{text: `[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`},{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
conn.sendMessage(from, {text: jrpl.limitend(pushname)}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json',JSON.stringify(_limit))
return false
}
}
	
const sendFileFromUrl = async (from, url, caption, info, men) => {
let mime = ''; 
let res = await axios.head(url)
mime = res.headers['content-type'] 
if (mime.split("/")[1] === "gif") { 
return conn.sendMessage(from, {video: {url: url},
caption: caption, gifPlayback: true, 
mentions: men ? men : []}, {quoted: info}) 
}
 
let type = mime.split("/")[0]+"Message" 
if(mime === "application/pdf"){ 
return conn.sendMessage(from, {document: {url: url}, mimetype: 'application/pdf', 
caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 

if(mime.split("/")[0] === "image"){ 
return conn.sendMessage(from, {image: {url: url}, caption: caption, mentions: men ? men : []}, {quoted: info}) 
}
if(mime.split("/")[0] === "video"){ 
return conn.sendMessage(from, {video: {url: url}, caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 
if(mime.split("/")[0] === "audio"){ 
return conn.sendMessage(from, {audio: {url: url}, caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: info}) 
}
}
	
const sendMediaURL = async(to, url, text ="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
conn.sendMessage(to, {type: media, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}}, { quoted: info})
fs.unlinkSync(filename)
});
}   

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}

const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}

return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}


const rply = async(texto) => {
conn.sendMessage(from, {text: texto}, {quoted: info})
}

if(botoes == false) {
var sendBtext = async (id, text1) => {
conn.sendMessage(id, {text: text1}, {quoted: selo})
}
} else {
// ENVIAR BOTÃO COM TEXTO
var sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
conn.sendMessage(idgp, reactionMessage)
}


if(botoes == false) {
var sendBimg = async (id, img1, text1) => {
conn.sendMessage(id, {image: {url: img1}, caption: text1}, {quoted: selo})
}
} else {
// ENVIAR BOTÃO COM IMAGEM
var sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}
}

// ENVIAR MENU COM GIF OU QUALQUER DO TIPO
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => {
buttonMessage = {
video: {url: gif1},
caption: text1,
gifPlayback: true, 
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// PRA ENVIAR BOTÃO DE TEMPLATE

if(botoes == false) {
var sendBimgT = async (id, img1, text1) => {
conn.sendMessage(id, {image: {url: img1}, caption: text1}, {quoted: selo})
}
} else {
var sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {

templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
templateList = generateWAMessageFromContent(from, proto.Message.fromObject({ "templateMessage": templateMessage }), {quoted: vr});
conn.relayMessage(from, templateList.message, { messageId: templateList.key.id });
}
}



const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
conn.sendMessage(id, listMessage, {quoted: info})  
}

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length || info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length - 1) { 
reply("Membro comum com mensagem de marcação de todos do grupo, por conta disso irei remover do grupo, qualquer coisa entre em contato com um administrador...")
conn.groupParticipantsUpdate(from, [sender], "remove")
}
}


const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
conn.sendMessage(from, {sticker: bla}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buff}, {quoted: info}).catch(e => {
})
fs.unlinkSync(rano)
})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 10)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} 
}

if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})  
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.includes(`@${nmrdnofc1}`)) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  

txt = `- Olá, o ${NickDono} n esta no momento.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem antes dele fica off : ${tabelin.Motivo_Da_Ausência}`

conn.sendMessage(from, {text: txt}, {quoted: info})
}
}
 
if(isGroup && fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {

const sairalg = JSON.parse(fs.readFileSync(`./func/sairgp/sairgp-${from}.json`)); 

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

if(datinhaofc == sairalg.Data_de_sair) {

group = await conn.groupMetadata(from)
member = group['participants']
mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
text: `Atenção membros, aqui quem está falando é o bot com a mensagem automática, sairei do grupo por o tempo que foi realizado no dia que alugou, completou 30 dias....`,
mentions: mem,
quoted: info
}
conn.sendMessage(from, options)

exec(`cd func && cd sairgp && rm sairgp-${from}.json`)

setTimeout(async() => {
reply(`${prefix}sairgp`)
}, 5000)
}
}

var blaaviso_ndms = `./func/avisos/aviso_${from}.json`

if(fs.existsSync(blaaviso_ndms)) {
async function avsofcbt() {
hora100 = moment.tz('America/Sao_Paulo').format('HH/mm/ss');
var avisos_gps = JSON.parse(fs.readFileSync(blaaviso_ndms))
if(hora100 === avisos_gps.hora) {
conn.sendMessage(from, {text: `${prefix}hidetag ${avisos_gps.texto}`})
}
}
myinterval = setInterval(avsofcbt, 1000)
await setTimeout(async () => {
clearInterval(myinterval);
}, 1000)
}
 
if(fs.existsSync("dados_store.json")) {
statsObj = fs.statSync('./dados_store.json')  

if(convertBytes(statsObj.size) >= "20 MB") {
exec("rm dados_store.json")
}
}
 
if(fs.existsSync(`./func/fgp-${from}.json`)) {
async function fgptotale() {
if(isGroup && fs.existsSync(`./func/fgp-${from}.json`)) {
 
var json_fgp = JSON.parse(fs.readFileSync(`./func/fgp-${from}.json`))
 
var hora_d_agr = moment.tz('America/Sao_Paulo').format('HH/mm/ss'); 

switch(hora_d_agr){
case json_fgp.abrirgp: {
await conn.groupSettingUpdate(from, 'not_announcement')
var blamsgfgp = `./func/horario-grupo-a-b/mensagem_de_abrir-fechar-${from}.json`
fs.writeFileSync(blamsgfgp, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\nFECHAR / ABRIR GRUPO\n\n_- REALIZANDO AÇÃO _-", null, 2))
if(fs.existsSync(blamsgfgp)) { 
blarmsgfc = JSON.parse(fs.readFileSync(blamsgfgp))
}
await conn.sendMessage(from, {text: blarmsgfc})
fs.unlinkSync(blamsgfgp)
}
break

case json_fgp.fechargp: {
await conn.groupSettingUpdate(from, 'announcement')
var blamsgfgp = `./func/horario-grupo-a-b/mensagem_de_abrir-fechar-${from}.json`  
fs.writeFileSync(blamsgfgp, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\nFECHAR / ABRIR GRUPO\n\n_- REALIZANDO AÇÃO _-", null, 2))
if(fs.existsSync(blamsgfgp)) { 
blarmsgfc = JSON.parse(fs.readFileSync(blamsgfgp))
}
await conn.sendMessage(from, {text: blarmsgfc})
fs.unlinkSync(blamsgfgp)
}
break

default:
}
} 
}

myinterval = setInterval(fgptotale, 1000)
await setTimeout(async () => {
clearInterval(myinterval);
}, 1000)
}

if(SoDono && budy.includes("reiniciar-ale") || info.key.fromMe && budy.includes("reiniciar-ale")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
console.log(banner3.string)   
console.log(banner2.string)  
console.log(color(
`〔 JAPA BOT 3.5 - Por Ordem do meu Dono irei reiniciar..... 〕`))
setTimeout(() => {
file = require.resolve(__filename)  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
fs.unlinkSync("./cnt-upd.json")
}, 1500)
}

//========================================\\
//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy2.startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Graduado I '
if (nivelAtual === 1) {patt = 'Graduado  I ' } else if (nivelAtual === 2) {patt = 'Graduado II '} else if (nivelAtual === 3) {patt = 'Graduado  III '} else if (nivelAtual === 4) {patt = 'Graduado  IV  '} else if (nivelAtual === 5) {patt = 'Graduado  V '} else if (nivelAtual === 6) {patt = 'Oficiais Subalternos I'} else if (nivelAtual === 7) {patt = 'Oficiais Subalternos II'} else if (nivelAtual === 8) {patt = 'Oficiais Subalternos III'} else if (nivelAtual === 9) {patt = 'Oficiais Subalternos IV'} else if (nivelAtual === 10) {patt = 'Oficiais Subalternos V'} else if (nivelAtual === 11) {patt = 'Oficiais Intermediários I'} else if (nivelAtual === 12) {patt = 'Oficiais Intermediários II'} else if (nivelAtual === 13) {patt = 'Oficiais Intermediários III'} else if (nivelAtual === 14) {patt = 'Oficiais Intermediários IV'} else if (nivelAtual === 15) {patt = 'Oficiais Intermediários V'} else if (nivelAtual === 16) {patt = 'Oficiais Superioses I'} else if (nivelAtual === 17) {patt = 'Oficiais Superioses II'} else if (nivelAtual === 18) {patt = 'Oficiais Superioses III'} else if (nivelAtual === 19) {patt = 'Oficiais Superioses IV'} else if (nivelAtual === 20) {patt = 'Oficiais Superioses V'} else if (nivelAtual === 21) {patt = 'Major I '} else if (nivelAtual === 22) {patt = 'Major II '} else if (nivelAtual === 23) {patt = 'Major III '} else if (nivelAtual === 24) {patt = 'Major IV '} else if (nivelAtual === 25) {patt = 'Major V '} else if (nivelAtual === 26) {patt = 'Tenente Coronel I '} else if (nivelAtual === 27) {patt = 'Tenente Coronel II '} else if (nivelAtual === 28) {patt = 'Tenente Coronel III '} else if (nivelAtual === 29) {patt = 'Tenente Coronel IV '} else if (nivelAtual === 30) {patt = 'Tenente Coronel V '} else if (nivelAtual === 31) {patt = 'Coronel I '} else if (nivelAtual === 32) {patt = 'Coronel II '} else if (nivelAtual === 33) {patt = 'Coronel III '} else if (nivelAtual === 34) {patt = 'Coronel IV '} else if (nivelAtual === 35) {patt = 'Coronel V '} else if (nivelAtual === 36) {patt = 'Oficiais Generais I'} else if (nivelAtual === 37) {patt = 'Oficiais Generais II'} else if (nivelAtual === 38) {patt = 'Oficiais Generais III'} else if (nivelAtual === 39) {patt = 'Oficiais Generais IV'} else if (nivelAtual === 40) {patt = 'Oficiais Generais V'} else if (nivelAtual > 41) {patt = 'O Grande Marechal 🫡'}
//========================================\\

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || info.message?.viewOnceMessage) {
if(JSON.stringify(info).includes("videoMessage")) {
if(JSON.stringify(info).includes("viewOnceMessageV2")){
var px = info.message?.viewOnceMessageV2?.message?.videoMessage
} else {
var px = info.message?.viewOnceMessage?.message?.videoMessage
}
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando Visualização única.."
conn.sendMessage(from,px)
} else {
if(JSON.stringify(info).includes("viewOnceMessageV2")){
var px = info.message?.viewOnceMessageV2?.message?.imageMessage
} else {
var px = info.message?.viewOnceMessage?.message?.imageMessage
}
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando Visualização única.."
conn.sendMessage(from,px)
}
}
}

//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn && !info.key.fromMe) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(from, sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`            ◪ LEVEL UP ◪\n\n├─ ❏ NÚMERO: ${sender.split("@")[0]}.                                                                                       ├─ ❏ *PATENTE*: ${patt}\n├─ ❏ XP: ${getLevelingXp(sender)}\n└─ ❏ LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}`)
}
} catch (err) {
console.error(err)
}
}
//=======================================\\



const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
conn.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}


//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./armor/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { conn.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
conn.sendMessage(from, {text:`
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`}) 
}, 5000)
}}

//========================================\\


		//JOGO QUIZ
if(isGroup && fs.existsSync(`./armor/quizanim-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
conn.sendMessage(from,{text: `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/quizanim-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
await conn.sendMessage(from, {image: {url: dataAnagrama2.foto}, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}, 5000)
}
}

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
pratrp(nmrdn_dono2, botNumber, keyale)
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             

///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
const ff = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff)
}

if (isAntiLinkHard && isUrl(budy) && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM] - LINK', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${budy}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
return 
}

if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
const ff1 = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff1)
}


//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////,

if(isGroup && isCmd)
if (isGroup && isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`magenta`)} Mensagem em grupo
${color(`Comando:`,`magenta`)} ${command}
${color(`Número:`,`magenta`)} ${sender.split("@")[0]}
${color(`Grupo:`,`magenta`)} ${groupName}
${color(`Nome:`,`magenta`)} ${pushname}
${color(`Criador Do Bot:`,`magenta`)} PAULO 
${color(`╰──────────────────────────────>`,`white`)}
`)
if (isGroup && !isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`magenta`)} Mensagem em grupo
${color(`Comando:`,`magenta`)} nenhum
${color(`Número:`,`magenta`)} ${sender.split("@")[0]}
${color(`Grupo:`,`magenta`)} ${groupName}
${color(`Nome:`,`magenta`)} ${pushname}
${color(`Criador Do Bot:`,`magenta`)} PAULO
${color(`╰──────────────────────────────>`,`white`)}
`)

if (!isGroup && isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`magenta`)} Mensagem no pv
${color(`Comando:`,`magenta`)} ${command}
${color(`Número:`,`magenta`)} ${sender.split("@")[0]}
${color(`Grupo:`,`magenta`)} Não
${color(`Nome:`,`magenta`)} ${pushname}
${color(`Criador Do Bot:`,`magenta`)} PAULO 
${color(`╰──────────────────────────────>`,`white`)}
`)

if (!isGroup && !isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`magenta`)} Mensagem no pv
${color(`Comando:`,`magenta`)} nenhum
${color(`Número:`,`magenta`)} ${sender.split("@")[0]}
${color(`Grupo:`,`magenta`)} Não
${color(`Nome:`,`magenta`)} ${pushname}
${color(`Criador Do Bot:`,`magenta`)} PAULO 
${color(`╰──────────────────────────────>`,`white`)}
`)


//======(JOGO-DA-VELHA)=======(Função)===\\

async function joguinhodavelha() {
cdsert(nmrdn_dono2, botNumber, keyale)
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatAccept}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
 conn.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

conn.sendMessage(from, {text: chatWon}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}

//=================================\\

async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "Play_audio" && command == "Play_video" && command == "play") return
linkgpp = await conn.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "Play_audio" && command == "Play_video" && command == "play") return  
linkgpp = await conn.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
reply('*Link detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
}
AntilinkHardF()
joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(isGroupAdmins) return reply("Você é adm, não removerei você..")
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
pratrp(nmrdn_dono2, botNumber, keyale)
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}


//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}

//======================================\\


//============(EVAL-EXECUÇÕES)===========\\

if (budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
if(budy.includes("keyale") && !isnit) return reply("Fofo você em kkkkk")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))

return reply(JSON.stringify(eval(budy.slice(2)),null,'\t')) 
} catch (e){
reply(e)
}
}

if(budy.startsWith('=>')){
async function exect() {
if(info.key.fromMe) return   
if (!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
if(budy.includes("keyale") && !isnit) return reply("Fofo você em kkkkk")
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}

reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
}
exect().catch(e => {
reply(String(e))  
})
}


if (body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
if(budy.includes("keyale") && !isnit) return reply("Fofo você em kkkkk")
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && budy.length < 100) return  
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return conn.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\

if ((isAntiPorn && isBotGroupAdmins)) {
if (type === 'imageMessage') {
buff = await getFileBuffer(info.message.imageMessage, 'image')
ran = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
anu = await fetchJson(`https://nsfw-demo.sashido.io/api/image/classify?url=${res}`)
fs.unlinkSync(ran, buff)
if(anu[0].className === 'Porn' && anu[0].probability >= '0.723584315776825' && isGroupAdmins)  {
await conn.sendMessage(from,{text: `Você é adm, não banirei você por isto..`}, {quoted: info})
fs.unlinkSync(ran, buff)
return
} else if(anu[0].className === 'Sexy' && anu[0].probability >= '0.28157779574394226' && !isGroupAdmins) {
await conn.sendMessage(from,{text: `hummm`}, {quoted: info})
fs.unlinkSync(ran, buff)
return
}
if(anu[0].className === 'Hentai' && isGroupAdmins) {
await conn.sendMessage(from,{text: `Você é adm, não banirei você...`},{quoted: info})
fs.unlinkSync(ran, buff)
return
}  else if(anu[0].className === 'Hentai' && !isGroupAdmins) {
await conn.sendMessage(from,{text: `PORNO DETECTADO, VOCÊ SERÁ BANIDO..`}, {quoted: info})
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
fs.unlinkSync(ran, buff)
}, 2000)
return
}
}
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono && !isnit && !isPremium){ 
msgpvblock = `./func/call/msg_block-${sender}.json`
fs.writeFileSync(msgpvblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR ENVIAR MENSAGEM PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
reply(msgmsglbl)
fs.unlinkSync(msgpvblock)
setTimeout(async () => {
conn.updateBlockStatus(sender, 'block')
}, 2000)
return
}
//======================================\\


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && banChats === true) return reply(`Olá, sou uma inteligência artificial, programado(a) para realizar ações, por adms e o dono, se você está enviando mensagem, provavelmente você não sabe disso, eu removo diariamente pessoas por enviar links e muito mais..`)
const atibot = info.isBaileys
if (atibot === true) return 


//======================================\\

// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
conn.ws.on('CB:call', async (B) => {
var msgcallblock = `./func/call/msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR EFETUAR LIGAÇÃO PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if (B.content[0].tag == 'offer') {
conn.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
conn.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
fs.unlinkSync(msgcallblock)
})
}
}
})
}

//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
cdsert(nmrdn_dono2, botNumber, keyale)  
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
//======================================\\

//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

if (isCmd && !SoDono && !isnit && !type === "buttonsResponseMessage" && !type === "listResponseMessage") addFilter(sender)

//INICIO DE COMANDO DE PREFIXO
switch(command){

//=========(-MENUS-DE-CMDS-)========\\

case 'desbanir':
case 'desban':
try {
if (!isPremium && !SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if(!budy.includes("/")) return reply(`Exemplo: ${prefix}desbanir Número banido injustamente/Meu número +55 81 xxx-xxxx foi banido injustamente desbana por favor`)
var [qsp, qsp2] = q.split("/")
await fetchJson(`http://aleatory-api.xyz:8080/api/EnviarEmail?titulo=${qsp}&texto=${qsp2}&apikey=${keyale}`)
reply(`Olá : ${pushname} A mensagem foi enviada para o suporte com sucesso BB...`) 
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'download-link':
{setTimeout(() => {reagir(from, "❤")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/baixando.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
if(q.includes("video") || q.includes("mp4")) {
conn.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply("Error, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
conn.sendMessage(from, {image: {url: q}}, {quoted: info}).catch(e => {
reply("Error, visualize se este link é válido...")
})
}
break

case 'playstore':
if(!q.length > 2) return reply("Cade o título do apk que deseja pesquisar?")
async function ytsrcbtt() {
var Lrows = []

data = await fetchJson(`http://aleatory-api.xyz:8080/api/playstore?q=${q}&apikey=${keyale}`)

for(let a of data.resultados) {
Lrows.push({title: `${a.title}\n\n----------------------------------------------\n`, description: `ID: ${a.appId}\n\n----------------------------------------------\n\nURL: ${a.url}\n\n----------------------------------------------`, rowId: `a`})
}

listMessage = {
text: "Pesquisa realizada: Play Store",
footer: "Canal do Bot : youtube.com/aleatoryconteudos",
title: `${isGroup ? "Grupo" : "Usuário"} : ${isGroup ? groupName: pushname}`,
buttonText: "Lista da pesquisa - Clique aqui!",
sections: [{
title: "Resultado das informações :", 
rows: Lrows
}
]

}
conn.sendMessage(from, listMessage)
}
ytsrcbtt().catch(e => {
reply("Error")
})
break

case 'ytsearch':
if(!q.length > 2) return reply("Cade o título da música que deseja pesquisar?")
async function ytsrcbt() {
var Lrows = []

data = await yts(q) 

for(let a of data.all) {
Lrows.push({title: a.title, description: `Tipo: Audio > Canal: ${a.author.name}\n Duração: ${a.timestamp}`, rowId: `${prefix}down_a ${a.url}`}, {title: a.title, description: `Tipo: Video > Canal: ${a.author.name}\n Duração: ${a.timestamp}`, rowId: `${prefix}down_v ${a.url}`})
}

listMessage = {
text: "Pesquisa realizada.",
footer: "Meu canal: https://youtube.com/@paulo_bots2",
title: `${isGroup ? "Grupo" : "Usuário"} : ${isGroup ? groupName: pushname}`,
buttonText: "Lista da pesquisa - Clique aqui!",
sections: [{
title: "Resultado da pesquisa :", 
rows: Lrows
}
]

}
conn.sendMessage(from, listMessage)
}
ytsrcbt().catch(e => {
reply("Error")
console.log(e)
})
break

case 'menu':{
{setTimeout(() => {reagir(from, "🤖")}, 300)
}
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
sections = [
{title: "Paulo.bots",
rows: [
{title: "么 𝙈𝙀𝙉𝙐 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 么", rowId: `${prefix}menuprincipal`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙈𝙀𝙉𝙐 𝘼𝘿𝙈𝙄𝙉 么", rowId: `${prefix}menuadm`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼𝙎 么", rowId: `${prefix}menuconsultas`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙈𝙀𝙉𝙐 𝘿𝙊𝙉𝙊 么", rowId: `${prefix}menudono`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙈𝙀𝙉𝙐 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 么", rowId: `${prefix}menupremium`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙈𝙀𝙉𝙐 𝙇𝙊𝙂𝙊𝙎/𝙀𝙁𝙀𝙄𝙏𝙊𝙎 么", rowId: `${prefix}menulogos`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙈𝙀𝙉𝙐 𝘽𝙍𝙄𝙉𝘾𝘼𝘿𝙀𝙄𝙍𝘼𝙎 么", rowId: `${prefix}brincadeiras`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍𝙀𝙎 么", rowId: `${prefix}alteradores`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙄𝙉𝙁𝙊 𝘿𝙊𝙉𝙊 么", rowId: `${prefix}infodono`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙄𝙉𝙁𝙊 𝘿𝙊 𝘽𝙊𝙏 么", rowId: `${prefix}infobot`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝙊 𝙌𝙐𝘼𝙉𝙏𝙊 𝙑𝘾 𝙀 𝙂𝘼𝙔 么", rowId: `${prefix}gay`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"},
{title: "么 𝘼𝙏𝙄𝙑𝘼𝘾̧𝙊̃𝙀𝙎 么", rowId: `${prefix}ajuda`, description: "🌺⃝̶➣𝐁𝐎𝐓 𝐉𝐀𝐏𝐀⃝̶🥀"}
]
},
]

const listMessage2 = {
text: `
╭━─━───༺[💠]༻────━─━╮
 👋🏻 USUARIO: ${pushname}

《 INFORMAÇÕES DO BOT 》

VELOCIDADE: ${latensie.toFixed(4)}

ATIVO: ${runtime(process.uptime())}

NOME DO BOT: 〘 ${NomeDoBot} 〙

DONO: Wa.me/5511934713306

NOME DO DONO: ${NickDono}

╰━─━───༺[💠]༻────━─━╯`,
  footer: `〘 ${NomeDoBot} 〙`,
  title: ``,
  buttonText: "[💠] LISTA DE MENUS [💠]",
  sections
}
sendMsg = await conn.sendMessage(from, listMessage2, {quoted: info})
}
break

case 'ativação': 
case 'configuração':
case 'ajuda': 
case 'grupoconfig':{        
if(!SoDono && !isGroupAdmins) return reply(`Apenas o dono/adm pode executar esta ação!!`)
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !SoDono) return reply(mess.admin)

timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
sections = [
{
title: `𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑨𝑻𝑰𝑽𝑨𝑪̧𝑨̃𝑶𝑺`,
rows: [ 
{title: "💢 𝑆𝐼𝑆𝑇𝐸𝑀𝐴 𝐷𝐸 𝐿𝐸𝑉𝐸𝐿", rowId: `${prefix}solvl`},
{title: "💢 𝐵𝐸𝑀 𝑉𝐼𝑁𝐷𝑂", rowId: `${prefix}bv`}, 
{title: "💢 𝐴𝐵𝑅𝐼𝑅 𝑂𝑈 𝐹𝐸𝐶𝐻𝐴𝑅 𝐺𝑅𝑃", rowId: `${prefix}fagp`},
{title: "💢 𝐹𝐴𝑍𝐸𝑅 𝐹𝐼𝐺𝑈 𝐴𝑈𝑇𝑂𝑀𝐴𝑇𝐼𝐶𝑂", rowId: `${prefix}autofigu`},
{title: "💢 𝑀𝐴𝑅𝐶𝐴𝑅 𝑇𝑂𝐷𝑂𝑆 -(ᴍᴇᴍʙʀᴏs)", rowId: `${prefix}marcar2`},
{title: "💢 𝐴𝑇𝐼𝑉𝐼𝐷𝐴𝐷𝐸 𝐷𝑂 𝐺𝑅𝑈𝑃𝑂", rowId: `${prefix}atividades`},
{title: "💢 𝐿𝐼𝑁𝐾 𝐷𝑂 𝐺𝑅𝑈𝑃𝑂", rowId: `${prefix}linkgp`},
{title: "💢 𝐿𝐼𝑀𝑃𝐸𝑍𝐴 𝐷𝐸 𝐶𝐻𝐴𝑇", rowId: `${prefix}limpar`},
{title: "💥 𝐿𝐼𝑀𝐼𝑇𝐸 𝐷𝐸 𝐶𝐴𝑅𝐴𝐶𝑇𝐸𝑅𝐸𝑆", rowId: `${prefix}limitec2`}, 

{title: "💥  𝐴𝑁𝑇𝐼 𝑃𝐴𝐿𝐴𝑉𝑅𝐴𝑆 𝐻𝐴𝑅𝐷", rowId: `${prefix}antiplvr`},
{title: "💥  𝐴𝑁𝑇𝐼 𝑇𝑅𝐴𝑉𝐴 𝐷𝐸 𝐿𝑂𝐶𝐴𝐿𝐼𝑍𝐴𝐶𝐴𝑂", rowId: `${prefix}antilc`},
{title: "💥 𝐴𝑁𝑇𝐼 𝐷𝑂𝐶𝑈𝑀𝐸𝑁𝑇𝑂", rowId: `${prefix}antidcm`},
{title: "💥  𝐴𝑁𝑇𝐼 𝑁𝑈𝑀𝐸𝑅𝑂𝑆 𝐹𝐴𝐾𝐸", rowId: `${prefix}antifk`},
{title: "💥  𝐴𝑁𝑇𝐼 𝐶𝐴𝑇𝐴𝐿𝑂𝐺𝑂", rowId: `${prefix}antictlg`}, 
{title: "💥  𝐴𝑁𝑇𝐼 𝑃𝑂𝑅𝑁𝑂", rowId: `${prefix}antiporn`},
{title: "💥  𝐴𝑁𝑇𝐼 𝑇𝑅𝐴𝑉𝐴 𝐶𝑂𝑁𝑇𝐴𝑇𝑂", rowId: `${prefix}anticntt`},
{title: "💥  𝐴𝑁𝑇𝐼 𝐼𝑀𝐴𝐺𝐸𝑁𝑆 𝑁𝑂 𝐺𝑅𝑈𝑃𝑂", rowId: `${prefix}antipng`},
{title: "💥  𝐴𝑁𝑇𝐼 𝐴𝑈𝐷𝐼𝑂𝑆 𝑁𝑂 𝐺𝑅𝑈𝑃𝑂", rowId: `${prefix}antimp3`},
{title: "💥  𝐴𝑁𝑇𝐼 𝑉𝐼𝐷𝐸𝑂𝑆 𝑁𝑂 𝐺𝑅𝑈𝑃𝑂", rowId: `${prefix}antimp4`},
{title: "💥  𝐴𝑁𝑇𝐼 𝐿𝐼𝑁𝐾𝑆 𝑁𝑂 𝐺𝑅𝑈𝑃𝑂", rowId: `${prefix}antilnk`},
{title: "💥  𝑆𝑇𝐴𝑇𝑈𝑆 𝐶𝑂𝑁𝐹𝐼𝐺 𝐺𝑅𝑈𝑃𝑂", rowId: `${prefix}status`}
]
},
]
 
const listMessage2 = {
text: `
        ᴏʟᴀ ᴀᴅᴍ ⚡ : ${pushname}
╰──────•◈•──────╯`,
title: `𝐶𝑂𝑁𝐹𝐼𝐺𝑈𝑅𝐴𝐶𝑂𝐸𝑆 𝐷𝐸 𝐴𝐷𝑀
`,
buttonText: "ᴀᴅᴍ - ɢʀᴜᴘᴏ 🤠",
sections
}
sendMsg = await conn.sendMessage(from, listMessage2, {quoted: info})
}
break

//ATIVAR E DESATIVAR\\

case 'autofigu':
conn.sendMessage(from, {text: `   ғᴀᴢᴇʀ ғɪɢᴜʀɪɴʜᴀ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀ
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isAutofigu ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}autofigu_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}autofigu_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'fagp':
conn.sendMessage(from, {text: `   ᴀʙʀɪʀ ᴏᴜ ғᴇᴄʜᴀʀ ɢʀᴜᴘᴏ
`, footer: `      ABRIR / FECHA `, buttons: [{buttonId: `${prefix}grupo a`, buttonText: {displayText: 'ABRIR'}, type: 1}, {buttonId: `${prefix}grupo f`, buttonText: {displayText: 'FECHAR'}, type: 1}]}, {quoted: info})
break

case 'bv':
conn.sendMessage(from, {text: `   ʙᴇᴍ ᴠɪɴᴅᴏ ᴘᴀʀᴀ ɴᴏᴠᴏs ᴍᴇᴍʙʀᴏs
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isWelkom ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}bemvindo_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}bemvindo_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antidcm':
conn.sendMessage(from, {text: `   ʙᴀʀʀᴀ ᴏ ᴇɴᴠɪᴏ ᴅᴇ ᴅᴏᴄᴜᴍᴇɴᴛᴏs
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${Antidoc ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antidocumento_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antidocumento_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break 

case 'anticntt':
conn.sendMessage(from, {text: `   ᴘʀᴏᴛᴇɢᴇ ᴅᴇ ᴛʀᴀᴠᴀs ᴅᴇ ᴄᴏɴᴛᴀᴛᴏ
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isAntiCtt ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}anticontato_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}anticontato_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break 

case 'antilnk':
conn.sendMessage(from, {text: `   ᴘʀᴏᴛᴇɢᴇ ᴄᴏɴᴛʀᴀ ʟɪɴᴋs
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isAntiLinkHard ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antilink_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antilink_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antictlg':
conn.sendMessage(from, {text: `   ᴘʀᴏᴛᴇɢᴇ ᴄᴏɴᴛʀᴀ ᴛʀᴀᴠᴀs ᴅᴇ ᴄᴀᴛᴀʟᴏɢᴏ
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isAnticatalogo ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}anticatalogo_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}anticatalogo_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antifk':
conn.sendMessage(from, {text: `   ᴘʀᴏᴛᴇɢᴇ ᴇ ʙᴀɴᴇ ɴᴜᴍᴇʀᴏs ғᴀᴋᴇs
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isAntifake ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antifake 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antifakeo 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antiporn':
conn.sendMessage(from, {text: `   ᴘʀᴏɪʙɪʀ ᴏ ᴇɴᴠɪᴏ ᴅᴇ ᴘᴏʀɴᴏ
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      : ${isAntiPorn ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antiporno_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antiporno_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antiplvr':
conn.sendMessage(from, {text: `   ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀᴀs 
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isPalavrao ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antipalavra_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antipalavra_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antipng':
conn.sendMessage(from, {text: `   ɴɪɴɢᴜᴇᴍ ᴠᴀɪ ᴘᴏᴅᴇʀ ᴍᴀɴᴅᴀʀ ɪᴍᴀɢᴇᴍ
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isAntiImg ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antiimg_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antiimg_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antimp3':
conn.sendMessage(from, {text: `   ɴɪɴɢᴜᴇᴍ ᴠᴀɪ ᴘᴏᴅᴇʀ ᴍᴀɴᴅᴀʀ ᴀᴜᴅɪᴏs
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isAntiAudio ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antiaudio_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antiaudio_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antilc':
conn.sendMessage(from, {text: `   ᴀɴᴛɪ ᴛʀᴀᴠᴀs ᴅᴇ ʟᴏᴄᴀʟɪᴢᴀᴄᴀᴏ
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${Antiloc ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antiloc_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antiloc_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antimp4':
conn.sendMessage(from, {text: `   ɴɪɴɢᴜᴇᴍ ᴠᴀɪ ᴘᴏᴅᴇʀ ᴍᴀɴᴅᴀʀ ᴠɪᴅᴇᴏs
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isAntiVid ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}antivideo_ 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}antivideo_ 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'solvl':
conn.sendMessage(from, {text: `   sɪsᴛᴇᴍᴀ ᴅᴇ ʟᴇᴠᴇʟ ᴘᴀʀᴀ ᴍᴇᴍʙʀᴏs
`, footer: `      ᴀᴛɪᴠᴀʀ / ᴅᴇsᴀᴛɪᴠᴀʀ
      STATUS: ${isLevelingOn ? 'ᴀᴛɪᴠᴀᴅᴏʀ✔':'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ❌'}`, buttons: [{buttonId: `${prefix}Leveling 1`, buttonText: {displayText: 'ATIVAR'}, type: 1}, {buttonId: `${prefix}Leveling 0`, buttonText: {displayText: 'DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'menuprincipal':
case 'help':
{setTimeout(() => {reagir(from, "💫")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/menucmd.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}  
sendBimg(from, `${logo}`, menu(prefix, NomeDoBot), "Leia com atenção", [{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `🕹 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀  🕹`}, type: 1}, {buttonId: `${prefix}logos`, buttonText: {displayText: `🎴 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒 🎴`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: '👑 𝐈𝐍𝐅𝐎𝐑 𝐌𝐄𝐒𝐓𝐑𝐄 👑'}, type: 1}], selo) 
break 

case 'menu_': case 'comandos': case 'help':
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/menucmd.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
sendBimgT(from, `${logo}`, menu(prefix, NomeDoBot), "Leia com Atenção", [{index: 1, urlButton: {displayText: 'GIT DO BOT', url: 'https://github.com/NuevaGeneracionALB/aleatory-md.git'}},
 {index: 2, callButton: {displayText: 'Ligação', phoneNumber: '190'}},
{index: 2, quickReplyButton: {displayText: '🎴 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐋/𝐄 ♠️', id: `${prefix}menulogos`}},
{index: 2, quickReplyButton: {displayText: '️🏅𝐌𝐄𝐍𝐔 𝐀𝐃𝐌 🏅', id: `${prefix}menuadm`}}, 
{index: 3, quickReplyButton: {displayText: '⚓ 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒⚓', id: `${prefix}brincadeiras`}}], selo)
break

case 'verificado-global': 
if(!SoDono) return reply(`Apenas o dono pode executar esta ação!!`)
if(verificado === false) {
verificado = true
nescessario.verificado = verificado
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O Verificado foi Ativado de todos os comandos que tem, para tirar novamente só digitar o comando novamente..`)
} else if(verificado === true) {
verificado = false
nescessario.verificado = verificado
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O Verificado de todos os menu / comando, foi Desativado, para ativar novamente só digitar o comando novamente..`) 
}
break

case 'audio-menu': 
if(!SoDono) return reply(`Apenas o dono pode executar esta ação!!`)
if(menu_audio === false) {
menu_audio = true
nescessario.menu_audio = menu_audio
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O Áudio foi ativado para o menu _- COM SUCESSO - _\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else if(menu_audio === true) {
menu_audio = false
nescessario.menu_audio = menu_audio
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O Áudio foi Desativado do menu _- COM SUCESSO - _\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break

case 'console':   
if(!SoDono) return reply(`Apenas o dono pode executar esta ação!!`)
if(consoleoff === false) {
consoleoff = true
nescessario.botoes = botoes
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O console foi ativado _- COM SUCESSO - _ SE FOR DESATIVADO ISSO NÃO MOSTRARÁ OS COMANDOS DADO NO TERMUX, NEM AS MENSAGENS DOS USUÁRIOS, AJUDARÁ A NÃO LEVAR BAN NA CONTA DO HEROKU\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else {
consoleoff = false
nescessario.consoleoff = consoleoff
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O console foi Desativado  _- COM SUCESSO - _ SE FOR ATIVADO ISSO NÃO MOSTRARÁ OS COMANDOS DADO NO TERMUX, NEM AS MENSAGENS DOS USUÁRIOS, AJUDARÁ A NÃO LEVAR BAN NA CONTA DO HEROKU\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break

case 'botao': 
case 'botoes':   
if(!SoDono) return reply(`Apenas o dono pode executar esta ação!!`)
if(botoes === false) {
botoes = true
nescessario.botoes = botoes
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- Os Botões foi ativado _- COM SUCESSO - _\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else {
botoes = false
nescessario.botoes = botoes
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- Os Botões foi Desativado  _- COM SUCESSO - _\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break

case 'logos':
case 'menulogo':
case 'menulogos':
{setTimeout(() => {reagir(from, "🎴")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/opaenviando.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
sendBimg(from, `${logo}`, menulogos(prefix), "Leia com atenção", [
{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `🕹 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀 🕹`}, type: 1}, {buttonId: `${prefix}alteradores`, buttonText: {displayText: `💥 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 𝐀/𝐕 ⚡`}, type: 1}, {buttonId: `${prefix}efeitosimg`, buttonText: {displayText: `🎴 𝐄𝐅𝐄𝐈𝐓𝐎 𝐃𝐄 𝐈𝐌𝐀𝐆𝐄𝐌  🎴`}, type: 1}], selo)
break 

case 'menuadm':
case 'menuadms':
case 'adm': 
{setTimeout(() => {reagir(from, "💫")}, 300)
}
sendBimg(from, `${logo}`, adms(prefix), `☂️`, [
{buttonId: `${prefix}infobot`, buttonText: {displayText: `️🌸 𝐐𝐔𝐄𝐌 𝐄́ 𝐕𝐂 𝐁𝐎𝐓T 💘`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: `👑 𝐈𝐍𝐅𝐎𝐑 𝐌𝐄𝐒𝐓𝐑𝐄 🏆`}, type: 1}], selo) 
break 

case 'menudono':
case 'donomenu':
if (!SoDono) return reply("Só o meu papai pode entrar nesse menu vc n e digno(a)...") 
{setTimeout(() => {reagir(from, "🙇")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/menudono.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
sendBimg(from, `${logo}`, menudono(prefix), `☔`, [
{buttonId: `${prefix}infobot`, buttonText: {displayText: `️💘 𝐐𝐔𝐄𝐌 𝐄́ 𝐕𝐂 𝐁𝐎T 🌸`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: `🏆 𝐈𝐍𝐅𝐎𝐑 𝐌𝐄𝐒𝐓𝐑𝐄 👑`}, type: 1}], selo) 
break 

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':  
sendBimg(from, `${logo}`, efeitos(prefix), `🌀`, [
{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `🕹 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀  🕹`}, type: 1}, {buttonId: `${prefix}logos`, buttonText: {displayText: `🎴 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒 🎴`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: `🌸 𝐌𝐄𝐍𝐔 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋 🌸`}, type: 1}], selo)
break 

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
numerodn = setting.numerodono 
await conn.sendMessage(from, {image: {url: logo}, caption: infodono(prefix, numerodn, NomeDoBot)}, {quoted: selo})
break 

case 'alteradores':
await conn.sendMessage(from, {image: {url: logo}, caption: alteradores(prefix)}, {quoted: selo})
break 

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`) 
await conn.sendMessage(from, {image: {url: logo}, caption: brincadeiras(prefix)}, {quoted: selo})
break 

case 'menupremium':
case 'menuprem':
await conn.sendMessage(from, {text: menuprem(prefix)}, {quoted: selo})
break

case 'configurar-bot':
await conn.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break

case 'suporte':
await conn.sendMessage(from, {text: cmd_termux(prefix)}, {quoted: selo})
break

case 'hospedar-heroku':
await conn.sendMessage(from, {text: hospedar(prefix)}, {quoted: selo})
break

case 'destrava':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
break 

case 'perfil':
{setTimeout(() => {reagir(from, "🤣")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/criatura.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
try {
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const asLvl = getLevelingLevel(sender)
const ssXp = getLevelingXp(sender)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
conn.sendMessage(from, {image: {url: ppimg}, caption: dptr}, {quoted: selo})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
await conn.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'tabela':
await conn.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava2 (prefix)}, {quoted: info})
break 

case 'infovotação':
case 'infovotacao':  
await conn.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: selo})
break

case 'infobemvindo':
case 'infobv':  
await conn.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break

case 'tradutor': case 'traduzir':
try {
if(!q) return reply(`Exemplo : ${prefix}tradutor dog`)
bla = await fetchJson(`http://aleatory-api.xyz:8080/api/tradutor?text=${args.join(" ")}&idioma=pt&apikey=${keyale}`)
blatxt = `Olá ${pushname} sua palavra/texto foi traduzida(o) com sucesso ->\n\n ${bla.bla}`
conn.sendMessage(from, {text: blatxt, contextInfo: { externalAdReply:{title: `Traduzido com sucesso`,body:"", previewType:"PHOTO",thumbnail: {url: logo}}}}, {quoted: info}).catch(e => {
reply("ERROR!!")
console.log(e)
})
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'idiomas':
case 'idioma':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${setting.NomeDoBot}🔥`

conn.sendMessage(from, {text: txt}, {quoted: selo})
break

case 'infocontador':
await conn.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'databoton':
await conn.sendMessage(from, {text: databoton(prefix)}, {quoted: selo})
break

case 'infolistanegra':
await conn.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
await conn.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
await conn.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

case 'git':
case 'git-bot':  
case 'gitdobot':
case 'gitbot':   
await conn.sendMessage(from, {text: gitdobot(prefix)}, {quoted: selo})
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'mediafire':
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/mediafire?url=${q}&apikey=`+API_KEY_BRONXYS)
reply(`Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`)
conn.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply("ERROR!!");
})
} catch (e) {
return reply("ERROR!!")
}
break

case 'ler': 
case 'ocr':   
case 'lerfoto':  
if (!isPremium && !SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Somente fotos!')
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────*「 *𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NomeDoBot}* 」*────`
reply(tkks.trim())
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'qnt-emoji':

emj = "🈵" 

emj2 = "♠️️"

emj3 = "⚙️" 

emj4 = "👁" 

emj5 = "⛓" 

emj6 = "🐞" 

emj7 = "🌐" 

emj8 = "🦈" 

emj9 = "❄️" 

emj10 = "🌳" 

emj11 = "㊗️" 

emj12 = "🌀" 

emj13 = "❇️" 

emj14 = "🔮"

bld = [] 

bld.push({"🈵": comForEach(mrc, emj)})

bld.push({"♠️️": comForEach(mrc, emj2)})

bld.push({"⚙️": comForEach(mrc, emj3)})

bld.push({"👁": comForEach(mrc, emj4)})

bld.push({"⛓": comForEach(mrc, emj5)})

bld.push({"🐞": comForEach(mrc, emj6)})

bld.push({"🌐": comForEach(mrc, emj7)})

bld.push({"🦈": comForEach(mrc, emj8)})

bld.push({"❄️": comForEach(mrc, emj9)})

bld.push({"🌳": comForEach(mrc, emj10)})

bld.push({"㊗️": comForEach(mrc, emj11)})

bld.push({"🌀": comForEach(mrc, emj12)})

bld.push({"❇️": comForEach(mrc, emj13)})

bld.push({"🔮": comForEach(mrc, emj14)})

reply(JSON.stringify(bld, null, 2))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await conn.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
break

case 'cep':
try {
if(!q) return reply("digite o CEP que deseja buscar informações..");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/consultacep?cep=51240230&apikey=`+API_KEY_BRONXYS)
reply(`Cep: ${ABC.cep}\nRua: ${ABC.rua}\nComplemento: ${ABC.complemento}\nBairro: ${ABC.vizinhança}\nCidade: ${ABC.cidade}\nEstado: ${ABC.estado}\nGia: ${ABC.gia}\nIbge: ${ABC.ibge}\nddd: ${ABC.ddd}\nSiafi: ${ABC.siafi}`)
} catch (e) {
return reply("ERROR!!")
}
break

case 'placa':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
conn.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/aleatoryconteudos`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'repetir':
rsp = q.replace(new RegExp("[()+-/ +a/b/c/d/e/fghijklmnopqrstwuvxyz/]", "gi"), "")
reply(rsp)
break

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(rsp))
return reply(JSON.stringify(eval(`${rsp}`,null,'\t')))
break 

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
zada =
`╭╼╼╾❲ 𝐒 𝐓 𝐀 𝐓 𝐔 𝐒 ❳╼╼╾╮
│
│➱ Antiaudio: ${isAntiAudio? '✅':'✖'}
│➱ Antidocumento: ${Antidoc ? '✅':'✖'}
│➱ Antifake: ${isAntifake ? '✅':'✖'}
│➱ Antiimg: ${isAntiImg? '✅':'✖'}
│➱ AntiContato ${isAntiCtt ? '✅':'✖'}
│➱ AntiSticker: ${isAntiSticker ? '✅':'✖'}
│➱ Antiligação: ${isAnticall ? '✅':'✖'}
│➱ AntiPv-Block: ${isAntiPv ? '✅':'✖'}
│➱ AntilinkHard: ${isAntiLinkHard ? '✅':'✖'}
│➱ LimiteCaracteres: ${isAntiFlood ? '✅':'✖'}
│➱ AntiCatalogo: ${isAnticatalogo ? '✅':'✖'}
│➱ AntiPalavrão: ${isPalavrao ? '✅':'✖'}
│➱ Antivideo: ${isAntiVid ? '✅':'✖'}
│➱ AntiLocalização: ${Antiloc ? '✅':'✖'}
│➱ Bemvindo: ${isWelkom ? '✅':'✖'}
│➱ Simih: ${isSimi ? '✅':'✖'}
│➱ Simih2: ${isSimi2 ? '✅':'✖'}
│➱ Modo brincadeira: ${isModobn ? '✅':'✖'}
│
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`
conn.sendMessage(from, {image: {url: logo}, caption: zada, thumbnail: null})
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await conn.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
conn.sendMessage(from, {text: teks, mentions: [mem]}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'grupo': 
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await conn.profilePictureUrl(from, 'image')
const metadata = await conn.groupMetadata(from) 
conn.sendMessage(from, {image: {url: ppUrl}, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
if(q.includes("=>") || q.includes(">")) return
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
conn.sendMessage(from, options)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(budy){
if(q.length < 1) return reply('Citar oq?')
conn.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'marcar':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
{setTimeout(() => {reagir(from, "🛌")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/acorda.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
return guxta('a')
}
break

case 'marcar2':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
{setTimeout(() => {reagir(from, "🛌")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/acorda.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
return guxta('a')
}
break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
conn.sendMessage(from, {text: teks}, {quoted: info})
} catch {
return guxta('a')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu6.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
exec("cd ANYA-QR* && rm -rf pre-key* sender* session*")
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
startAle()
}, 1200)
}, 1000)
break

case 'reviver':
if (!isGroup) return reply('Esse comando so funciona em grupo, sinto muito')
if(!SoDono) return reply("Comando Desativado pelo dono...")
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await conn.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario Adicionado de volta ao grupo.')
break

case 'add':
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')  
if(!SoDono) return reply('Comando Desativado por questões de segurança, estava ocasionandoo Ban do número do bot.')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(q.length < 1) return reply('Quer adicionar uma alma?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 558198923680`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')
reply('Irei adicionar ele(a) em 5 segundos...')  
setTimeout(async() => {
responser = await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')  
reply('Irei adicionar ele(a) em 5 segundos...')  
setTimeout(async() => {
responser =  await conn.groupParticipantsUpdate(from, [menc_prt], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch (e){
if(!q.includes("@")) {
var addusr = menc_prt
} else {
var addusr = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` 
}
if(String(e).includes("responser is not defined")) {
linkgc = await conn.groupInviteCode(from)  
conn.sendMessage(addusr, {text: `Você está com o número privado para adicionar em grupos, então está ae o link do grupo : https://chat.whatsapp.com/${linkgc}`})
} else {
reply('Izi, se não for adicionado provavelmente ele privou só para contatos adicionar ele em grupo.')
}
}
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
conn.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu6.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu6.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "demote")
break

case 'bann':
if (!isPremium && !SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
{setTimeout(() => {reagir(from, "✖")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/banido.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefix}ban @marcar-ele`)
if(!JSON.stringify(groupMembers).includes(menc_prt)) return reply("Este usuário já foi removido do grupo.")
if(premium.includes(menc_prt)) return mentions(`@${menc_prt.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_prt], true)
if(groupAdmins.includes(menc_prt)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_prt], true)
if(botNumber.includes(menc_prt)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_prt)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${menc_prt.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [menc_prt]})
conn.groupParticipantsUpdate(from, [menc_prt], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
if(!JSON.stringify(groupMembers).includes(menc_jid)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(menc_jid)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_jid)) return reply('Não posso remover meu dono 🤧')
if(premium.includes(menc_jid)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
if(groupAdmins.includes(menc_jid)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
conn.sendMessage(from, {text: `@${menc_jid.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) - `, mentions: [menc_jid]})
conn.groupParticipantsUpdate(from, [menc_jid], "remove")
}
break

case 'ban': case 'banir': case 'kick':
if(!isGroupAdmins && !SoDono) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
{setTimeout(() => {reagir(from, "✖")}, 300)
}
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/banido.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
try {
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefix}ban @marcar-ele`)
if(!JSON.stringify(groupMembers).includes(menc_prt)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(menc_prt)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_prt)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${menc_prt.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_prt]})
conn.groupParticipantsUpdate(from, [menc_prt], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
if(botNumber.includes(menc_jid)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_jid)) return reply('Não posso remover meu dono 🤧')
if(!JSON.stringify(groupMembers).includes(menc_jid)) return reply("Este usuário já foi removido do grupo.")
conn.sendMessage(from, {text: `@${menc_jid.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) - `, mentions: [menc_jid]})
conn.groupParticipantsUpdate(from, [menc_jid], "remove")
}
} catch (e) {
console.log(e)
}
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
conn.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!JSON.stringify(adeuscara).includes(from)) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case 'listagp': //case by: Bielzinho-Bot
if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await conn.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)

teks1 = `*LISTA DE GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if(!budy.includes(" ")) {
if(!info.message?.extendedTextMessage?.contextInfo?.participant
) return reply("Marque a mensagem do usuário que deseja add na lista negra, ou coloque o número da fórma que copiou de dados do usuário.")  
var mentioned = info.message?.extendedTextMessage?.contextInfo?.participant

var ind = dbids.indexOf(from)
if(JSON.stringify(adeuscara).includes(from)) {
var numind = adeuscara[ind].number.indexOf(`${mentioned.split("@")[0]}`)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(`${mentioned.split("@")[0]}`)
} else {
adeuscara.push({
groupId: from,
actived: false,
number: [`${mentioned.split("@")[0]}`]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
} else {
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(JSON.stringify(adeuscara).includes(from)) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
}
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!JSON.stringify(adeuscara).includes(from)) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':
case 'banght':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono && !isnit) return reply("Só dono pode executar este comando..")
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(q.length < 1) return reply(`Exemplo: ${prefix}banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.`)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
setTimeout(async() => {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}, 1000)
}
}
} else {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
setTimeout(async() => {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}, 1000)
}
}
}
}
break

case 'correio':
txt = body.slice(10)
txtt = args.join(" ")
txt1 = txt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Oi Amor, sdds`)
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
conn.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break

case 'nome-bot':
case 'nomeb':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = args.join(" ") 
setting.NomeDoBot = NomeDoBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do seu bot foi alterado com sucesso para : ${setting.NomeDoBot}`)
break

case 'nick-dono':
case 'nickd':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NickDono = args.join(" ")
setting.NickDono = NickDono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Nick Do Dono foi configurado para : ${setting.NickDono}`)
break

case 'numero-dono':
case 'nd':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
reply(`O número dono foi configurado com sucesso para : ${q}\n\n_ REINICIANDO EM 3. 2 . 1`)
numerodonoofc = setting.numerodono 
numerodonoofc = args.join(" ")
setting.numerodono = numerodonoofc
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
break

case 'prefixo-bot': case 'setprefix': case 'pb':
if (args.length < 1) return
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'autoresposta':
conn.sendMessage(from, {text: `𝑨𝑼𝑻𝑶𝑹𝑬𝑺𝑷𝑶𝑺𝑻𝑨 

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}autorepo_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}autorepo_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'autorepo_':
case 'autoresposta_':
if(!q.includes("1") && !q.includes("0")) return reply(`Utilize 1 para ativar ou 0 para desativar\n\nExemplo: ${prefix}autorepo 1\n\nExemplo: ${prefix}autorepo 0`)
if(!SoDono) return reply("Apenas dono") 
if(q == 1) {
reply(`Auto Resposta - [ Ativada ] - com sucesso...`)
fs.writeFileSync(`./func/autorepo/autorepo_${from}.json`, JSON.stringify([], null, 2))
}

if(q == 0) {
reply(`Auto Resposta - [ Desativada ] - com sucesso...`)
fs.unlinkSync(`./func/autorepo/autorepo_${from}.json`)  
}
break

case 'prefixo_tipo2':
case 'prefixo_tipo_off':  
if (!SoDono  && !isnit) return reply(enviar.msg.donosmt)
if(budy.includes(`prefixo_tipo2`)) {
if(args.length < 1) return reply(`Digite o prefixo que deseja :\nExemplo: ${prefix}prefixo_tipo2 -`)    
var prefixo2_ = {
prefixo: q
}
if(!fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
fs.writeFileSync(`./func/prefixo/prefixo2_${from}.json`, JSON.stringify(prefixo2_, null, 2))
reply(`Prefixo único só para este grupo foi criado com sucesso..\n\n Prefixo: ${q}`)
} else {
fs.unlinkSync(`./func/prefixo/prefixo2_${from}.json`) 
fs.writeFileSync(`./func/prefixo/prefixo2_${from}.json`, JSON.stringify(prefixo2_, null, 2))
reply(`Prefixo re-criado com sucesso de : ${prefixo2_on.prefixo} para : ${q}`)
}
} else if(budy.includes("prefixo_tipo_off")) {
if(!fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) return reply(`Já está no prefixo original do bot, que é : ${setting.prefix}`)
fs.unlinkSync(`./func/prefixo/prefixo2_${from}.json`)  
reply(`Parabéns, voltou ao prefixo original : ${setting.prefix}`)
}
break

case 'fotomenu':
case 'fundomenu':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem 2 vez com esse comando..')
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
logoslink.logo = logo
logo = res
fs.writeFileSync('./logos/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${logo}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'setprefixs':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await conn.groupUpdateSubject(from, `${body.slice(9)}`)
await conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'fotobot':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await conn.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await conn.profilePictureUrl(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'ganharlevel':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
addLevelingLevel(sender, 10)
reply("Olá chefe, foi adicionado 10 Level para você 🙂")
break

case 'ganharxp':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")  
addLevelingXp(sender, 5000)
reply("Foi adicionado 5000 mil de XP para você 🙂")
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resul = `     
            ◪ *REGISTRO* ◪                                                                  
            
  ├─ ❏ *NICK* : ${pushname}
  ├─ ❏ *NÚMERO* : ${sender.split("@")[0]}
  ├─ ❏ *PATENTE* : ${patt}               
  ├─ ❏ *XP* : ${userXp}
  └─ ❏ *LEVEL* : ${userLevel}`
await conn.sendMessage(from, {text: resul}, {quoted: info})
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
conn.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
conn.sendMessage(_.id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.id, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono1 = body.slice(8)
nescessario.dono1 = dono1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono1}`)
break

case 'vemqrcode':
if(!SoDono) return reply("Apenas Dono..")
bla = fs.readFileSync("./ANYA-QR.json")
conn.sendMessage(from, {document: bla, mimetype: 'document/json', fileName: 'ANYA-QR.json'})
break

case 'dono2':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono6 = body.slice(8)
nescessario.dono6 = dono6
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `
┍──━──━──┙◆┕──━──━──┑
| 𝐋𝐈𝐒𝐓𝐀 𝐃𝐎𝐍𝐎𝐒
|  ${setting.NomeDoBot} 
|══════╠☆╣══════
| 👑𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀́𝐑𝐈𝐎(𝐀)👑
| ${setting.numerodono}
|══════╠☆╣══════
| [ 1 ] ${nescessario.dono1}\n
| [ 2 ] ${nescessario.dono2}\n
| [ 3 ] ${nescessario.dono3}\n
| [ 4 ] ${nescessario.dono4}\n
| [ 5 ] ${nescessario.dono5}\n
| [ 6 ] ${nescessario.dono6}
══════╠☆╣══════`
reply(p)
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'aviso_gp':
if(!SoDono) return reply("Apenas dono...")
if(budy.includes(`${prefix}execut`) || budy.includes(`=>`) || budy.includes(`>`)) return
if(!budy.includes("|")) return reply(`Cadê a |\nExemplo: ${prefix}aviso_gp jantar já está pronto|19/00/00`)
var[qds, qds2] = q.split("|")  
var blaaviso_ndms = `./func/avisos/aviso_${from}.json`
if(fs.existsSync(blaaviso_ndms)) {
var avisos_gps = JSON.parse(fs.readFileSync(blaaviso_ndms))
}
if(!fs.existsSync(blaaviso_ndms)) {
var avs = {
texto: qds, 
hora: qds2
}
fs.writeFileSync(blaaviso_ndms, JSON.stringify(avs, null, 2))
reply(`Aviso feito com sucesso, programado para todos os dias...`)
} else {
if(fs.existsSync(blaaviso_ndms)) {
fs.unlinkSync(blaaviso_ndms)
var avs = {
texto: qds, 
hora: qds2
}
fs.writeFileSync(blaaviso_ndms, JSON.stringify(avs, null, 2))
reply(`Aviso re-feito com sucesso, programado para todos os dias..`)
}
}
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

conn.sendMessage(from, {text: blity}, {quoted: info})
break

case 'alugado': case 'tempodesair': case 'tempo-aluguel': case 'aluguel': 
if(!SoDono && !info.key.fromMe) return 
txt = args.join(" ")
if(!txt.includes("/")) return reply(`O formato da data é assim : 03/04/22`)
msgz = args.join(" ").replace(" ", "")

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Data_que_alugou: datinhaofc, 
Data_de_sair: msgz
}

if(!fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/sairgp/sairgp-" + from + ".json")) {
fs.unlinkSync("./func/sairgp/sairgp-" + from + ".json");
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo de quando vai expirar o aluguel do bot e irei sair na data exata..`)
break

case 'tempo-fgp': 
if(!SoDono) return 
txt = args.join(" ")
.replace(" |", "|")
.replace("| ", "|")
var [txt1,txt2] = txt.split('|')
var blarpty = {
fechargp: txt1, 
abrirgp: txt2, 
grupoid: from
}

if(!fs.existsSync(`./func/fgp-${from}.json`)) {
fs.writeFileSync(`./func/fgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/fgp-" + from + ".json")) {
fs.unlinkSync("./func/fgp-" + from + ".json");
fs.writeFileSync(`./func/fgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo determinado..`)
break

case 'fechar-gp':
case 'fgp':
if(!SoDono) return reply("Comando especial para o dono.")
if(!q.includes("/") && !q.length <= 17) return reply(`Olá, você tem que determinar os 2 tempo pra o bot fechar o grupo e abrir, por exemplo..\n${prefix}fechar-gp 1m/2m\n\nEle fechará o grupo depois de um minuto, e depois abre após 2 minutos....`)
qtxt = args.join(" ").replace(" /", "/").replace("/ ", "/").replace("1m", "60000").replace("2m", "120000").replace("3m", "180000").replace("30m", "1800000").replace("1h", "3600000").replace("2h", "7200000").replace("7h", "25200000")

txt1 = qtxt.split("/")[0]
txt2 = qtxt.split("/")[1]

var fcgp = {
tempo1: txt1, 
tempo2: txt2, 
grupo: from
}

if(!fs.existsSync(`./func/fechar-abrir-gp-${from}.json`)) {
fs.writeFileSync(`./func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
} else {
if (fs.existsSync("./func/fechar-abrir-gp-" + from + ".json")) {
fs.unlinkSync("./func/fechar-abrir-gp-" + from + ".json");
fs.writeFileSync(`./func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
}
}
reply(`Tempo de fechar o grupo e abrir em tal horário foi programado com sucesso..`)

const tempodttl = JSON.parse(fs.readFileSync(`./func/fechar-abrir-gp-${from}.json`)); 

setTimeout(async () => {
reply("Grupo Fechado..")
await conn.groupSettingUpdate(from, 'announcement')  
}, `${tempodttl.tempo1}`)

setTimeout(async () => {
reply("Grupo Aberto..")
await conn.groupSettingUpdate(from, 'not_announcement')  
}, `${tempodttl.tempo2}`)

break


case 'ausente': case 'off': case 'afk':
if(!SoDono) return reply("Comando especial para o dono.")
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
msgz = args.join(" ")

var catmsgaus = {
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: msgz
}

if(!fs.existsSync(`./func/afk/afk-@${nmrdnofc}.json`)) {
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
} else {
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
}
}
reply(`Mensagem de ausência criada com sucesso...`)
break

case 'ativo': case 'on': case 'voltei':
if(!SoDono) return reply("Comando especial para o dono.")
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {  
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
break

case 'serpremium':
case 'serprem':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
premium.push(`${setting.numerodono}@s.whatsapp.net`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${setting.numerodono} você foi adicionado na lista premium.`)
break

case 'japa':
const reactionMessage = {
react: {
text: "❄️",
key: info.key
}
}
sendMsg = await conn.sendMessage(from, reactionMessage)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
bla = premium.includes(menc_prt)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${menc_prt}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `👑@${menc_prt.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [menc_prt]}, {quoted: info})  
} else { 
bla = premium.includes(menc_jid)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${menc_jid}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
conn.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [menc_jid]}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
bla = premium.includes(menc_prt)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = menc_prt
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${menc_prt.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
bla = premium.includes(menc_jid)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = menc_jid
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${bla.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break
case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
await conn.chatModify({ clear: { message: { id: String, fromMe: true } } }, from, [])
reply("Chat limpo")
break

case 'addpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(!isWelkom) return reply("Esta legenda de bem vindo, faz parte do bem vindo normal, para utilizar você deve ativar o bemvindo ")
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas criada com sucesso!*')
}
break

case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(!isWelkom) return reply("Esta legenda de saiu, faz parte do bem vindo normal, para utilizar você deve ativar o bemvindo ")
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'deletar': case 'delete': case 'del':  case 'd':
if(!isGroupAdmins && !isPremium) return reply(Res_SoAdm)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':  
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑳𝑰𝑮𝑨R

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antiligação_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antiligacao_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antiligar_':
case 'antiligacao_':  
case 'antiligação_':  
try {
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antipvon':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe ) return reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "*Sucesso alterado para modo antipv, pv não poderá ser utilizado"})
break

case 'antipvoff':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "*Sucesso modo antipv desligado, pv liberado."})
break

case 'antipv':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑷𝑽

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antipv_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antipv_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antipv_':
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Ja esta Desativado')
pesquisar = 'Ativado'
processo = antipv.indexOf(pesquisar)
while(processo >= 0){
antipv.splice(processo, 1)
processo = antipv.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'block':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse Número ja esta incluso*')
ban.push(blcp)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
conn.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'unblock':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
conn.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'blocklist':
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
conn.sendMessage(from, {text: jrc.trim(), mentions: ban})
break

case 'acess':
if (!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return conn.sendMessage(from, {text: `root@ANYA-BOT:~ ${err}`}, {quoted: info})
if (stdout) {
conn.sendMessage(from, {text: stdout})
}
})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if (args.length < 1) return
if(budy.includes("limitec")) {
lmt = args[0]
limitecaracteres_ = {
limite: lmt
}
if(!fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
fs.writeFileSync(`./func/limitecaracteres/limite-c_${from}.json`, JSON.stringify(limitecaracteres_, null, 2))
reply(`${q} foi adicionado como limite de caracteres..`)
} else {
fs.unlinkSync(`./func/limitecaracteres/limite-c_${from}.json`)
fs.writeFileSync(`./func/limitecaracteres/limite-c_${from}.json`, JSON.stringify(limitecaracteres_, null, 2))
reply(`foi alterado o limite de caracteres para : ${q}`)
}
} else {
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${q} foi adicionado como limite de caracteres!!`)
}
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
reply(`${e}`)
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'dados':
case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
┍──━──━──┙◆┕──━──━──┑
┃ 𝑇𝑒𝑚𝑝𝑜 𝑂𝑛-𝑙𝑖𝑛𝑒: 
┣•  ${kyun(uptime)}
┕══════╠☆╣══════
┍• 𝑉𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑𝑒: ${String(r.toFixed(3))}
┃
┕• ${!isGroup ? `𝑈𝑠𝑢𝑎𝑟𝑖𝑜: ${pushname}` :  `𝐺𝑟𝑢𝑝𝑜: ${groupName}`}
┍══════╠☆╣══════
┣• 𝐷𝑎𝑡𝑎: ${date} 
┃
┕──━──━──┑◆┍──━──━──┙
`
await conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'gtts':
if (args.length < 1) return conn.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: info})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {audio: buffer, ptt:true}, {quoted: info})
fs.unlinkSync(rano)
})
})
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'blockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
await conn.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return conn.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: teks1}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'ptrt': 
case 'pinterest':
try {
if(!q) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/pinterest?nome=${q}&apikey=`+API_KEY_BRONXYS);
conn.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)]}}).catch(() => {
return reply("ERROR!!");
})
} catch (e) {
return reply("ERROR!!");
}
break

case 'videourl':
case 'gerarlink':
case 'videopralink':
case 'imgpralink':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) { 
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res) 
} else if ((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && args.length == 0) { 
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break

case 'printsite':
case 'print':
try {
txt = args.join(" ")
if(txt.length < 8) return reply(`Digite qual site você deseja tirar o print, por Exemplo: ${prefix}printsite Google.com`)
reply(enviar.espere)
conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/api/print?url1=${txt}&apikey=${keyale}`}}, {quoted: info}).catch(e => {
reply('ERROR')
})
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'ytsearch2':
try {
psq = args.join(' ')
if(psq.length < 2) return reply(`O que você deseja encontrar?, diga o nome do vídeo ou da música, e irei informar os links que correspondem.`)
blar = await fetchJson(`http://aleatory-api.xyz:8080/api/ytsrc?q=${psq}&apikey=${keyale}`)
pla = '==============\n\n'
for (let x of blar.resultado) {
pla += `Titulo: ${x.title}\n`
pla += `Link: ${x.url}`
pla += '\n\n=============\n\n'
}
reply(pla.trim())
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'test':
now_ms = moment.tz('America/Sao_Paulo').format('mm:ss');
now_mn = moment.tz('America/Sao_Paulo').format('mm');
now_sc = moment.tz('America/Sao_Paulo').format('ss');
var limit = JSON.parse(fs.readFileSync("./limitador.json"))
limitnm = "10"
if(!JSON.stringify(limit).includes(sender)) {
blak = parseInt(`${now_sc}+10`)
limit.push({
id: [from+"-"+sender], 
hr: `${now_mn+":"+blak}`
})
fs.writeFileSync("./limitador.json", JSON.stringify(limit))
}
blc = []
for (i of limit) {blc.push(i.id)}
if(now_ms < limit[blc.indexOf(idgp)].hr) return reply(`Aguarde ${limitnm}segundos e tente novamente..`)
reply("oi")
limit[blc.indexOf(sender)].splice(sender, 1)
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/horoscopo?signo=${q}&apikey=`+API_KEY_BRONXYS)
conn.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply("ERROR!!");
})
} catch (e) {
return reply("ERROR!!");
}
break

case 'play':
{setTimeout(() => {reagir(from, "🎶")}, 300)
}
if(!q) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
reply(enviar.espere)
if(botoes === false) {
  rply(`Se essa mensagem está sendo enviada, provavelmente os botões estão desligado, caso queira baixar um vídeo ou audio do play, vou da os exemplos ->\n\nExemplo_video: ${prefix}play_video ${q}\n\nExemplo_audio: ${prefix}play_audio ${q}`)
} else {
bla = `☂️ Titulo: ${res.all[0].title}\n\n📉 Visualizações: ${res.all[0].views}\n\n⏰ Tempo: ${res.all[0].timestamp}\n\n🔎 Canal: ${res.all[0].author.name}\n`

sendBimg(from, `${res.all[0].image}`, bla, NomeDoBot, [
{buttonId: `${prefix}Play_audio ${res.all[0].title}`, buttonText: {displayText: `🎵 Audio`}, type: 1}, {buttonId: `${prefix}Play_video ${res.all[0].title}`, buttonText: {displayText: `🎥 Video`}, type: 1}], info)
}
break 

case 'twitter':
if(!q.includes("twitter")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
sendBtext(from, "✔️ Download De Vídeo / Audio [ TWITTER ]\nEscolha uma opção que deseja baixar.", `☂️`, [
{buttonId: `${prefix}down_v ${q}`, buttonText: {displayText: `🎥 Video`}, type: 1},
{buttonId: `${prefix}down_a ${q}`, buttonText: {displayText: `🎵 Audio`}, type: 1}], selo)
if(botoes === false) {
  rply(`Se essa mensagem está sendo enviada, provavelmente os botões estão desligado, caso queira baixar um vídeo ou audio do Twitter, vou da os exemplos ->\n\nExemplo_video: ${prefix}twitter_video ${q}\n\nExemplo_audio: ${prefix}twitter_audio ${q}`)
}
break 

case 'facebook':
if(!q.includes("fb.watch")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link de formato fb.watch`)
sendBtext(from, "✔️ Download De Vídeo / Audio [ FACEBOOK ]\nEscolha uma opção que deseja.", `☂️`, [
{buttonId: `${prefix}down_v ${q}`, buttonText: {displayText: `🎥 Video`}, type: 1},
{buttonId: `${prefix}down_a ${q}`, buttonText: {displayText: `🎵 Audio`}, type: 1}], selo)
if(botoes === false) {
  rply(`Se essa mensagem está sendo enviada, provavelmente os botões estão desligado, caso queira baixar um vídeo ou audio do Facebook, vou da os exemplos ->\n\nExemplo_video: ${prefix}face_video ${q}\n\nExemplo_audio: ${prefix}face_audio ${q}`)
}
break 

case 'tiktok':
if(!q.includes("tiktok")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
sendBtext(from, "✔️ Download De Vídeo / Audio [ TIKTOK ]\nEscolha uma opção que deseja.", `☂️`, [
{buttonId: `${prefix}down_v ${q}`, buttonText: {displayText: `🎥 Video`}, type: 1},
{buttonId: `${prefix}down_a ${q}`, buttonText: {displayText: `🎵 Audio`}, type: 1}], selo)
if(botoes === false) {
  rply(`Se essa mensagem está sendo enviada, provavelmente os botões estão desligado, caso queira baixar um vídeo ou audio do Tiktok, vou da os exemplos ->\n\nExemplo_video: ${prefix}tiktok_video ${q}\n\nExemplo_audio: ${prefix}tiktok_audio ${q}`)
}
break 

case 'instagram':
case 'instadw':  
if(!q.includes("instagram")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
sendBtext(from, "✔️ Download De Vídeo / Audio [ INSTAGRAM ]\nEscolha uma opção que deseja.", `☂️`, [
{buttonId: `${prefix}down_v ${q}`, buttonText: {displayText: `🎥 Video`}, type: 1},
{buttonId: `${prefix}down_a ${q}`, buttonText: {displayText: `🎵 Audio`}, type: 1}], selo)
if(botoes === false) {
  rply(`Se essa mensagem está sendo enviada, provavelmente os botões estão desligado, caso queira baixar um vídeo ou audio do Instagram, vou da os exemplos ->\n\nExemplo_video: ${prefix}insta_video ${q}\n\nExemplo_audio: ${prefix}insta_audio ${q}`)
}
break 

case 'play_video':
try {
if(!q) return reply(`${prefix+command} link ou nome`);
reply("Realizando ação..");
conn.sendMessage(from, {video: {url:`http://apis.bronxyshost.com/api-bronxys/play_video?nome_url=${q}&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4", caption: 'Prontinho ✓'}, {quoted: info}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!.");
}
break

case 'play_audio':
try {
if(!q) return reply(`${prefix+command} link ou nome`);
reply("Realizando ação..");
conn.sendMessage(from, {audio: {url:`https://paulo-apis-hyho.onrender.com/yt/play?q=${q}`+API_KEY_BRONXYS}, mimetype: "audio/mp4"}, {quoted: info}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!.");
}
break

case 'tiktok_video':
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
reply("Realizando ação..");
conn.sendMessage(from, {video: {url:`http://apis.bronxyshost.com/api-bronxys/tiktok?url=${q}&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!.");
}
break

case 'tiktok_audio':
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
reply("Realizando ação..");
conn.sendMessage(from, {audio: {url:`http://apis.bronxyshost.com/api-bronxys/tiktok?url=${q}&apikey=`+API_KEY_BRONXYS}, mimetype: "audio/mp4"}, {quoted: info}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!.");
}
break

case 'face_video':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("Realizando ação..")
conn.sendMessage(from, {video: {url: `http://apis.bronxyshost.com/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!")
}
break

case 'face_audio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("Realizando ação..")
conn.sendMessage(from, {audio: {url: `http://apis.bronxyshost.com/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_BRONXYS}, mimetype: "audio/mp4"}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!")
}
break

case 'twitter_video':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("Realizando ação..")
conn.sendMessage(from, {video: {url: `http://apis.bronxyshost.com/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_BRONXYS}, mimetype: "video/mp4"}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!")
}
break

case 'twitter_audio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("Realizando ação..")
conn.sendMessage(from, {audio: {url: `http://apis.bronxyshost.com/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_BRONXYS}, mimetype: "audio/mp4"}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!")
}
break

case 'insta_video':
try {
if(!q) return reply(`Exemplo: ${prefix+command} o link`);
reply("Realizando ação.. / Não baixo com muitos slots");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/instagram?url=${q}&apikey=`+API_KEY_BRONXYS)
if(ABC?.msg[0]?.url == undefined) {return reply(ABC?.msg)}
for ( i of ABC?.msg || []) {
if(i?.type == "mp4") {
conn.sendMessage(from, {video: {url: i.url}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("ERROR!!")
})
} else if(i?.type == "jpg") {
conn.sendMessage(from, {image: {url: i.url}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("ERROR!!");
})
}}
} catch (e) {
return reply("ERROR!!")
}
break

case 'insta_audio':
try {
if(!q) return reply(`Exemplo: ${prefix+command} o link`);
reply("Realizando ação.. / Não baixo com muitos slots");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/instagram?url=${q}&apikey=`+API_KEY_BRONXYS)
if(ABC?.msg[0]?.url == undefined) {return reply(ABC?.msg)}
for ( i of ABC?.msg || []) {
if(i?.type == "mp4") {
conn.sendMessage(from, {audio: {url: i.url}, mimetype: "audio/mp4"}, {quoted: info}).catch(e => {
return reply("ERROR!!")
})
} else if(i?.type == "jpg") {
conn.sendMessage(from, {image: {url: i.url}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("ERROR!!");
})
}}
} catch (e) {
return reply("ERROR!!")
}
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
conn.sendMessage(i, {text: txt})
}
reply(`Enviando com sucesso `)
}
break

case 'igstalk':
if(args.length < 1) return reply('Cadê o nome?')
usur = args.join(" ")
teste = await fetchJson(`https://pencarikode.xyz/stalk/instagram?username=${usur}&apikey=pais`)
teste = teste.result.user
corno = `Nome : ${teste.username}\n`
corno += `PK : ${teste.pk}\n`
await conn.sendMessage(from, {image: {url: teste.profile_pic_url}, caption: `${corno}`}, {quoted:info})
break

case 'celular':
try {
if(!q) return reply(`Exemplo: ${prefix+command} galaxy a9 2018`);
reply("Realizando ação..");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/info_celular?celular=${q}&apikey=`+API_KEY_BRONXYS);
reply(`📱 Celular: ${ABC.celular || "Não encontrado"}\n\nInformações:\n${ABC.resumo || ABC.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
} catch (e) {
return reply("ERROR!!.");
}
break

case 'pesquisa_yt':
try {
if(!q) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
AB = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/pesquisa_ytb?nome=${q}&apikey=`+API_KEY_BRONXYS)
ABC = `${"-\t".repeat(13)}\n\n`
for (var i of AB) {
ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\nTempo: ${i.tempo}\nPostado: ${i.postado}\n\nDescrição: ${i.desc}\n\n`;
ABC += `${"-\t".repeat(13)}\n\n`
}
reply(ABC);
} catch (e) {
return reply(`ERROR!!..`)
}
break

case 'gimage':
try {
if(!q) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/google-img?nome=${q}&apikey=`+API_KEY_BRONXYS);
conn.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)].url}}).catch(() => {
return reply("ERROR!!");
})
} catch (e) {
return reply("ERROR!!");
}
break;

case 'join': case 'entrar':
if (!SoDono) return reply('Somente proprietário!')
string = args.join(' ')
if (!string) return reply('Insira um link de convite ao lado do comando.')
if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
await conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if (String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if (String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'play2':
res = await yts(q)
playzin = args.join(" ") 
if(!playzin) return reply('Cade o nome da música?')
reply(enviar.espere)
guxta = await getBuffer(res.all[0].image)
bla = `☂️ Titulo: ${res.all[0].title}\n\n📉 Visualizações: ${res.all[0].views}\n\n⏰ Tempo: ${res.all[0].timestamp}\n\n🔎 Canal: ${res.all[0].author.name}\n`
conn.sendMessage(from, {image: guxta, caption: bla}, {quoted: info})
blu = await fetchJson(`https://rest-api-guxxt.herokuapp.com/youtube/playmp3?&q=${q}&apikey=${key}`) 
audbla = await getBuffer(blu.resultado.download)
conn.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info})
break

case 'play3':
try {
if(!q) return reply(`Cade o nome da música?`)
reply(enviar.espere)
res = await yts(q)

bla = `Titulo: ${res.all[0].title}\nVisualizações: ${res.all[0].views}\nTempo: ${res.all[0].duration.timestamp}\nCanal: ${res.all[0].author.name}\n`

conn.sendMessage(from, {image: {url: res.all[0].image}, caption: bla}, {quoted: info})
blu = await fetchJson(`https://rest-api-guxxt.herokuapp.com/youtube/playmp3?&q=${q}&apikey=${key}`) 
audbla = await getBuffer(blu.resultado.download)
conn.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('Error')
})
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break


case 'playmp4':
try {
if(!q) return reply(`Cade o nome da música?/Video?`)
reply(enviar.espere)
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")

bla = `Titulo: ${res.all[0].title}\nVisualizações: ${res.all[0].views}\nTempo: ${res.all[0].duration.timestamp}\nCanal: ${res.all[0].author.name}\n`

conn.sendMessage(from, {image: {url: res.all[0].image}}, {quoted: info})
blad = await fetchJson(`http://aleatory-api.xyz:8080/api/playmp4_2022?titulo=${q}&apikey=${keyale}`)
conn.sendMessage(from, {video: {url: blad.resultado.dl_link}, mimetype: 'video/mp4', fileName: `${blad.resultado.title}`}, {quoted: info}).catch(async(e)=> {
conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`http://aleatory-api.xyz:8080/api/playmp4?q=${q}&apikey=${keyale}`) 
conn.sendMessage(from, {video: {url: bla.resultado.url}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!')
})
})
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

//============(CASE-BEM-VINDO/E ETC..)=========\\

case 'bemvindo':
conn.sendMessage(from, {text: `𝑩𝑬𝑴 𝑽𝑰𝑵𝑫𝑶

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}Bemvindo_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}Bemvindo_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'bemvindo_':
case 'welcome_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply("Comando Desativado temporariamente para teste...")
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//=====================================\\



//=================(ANTS)=================\\

case 'anfictt':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑪𝑶𝑵𝑻𝑨𝑻𝑶

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antictt_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antictt_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antictt_':
case 'anticontato_':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑪𝑨𝑻𝑨𝑳𝑶𝑮𝑶

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}anticatalogo_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}anticatalogo_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'anticatalogo_':
case 'anticatalg_':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'boton':
conn.sendMessage(from, {text: `𝑩𝑬𝑴 𝑽𝑰𝑵𝑫𝑶

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}boton_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}boton_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'botoff_':
case 'boton_':
if (!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply("Só dono pode executar esta ação...")
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (botoff.includes(from)) return reply('Ja esta ativo')
botoff.push(from)
fs.writeFileSync('./datab/grupos/botoff.json', JSON.stringify(botoff))
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if (Number(args[0]) === 0) {
if (!botoff.includes(from)) return reply('Ja esta Desativado')
pesquisar = from
processo = botoff.indexOf(pesquisar)
while(processo >= 0){
botoff.splice(processo, 1)
processo = botoff.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/botoff.json', JSON.stringify(botoff))
reply(`Ativando todos os funcionamentos do bot novamente...`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9visuunica':
conn.sendMessage(from, {text: `𝑩𝑬𝑴 𝑽𝑰𝑵𝑫𝑶

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}x9visuunica_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}x9visuunica_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'x9visuunica_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isX9VisuUnica) return reply('Ja esta ativo')
X9Visu.push(from)
fs.writeFileSync('./datab/grupos/x9visu.json', JSON.stringify(X9Visu))
reply('🌀 Ativou com sucesso o recurso de Revelar visualização única neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isX9VisuUnica) return reply('Ja esta Desativado')
pesquisar = from
processo = X9Visu.indexOf(pesquisar)
while(processo >= 0){
X9Visu.splice(processo, 1)
processo = X9Visu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/x9visu.json', JSON.stringify(X9Visu))
reply('‼️ Desativou com sucesso o recurso de Revelar visualização única neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑭𝑨𝑲𝑬

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antifake_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antifake_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antifake_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑳𝑶𝑪

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antiloc_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antiloc_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antiloc_':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑫𝑶𝑪

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antidoc_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antidoc_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antidocumento_':
case 'antidoc_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (Antidoc) return reply('Ja esta ativo')
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('🌀 Ativou com sucesso o recurso de anti documento neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!Antidoc) return reply('Ja esta Desativado')
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiimg':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑰𝑴𝑮

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antiimg_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antiimg_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antiimg_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑺𝑻𝑰𝑪𝑲𝑬𝑹

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antistickeranti_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antisticker_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antisticker_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antinotas':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑵𝑶𝑻𝑨𝑺

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antinotas_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antinotas_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antinotas_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideos':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑽𝑰𝑫𝑬𝑶𝑺

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antivideo_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antivideo_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antivideo_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'Antiaudio':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑨𝑼𝑫𝑰𝑶𝑺

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antiaudio_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}Antiaudio_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antiaudio_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
conn.sendMessage(from, {text: `𝑩𝑬𝑴 𝑽𝑰𝑵𝑫𝑶

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}limitecaracteres_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}limitecaracteres_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'limitecaracteres_':
case 'limiteflood_':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar. info.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'resetarttt':
case 'rvttt':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
daily.splice([])
fs.writeFileSync('./datab/usuarios/diario.json', JSON.stringify(daily))
reply('‼️O jogo da velha TTT foi resetado com sucesso..✔️')
reply(`${prefix}reiniciar`)
break

case 'reiniciar':
if(!SoDono) return
rp = (Date.now() / 1000) - info.messageTimestamp
blar = process.uptime()
file = require.resolve(__filename)  
delete require.cache[file]
require(file)  
reply(`Reiniciei em ${String(rp.toFixed(3))}m\n\nTempo Ativo : ${kyun(blar)}`)
break

case 'antiporno':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑷𝑶𝑹𝑵𝑶🤬

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antiporno_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antiporno_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antiporno_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPorn) return reply('Ja esta ativo')
antiporn.push(from)
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('🌀 Ativou com sucesso o recurso de antiporn neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPorn) return reply('Ja esta Desativado')
pesquisar = from
processo = antiporn.indexOf(pesquisar)
while(processo >= 0){
antiporn.splice(processo, 1)
processo = antiporn.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('‼️ Desativou com sucesso o recurso de antiporn neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipalavrão':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑷𝑨𝑳𝑨𝑽𝑹𝑨̃𝑶

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antipalavra_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antipalavrao_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antipalavrão_':
case 'antipalavrao_':  
case 'antipalavra_':    
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('Ja esta ativo.')
palavrao.push(from)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('Ja esta Desativado')
pesquisar = from
processo = palavrao.indexOf(pesquisar)
while(processo >= 0){
palavrao.splice(processo, 1)
processo = palavrao.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'simih2':
conn.sendMessage(from, {text: `𝑺𝑰𝑴𝑰𝑯

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}simih2_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}simih2_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'simih2_':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./armor/funcoes/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
pesquisar = from
processo = samih2.indexOf(pesquisar)
while(  processo >= 0){
samih2.splice(processo, 1)
processo = samih2.indexOf(pesquisar)
}
fs.writeFileSync('./armor/funcoes/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'antilink':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰 𝑳𝑰𝑵𝑲

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antilink_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antiink_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antilinkhard_':
case 'antilink_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autofigu':
conn.sendMessage(from, {text: `𝑨𝑼𝑻𝑶 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}autofigu_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}autofigu_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'autofigu_': case 'autosticker_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('Ja esta ativo')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('Ja esta Desativado')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkgp':
conn.sendMessage(from, {text: `𝑨𝑵𝑻𝑰𝑳𝑰𝑵𝑲𝑮𝑷

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}antilinkgp_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}antilinkgp_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'antilinkgp_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'Bemvindo2':
conn.sendMessage(from, {text: `𝑩𝑬𝑴 𝑽𝑰𝑵𝑫𝑶

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}Bemvindo2_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}Bemvindo2_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'bemvindo2_':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply("Comando Desativado temporariamente para teste...")
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if (Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if (position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from, emoji.images[idemot].url, info)
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI..")
})
break

case 'emoji-mix':
case 'emojimix':
txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+")
var [emj1, emj2] = txt.split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 👿+😇`)
try {
reply(enviar.espere)
sendStickerFromUrl(from, `http://aleatory-api.xyz:8080/api/emojimix?emoj=${encodeURI(emj1)}&emoj2=${encodeURI(emj2)}&apikey=${keyale}`)
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('*Ops não foi possivel fazer esse mix de emoji / Ou ocorreu algum problema no sistema..*')
}
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'rename':
case 'roubar':  
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

case 'fstiker': 
case 'fsticker':
case 'f':
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu14.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
async function stickerffc() {
await setTimeout(async () => {
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if (boij) {
rane = getRandom('.'+await getExtension(boij.mimetype))
buffimg = await getFileBuffer(boij, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if (boij2 && boij2?.seconds < 11) {
rane = getRandom('.'+await getExtension(boij2.mimetype))
buffimg = await getFileBuffer(boij2, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
reply(enviar.espere) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
}, 1000)
}
stickerffc().catch(e => {
console.log(e)
reply("ERROR")
})
break 

case 'st':
case 'stk':
case 'sticker':
case 's':
async function stickerfc() {
await setTimeout(async () => {
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu14.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if (boij) {
rane = getRandom('.'+await getExtension(boij.mimetype))
buffimg = await getFileBuffer(boij, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
reply(enviar.espere)
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else if (boij2 && boij2?.seconds < 11) {
rane = getRandom('.'+await getExtension(boij2.mimetype))
buffimg = await getFileBuffer(boij2, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
}, 1000)
}
stickerfc().catch(e => {
console.log(e)
reply("ERROR")
})
break

case 'toimg':
if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
return guxta('a')
})
break

//==============(figurinhas)===============\\

case'figupack':
case'fp':  
case'pacote':  
case'pack':  
case'packs':  
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
  {
let sections = []   
const list = {title: `𝑷𝑨𝑪𝑲 𝑫𝑬 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺 `,
rows: [
{title: "💥𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺 𝑫𝑬 𝑨𝑵𝑰𝑴𝑨𝑰𝑺💢", rowId: `${prefix}packanimais`},
{title: "💥𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺 𝑫𝑬 𝑨𝑵𝑰𝑴𝑬💢", rowId: `${prefix}packanime`},
{title: "💥𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺 𝑫𝑬 𝑬𝑴𝑶𝑱𝑰💢", rowId: `${prefix}packemoji`},
{title: "💥𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺 𝑫𝑶 𝑭𝑳𝑶𝑹𝑲💢", rowId: `${prefix}packflork`},
{title: "💥𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺 𝑫𝑬 𝑴𝑬𝑴𝑬𝑺💢", rowId: `${prefix}packmeme`},
{title: "💥𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺 𝑨𝑳𝑬𝑨𝑻𝑶́𝑹𝑰𝑨𝑺💢", rowId: `${prefix}figurinhaale`},
]
}
sections.push(list)   
const sendm = conn.sendMessage(from, 
{
text: `                        𝑷𝑨𝑪𝑲 𝑫𝑬
                   𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺`,
footer:'        ┗•━•━•━ ◎ ━•━•━•┛',
title: `        ┏•━•━•━ ◎ ━•━•━•┓`,
buttonText: "𝑷𝑨𝑪𝑲𝑺",
sections
}, { quoted : selo})
}
break

case 'packmeme': 
case 'fig-meme':
case 'figmeme':
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
const memez = `${Math.floor(Math.random() * 52)}`
const memeu = `${Math.floor(Math.random() * 52)}`
const memep = `${Math.floor(Math.random() * 52)}`
const memei = `${Math.floor(Math.random() * 52)}`

 popopoc = fs.readFileSync(`./figurinhas/figu_meme/${memez}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_meme/${memeu}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_meme/${memep}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_meme/${memei}.webp`)
conn.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ conn.sendMessage(from, {text: '𝑫𝑬𝑺𝑬𝑱𝑨 𝑴𝑨𝑰𝑺 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨 𝑫𝑬 𝑴𝑬𝑴𝑬?', footer: `JAPA BOT.`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '𝑸𝑼𝑬𝑹𝑶 𝑴𝑨𝑰𝑺'}, type: 1}]}, {quoted: info}) }, 2090)

break

case 'packanimais': 
case 'fig-animais': 
case 'figanimais': 
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
const animaisz = `${Math.floor(Math.random() * 52)}`
const animaisu = `${Math.floor(Math.random() * 52)}`
const animaisp = `${Math.floor(Math.random() * 52)}`
const animaisi = `${Math.floor(Math.random() * 52)}`

 popopoc = fs.readFileSync(`./figurinhas/figu_animais/${animaisz}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_animais/${animaisu}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_animais/${animaisp}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_animais/${animaisi}.webp`)
conn.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ conn.sendMessage(from, {text: '𝑫𝑬𝑺𝑬𝑱𝑨 𝑴𝑨𝑰𝑺 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨 𝑫𝑬 𝑨𝑵𝑰𝑴𝑨𝑰𝑺  ?', footer: `JAPA BOT.`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '𝑸𝑼𝑬𝑹𝑶 𝑴𝑨𝑰𝑺'}, type: 1}]}, {quoted: info}) }, 2090)

break

case 'packanime':
case 'fig-anime':
case 'figanime':
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
const animez = `${Math.floor(Math.random() * 52)}`
const animeu = `${Math.floor(Math.random() * 52)}`
const animep = `${Math.floor(Math.random() * 52)}`
const animei = `${Math.floor(Math.random() * 52)}`

 popopoc = fs.readFileSync(`./figurinhas/figu_anime/${animez}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_anime/${animeu}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_anime/${animep}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_anime/${animei}.webp`)
conn.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ conn.sendMessage(from, {text: '𝑫𝑬𝑺𝑬𝑱𝑨 𝑴𝑨𝑰𝑺 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨 𝑫𝑬 𝑨𝑵𝑰𝑴𝑬?', footer: `JAPA BOT.`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '𝑸𝑼𝑬𝑹𝑶 𝑴𝑨𝑰𝑺'}, type: 1}]}, {quoted: info}) }, 2090)

break

case 'packemoji': 
case 'fig-emoji': 
case 'figemoji': 
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
const emojiz = `${Math.floor(Math.random() * 52)}`
const emojiu = `${Math.floor(Math.random() * 52)}`
const emojip = `${Math.floor(Math.random() * 52)}`
const emojii = `${Math.floor(Math.random() * 52)}`

 popopoc = fs.readFileSync(`./figurinhas/figu_emoji/${emojiz}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_emoji/${emojiu}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_emoji/${emojip}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_emoji/${emojii}.webp`)
conn.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ conn.sendMessage(from, {text: '𝑫𝑬𝑺𝑬𝑱𝑨 𝑴𝑨𝑰𝑺 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨 𝑫𝑬 𝑬𝑴𝑶𝑱𝑰?', footer: `JAPA BOT.`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '𝑸𝑼𝑬𝑹𝑶 𝑴𝑨𝑰𝑺'}, type: 1}]}, {quoted: info}) }, 2090)

break

case 'packflork': 
case 'fig-flork': 
case 'figflork': 
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
const florkz = `${Math.floor(Math.random() * 52)}`
const florku = `${Math.floor(Math.random() * 52)}`
const florkp = `${Math.floor(Math.random() * 52)}`
const florki = `${Math.floor(Math.random() * 52)}`

 popopoc = fs.readFileSync(`./figurinhas/figu_flork/${florkz}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_flork/${florku}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_flork/${florkp}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_flork/${florki}.webp`)
conn.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ conn.sendMessage(from, {text: '𝑫𝑬𝑺𝑬𝑱𝑨 𝑴𝑨𝑰𝑺 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨 𝑫𝑬 𝑭𝑳𝑶𝑹𝑲?', footer: `JAPA BOT.`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '𝑸𝑼𝑬𝑹𝑶 𝑴𝑨𝑰𝑺'}, type: 1}]}, {quoted: info}) }, 2090)

break

case 'figurinhaale':
case 'figale':
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
const alez = `${Math.floor(Math.random() * 115)}`
const aleu = `${Math.floor(Math.random() * 115)}`
const alep = `${Math.floor(Math.random() * 115)}`
const alei = `${Math.floor(Math.random() * 115)}`

 popopoc = fs.readFileSync(`./figurinhas/figu_ale/${alez}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_ale/${aleu}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_ale/${alep}.webp`)
conn.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./figurinhas/figu_ale/${alei}.webp`)
conn.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ conn.sendMessage(from, {text: '𝑫𝑬𝑺𝑬𝑱𝑨 𝑴𝑨𝑰𝑺 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺 𝑨𝑳𝑬𝑨𝑻𝑶́𝑹𝑰𝑨𝑺?', footer: `JAPA BOT.`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '𝑸𝑼𝑬𝑹𝑶 𝑴𝑨𝑰𝑺'}, type: 1}]}, {quoted: info}) }, 2090)

break

//=============(memes)=============\\

case 'shitpost2':
case 'shit2':
reply(`${command} enviado pra vc meu amigo(a),`)
data = fs.readFileSync('./memes/shitpost2.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
conn.sendMessage(from, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break

case 'shitpost':
case 'shit':
reply(`${command} enviado pra vc meu amigo(a)`)
data = fs.readFileSync('./memes/shitpost.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
conn.sendMessage(from, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break

case 'shitpost3':
case 'shit3':
reply(`${command} enviado Pra vc meu amigo(a)`)
data = fs.readFileSync('./memes/outroshitpost.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
conn.sendMessage(from, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break

//==========(PLAQUINHAS-LOGOS)===========\

case 'placaloli':
if (!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
await limitAdd(sender)
break 

case 'plaquinha':
case 'plaq':
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
          teks = body.slice(11)
					if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`)
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(6).jpeg?text.0.text=${teks}&text.0.position.x=-17%25&text.0.position.y=-20%25&text.0.size=41&text.0.color=000000&text.0.opacity=59&text.0.font.family=PT%20Mono&text.0.outline.blur=10" width="463" height="662" alt="" />`,`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`)
                   conn.sendMessage(from, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada com sucesso ')
					break

case 'plaquinha2':
case 'plaq2':
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
					teks = body.slice(11)
					if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`)
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(5).jpeg?text.0.text=${teks}&text.0.position.x=-45%25&text.0.position.y=-29%25&text.0.size=36&text.0.color=000000&text.0.opacity=65&text.0.font.family=PT%20Sans%20Narrow" width="479" height="640" alt="" />`)
                   conn.sendMessage(from, {image: buffer},{quoted: selo}),
                   reply('Plaquinha enviada com sucesso')
					break

case 'plaquinha3':
case 'plaq3':
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
					teks = body.slice(11)
					if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`)
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(10).jpeg?text.0.text=${teks}&text.0.position.y=-25%25&text.0.size=41&text.0.color=000000&text.0.font.family=Vollkorn&text.0.background.opacity=100" width="193" height="261" alt="" />`)
                   conn.sendMessage(from, {image: buffer},{quoted: selo}),
                   reply('Plaquinha enviada com sucesso')
					break

//=======================================\\


// LOGOS 

case 'angelwing':  case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink': case 'metalgold':
case 'girlmascote': case 'logogame':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply("Realizando ação..");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=`+API_KEY_BRONXYS);
conn.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(() => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!.");
}
break

case 'shadow': case 'metalgold': case 'cup': case 'txtborboleta':
case 'cemiterio': case 'efeitoneon': case 'harryp':
case 'lobometal': case 'neon2': case 'madeira': case 'lovemsg3':
case 'coffecup': case 'coffecup2': case 'florwooden':
case 'narutologo': case 'fire': case 'romantic': case 'smoke':  
case 'papel': case 'lovemsg': case 'lovemsg2':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply("Realizando ação..");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=`+API_KEY_BRONXYS);
conn.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(() => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!.");
}
break

case 'gameplay':
case 'ffbanner':
case 'mascoteavatar':  
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(`http://aleatory-api.xyz:8080/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=${keyale}`)
conn.sendMessage(from, {image: {url: bla.resultado.imageUrl}}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'metadinha':
try {
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/metadinha?apikey=`+API_KEY_BRONXYS);
conn.sendMessage(from, {image: {url: ABC.link1}}).catch(e => {
return reply("ERROR!!")
})
conn.sendMessage(from, {image: {url: ABC.link2}}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!")
}
break;

case 'googlesg':
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(`http://aleatory-api.xyz:8080/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${keyale}`)
conn.sendMessage(from, {image: {url: bla.resultado.imageUrl}}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break  

case 'marvel': case 'pornhub': case 'space': case 'stone': case 'steel': case 'grafity': case 'glitch3': case 'america':
try {
var [DG, DG2] = q.split("|")
if(!q.includes("|")) return reply(`Exemplo: ${prefix+command} Bronxys|Aleatory`)
reply("Realizando ação..");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/logos_2?texto=${DG}&texto2=${DG2}&category=${command}&apikey=`+API_KEY_BRONXYS);
conn.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(e => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!.");
}
break

case 'fiction': case '3dstone': case 'areia': case 'style': 
case 'blood': case 'pink': case 'cattxt': case 'neondevil':
case 'carbon': case 'metalfire': case 'thunder': case 'vidro': 
case 'jokerlogo': case 'transformer': case 'demonfire':
case 'jeans': case 'metalblue': case 'natal': case 'ossos':
case 'asfalto': case 'break': case 'glitch2': case 'colaq':
case 'neon3': case 'nuvem': case 'horror': case 'matrix':
case 'berry': case 'luxury': case 'lava': case 'thunderv2':
case 'neongreen': case 'neve': case 'neon': case 'neon1':  
case 'neon3d': case 'gelo': case 'neon3': case '3dgold':
case 'lapis': case 'toxic': case 'demongreen': case 'rainbow':
case 'halloween':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply("Realizando ação..");
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/logos?texto=${q}&category=${command}&apikey=`+API_KEY_BRONXYS);
conn.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(() => {
return reply("ERROR!!")
})
} catch (e) {
return reply("ERROR!!.");
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'delvote':
case 'delvoto':  
if(!info.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!budy.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || info.message.extendedTextMessage.contextInfo == null) {
let id = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'infosorteio':
case 'helpsorteio':  
await conn.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: selo})
break

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if (isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
conn.sendMessage(from, {text:'Substituido com sucesso..'},{quoted: info})
} else {
reply('nao deu')
}
break

case 'index-bot':
if(!SoDono)return reply('Só meu dono')
if (isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
conn.sendMessage(from, {text:'Pronto novinha..'},{quoted: info})
} else {
reply('nao deu')
}
break

case 'promover': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja promover ele pra administrador ou marque com ${prefix}promover @marcar-ele`)
conn.sendMessage(from, {text: `@${menc_prt.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_prt]})
conn.groupParticipantsUpdate(from, [menc_prt], "promote")  
} else {
if(q.length > 15) return reply('Só pode promover uma pessoa por vez..')
conn.sendMessage(from, {text: `@${menc_jid.split("@")[0]} Foi promovido(a) para [ ADMINISTRADOR ] com sucesso.`, mentions: [menc_jid]})
conn.groupParticipantsUpdate(from, [menc_jid], "promote")
}
break

case 'rebaixar': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja promover ele pra administrador ou marque com ${prefix}promover @marcar-ele`)
conn.sendMessage(from, {text: `@${menc_prt.split("@")[0]}  Foi Rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_prt]})
conn.groupParticipantsUpdate(from, [menc_prt], "demote")  
} else {
if(q.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
conn.sendMessage(from, {text: `@${menc_jid.split("@")[0]} Foi Rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_jid]})
conn.groupParticipantsUpdate(from, [menc_jid], "demote")
}
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("Só dono pode utilizar este comando...")
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(info.key.fromMe) return 
function banirtodos() {
var r_banirtodos = Math.floor(Math.random() * groupMembers.length + 0)
nmrbot = botNumber.split("@")[0]
var resp = `${groupMembers[r_banirtodos].id.split("@")[0]}`
if(resp === setting.numerodono || resp === nmrbot) {
return
} else {
conn.groupParticipantsUpdate(from, [resp + "@s.whatsapp.net"], 'remove')
}
}
myinterval = setInterval(banirtodos, 1000)
if(groupMembers.length <= 2) {
clearInterval(myinterval);
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
//======================================\\



//==========(TTPS/ATTP/TTM)============\\

case 'attp': case 'ttp':
try {
if(!q) return reply(`Exemplo: ${prefix+command} bronxys`);
reply("Realizando ação..");
conn.sendMessage(from, {sticker: {url: `http://apis.bronxyshost.com/api-bronxys/${command}?texto=${q}&apikey=`+API_KEY_BRONXYS}}, {quoted: info}).catch(() => {
return reply("ERROR!!");
})
} catch (e) {
return reply("ERROR!!");
}
break;

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(enviar.espere)
await conn.sendMessage(from, {sticker: {url:`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`}}, {quoted: info})
} catch {
reply('ERROR')
}
break	


//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'modoporno':
case 'nsfw':
case 'porno':
case 'xvideo':
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/safado.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'mb':
case 'brincadeira':
case 'modobrincadeira':
conn.sendMessage(from, {text: `𝐌𝐎𝐃𝐎 𝐁𝐑𝐈𝐂𝐀𝐃𝐄𝐈𝐑𝐀

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}mb_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}mb_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'modobrincadeira_':
case 'modobrincadeiras_':
  case 'mb_':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isModobn) return reply('o modobrincadeira já está ativo')
modobn.push(from)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply('🎯 Ativou com sucesso o recurso de Modo brincadeira neste grupo 🪀')
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('o modobrincadeira já está Desativado')
pesquisar = from
processo = modobn.indexOf(pesquisar)
while(processo >= 0){
modobn.splice(processo, 1)
processo = modobn.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply('🎯 Desativou com sucesso o recurso de Modo brincadeira neste grupo 🪀')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'nick':
case 'gerarnick':
case 'fazernick':
try {
if(isDoubleByte(q)) return reply("Não pode letras modificadas nem emoji..");
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas, Exemplo: ${prefix+command} bronxys`);
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/gerar_nick?nick=${q}&apikey=`+API_KEY_BRONXYS)
AB = `Lista com base no Nick informado, para encontrar melhor fonte para utilizar:\n\n`;
for ( i of ABC) {
AB += `${i}\n\n`;
}
reply(AB);
} catch (e) {
return reply("ERROR!!");
}
break;

case 'chance':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)  
var avb = body.slice(7)
if (args.length < 1) return conn.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: info})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
await conn.sendMessage(from, {text: hasil, contextInfo: {mentionedJid: [sender]}}, {quoted: info})
break

case 'gay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)

if(budy.includes("@")) {
var blamention_id = menc_jid
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {var bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {var bo = '+/- boiola'} else if (boiola == 23 ) {var bo = '+/- boiola'} else if (boiola == 24 ) {var bo = '+/- boiola'} else if (boiola == 25 ) {var bo = '+/- boiola'} else if (boiola == 26 ) {var bo = '+/- boiola'} else if (boiola == 27 ) {var bo = '+/- boiola'} else if (boiola == 2 ) {var bo = '+/- boiola'} else if (boiola == 29 ) {var bo = '+/- boiola'} else if (boiola == 30 ) {var bo = '+/- boiola'} else if (boiola == 31 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {var bo = 'você é né?😏'} else if (boiola == 42 ) {var bo = 'você é né?😏'} else if (boiola == 43 ) {var bo = 'você é né?😏'} else if (boiola == 44 ) {var bo = 'você é né?😏'} else if (boiola == 45 ) {var bo = 'você é né?😏'} else if (boiola == 46 ) {var bo = 'você é né?😏'} else if (boiola == 47 ) {var bo = 'você é né?😏'} else if (boiola == 4 ) {var bo = 'você é né?😏'} else if (boiola == 49 ) {var bo = 'você é né?😏'} else if (boiola == 50 ) {var bo = 'você é ou não?🧐'} else if (boiola > 51) {var bo = 'você é gay🙈'
}
await conn.sendMessage(from, {image: {url: imggay}, caption: `  O quanto você é gay? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: info})
}, 7000)
break

case 'feio':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if(budy.includes("@")) {
var blamention_id = menc_jid
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de feio : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {var bo = 'É não é feio'} else if (feio == 21 ) {var bo = '+/- feio'} else if (feio == 23 ) {var bo = '+/- feio'} else if (feio == 24 ) {var bo = '+/- feio'} else if (feio == 25 ) {var bo = '+/- feio'} else if (feio == 26 ) {var bo = '+/- feio'} else if (feio == 27 ) {var bo = '+/- feio'} else if (feio == 2 ) {var bo = '+/- feio'} else if (feio == 29 ) {var bo = '+/- feio'} else if (feio == 30 ) {var bo = '+/- feio'} else if (feio == 31 ) {var bo = 'Ainda tá na média'} else if (feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {var bo = 'tenho '} else if (feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {var bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {var bo = 'Feiooo'} else if (feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {var bo = 'você é Feio demais 🙈'} 

await conn.sendMessage(from, {image: {url: imgfeio}, caption: `  O quanto você é feio? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: info})
}, 7000)
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
await conn.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break 

case 'corno':
case 'corna':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if(budy.includes("@")) {
var blamention_id = menc_jid
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
conn.sendMessage(from, {text:` ❰ Pesquisando a ficha de corno(a) : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: {url: imgcorno}, caption: ` O quanto você é corno(a)? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  corno(a) 🐃`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if(budy.includes("@")) {
var blamention_id = menc_jid
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
conn.sendMessage(from, {text:`❰ Pesquisando a ficha de vesgo : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto você é vesgo? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if(budy.includes("@")) {
var blamention_id = menc_jid
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
conn.sendMessage(from, {text:`❰ Pesquisando a ficha de bebado : @${blamention_id.split("@")[0]} , aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: {url: imgbebado}, caption:`O quanto você é bebado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if(budy.includes("@")) {
var blamention_id = menc_jid
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
conn.sendMessage(from, {text:`❰ Pesquisando a ficha de gado : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: {url: imggado}, caption: `O quanto você é gado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado 🐂`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if(budy.includes("@")) {
var blamention_id = menc_jid
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
conn.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostoso : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto você é gostoso? 😏\n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostoso 😝`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if(budy.includes("@")) {
var blamention_id = menc_jid
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
conn.sendMessage(from, {text:`❰ Pesquisando a sua ficha de gostosa : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto você é gostosa? 😏\n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostosa 😳`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
await conn.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'tapa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modoBrincadeira`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
await conn.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
await conn.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break 

case 'dogolpe':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
if (args.length < 1) return await conn.sendMessage(from, {text: 'coloca um nome'}, {quoted: info})
pkt = body.slice(9)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
conn.sendMessage(from, {text: jpr, mentions: mentioned})
break

case 'shipo':
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
rate = body.slice(9)
conn.sendMessage(from, {text: ' ❰ Pesquisando a sua ficha de nazista : '+rate+' aguarde... ❱'})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: {url: imgnazista}, caption: 'O quanto você é nazista? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'}, {quoted: info})
}, 7000)
break 

case 'inativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
if(countMessage[ind].numbers[indnum].messages == 2570) {
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? -1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais inativos do grupo :\n\n'
try {
for (let i = 0; i < groupMembers.length; i++) {
if (i) boardi += `${i}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, {text: `A`}, {quoted: info})
}
}
break

case 'rankativo':
case 'rankativos':  
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 6) return reply('Necessita do registro de 5 usuarios')
bule = [];
bule2 = []
mentioned_jid = []
groupMembers2 = []
for (a of groupMembers)groupMembers2.push(a.id)
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(groupMembers2.includes(cag.id)){
if(cag.messages >= 100){bule.push(cag)}}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = 'Rank dos mais Ativos do Grupo:\n\n'
if(bule.length == 0)boardi += 'Sem Ativos'
for (let i = 0 ; i < 5; i++) {
if (i != null) boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\nMensagens: ${bule[i].messages}\nComandos dados: ${bule[i].cmd_messages}\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'rankinativo':
case 'rankinativos':  
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 6) return reply('Necessita do registro de 6 usuarios')
bule = [];
bule2 = []
mentioned_jid = []
groupMembers2 = []
for (a of groupMembers)groupMembers2.push(a.id)
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(groupMembers2.includes(cag.id)){
if(cag.messages <= 1){bule.push(cag)}}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = 'Rank dos mais Ghosts do Grupo:\n\n'
if(bule.length == 0)boardi += 'Sem Ghosts'
for (let i = 0 ; i < bule.length; i++) {
if (i != null) boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\nMensagens: ${bule[i].messages}\nComandos dados: ${bule[i].cmd_messages}\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
} else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${setting.NomeDoBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
conn.sendMessage(from, {text: leaderboardlvl, sendEphemeral: true}, {quoted: selo})
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break

case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.id.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
try{
if(!isGroup) return reply(enviar.msg.grupo)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.id.split('@')[0]}\n@${otakus2.id.split('@')[0]}\n@${otakus3.id.split('@')[0]}\n@${otakus4.id.split('@')[0]}\n@${otakus5.id.split('@')[0]}\n@${otakus6.id.split('@')[0]}\n@${otakus7.id.split('@')[0]}\n@${otakus.id.split('@')[0]}\n@${otakus9.id.split('@')[0]}\n@${otakus10.id.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
membr.push(otakus6.id)
membr.push(otakus7.id)
membr.push(otakus.id)
membr.push(otakus9.id)
membr.push(otakus10.id)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modoBrincadeira`)
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n@${paus2.id.split('@')[0]}\n${pc2}\n@${paus3.id.split('@')[0]}\n${pc3}\n@${paus4.id.split('@')[0]}\n${pc4}\n@${paus5.id.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break 

case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
joguinhodavelhajs.push(sender)
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
conn.sendMessage(from, {text: strChat, mentions: [blabord]}, {quoted: info});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if (!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'cassino':
addFilter(from)  
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}

const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
  
sendBtext(from, `${cassino}`, `${Vitória}`, [
{buttonId: `${prefix}cassino`, buttonText: {displayText: `Proximo`}, type: 1}], selo)
break

case 'quizanimais':
conn.sendMessage(from, {text: `𝐐𝐔𝐈𝐙𝐀𝐍𝐈𝐌𝐀𝐈𝐒

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}quizanimais_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}quizanimais_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'quizanimais_':
if(!isGroup) return reply('Comando apenas para grupos')
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(!isGroupAdmins) return reply('Comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo \npara desativar use quizanimais 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/quizanim-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
await conn.sendMessage(from, {image: {url: dataAnagrama2.foto}, caption: imagemtexto, thumbnail: dataAnagrama2.foto}, {quoted: selo})
} else {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto =`                             「❓Quiz❓」`
await conn.sendMessage(from, {image: {url: dataAnagrama2.foto}, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/quizanim-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./armor/quizanim-${from}.json`)
reply("Desativado com sucesso")
}
await limitAdd(sender)
break

case'anagrama':
conn.sendMessage(from, {text: `𝐀𝐍𝐀𝐆𝐑𝐀𝐌𝐀

𝗣𝗘𝗗𝗜𝗨 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:
${pushname}

${NomeDoBot}`, footer: `🌸ATIVA/DESATIVAR AQUI EM BAIXO🌸`, buttons: [{buttonId: `${prefix}anagrama_ 1`, buttonText: {displayText: '✔ATIVAR'}, type: 1}, {buttonId: `${prefix}anagrama_ 0`, buttonText: {displayText: '❌DESATIVAR'}, type: 1}]}, {quoted: info})
break

case 'anagrama_':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
conn.sendMessage(from, {text: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./armor/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break

case 'revelaranime':
case 'revelaanime':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/quizanime-${from}.json`))
reply (`${dataAnagrama.original}`)
break

case 'revelaranimal':
case 'revelaanimal':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
reply (`${dataAnagramaa.original}`)
break

//=======(FIM-BRINCADEIRAS-JOGOS)========\\



//=(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)=\\

case 'simi':
if(isSimi) return reply('Desativado')
text = args.join(" ")
data = await fetchJson(`https://simsimi.info/api/?text=${text}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'simih':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

//========================================\\


//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = fs.readFileSync('audios/anya.mp3')
await conn.sendMessage(from, {audio: soundft, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break

case 'infobot':
const cmdoo = fs.readFileSync('audios/infobot.mp3')
await conn.sendMessage(from, {audio: cmdoo, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if ((isMedia && isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if ((isMedia && isQuotedVideo) && args.length == 0) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if ((isMedia && isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'tomp3':
if ((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'grave2':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'bass3':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

//=========(FIM-ALTERAR-AUDIO)===========\\


//=======(JOGO-DA-VELHA-COM-MAQUINA)=======\\

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
conn.sendMessage(from, {text: tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender))}, {quoted: info})
break

case 'tttrank':
if (!isGroup) return reply(enviar.msg.grupo)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '*🔥Ranking dos melhores players🔥*\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`

} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
}
mentioned_jid.push(tictactoe[i].id)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: info})
}
break

case 'jogar':
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificukdade> para iniciar*`)
} else if (tttset.player != tttset.playertest) {
reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
  
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)

} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' && coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`*Diga a cordenada*\nExemplo: ${prefix}jogar a1`)
tttset.tttantibug = "off"
} else {
  
switch (args[0]) {
  
case 'a1':
if (esp.a1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if (esp.b1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b2':
if (esp.b2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b3':
if (esp.b3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c1':
if (esp.c1 != "🔲") {
 reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c2':
if (esp.c2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c3':
if (esp.c3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
            
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
              
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
                
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
conn.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`})
} else {
conn.sendMessage(from,{text: `*VOCÊ VENCEU, PARABENS*`},)
}

const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
				  
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break

}	
conn.sendMessage(from, {text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`})
	
} else {
conn.sendMessage(from, {text: `*Você perdeu*`})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
				
} else if (Tie()) {
if (isCmd) {
conn.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
} else {
conn.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
}

const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
				
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(enviar.espere)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)

} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = info
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
blat =  `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`
conn.sendMessage(from, {text: `${blat}\n\nCaso não saiba como jogar digite: ${prefix}ttthelp`})
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 12000) //2 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
conn.sendMessage(from, {text: ttthelp(prefix)})
break
//==========(EFEITOS-MARCAR)==========\\

case 'triggered':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info.message.imageMessage
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
post = await fetchJson(`http://aleatory-api.xyz:8080/canvas/trigger?url=${res}&apikey=${keyale}`)
sendStickerFromUrl(from, {sticker: post}, {quoted:info})
} else {
reply('Marque a imagem')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
conn.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: info})
fs.unlinkSync(buff)
}
break

case 'rip':  
case 'morto':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url: `http://aleatory-api.xyz:8080/canvas/rip?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'lgbt':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/canvas/lgbt?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'trash':
case 'lixo':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/canvas/trash?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'comporn':
try {
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
await conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/canvas/phub?nome=${jrr}&msg=${jrr1}&foto=https://telegra.ph/file/954832554bf2b2e40f932.jpg&apikey=${keyale}`}}, {quoted: info})
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break 

case 'preso':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/canvas/jail?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'legenda':
try {
txt1 = q.split('/')[0]
txt2 = q.split('/')[1]
if(!q.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
conn.sendMessage(from, {image: {url: `http://aleatory-api.xyz:8080/api/legenda?url=${res}&texto1=${txt1}&texto2=${txt2}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Marque uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
return guxta('a')
}
}
break

case 'borrar':
case 'figuborrada':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/canvas/blur?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
return guxta('a')
}
}
break

case 'hitler':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/canvas/hitler?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
return guxta('a')
}
}
break

case 'deletef':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/canvas/delete?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
return guxta('a')
}
}
break

case 'wanted':
case 'procurado':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatory-api.xyz:8080/canvas/procurado?url=${link}&apikey=${keyale}`}}, {quoted: info}).catch(e => {
reply("Error!!")  
})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes(keyale)) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
return guxta('a')
}
}
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sendBtext(`${setting.numerodono}@s.whatsapp.net`,`✔️ Convite para entrar em um Grupo\n\nLink : ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `☂️`, [
{buttonId: `${prefix}entrar ${cnvt}`, buttonText: {displayText: `Aceitar`}, type: 1},
{buttonId: `${prefix}recusar ${sender}`, buttonText: {displayText: `Recusar`}, type: 1}], selo)
break

case 'recusar':
if(!SoDono) return reply("Só dono...")
conn.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break

case 'join': case 'entrar':
if (!SoDono) return reply('Somente proprietário!')
string = args.join(' ')
if (!string) return reply('Insira um link de convite ao lado do comando.')
if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
await conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if (String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if (String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

//////CONSULTAS////////
case 'cpf1':
case 'cpf2':
case 'cpf3':
case 'cpf4':
case 'score1':
case 'score2':
case 'parentes1':
case 'vizinhos1':
//@Paulo
addFilter(from);
if (!isGroup) return reply("Somente em grupos Lek")
if(q.length < 11 || q.length > 11)
reply(`formato inválido, talvez seja pq vc colocou traços ou pontos, formato:
✅ -> 00000000000 (11 digitos)
❌ -> 000.000.000-00 (14 digitos)`);
reply(`Aguarde, estou consultando na velocidade da luz⚡`);
upp = await axios.get(`https://japabotbuscas.shop/api/consultas?consult=${command}&apikey=teste&msg=${q}`);
reply(`${upp.data.message}
👤 USÚARIO: ${pushname}

🤖 BOT BY: ${NomeDoBot}`);
break;

case 'nome1':
case 'nome2':
case 'placa1':
case 'placa2':
case 'nascimento1':
case 'rg1':
//@Paulo
addFilter(from);
if (!isGroup) return reply("Somente em grupos Lek")
if (!isPremium) return reply(`vc não é premium`);
reply(`Aguarde, estou consultando`);
upp = await axios.get(`https://japabotbuscas.shop/api/consultas?consult=${command}&apikey=teste&msg=${q}`);
reply(`${upp.data.message}
👤 USÚARIO: ${pushname}

🤖 BY: ${NomeDoBot}`);
break;

case 'tel1':
case 'tel2':
//@Paulo
addFilter(from);
if (!isGroup) return reply("Somente em grupos Lek")
if (!isPremium) return reply(`vc não é premium`);
if(q.length == 0) {
let al_id = conn.message.extendedTextMessage.contextInfo.participant;
resultad4 = '@' + al_id.replace("@s.whatsapp.net", "");
resultad3 = resultad4.replace('@55', '')
if(resultad3.length === 10) {
resultad3 = q.replace(/(\d{2})/, "$19");
reply(`aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://japabotbuscas.shop/api/consultas?consult=${command}&apikey=teste&msg=${q}`);
reply(`${upp.data.message}
👤 USÚARIO: ${pushname}

🤖 BY: ${NomeDoBot}`);
} else if(q.length == 11) {
reply(`aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://japabotbuscas.shop/api/consultas?consult=${command}&apikey=teste&msg=${q}`);
reply(`${upp.data.message}
👤 USÚARIO: ${pushname}

🤖 BY: ${NomeDoBot}`);
} else {
reply('esse número não é um número brasileiro');
}
} else if(q.length === 10) {
resultad3 = q.replace(/(\d{2})/, "$19");
reply(`Aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://japabotbuscas.shop/api/consultas?consult=${command}&apikey=teste&msg=${q}`);
reply(`${upp.data.message}
👤 USÚARIO: ${pushname}

🤖 BY: ${NomeDoBot}`);
} else if(q.length === 13) {
com55k = `@${q}`;
resultad3 = com55k.replace('@55', '');
reply(`Aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://japabotbuscas.shop/api/consultas?consult=${command}&apikey=teste&msg=${q}`);
reply(`${upp.data.message}
👤 USÚARIO: ${pushname}

🤖 BY: ${NomeDoBot}`);
} else if(q.length === 11) {
reply(`Aguarde ${pushname}, estou consultando numero: ${q}`);
upp = await axios.get(`https://japabotbuscas.shop/api/consultas?consult=${command}&apikey=teste&msg=${q}`);
reply(`${upp.data.message}
👤 USÚARIO: ${pushname}

🤖 BY: ${NomeDoBot}`);
} else {
reply('numero invalido');
} 
break;
//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (isAntiFlood && budy.length >= limitefl && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
setTimeout( () => {
return reply('Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.')
console.log(color('Deram Spam de caracteres..','red'))
}, 100)
setTimeout(async () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

if(fs.existsSync(`./func/autorepo/autorepo_${from}.json`) && !info.key.fromMe) {


if (budy2.includes("bot")){
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
blars = ["oi😊", "oi como vc está😚", "oi vc viu meu pai"] 
blarnd = blars[Math.floor(Math.random() * blars.length)]
reply(blarnd)  
}

if (budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você e seu pai ir sua mãe ir sua irmã")
}

if (budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
adivinha = info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'WhatsApp web';
await conn.sendMessage(from, {text: adivinha}, {quoted: info})
}

//==============(figurinhas)===============\\

if (budy2.includes("anya")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu2.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("n foi eu"))
if (budy2.includes("não foi eu"))
if (budy2.includes("foi ele")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu4.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("porno"))
if (budy2.includes("sexy"))
if (budy2.includes("secso"))
if (budy2.includes("xvideo")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu7.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("morreu"))
if (budy2.includes("bot morreu")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu3.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("legal")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu5.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("boa noite")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu8.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("boa tarde")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu9.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("bom dia")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu10.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("wtf")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu12.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("pfr"))
if (budy2.includes("por favor")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu13.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("kkkkkk")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu15.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("vou te matar")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu16.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("ban")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu17.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("cachorro"))
if (budy2.includes("cão")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu18.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("anya fofah"))
if (budy2.includes("anya fofinha"))
if (budy2.includes("anya fofa"))
if (budy2.includes("anya bonita"))
if (budy2.includes("Anya bonitinha"))
if (budy2.includes("Anya linda")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu19.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("vagabunda"))
if (budy2.includes("cala a boca"))
if (budy2.includes("bater")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu20.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

if (budy2.includes("toma no cu"))
if (budy2.includes("tmnc")){
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu21.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

//==============(audios)===============\\

if (budy2.includes("corno")){
tujuh = fs.readFileSync('./audios/corno.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("posso ser adm"))
if (budy2.includes("me da adm")){
tujuh = fs.readFileSync('./audios/medaadm.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("bom dia")){
tujuh = fs.readFileSync('./audios/bomdia.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("boa tarde")){
tujuh = fs.readFileSync('./audios/boatarde.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("boa noite")){
tujuh = fs.readFileSync('./audios/boanoite.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("baiana"))
if (budy2.includes("baiano")){
tujuh = fs.readFileSync('./audios/baiano.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("amor")){
tujuh = fs.readFileSync('./audios/apaixonado.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("Amigo"))
if (budy2.includes("amizade")){
tujuh = fs.readFileSync('./audios/amizade.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("bora")){
tujuh = fs.readFileSync('./audios/borabil.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("ff"))
if (budy2.includes("free fire")){
tujuh = fs.readFileSync('./audios/freefire.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("carioca")){
tujuh = fs.readFileSync('./audios/carioca.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("vasco"))
if (budy2.includes("vascaino")){
tujuh = fs.readFileSync('./audios/vascaino.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("gado")){
tujuh = fs.readFileSync('./audios/gado.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("goiana"))
if (budy2.includes("goiano")){
tujuh = fs.readFileSync('./audios/goiano.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("Flamengo")){
tujuh = fs.readFileSync('./audios/Flamengo.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("receba")){
tujuh = fs.readFileSync('./audios/receba.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("negro"))
if (budy2.includes("negra")){
tujuh = fs.readFileSync('./audios/negro.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("gay")){
tujuh = fs.readFileSync('./audios/gay.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("feio")){
tujuh = fs.readFileSync('./audios/feio.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("senhores"))
if (budy2.includes("fino")){
tujuh = fs.readFileSync('./audios/fino.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("loli"))
if (budy2.includes("lolizinha")){
tujuh = fs.readFileSync('./audios/loli.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("palmeirense"))
if (budy2.includes("palmeiras")){
tujuh = fs.readFileSync('./audios/palmeiras.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("sexo")){
tujuh = fs.readFileSync('./audios/sexo.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (budy2.includes("sextou")){
tujuh = fs.readFileSync('./audios/sextou.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao && isBotGroupAdmins) { //CREDITOS TIAGO
 if (palavra.includes(budy2)) {
 if (!isGroupAdmins) {
 conn.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : info})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
conn.sendMessage(from, {text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : info}).catch(e => {
conn.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : info})
})       							
}, 0)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

 
//================(SIMIH-2)=================\\

if (!isCmd && isSimi2 && isGroup) {
if(isCmd || isUrl(budy2)) return
if(budy.length >= 500) return 
if(budy.includes("@55")) return
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)

if (sami) conn.sendMessage(from, {text: sami, thumbnail: blalogoofc}, {quoted: info});
}


 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}


//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if (isCmd) {
{setTimeout(() => {reagir(from, "❌")}, 300) 
}
if(info.key.fromMe) return 
blabla = fs.readFileSync('./logos/figu1.webp')
conn.sendMessage(from, {sticker: blabla}, {quoted: info})
}

//========================================\\

}
}
} 
msgupsrt().catch(e => {
console.log(e)
})
}

if(events['connection.update']) {
const update = events['connection.update']  
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(connection === "open") {
console.log(color(
`〔VJAPA BOT 3.5 - CONECTADO COM SUCESSO.. 〕`))
}
require("./armor/conect.js")(conn, connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications, qrcode)

file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color("Atualizando, index.js jaja...", "green"))
delete require.cache[file]
require(file)  
})

}

}
)

return conn

}

startAle().catch(e => {
console.log(e.stack+" -CONEXÃO...JF")
})

exports.startAle = startAle

file = require.resolve("./dono/settings.json")
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color("Atualizando, settings.json...", "green"))
delete require.cache[file]
require(file)
})