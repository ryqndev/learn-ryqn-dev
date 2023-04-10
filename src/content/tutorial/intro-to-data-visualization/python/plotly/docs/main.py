import plotly.express as px
import plotly.data as data
import plotly.graph_objects as go
import os

FIGURES_FOLDER_NAME = 'figures'

if (not os.path.exists(FIGURES_FOLDER_NAME)):
    os.mkdir(FIGURES_FOLDER_NAME)

# Sample code taken from their official documentation quickstart guide.
# https://plotly.com/python/getting-started/
fig = px.bar(x=["a", "b", "c"], y=[1, 3, 2])
fig.write_html(file=f"{FIGURES_FOLDER_NAME}/first_figure.html", auto_open=True)

# If you want to save the file as an image, use write_image instead of write_html
# fig.write_image(f"{FIGURES_FOLDER_NAME}/first_figure.png", format="png")


"""
Getting Data section:
https://learn.ryqn.dev/tutorial/intro-to-data-visualization/python/plotly#getting-the-data

"""
# Each row represents the availability of car-sharing services near the centroid of a zone in Montreal over a month-long period.
car_share_data = data.carshare()
print(car_share_data)

# Gapminder - one of the most popular libraries for data scientists to learn with about countries and their populations.
gapminder_data = data.gapminder()
print(gapminder_data)


"""
Creating a basic heatmap:
https://learn.ryqn.dev/tutorial/intro-to-data-visualization/python/plotly#basic-heatmap

"""
fig = px.density_heatmap(
    data_frame=gapminder_data,
    x="year",
    y="country",
    z="pop",
    histfunc="avg",
    nbinsx=20,
    nbinsy=20
)

fig.write_html(
    file=f"{FIGURES_FOLDER_NAME}/basic_heatmap.html",
    auto_open=True
)


"""
Formatting the data:
https://learn.ryqn.dev/tutorial/intro-to-data-visualization/python/plotly#formatting-the-data

"""

# Filter the data to only include the Americas
formatted_data = gapminder_data[gapminder_data['continent'] == 'Americas']

# Calculate the percentage change in population from the previous year
formatted_data['pop_pct_change'] = formatted_data.groupby("country")['pop'].pct_change() * 100

# Another way of doing the above:
# formatted_data["pop_pct_change"] = formatted_data.groupby("country")["pop"].apply(lambda x: x.pct_change() * 100)

fig = px.density_heatmap(
    data_frame=formatted_data,
    x="year",
    y="country",
    z="pop_pct_change",
    histfunc="avg",
    nbinsx=20,
    nbinsy=20
)
fig.write_html(
  file=f"{FIGURES_FOLDER_NAME}/formatted_heatmap.html",
  auto_open=True
)

formatted_data = gapminder_data[gapminder_data['continent'] == 'Americas']
formatted_data['pop_pct_change'] = formatted_data.groupby("country")[
    'pop'].pct_change() * 100

formatted_data = formatted_data[formatted_data['year'] >= 1957]


country_sum = formatted_data.groupby(
    'country')['pop_pct_change'].sum().reset_index()
formatted_data = formatted_data.merge(country_sum, on='country')
formatted_data = formatted_data.sort_values(by='pop_pct_change_y')

fig = px.density_heatmap(
    data_frame=formatted_data,
    x="year",
    y="country",
    z="pop_pct_change_x",
    histfunc="avg",
    nbinsx=20,
    nbinsy=20,
    title="Population Growth in the Americas",
    labels={
        "country": "Country",
        "year": "Year",
    },
)
fig.update_traces(
    hovertemplate='Country: %{y}<br>Year: %{x}<br>Pop. growth (%): %{z:.2f}<br>',
)

fig.update_layout(
    coloraxis_colorbar={
        "title": "Population Growth (%)"
    },
)

fig.write_html(
    file=f"{FIGURES_FOLDER_NAME}/gdp_formatted_heatmap.html",
    auto_open=True
)
