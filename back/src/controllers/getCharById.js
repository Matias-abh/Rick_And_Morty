const axios = require('axios');

const getCharById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const data = response.data;
        const character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
        };
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({error: error.message})
    };        
};


module.exports = {
    getCharById,
};