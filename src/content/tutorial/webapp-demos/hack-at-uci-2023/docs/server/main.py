import requests



def get_restaurant_data(location):
    url = "https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer lqOmBookEwFPaVwHO-0tyHjxz9SlFBkXdsZ6B4ZgaX27_3N8vFXxZMgACziTBSVzKt-LtjI_HmB5M3BOzERMuFPjLhK-i8txM9Gzt1-1AVlf4XexTKOlSt74ZoPcY3Yx"
    }

    response = requests.get(url, headers=headers)

    return response.json()

print(get_restaurant_data(location="irvine"))
