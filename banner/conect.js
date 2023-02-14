const { state, saveCreds } = await useMultiFileAuthState('./ANYA-QR.json')
console.log(banner.string)
console.log(banner2.string)
const dk = AnyWASocket({
logger: P({ level: "silent" }),
printQRInTerminal: true,
auth: state
})
dk.ev.on('creds.update', saveCreds);
store.bind(dk.ev)
dk.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
dk.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
dk.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
if(shouldReconnect) {
startyniakami()
}
} else if(connection === "open") {
console.log(`${color(`Bot Conectado Com Sucesso!`,'white')}`)
}
})
console.log(`${color(`Nome Do Dono: ${nomeDono}`,'white')}`)
console.log(`${color(`Criador Do Bot: Dk`,'pink')}`)