
import datetime
import numpy as np
x = " "
x = np.repeat(3, 50)
my_string = datetime.datetime.now().strftime("%I:%M:%S%p on %B %d, %Y") +" Hello World" 
print(my_string+str(x))