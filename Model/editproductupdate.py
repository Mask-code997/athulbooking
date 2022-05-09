#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewproduct":
    sql = "select * from employee where  pid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)  
    print(res)
elif action == "updateproduct":
    data = json.loads(form.getvalue("data"))
    sql ="update employee set pname=%s,pcode=%s,bname=%s,price=%s where pid= %s"
    vals =(data["pname"],data["pcode"],data["bname"],data["price"],data["pid"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

