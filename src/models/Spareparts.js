import Sequelize, {Model} from 'sequelize';

class SpareParts extends Model {
  static tableName = "spo_spare_parts";

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
  spare_parts_name: Sequelize.STRING,
  onhand: Sequelize.INTEGER,
  on_pr: Sequelize.INTEGER,
  risk_of_stockout: Sequelize.FLOAT,
  demand: Sequelize.INTEGER,
  criticality: Sequelize.STRING,
  eq_a: Sequelize.INTEGER,         
  eq_b: Sequelize.INTEGER,         
  eq_c: Sequelize.INTEGER,          
  pc_cost: Sequelize.INTEGER,         
  pc_lt: Sequelize.INTEGER,         
  pc_cbm: Sequelize.INTEGER,          
  lt: Sequelize.INTEGER,          
  unit_cost: Sequelize.INTEGER,         
  ss: Sequelize.INTEGER,         
  max: Sequelize.INTEGER,         
  min: Sequelize.INTEGER, 
}

export default sequelize => {
  SpareParts.init(schema, {
      sequelize,
      tableName: SpareParts.tableName,
      timestamps: false
  });

  return SpareParts;
}