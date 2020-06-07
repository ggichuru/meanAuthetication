module.exports.profileRead = (req, res) => {
    console.log('Reading profile id: ' + req.params.userid);
    res.status(200);
    res.json({
        message: 'Profile Read' + req.params.userid
    });
};

