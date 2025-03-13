const text = "Hello\nI'm\nismail";
text.split('\n')
.map(n=>n.toUpperCase())
.filter(n=>n.includes("I"))
.forEach(n=>console.log(n)); 

