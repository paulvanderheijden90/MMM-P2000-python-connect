/// node_helper.js



const spawn = require("child_process").spawn



var NodeHelper = require("node_helper")
var path = require ('path')


module.exports = NodeHelper.create({



  socketNotificationReceived: function(notification, payload) {



    switch(notification) {



      case "GIVE_ME_DATA":



        this.job()



        break



    }



  },



  job: function() {



    var process = spawn("/usr/bin/python", [path.join(__dirname, "testit.py")])

		 process.stderr.on("data", (data)=>{
			console.log("p2000 process errorr="+data)
		})
    process.stdout.on("data", (data)=>{

      console.log("p2000 data ="+data)
			
      var result = String.fromCharCode.apply(null, new Uint16Array((data)))

      this.sendSocketNotification("HERE_IS_DATA", result)



    })



  }



})

