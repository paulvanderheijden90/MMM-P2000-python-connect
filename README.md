# MMM-P2000-python-connect
Raspberry P2000 

The Files includes a python project based on:
https://nl.oneguyoneblog.com/2016/08/09/p2000-ontvangen-decoderen-raspberry-pi/#comment-488

So you will need a Raspberry and antenna thenn install the oneguy software.
After this you can run the python script and you get all the messages printed in the terminal.

The MMM-P2000.js is a module for the Magic mirror.

Put those 2 in the module map and add the module to the config file.
Youll need to put the P2000.py in the src map.
Then the magic mirror will start the Python project.


Update.
The function was called 100 times so it was blocking. Im Now add a new node helper will fix this problem.

