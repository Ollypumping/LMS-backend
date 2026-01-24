export default (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      matricNumber: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      entryYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      programDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      programType: {
        type: DataTypes.ENUM("Undergraduate", "Postgraduate"),
        allowNull: false,
      },
    },
    {
      tableName: "students",
    }
  );

  Student.associate = (models) => {
    Student.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      as: "user",
    });
  };

  return Student;
};
