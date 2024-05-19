import { action, observable, makeObservable } from 'mobx';
import {StageActions} from "../types/entityStage.ts";
import {Entity} from "../types/entity.ts";

class StageActionStore{
    currentActions: StageActions[] | null = null;
    entityID: number | null = null;
    currentEntity: Entity | null = null;

    constructor() {
        makeObservable(this,{
            currentActions : observable,
            entityID: observable,
            currentEntity : observable,
            setCurrentAction : action,
            setEntityID : action,
            setCurrentEntity : action,
        })
    }

    setCurrentAction(actions: StageActions[] | null){
        this.currentActions = actions;
    }

    setEntityID(id: number | null){
        this.entityID = id;
    }

    setCurrentEntity(entity: Entity | null){
        this.currentEntity = entity;
    }

}

export default new StageActionStore();