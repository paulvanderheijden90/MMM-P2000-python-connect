/// MMM-P2000.js



Module.register("MMM-P2000-python-connect", {

	display_data:"",
  getDom: function() {

    var e = document.createElement("div")

    e.id = "DISPLAY"
	
		Log.log("displaying in "+this.name +" data="+this.display_data);
	  e.innerHTML = this.display_data;	
	
    return e

  },

  notificationReceived: function(notification, payload, sender) {

    switch(notification) {

      case "DOM_OBJECTS_CREATED":

				Log.log(" starting in "+ this.name)

        var timer = setInterval(()=>{

          this.sendSocketNotification("GIVE_ME_DATA")

        }, 1000)

        break

    }

  },

  socketNotificationReceived: function(notification, payload) {

    switch(notification) {

      case "HERE_IS_DATA":

				Log.log("have data in "+this.name)

      //  var e = document.getElementById("DISPLAY")

        this.display_data = payload

				this.updateDom();

        break

    }

  },

})