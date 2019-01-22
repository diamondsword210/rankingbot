// this code was given to me by 1988_YumChocolate from the ROBLOX API Server, all credits (as far as I know) go to him



const roblox = require('noblox.js')
const Discord = require('discord.js')
const client = new Discord.Client();
var token = "NTM0MDQzMDIyNjU3MTkxOTQ2.Dxz2Aw.WwtC8sP8RtQImotsN85duCtvEf4";

client.login(process.env.BOT_TOKEN)


var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_6D8841CEF220B1469A3DBC76C9A9B935096A9C53A192132A6CB3E662CB46B4B5BEFEF91E656413F992133B027F90B284CE641355369F8F402F9A7F3A4AB30E75F2345F8BA01C7D8FCE48269943B94361035F8EE122001EDBA71C4A4F215623E7610D16FD978017DDE626365AAB1125DDF66A73A26AD37F30E6E0B9B2A8AE0B2B3ABCECA0A695CFEDC162BB946E500C1B3ECC80C046133C364EDA3B6F9D729B3D54B4D0EA24BC202E1529F601E93F075B87308EED6FDAABECBB71FCE0DA4D8B223A851A51DF819870C91F437FAE4189AAEB0F1C63D88AB2C7C5C4745C54532B74A237DA0DEA1037816F77FF9C25033A6C6F9F429F03F64EA5C6546D5D4027D79FD1FCC9E7BF424BBD8D981492285C0763627AC03480D2397D4BCBAEB787FA8D7029A34EF614593D7A5C6F7B66CA559852E164F79B241A08C9EE27C628074BCE2A7D05C7D2";
var prefix = '!';
var groupId = 2789803;
var maximumRank = 255;

function login() {
return roblox.cookieLogin(cookie);
}

login() // Log into ROBLOX
    .then(function() { // After the function has been executed
        console.log('Logged in.') // Log to the console that we've logged in
    })
    .catch(function(error) { // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
        console.log(`Login error: ${error}`) // Log the error to console if there is one.
    });
 
function isCommand(command, message){
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}
 
client.on('message', (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
   
    if(isCommand('rank', message)){
       if(!message.member.roles.some(r=>["Hr"].includes(r.name)) ) // OPTIONAL - Checks if the sender has the specified roles to carry on further
        return message.reply("You can't use this command.");
        var username = args[1]
        var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
        if (!rankIdentifier) return message.channel.send("Please enter a rank");
        if (username){
            message.channel.send(`Checking ROBLOX for ${username}`)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        message.channel.send(`${id} is rank ${rank} and not promotable.`)
                    } else {
                        message.channel.send(`${id} is rank ${rank} and promotable.`)
                        roblox.setRank(groupId, id, rankIdentifier)
                        .then(function(newRole){
                            message.channel.send(`Changed rank to ${newRole.Name}`)
                        }).catch(function(err){
                            console.error(err)
                            message.channel.send("Failed to change rank.")
                        });
                    }
                }).catch(function(err){
                    message.channel.send("Couldn't get that player in the group.")
                });
            }).catch(function(err){
                message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
           });
       } else {
           message.channel.send("Please enter a username.")
       }
       return;
   }
})
var prefix = '!';

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Fun', message)){
    	message.reply('Fuck you. Theres your fun bitch');
    }
});
var prefix = '!';

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Ping', message)){
    	message.reply('Pong');
    }
});
var prefix = '!';

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Fuck', message)){
    	message.reply('Dont swear you bitch');
    }
});
var prefix = '!';

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Facts', message)){
    	message.reply('Did you know that if your left handed, you have a better chance to die? Lol.');
    }
});
var prefix = '!';

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Bad Joke', message)){
    	message.reply('Whats better than Ted Danson? Ted signing and Danson! Hahahahahahahaha.');
    }
});
