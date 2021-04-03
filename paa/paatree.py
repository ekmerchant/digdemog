import csv

class Demog(object):
    name = ""
    advisor = ""
    year = 0
    inst = ""
    
def makeDemog(name,year,field,inst,advisor):
    demog = Demog()
    demog.name = name
    demog.advisor = advisor
    demog.year = year
    if inst not in ["Columbia","Cornell","Chicago","Wisconsin","Michigan","Penn", "Minnesota","Princeton","Harvard","North Carolina","Berkeley"]:
        inst = "other"
    demog.inst = inst
    demog.field = field
    return demog

def addInfo(demog):
    return "{name:'" + demog.name + "',field:'" + demog.field + "',year:" + str(demog.year) + ",inst:'" + demog.inst + "',children:["

out = open("paatree.js","w")
outtxt = ("var paatree = [")

demogs = list()
tree = open("paapres.csv").read().split("\r\n")
tree.pop(0)
for person in tree:
    items = person.split(",")
    demogs.append(makeDemog(items[0],items[5],items[6],items[7],items[8]))
      
for demog in demogs:
    if demog.advisor == "" and demog.name != "Frederick Osborn":
        outtxt = outtxt + ("\n\t" + addInfo(demog))
        demog2 = list()
        for d2 in demogs:
            if d2.advisor == demog.name:
                demog2.append(d2)
        if len(demog2) == 0:
            outtxt = outtxt + ("]},")
        else:
            for dem2 in demog2:
                outtxt = outtxt + ("\n\t\t" + addInfo(dem2))
                demog3 = list()
                for d3 in demogs:
                    if d3.advisor == dem2.name:
                        demog3.append(d3)
                if len(demog3) == 0:
                    outtxt = outtxt + ("]},")
                else:
                    for dem3 in demog3:
                        outtxt = outtxt + ("\n\t\t\t" + addInfo(dem3))
                        demog4 = list()
                        for d4 in demogs:
                            if d4.advisor == dem3.name:
                                demog4.append(d4)
                        if len(demog4) == 0:
                            outtxt = outtxt + ("]},")
                        else:
                            for dem4 in demog4:
                                outtxt = outtxt + ("\n\t\t\t\t" + addInfo(dem4))
                                demog5 = list()
                                for d5 in demogs:
                                    if d5.advisor == dem4.name:
                                        demog5.append(d5)
                                if len(demog5) == 0:
                                    outtxt = outtxt + ("]},")
                                else:
                                    for dem5 in demog5:
                                        outtxt = outtxt + ("\n\t\t\t\t\t" + addInfo(dem5))
                                        demog6 = list()
                                        for d6 in demogs:
                                            if d6.advisor == dem5.name:
                                                demog6.append(d6)
                                        if len(demog6) == 0:
                                            outtxt = outtxt + ("]},")
                                        else:
                                            for dem6 in demog6:
                                                outtxt = outtxt + ("\n\t\t\t\t\t\t" + addInfo(dem6)+ "]},")
                                            outtxt = outtxt + ("\n\t\t\t\t]},")
                                    outtxt = outtxt + ("\n\t\t\t]},")
                            outtxt = outtxt + ("\n\t\t\t]},")
                    outtxt = outtxt + ("\n]},")
            outtxt = outtxt + ("\n]},")
outtxt = outtxt + ("\n];")
out.write(outtxt.replace(",\n]","\n]").replace(",]","]"))
out.close()
print "done"
