import plotly.express as px
import plotly.data as data
import os


FIGURES_FOLDER_NAME = 'figures'

if(not os.path.exists(FIGURES_FOLDER_NAME)): 
    os.mkdir(FIGURES_FOLDER_NAME)

# # Sample code taken from their official documentation quickstart guide.
# # https://plotly.com/python/getting-started/
# fig = px.bar(x=["a", "b", "c"], y=[1, 3, 2])
# fig.write_html(file=f"{FIGURES_FOLDER_NAME}/first_figure.html", auto_open=True)

# # If you want to save the file as an image, use write_image instead of write_html
# # fig.write_image(f"{FIGURES_FOLDER_NAME}/first_figure.png", format="png")

 
# """"
# Getting Data section:
# https://learn.ryqn.dev/tutorial/intro-to-data-visualization/python/plotly#getting-the-data
# """
# # Each row represents the availability of car-sharing services near the centroid of a zone in Montreal over a month-long period.
# car_share_data = data.carshare()
# print(car_share_data)

# # Gapminder - one of the most popular libraries for data scientists to learn with about countries and their populations.
# gapminder_data = data.gapminder()
# print(gapminder_data)


# """
# Creating a heatmap
# """
# fig = px.density_heatmap(data_frame=gapminder_data, x="year", y="country", z="pop",nbinsx=20, nbinsy=20)

# # fig = px.density_heatmap(data_frame=gapminder_data, nbinsx=20, nbinsy=20)
# fig.write_html(file=f"{FIGURES_FOLDER_NAME}/basic_heatmap.html", auto_open=True)


"""
Formatting the data
"""
# formatted_data = gapminder_data[gapminder_data['continent'] == 'Americas']
# formatted_data["pop_pct_change"] = formatted_data.groupby("country")["pop"].apply(lambda x: x.pct_change())

# fig = px.density_heatmap(data_frame=formatted_data, x="year", y="country", z="pop_pct_change", nbinsx=20, nbinsy=20)

# # fig = px.density_heatmap(data_frame=gapminder_data, nbinsx=20, nbinsy=20)
# fig.write_html(file=f"{FIGURES_FOLDER_NAME}/formatted_heatmap.html", auto_open=True)


# import plotly.express as px
# import plotly.data as data

gapminder_data = data.gapminder()

fig = px.density_heatmap(data_frame=gapminder_data, x="year", y="country", z="pop", histfunc="avg")
fig.show()