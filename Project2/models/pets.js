module.exports = function(sequelize, DataTypes) {
    const Pets = sequelize.define('Pets', {
        pet_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        
        pet_breed: {
            type: DataTypes.STRING,
            allowNull: false
        },

        pet_availability: {
            type: DataTypes.STRING
        },

        pet_image:{
            type: DataTypes.STRING,
            allowNull: false
        

        }
        

    });

    return Pets;

}