
template = open("anet1925.html").read()

for i in range(1935,2005,10):
    oldtext = template.replace("1915","<pre>").replace("1925","<now>").replace("1935","<post>")
    newtext = oldtext.replace("<pre>",str(i-10)).replace("<now>",str(i)).replace("<post>",str(i+10)).replace("1934",str(i+9))
    newfile = open("anet" + str(i) + ".html","w")
    newfile.write(newtext)
    newfile.close()
    
print "done"