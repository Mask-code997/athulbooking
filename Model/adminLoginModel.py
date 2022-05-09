#!c:\python\python
import cgi, cgitb, json, os

print("Content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")
if action == "login":
    data = json.loads(form.getvalue("data"))
    sql = "select username from admin where username = %s and password = %s"
    #sql2 = "select h_id from manager where m_email = %s"
    vals = (data["uname"], data["pass"])
    #vals2 = (data["uname"])
    #res = json.loads(conn.db.getJSON(sql, vals))
    res =conn.db.getJSON(sql, vals)
   # res2 =conn.db.getJSON(sql2, vals2)
    print(res)   
    
    
         

