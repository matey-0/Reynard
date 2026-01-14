import http.server
import subprocess
import tempfile
import os

SECRET_TOKEN = "YOUR KEY HERE"

class VimHandler(http.server.BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Vim-Token')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        token = self.headers.get('X-Vim-Token')
        if token != SECRET_TOKEN:
            self.send_response(403)
            self.end_headers()
            self.wfile.write(b"Unauthorized: Invalid Token")
            return

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')

        with tempfile.NamedTemporaryFile(suffix=".txt", delete=False) as tf:
            tf.write(post_data.encode('utf-8'))
            temp_path = tf.name

        subprocess.run(['ghostty', '-e', 'vim', '-c', 'syntax on', '-c', 'filetype detect', '-c', 'set noeol nofixeol', temp_path])

        with open(temp_path, 'r', encoding='utf-8') as f:
            new_text = f.read()

        os.remove(temp_path)

        self.send_response(200)
        self.end_headers()
        self.wfile.write(new_text.encode('utf-8'))

print(f"Vim Bridge secured and running on http://localhost:10992")
http.server.HTTPServer(('localhost', 10992), VimHandler).serve_forever()
