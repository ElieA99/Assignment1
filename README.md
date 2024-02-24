Academy Assignment # 1
=================================================================================================================
Create your own repository on Github
Create a node JS project called: "Audio Library"
Setup the basic project and node modules
Prepare 3 models: Category Model, Albums Model and Song Model as explained below.
Create Function for adding a category in a category service
Create functions for Albums (Create, Update, Read and Delete)
Create Function for adding songs related to album
Create Function for deleting songs
Create Function to get Album by ID (basic album info)

Create a function "testCase" in app.js that will show us the following scenario:
Create a category in the DB named "Pop" with any description.
Create a category in the DB named "Jazz" with any description.
Create an album in the DB named "My Album" with any description and add 3 songs to it with the category "pop".
Create an album in the DB name "Temp Album"  with any description and add 3 songs to it with the category "Jazz".
Update the necessary fields on the albums when adding songs.
Delete the second album.
Delete the final song of the first album.

Category Model: name, description, createdAt, updatedAt
Album Model: name, description, showNbTracks, createdAt, updatedAt, lastSongAddedAt
Tracks Model: name, singer, category, album
=================================================================================================================