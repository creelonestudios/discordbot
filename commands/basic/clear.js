module.exports = {
    commands: ['clear', 'c'],
    expectedArgs: '<amount>',
    permissionError: 'I dont think you should be able to execute this command :grin:',
    minArgs: 1,
    maxArgs: 1,
    description: "Clear the chat",
    callback: (message, arguments, text) => {
        let msgs = message.content.split(" ").slice(1).join("");

        if(isNaN(msgs)) return message.reply("Amount needs to be a number");
        message.delete();
        message.channel.bulkDelete(msgs);
        message.channel.send("I deleted " + msgs + " messages.").then(msg=>msg.delete({timeout: "3000"}));
    },
    permissions: ["MANAGE_MESSAGES"],
    requiredRoles: []
}