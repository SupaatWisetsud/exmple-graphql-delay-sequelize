import Sequelize, { Model } from 'sequelize';

class Project extends Model {
    static tableName = "spo_project";
    static RefSparePart;

    static associate(models) {
        Project.RefSparePart = Project.hasMany(models.SparePartToProject, {
            as: "ref_spare_part",
            foreignKey: 'project_id'
        })
    }
}

const schema = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "project_no"
    },
    project_name: Sequelize.STRING,
    is_draft: Sequelize.BOOLEAN
}

export default sequelize => {
    Project.init(schema, {
        sequelize,
        tableName: Project.tableName,
        timestamps: false
    });

    return Project;
}