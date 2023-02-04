const axios = require('axios');

const getCharDetail = async (req, res) => {
    const { detailId } = req.params;
    
    try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        const data = response.data;
        const character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin.name,
        };
        res.status(200).json(character);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    };
};


module.exports = {
    getCharDetail,
};