const axios = require('axios');

const getAllCharacters = async (req, res) => {
    try {
        const response = await axios(`https://rickandmortyapi.com/api/character`)
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: error.message})
    };        
};


module.exports = {
    getAllCharacters,
};