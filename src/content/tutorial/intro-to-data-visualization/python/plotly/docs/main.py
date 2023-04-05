import plotly.express as px
import plotly

# Sample code taken from their official documentation quickstart guide.
# https://plotly.com/python/getting-started/
fig = px.bar(x=["a", "b", "c"], y=[1, 3, 2])
fig.write_html(file='first_figure.html', auto_open=True)

# If you want to save the file as an image, use write_image instead of write_html
# fig.write_image("first_figure.png", format="png")

 
""""
Getting Data section:
https://learn.ryqn.dev/tutorial/intro-to-data-visualization/python/plotly#getting-the-data
"""
# Each row represents the availability of car-sharing services near the centroid of a zone in Montreal over a month-long period.
car_share_data = plotly.data.carshare()
print(car_share_data)

# Gapminder - one of the most popular libraries for data scientists to learn with about countries and their populations.
gapminder_data = plotly.data.gapminder()
print(gapminder_data)
