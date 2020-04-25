import Sequelize, { Model } from 'sequelize';

class SparePartToProject extends Model {

    static tableName = "spo_spare_part_to_project";
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
    unit_cost: {type: Sequelize.INTEGER},
    oty_per_issue: {type: Sequelize.INTEGER},
    leadtime: {type: Sequelize.INTEGER},
    annual_usage: {type: Sequelize.INTEGER},
    cost_of_stock_out: {type: Sequelize.INTEGER},
    purchase_cost: {type: Sequelize.INTEGER},
    purchase_period: {type: Sequelize.INTEGER},
    shelf_life: {type: Sequelize.INTEGER},
    evaluation_period: {type: Sequelize.INTEGER},
    confidence_level: {type: Sequelize.INTEGER},
    service_factor: {type: Sequelize.INTEGER},
    stock_overhead: {type: Sequelize.INTEGER},
    max: {type: Sequelize.INTEGER},
    min: {type: Sequelize.INTEGER},
    safety_stock: {type: Sequelize.INTEGER},
    eoq: {type: Sequelize.STRING},
    stock_cost: {type: Sequelize.INTEGER},
    risk_of_not_having_stock: {type: Sequelize.FLOAT},
    risk_of_not_having_stock_during_lead_time: {type: Sequelize.FLOAT},
    incremental_increase: {type: Sequelize.FLOAT},
    cost_vs_risk_ratio: {type: Sequelize.FLOAT},
}

export default sequelize => {
    SparePartToProject.init(schema, {
        sequelize,
        tableName: SparePartToProject.tableName,
        timestamps: false
    });

    return SparePartToProject;
}