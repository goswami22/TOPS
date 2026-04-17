import requests

def get_joke():
    url = "https://official-joke-api.appspot.com/random_joke"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        return data['setup'], data['punchline']
    
    except:
        return "Error", "Could not fetch joke"

# 🔁 For loop to get 3 jokes
for i in range(3):
    setup, punchline = get_joke()
    
    print(f"\n😂 Joke {i+1}:")
    print(setup)
    print(punchline)