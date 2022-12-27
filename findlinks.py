import json
import requests
from bs4 import BeautifulSoup
from django.http import HttpResponse

def find_links(url):
  # Make a request to the given URL
  response = requests.get(url)

  # Parse the HTML content of the webpage
  soup = BeautifulSoup(response.text, 'html.parser')

  # Find all the links contained in the webpage
  links = []
  for link in soup.find_all('a'):
    links.append(link.get('href'))

  # Return the result as a dictionary with the input URL as the key and the list of links as the value
  result = {url: links}

  # Convert the result to JSON and return it
  return json.dumps(result)

