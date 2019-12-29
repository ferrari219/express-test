module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'board',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        /* column 속성들 */ type: DataTypes.STRING(20),
        allowNull: false
      },
      content: { type: DataTypes.STRING(100), allowNull: false }
    },
    { timestamps: true }
  );
};
