/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicationmaster', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RowStatus: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IconImagePath: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    AppType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ModifyTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ModifyBy: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TimeStatus: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    AppUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'applicationmaster',
    timestamps: false
  });
};
