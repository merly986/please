// Тип для доступного актера
interface AvailableActor {
    ractor_auth_group_name: string;
    ractor_label: string;
    ractor_name: string;
}

// Тип для доступного действия
interface AvailableAction {
    raction_id: number;
    raction_name: string;
    raction_label: string;
    available_actors: AvailableActor[];
}

// Тип для этапа сущности
interface StageActions {
    entity_stage_id: number;
    entity_id: number;
    rstage_name: string;
    rstage_label: string;
    available_actions: AvailableAction[];
}

export type {
    StageActions,
    AvailableAction
};