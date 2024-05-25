import requests

YELP_API_BEARER_KEY = ""


def get_restaurant_data(location):

    url = "https://api.yelp.com/v3/businesses/search"

    querystring = {"location": location}

    payload = ""
    headers = {"Authorization": "Bearer " + YELP_API_BEARER_KEY}

    response = requests.request(
        "GET", url, data=payload, headers=headers, params=querystring)

    print(response.json())
