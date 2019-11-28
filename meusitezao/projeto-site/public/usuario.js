module.exports = (sequelize, DataTypes) => {
  let Usuario = sequelize.define('Usuario',{
  idUsuario: {
    field: 'idCadastro',
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },		
  nome: {
    field: 'nome',
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    field: 'cpf',
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    field: 'Email',
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    field: 'Senha',
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  tableName: 'TB_Cadastro', 
  freezeTableName: true, 
  underscored: true,
  timestamps: false,
});

  return Usuario;
};