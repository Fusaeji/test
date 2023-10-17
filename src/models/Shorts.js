module.exports = (sequelize, DataTypes) => {
    const Shorts = sequelize.define('Shorts', {
        shorts_name: DataTypes.STRING,
        shorts_size: DataTypes.STRING,
        shorts_color: DataTypes.STRING,
        shorts_type: DataTypes.STRING,
        long: DataTypes.STRING
    })
    return Shorts
}