import Sequelize, { Model } from 'sequelize';

class SparePartToProject extends Model {

    static tableName = "spare_part_to_project";
    static RefSparePart;

    static associate(models){
        SparePartToProject.RefSparePart = SparePartToProject.belongsTo(models.SpareParts, {
            as: "ref_spare_part",
            foreignKey: "spare_parts_id"
        })
    }
}

const schema = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "spare_part_to_project_no"
    },
    project_id: Sequelize.INTEGER,
    spare_parts_id: Sequelize.INTEGER,
    onhand: Sequelize.INTEGER,
    on_pr: Sequelize.INTEGER,
    risk_of_stockout: Sequelize.FLOAT,
    demand: Sequelize.INTEGER,
    Criticality: Sequelize.STRING,
    eq_a: Sequelize.INTEGER,          
    eq_b: Sequelize.INTEGER,          
    eq_c: Sequelize.INTEGER,          
    pc_cost: Sequelize.INTEGER,          
    pc_lt: Sequelize.INTEGER,          
    pc_cbm: Sequelize.INTEGER,          
    lt: Sequelize.STRING,          
    unit_cost: Sequelize.INTEGER,          
    ss: Sequelize.INTEGER,          
    max: Sequelize.INTEGER,          
    min: Sequelize.INTEGER,
}

export default sequelize => {
    SparePartToProject.init(schema, {
        sequelize,
        tableName: SparePartToProject.tableName,
        timestamps: false
    });

    return SparePartToProject;
}