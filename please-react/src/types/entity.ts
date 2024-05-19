// Тип для атрибута сущности
interface EntityAttribute {
    entity_attr_id: number;
    rattr_type: string;
    rattr_name: string;
    rattr_label: string;
    rattr_view: boolean;
    rattr_no: number;
    rattr_group_name: string;
    rattr_group_label: string;
    rattr_group_no: number;
    entity_attr_value: string;
    rattr: number;
    entity: number;
}

// Тип для сущности
interface Entity {
    entity_id: number;
    rentity_type_name: string;
    rentity_type_label: string;
    entity_attr: EntityAttribute[];
    ts_deleted: string | null;
    user_deleted: string | null;
    chatroom_uuid: string | null;
    rentity_type: number;
}

export type {Entity, EntityAttribute};