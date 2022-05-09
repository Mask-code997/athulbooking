#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="register":

  fileitem = form["img"]
  pname = form.getvalue("pname")
  pcode = form.getvalue("pcode")
  bname = form.getvalue("bname")
  price = form.getvalue("price")


  sql1 = "select ifnull(max(pid),0)+1 pid from employee" #finding the next car_id for giving that car_id as image name
  cnid = json.loads(c.db.getJSON(sql1))
  cnid = cnid[0]["pid"] 
  if fileitem.filename:

    fn = os.path.basename(fileitem.filename)
    fn = fn.split(".") #passing image extension to fn
    fn = fn[len(fn)-1]
    sql = "insert into employee values(%s, %s, %s, %s, %s, %s, %s)"
    vals = (cnid,pname,pcode,bname,price,fn,0)
    result = c.db.setValues(sql, vals)
    #print(rowCnt)
    print(result)
    fn = "%s.%s" % (cnid,fn) #cnid is nextcar_id and fn is image extention
    open("../uploads/" + fn, "wb").write(fileitem.file.read()) 
     
  
    
