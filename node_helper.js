/// node_helper.js



const spawn = require("child_process").spawn



var NodeHelper = require("node_helper")
var process = spawn("python", ["/home/pi/src/P2000.py"])






module.exports = NodeHelper.create({



  socketNotificationReceived: function(notification, payload) {



    switch(notification) {



      case "GIVE_ME_DATA":



        this.job()



        break



    }



  },



  job: function() {



    



    process.stdout.on("data", (data)=>{

      console.log(data)

      var result = String.fromCharCode.apply(null, new Uint16Array((data)))

      this.sendSocketNotification("HERE_IS_DATA", result)



    })



  }



})

