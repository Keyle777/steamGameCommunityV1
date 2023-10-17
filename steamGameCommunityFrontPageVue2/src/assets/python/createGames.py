from flask import Flask, jsonify
import random
import string
import urllib.parse

app = Flask(__name__)

def generate_random_game():
    game = {
            'id': ''.join(random.choices(string.ascii_letters + string.digits, k=8)),
            'imgUrl': f'/img/{random.choice(["Apex Legends™.jpg", "Baldur's Gate 3.jpg"])}',
            'price': random.randint(10, 100),
            'approvalRating': round(random.uniform(0, 1), 2),
            'title': 'Game Title'
        }
    return game

def generate_random_discounted_games(num_games):
    discounted_games = []
    for _ in range(num_games):
        game = generate_random_game()
        discounted_games.append(game)
    return discounted_games

@app.route("/getData")
def get_data():
    num_games = 20
    games = generate_random_discounted_games(num_games)
    return jsonify(games)

if __name__ == "__main__":
    app.run(port=8081)