import os
import django
from django.template.loader import get_template

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'biz24.settings')
django.setup()

template = get_template('index.html')
html_content = template.render()

with open('./build/index.html', 'w') as f:
    f.write(html_content)
