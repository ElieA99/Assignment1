const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
key = process.env.JWTKEY

function isAuth(req, res, next) {
    const auth = req.get('Authorization');
    if (!auth) { return res.status(401).json({ error: 'Not authenticated.' }) }

    try {
        const decoded = jwt.verify(auth, key);
        req.userID = decoded;

        //make a specified user as authenticated to this case
        const allowed = "65e362d17eb871aa52883650"//the user id   
        if (!allowed) { return res.status(403).json({ error: 'Denied' }); }

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid' })
    }

}

module.exports = { isAuth };