let fav = [];

const getFavs = (req, res) => {
    try {
        if (fav.length > 0) {
            res.status(200).json(fav);
        } else {
            res.status(200).send('No characters found..');
        };
    } catch (error) {
        res.status(404).json({error: error.message});
    };
};

const postFav = (req, res) => {
    const { body } = req;
    try {
        if (!Object.entries(body).length) {
            res.status(200).send('Character body not found..');
        } else {
            fav.push(body);
            res.status(200).json(fav);
        };
    } catch (error) {
        res.status(404).json({error: error.message});
    };
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    try {
        if (fav.find((char) => char.id === Number(id))) {
            fav = fav.filter((char) => char.id !== Number(id));
            res.status(200).json(fav);
        } else {
            res.status(200).send('ID character not found..');
        };
    } catch (error) {
        res.status(404).json({error: error.message});
    };
    
};


module.exports = {
    getFavs,
    postFav,
    deleteFav,
};