const  ultrax = require('ultrax')

module.exports = {
    name: "wiki",
    aliases: ['wikipedia'],
    usage: "!wiki <anything you want to do wikipedia>",
    description: "wikipedia command",
    run: async (client, message, args) => {
        let query = args.join(" ")
        if(!query) return message.channel.send("Please include a query")

        const  res = new ultrax.Wikipedia({ 
	    message:  message, 
	    color:  "RANDOM", 
	    query:  query  
        })

        res.fetch() 
    }
}