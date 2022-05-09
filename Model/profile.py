#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="profile":
    data=json.loads(form.getvalue("data"))
    sql="insert into profile values(%s,%s,%s,%s,%s)"
    vals=(data['name'],data['email'],data['mob'],data['state'],data['lino'])
    result=c.db.setValues(sql,vals)
    print(result)
