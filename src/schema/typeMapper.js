import models,{nodeTypeMapper} from '../models';
import types from './types'

const {
    Project,
    SpareParts,
    SparePartToProject
} = models;

export default ()=>{
    nodeTypeMapper.mapTypes({
        [Project.tableName]: types.ProjectType,
        [SpareParts.tableName]: types.SparePartsType,
        [SparePartToProject.tableName]: types.SparePartToProjectType,
    });
}