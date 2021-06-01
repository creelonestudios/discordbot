const discord = require("discord.js");
const fs = require("fs");
const xpfile = require("../../xp.json");
const ascii = require("ascii-art");
const canvacord = require("canvacord");
const utils = require("../../utils/util-functions.js");
const axios = require("axios");

module.exports = {
    commands: ['quote'],
    expectedArgs: '',
    permissionError: 'I dont think you should be able to execute this command :grin:',
    minArgs: 0,
    maxArgs: 0,
    callback: async function(message, arguments, text) {
        const url = "http://api.quotable.io/random";
        let { data } = await axios.get(url);

        message.channel.send(data["content"] + " *~" + data["author"] + "*");
    },
    permissions: [],
    requiredRoles: []
}