import Sequelize, {Model} from 'sequelize';

class SpareParts extends Model {
  static tableName = "spare_parts";

  static associate(models) {

  }
}

const schema = {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "spare_parts_no"
  },
  spare_parts_name: Sequelize.STRING
}

export default sequelize => {
  SpareParts.init(schema, {
      sequelize,
      tableName: SpareParts.tableName,
      timestamps: false
  });

  return SpareParts;
}