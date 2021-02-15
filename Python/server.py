from http.server import HTTPServer, BaseHTTPRequestHandler
import ssl
from num2words import num2words
import json



class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        # Código para envio

        numToPass = self.path[1:]
        
        #print(numToPass)
        numInt = int(numToPass)

        base = {"extenso": num2words(numInt,lang='pt-br')}

        json_string = json.dumps(base)
        self.wfile.write(json_string.encode(encoding='utf_8'))
        self.send_response(200)




httpd = HTTPServer(('localhost', 3000), SimpleHTTPRequestHandler)
httpd.serve_forever()