// Import necessary modules
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();
app = express();

const categoryRoute = require('./src/Category/category.routes');
const albumRoute = require('./src/Album/album.routes');
const userRouter = require('./src/User/user.routes');
const songRouter = require('./src/Songs/Songs.routes');

//Importing Services
// const { addCategory } = require('./Category/categoryService');
// const { addAlbum, deleteAlbum, updateAlbum, getAlbum } = require('./Album/albumService');
// const { deleteSong, addSong } = require('./Songs/songService');

app.use(express.json());
URI = process.env.DB_URL;
PORT = process.env.PORT

//category route
app.use('/cat', categoryRoute);

//album route
app.use('/album', albumRoute)

//user route
app.use('/user', userRouter);

//song route
app.use('/song', songRouter);


//THE TEST FUNCTION
// async function testCase() {

//     try {
//         //CREATE THE REQUIRED CATERGORY   
//         const POP = await addCategory('POP', 'SOME DESCIPTION ABOUT POP MUSIC');
//         const JAZZ = await addCategory('JAZZ', 'SOME DESCRIPTION ABOUT JAZZ MUSIC');

//         //CREATING THE 2 ALBUMS
//         const myAlbum = await addAlbum('My Album', 'Description About My Album with POP songs');
//         const tempAlbum = await addAlbum('Temp Album', 'Description About Temp Album with JAZZ songs');

//         //ADD 3 SONGS TO MY ALBUM
//         const song1 = await addSong('Song 1', 'Singer A', POP._id, myAlbum._id);
//         const song2 = await addSong('Song 2', 'Singer B', POP._id, myAlbum._id);
//         const song3 = await addSong('Song 3', 'Singer C', POP._id, myAlbum._id);

//         //Update the necessary fields on the albums when adding songs. MY ALBUM
//         await updateAlbum(myAlbum._id, { showNbTracks: true, lastSongAddedAt: song3.updatedAt });

//         //ADD 3 SONGS TO TEMP ALBUM
//         const song4 = await addSong('Song 4', 'Singer 1', JAZZ._id, tempAlbum._id);
//         const song5 = await addSong('Song 5', 'Singer 2', JAZZ._id, tempAlbum._id);
//         const song6 = await addSong('Song 6', 'Singer 3', JAZZ._id, tempAlbum._id);

//         // Update the necessary fields on the albums when adding songs. TEMP ALBUM
//         await updateAlbum(tempAlbum._id, { showNbTracks: true, lastSongAddedAt: song6.updatedAt });

//         //Delete the second album.
//         await deleteAlbum(tempAlbum._id);

//         //Delete the final song of the first album.
//         await deleteSong(song3._id);
//     } catch (error) {
//         throw error
//     }
// }
//use the function
// testCase()


// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4 //To Prevent Connection Error
})
    .then(result => {
        app.listen(PORT, () => { console.log(`Server is running on PORT :${PORT}`); })
    })
    .catch(err => {
        console.log(err);
    });
