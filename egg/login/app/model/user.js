/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable key-spacing */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */
module.exports = app => {
    const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
    const User = app.model.define('users', {
        user_id: { type: STRING(255), autoIncrement: true, primaryKey: true},
        email: { type: STRING(255), allowNull: false },
        username: { type: STRING(255), allowNull: false },
        password: { type: STRING(255), allowNull: false },
        mobile: STRING(11),
        sex: { type: INTEGER, defaultValue: 0 },
        created_at: { type: DATE, defaultValue: NOW },
        updated_at: { type: DATE, defaultValue: NOW },
  },
  {
      freezeTableName: true,
  });
  return User;
}