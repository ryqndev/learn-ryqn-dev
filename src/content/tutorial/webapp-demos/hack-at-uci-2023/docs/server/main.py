import requests

def get_restaurant_data(location):

    url = "https://api.yelp.com/v3/businesses/search"

    querystring = {"location": location}

    payload = ""
    headers = {"Authorization": "Bearer BpDr5okBZBAsS0fTKzf8gOIJmRL2aNUpBhOdHPZoLN2p_fTTuu6GUup7MN8uV0_TjFhcnrYsKSn-D773ujJpaDIYqFo8ZMmmmig9xlmBrWuWOxUmtX3auLHErlzZZXYx"}

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    return response.json()

    
