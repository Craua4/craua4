from bs4 import BeautifulSoup

# Sample HTML data (bypasses network connections and 403 errors)
html_content = """
<html>
    <head><title>Test Page</title></head>
    <body>
        <p>BeautifulSoup is working correctly!</p>
    </body>
</html>
"""

# Parse the HTML with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# Print the page title and paragraph
print("Page Title:", soup.title.string)
print("First Paragraph:", soup.p.text)