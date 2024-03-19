-- SQL Manager for PostgreSQL 6.4.1.56163
-- ---------------------------------------
-- Host      : eci-db1-dev.eci.local
-- Database  : cscd
-- Version   : PostgreSQL 14.7 on x86_64-pc-linux-gnu, compiled by gcc (AstraLinuxSE 8.3.0-6) 8.3.0, 64-bit



CREATE SCHEMA pls AUTHORIZATION d79276;
SET check_function_bodies = false;
--
-- Structure for table entity : 
--
SET search_path = pls, pg_catalog;
CREATE TABLE pls.entity (
    entity_id integer DEFAULT nextval('entity_ent_id_seq'::regclass) NOT NULL,
    rentity_type_id integer,
    ts_deleted timestamp without time zone,
    user_deleted varchar(50),
    chatroom_uuid uuid
)
WITH (oids = false);
--
-- Structure for table ref_entity_type : 
--
CREATE TABLE pls.ref_entity_type (
    rentity_type_id integer DEFAULT nextval('entity_types_ent_type_id_seq'::regclass) NOT NULL,
    rentity_type_name varchar(255),
    rentity_type_label varchar(255),
    rroute_id integer
)
WITH (oids = false);
--
-- Definition for type attr_type : 
--
CREATE TYPE pls.attr_type AS ENUM (
  'string', 'date', 'number', 'dict', 'outer', 'longstring', 'bool', 'file'
);
--
-- Structure for table ref_attr : 
--
CREATE TABLE pls.ref_attr (
    rattr_id serial NOT NULL,
    rattr_name varchar(255),
    rattr_type attr_type,
    rattr_label varchar(255),
    rattr_required boolean,
    rattr_system boolean,
    rattr_group_id integer,
    rattr_no smallint,
    rattr_view boolean,
    rattr_multilple boolean
)
WITH (oids = false);
--
-- Structure for table entity_attr : 
--
CREATE TABLE pls.entity_attr (
    entity_attr_id integer DEFAULT nextval('entity_attr_ent_attr_id_seq'::regclass) NOT NULL,
    rattr_id integer,
    entity_id integer,
    entity_attr_value varchar
)
WITH (oids = false);
--
-- Structure for table ref_attr_group : 
--
CREATE TABLE pls.ref_attr_group (
    rattr_group_id integer DEFAULT nextval('ref_attr_group_rag_id_seq'::regclass) NOT NULL,
    rattr_group_name varchar(255),
    rattr_group_label varchar(255),
    rattr_group_no smallint,
    rentity_type_id integer
)
WITH (oids = false);
--
-- Structure for table entity_stage : 
--
CREATE TABLE pls.entity_stage (
    entity_stage_id serial NOT NULL,
    rstage_id integer,
    entity_id integer
)
WITH (oids = false);
--
-- Structure for table ref_stage : 
--
CREATE TABLE pls.ref_stage (
    rstage_id serial NOT NULL,
    rstage_name varchar(255),
    rstage_label varchar(255),
    rentity_type_id integer,
    rstage_wait_others boolean,
    rroute_id integer NOT NULL
)
WITH (oids = false);
--
-- Structure for table ref_actor : 
--
CREATE TABLE pls.ref_actor (
    ractor_id serial NOT NULL,
    ractor_auth_group_name varchar(255),
    ractor_label varchar(255)
)
WITH (oids = false);
--
-- Structure for table ref_stage_action : 
--
CREATE TABLE pls.ref_stage_action (
    rstage_action_id integer DEFAULT nextval('ref_stage_actor_ref_stage_actor_id_seq'::regclass) NOT NULL,
    rstage_id integer,
    raction_id integer
)
WITH (oids = false);
--
-- Structure for table ref_attr_dict : 
--
CREATE TABLE pls.ref_attr_dict (
    rattr_dict_id serial NOT NULL,
    rattr_id integer,
    rattr_dict_no smallint,
    rattr_dict_name varchar(255),
    rattr_dict_label varchar(255)
)
WITH (oids = false);
--
-- Structure for table ref_attr_outer : 
--
CREATE TABLE pls.ref_attr_outer (
    rattr_outer_id serial NOT NULL,
    rattr_id integer,
    rattr_outer_name varchar(255),
    rattr_outer_label varchar(255),
    rattr_outer_fields varchar(255),
    rattr_outer_path varchar(255),
    rattr_outer_key varchar(255),
    rattr_outer_sort varchar(255)
)
WITH (oids = false);
--
-- Structure for table ref_action : 
--
CREATE TABLE pls.ref_action (
    raction_id integer DEFAULT nextval(('pls.ref_action_raction_id_seq'::text)::regclass) NOT NULL,
    raction_name varchar(255),
    raction_label varchar(255)
)
WITH (oids = false);
--
-- Definition for sequence ref_action_raction_id_seq : 
--
CREATE SEQUENCE pls.ref_action_raction_id_seq
    START WITH 1
    INCREMENT BY 1
    MAXVALUE 2147483647
    NO MINVALUE
    CACHE 1;
--
-- Structure for table ref_attr_actor : 
--
CREATE TABLE pls.ref_attr_actor (
    rattr_actor_id serial NOT NULL,
    rattr_id integer,
    ractor_id integer,
    rstage_id integer
)
WITH (oids = false);
--
-- Definition for foreign data wrapper postgres_fdw : 
--
CREATE FOREIGN DATA WRAPPER postgres_fdw
  HANDLER public.postgres_fdw_handler
  VALIDATOR public.postgres_fdw_validator;
--
-- Definition for foreign server test4_tsup_ecp : 
--
CREATE SERVER test4_tsup_ecp
  FOREIGN DATA WRAPPER postgres_fdw
  OPTIONS (
    host 'test4.tsup.ecp',
    dbname 'tsup',
    port '5432',
    use_remote_estimate 'true',
    updatable 'false',
    truncatable 'false');
--
-- Definition for view entity_view_list : 
--
CREATE VIEW pls.entity_view_list
AS
SELECT s.entity_id,
    string_agg((s.rattr_label)::text, ';'::text) AS attr_list,
    string_agg((s.entity_attr_value)::text, ';'::text) AS label_list
FROM (
    SELECT ent.entity_id,
            ea.entity_attr_value,
            ra.rattr_label
    FROM (((entity ent
             LEFT JOIN ref_entity_type ret ON ((ret.rentity_type_id =
                 ent.rentity_type_id)))
             LEFT JOIN entity_attr ea ON ((ea.entity_id = ent.entity_id)))
             LEFT JOIN ref_attr ra ON ((ra.rattr_id = ea.rattr_id)))
    WHERE (ra.rattr_view = true)
    ORDER BY ent.entity_id, ra.rattr_no
    ) s
GROUP BY s.entity_id;

--
-- Definition for view request_view_list : 
--
CREATE VIEW pls.request_view_list
AS
SELECT s.entity_id,
    string_agg((s.rattr_label)::text, ';'::text) AS label_list,
    string_agg((s.entity_attr_value)::text, ';'::text) AS attr_list
FROM (
    SELECT ent.entity_id,
            ea.entity_attr_value,
            ra.rattr_label
    FROM (((entity ent
             LEFT JOIN ref_entity_type ret ON ((ret.rentity_type_id =
                 ent.rentity_type_id)))
             LEFT JOIN entity_attr ea ON ((ea.entity_id = ent.entity_id)))
             LEFT JOIN ref_attr ra ON ((ra.rattr_id = ea.rattr_id)))
    WHERE (((ret.rentity_type_name)::text = 'request'::text) AND
        (ra.rattr_view = true))
    ORDER BY ent.entity_id, ra.rattr_no
    ) s
GROUP BY s.entity_id;

--
-- Definition for view candidate_view_list : 
--
CREATE VIEW pls.candidate_view_list
AS
SELECT s.entity_id,
    string_agg((s.rattr_label)::text, ';'::text) AS label_list,
    string_agg((s.entity_attr_value)::text, ';'::text) AS attr_list
FROM (
    SELECT ent.entity_id,
            ea.entity_attr_value,
            ra.rattr_label
    FROM (((entity ent
             LEFT JOIN ref_entity_type ret ON ((ret.rentity_type_id =
                 ent.rentity_type_id)))
             LEFT JOIN entity_attr ea ON ((ea.entity_id = ent.entity_id)))
             LEFT JOIN ref_attr ra ON ((ra.rattr_id = ea.rattr_id)))
    WHERE (((ret.rentity_type_name)::text = 'candidate'::text) AND
        (ra.rattr_view = true))
    ORDER BY ent.entity_id, ra.rattr_no
    ) s
GROUP BY s.entity_id;

--
-- Structure for table entity_entity : 
--
CREATE TABLE pls.entity_entity (
    ent_ent_id serial NOT NULL,
    entity_id integer,
    entity_id_link integer,
    ts_created timestamp without time zone,
    ts_deleted timestamp without time zone
)
WITH (oids = false);
--
-- Definition for view entity_group : 
--
CREATE VIEW pls.entity_group
AS
SELECT ea.entity_attr_value AS entity_id,
    count(*) AS vacancy,
    1 AS vacancy_move,
    1 AS vacancy_out
FROM ((ref_entity_type ret
     LEFT JOIN entity e ON ((e.rentity_type_id = ret.rentity_type_id)))
     LEFT JOIN entity_attr ea ON (((ea.entity_id = e.entity_id) AND
         (ea.rattr_id = 11))))
GROUP BY ea.entity_attr_value;

--
-- Structure for table ref_stage_action_actor : 
--
CREATE TABLE pls.ref_stage_action_actor (
    rstage_action_actor_id integer DEFAULT nextval('ref_stage_action_actor_ref_stage_action_actor_id_seq'::regclass) NOT NULL,
    rstage_action_id integer,
    ractor_id integer
)
WITH (oids = false);
--
-- Structure for table ref_stage_action_stage : 
--
CREATE TABLE pls.ref_stage_action_stage (
    rstage_action_stage_id integer DEFAULT nextval('ref_stage_actor_stage_rstage_action_stage_id_seq'::regclass) NOT NULL,
    rstage_action_id integer,
    rstage_id integer
)
WITH (oids = false);
--
-- Structure for table ref_route : 
--
CREATE TABLE pls.ref_route (
    rroute_id serial NOT NULL,
    rroute_name varchar(255),
    rroute_label varchar(255),
    rstage_id_start integer
)
WITH (oids = false);
ALTER TABLE ONLY pls.ref_route ALTER COLUMN rroute_id SET STATISTICS 0;
--
-- Structure for table ref_attr_group_actor : 
--
CREATE TABLE pls.ref_attr_group_actor (
    rattr_group_actor_id serial NOT NULL,
    rattr_group_id integer,
    ractor_id integer,
    can_edit boolean DEFAULT false,
    can_read boolean DEFAULT true
)
WITH (oids = false);
--
-- Structure for table entity_attr_log : 
--
CREATE TABLE pls.entity_attr_log (
    entity_attr_log_id serial NOT NULL,
    rattr_id integer,
    entity_id integer,
    entity_attr_value varchar,
    ts_change timestamp without time zone,
    user_change varchar(50)
)
WITH (oids = false);
--
-- Definition for index entity_pkey : 
--
ALTER TABLE ONLY pls.entity
    ADD CONSTRAINT entity_pkey
    PRIMARY KEY (entity_id);
--
-- Definition for index entity_types_pkey : 
--
ALTER TABLE ONLY pls.ref_entity_type
    ADD CONSTRAINT entity_types_pkey
    PRIMARY KEY (rentity_type_id);
--
-- Definition for index ref_attr_pkey : 
--
ALTER TABLE ONLY pls.ref_attr
    ADD CONSTRAINT ref_attr_pkey
    PRIMARY KEY (rattr_id);
--
-- Definition for index entity_attr_pkey : 
--
ALTER TABLE ONLY pls.entity_attr
    ADD CONSTRAINT entity_attr_pkey
    PRIMARY KEY (entity_attr_id);
--
-- Definition for index ref_attr_group_pkey : 
--
ALTER TABLE ONLY pls.ref_attr_group
    ADD CONSTRAINT ref_attr_group_pkey
    PRIMARY KEY (rattr_group_id);
--
-- Definition for index entity_stage_pkey : 
--
ALTER TABLE ONLY pls.entity_stage
    ADD CONSTRAINT entity_stage_pkey
    PRIMARY KEY (entity_stage_id);
--
-- Definition for index ref_stage_pkey : 
--
ALTER TABLE ONLY pls.ref_stage
    ADD CONSTRAINT ref_stage_pkey
    PRIMARY KEY (rstage_id);
--
-- Definition for index ref_actor_pkey : 
--
ALTER TABLE ONLY pls.ref_actor
    ADD CONSTRAINT ref_actor_pkey
    PRIMARY KEY (ractor_id);
--
-- Definition for index ref_stage_actor_pkey : 
--
ALTER TABLE ONLY pls.ref_stage_action
    ADD CONSTRAINT ref_stage_actor_pkey
    PRIMARY KEY (rstage_action_id);
--
-- Definition for index ref_attr_dict_pkey : 
--
ALTER TABLE ONLY pls.ref_attr_dict
    ADD CONSTRAINT ref_attr_dict_pkey
    PRIMARY KEY (rattr_dict_id);
--
-- Definition for index ref_attr_outer_pkey : 
--
ALTER TABLE ONLY pls.ref_attr_outer
    ADD CONSTRAINT ref_attr_outer_pkey
    PRIMARY KEY (rattr_outer_id);
--
-- Definition for index ref_action_pkey : 
--
ALTER TABLE ONLY pls.ref_action
    ADD CONSTRAINT ref_action_pkey
    PRIMARY KEY (raction_id);
--
-- Definition for index ref_attr_actor_pkey : 
--
ALTER TABLE ONLY pls.ref_attr_actor
    ADD CONSTRAINT ref_attr_actor_pkey
    PRIMARY KEY (rattr_actor_id);
--
-- Definition for index entity_attr_fk : 
--
ALTER TABLE ONLY pls.entity_attr
    ADD CONSTRAINT entity_attr_fk
    FOREIGN KEY (entity_id) REFERENCES entity(entity_id);
--
-- Definition for index entity_attr_fk1 : 
--
ALTER TABLE ONLY pls.entity_attr
    ADD CONSTRAINT entity_attr_fk1
    FOREIGN KEY (rattr_id) REFERENCES ref_attr(rattr_id);
--
-- Definition for index entity_fk : 
--
ALTER TABLE ONLY pls.entity
    ADD CONSTRAINT entity_fk
    FOREIGN KEY (rentity_type_id) REFERENCES ref_entity_type(rentity_type_id);
--
-- Definition for index ref_attr_fk : 
--
ALTER TABLE ONLY pls.ref_attr
    ADD CONSTRAINT ref_attr_fk
    FOREIGN KEY (rattr_group_id) REFERENCES ref_attr_group(rattr_group_id);
--
-- Definition for index entity_entity_pkey : 
--
ALTER TABLE ONLY pls.entity_entity
    ADD CONSTRAINT entity_entity_pkey
    PRIMARY KEY (ent_ent_id);
--
-- Definition for index entity_entity_idx : 
--
ALTER TABLE ONLY pls.entity_entity
    ADD CONSTRAINT entity_entity_idx
    UNIQUE (entity_id, entity_id_link);
--
-- Definition for index entity_entity_fk : 
--
ALTER TABLE ONLY pls.entity_entity
    ADD CONSTRAINT entity_entity_fk
    FOREIGN KEY (entity_id) REFERENCES entity(entity_id);
--
-- Definition for index entity_entity_fk1 : 
--
ALTER TABLE ONLY pls.entity_entity
    ADD CONSTRAINT entity_entity_fk1
    FOREIGN KEY (entity_id_link) REFERENCES entity(entity_id);
--
-- Definition for index ref_stage_action_actor_pkey : 
--
ALTER TABLE ONLY pls.ref_stage_action_actor
    ADD CONSTRAINT ref_stage_action_actor_pkey
    PRIMARY KEY (rstage_action_actor_id);
--
-- Definition for index ref_stage_actor_stage_pkey : 
--
ALTER TABLE ONLY pls.ref_stage_action_stage
    ADD CONSTRAINT ref_stage_actor_stage_pkey
    PRIMARY KEY (rstage_action_stage_id);
--
-- Definition for index ref_route_pkey : 
--
ALTER TABLE ONLY pls.ref_route
    ADD CONSTRAINT ref_route_pkey
    PRIMARY KEY (rroute_id);
--
-- Definition for index ref_route_fk : 
--
ALTER TABLE ONLY pls.ref_route
    ADD CONSTRAINT ref_route_fk
    FOREIGN KEY (rstage_id_start) REFERENCES ref_stage(rstage_id) DEFERRABLE;
--
-- Definition for index ref_stage_fk : 
--
ALTER TABLE ONLY pls.ref_stage
    ADD CONSTRAINT ref_stage_fk
    FOREIGN KEY (rroute_id) REFERENCES ref_route(rroute_id) DEFERRABLE;
--
-- Definition for index ref_attr_group_actor_pkey : 
--
ALTER TABLE ONLY pls.ref_attr_group_actor
    ADD CONSTRAINT ref_attr_group_actor_pkey
    PRIMARY KEY (rattr_group_actor_id);
--
-- Definition for index ref_attr_group_actor_fk : 
--
ALTER TABLE ONLY pls.ref_attr_group_actor
    ADD CONSTRAINT ref_attr_group_actor_fk
    FOREIGN KEY (ractor_id) REFERENCES ref_actor(ractor_id) DEFERRABLE;
--
-- Definition for index ref_attr_group_actor_fk1 : 
--
ALTER TABLE ONLY pls.ref_attr_group_actor
    ADD CONSTRAINT ref_attr_group_actor_fk1
    FOREIGN KEY (rattr_group_id) REFERENCES ref_attr_group(rattr_group_id) DEFERRABLE;
--
-- Definition for index entity_attr_log_pkey : 
--
ALTER TABLE ONLY pls.entity_attr_log
    ADD CONSTRAINT entity_attr_log_pkey
    PRIMARY KEY (entity_attr_log_id);
--
-- Definition for index entity_attr_log_fk : 
--
ALTER TABLE ONLY pls.entity_attr_log
    ADD CONSTRAINT entity_attr_log_fk
    FOREIGN KEY (entity_id) REFERENCES entity(entity_id);
--
-- Definition for index entity_attr_log_fk1 : 
--
ALTER TABLE ONLY pls.entity_attr_log
    ADD CONSTRAINT entity_attr_log_fk1
    FOREIGN KEY (rattr_id) REFERENCES ref_attr(rattr_id);
--
-- Comments
--
COMMENT ON COLUMN pls.entity.rentity_type_id IS 'ref_entity_type';
COMMENT ON COLUMN pls.entity.ts_deleted IS 'пометка, что сущность удалена в корзину';
COMMENT ON COLUMN pls.entity.chatroom_uuid IS 'ссылка на чат в мессенджере';
COMMENT ON COLUMN pls.ref_entity_type.rroute_id IS 'указатель маршрута, там будет с какого этапа начинается';
COMMENT ON COLUMN pls.ref_attr.rattr_label IS 'отображаемое имя';
COMMENT ON COLUMN pls.ref_attr.rattr_required IS 'обязательный';
COMMENT ON COLUMN pls.ref_attr.rattr_system IS 'служебный';
COMMENT ON COLUMN pls.ref_attr.rattr_group_id IS 'группа атрибутов';
COMMENT ON COLUMN pls.ref_attr.rattr_no IS 'порядковый номер';
COMMENT ON COLUMN pls.ref_attr.rattr_view IS 'это атрибут используется для отображения и идентификации сущности';
COMMENT ON COLUMN pls.ref_attr.rattr_multilple IS 'сущность может иметь несколько значений (копий) этого атрибута. Например, у укандидата несколько образований.';
COMMENT ON COLUMN pls.ref_attr_group.rattr_group_no IS 'порядковый номер для отображения';
COMMENT ON COLUMN pls.ref_attr_group.rentity_type_id IS 'указатель какой тип сущности обладает этой группа атрибутов';
COMMENT ON COLUMN pls.entity_stage.rstage_id IS 'из справочника этапов';
COMMENT ON COLUMN pls.entity_stage.entity_id IS 'какая сущность соединена с этим этапом';
COMMENT ON COLUMN pls.ref_stage.rentity_type_id IS 'какой тип сущности создавать при создании этого этапа';
COMMENT ON COLUMN pls.ref_stage.rstage_wait_others IS 'когда этап переходит на этот, если True, то всегда проверяет, есть ли потенциальные другие этапы, которые в этот переходят. Если такие есть - ждет. Если таких нет (или они закончились и перешли в этот), то включает этот этап.';
COMMENT ON COLUMN pls.ref_stage.rroute_id IS 'маршрут, который объединяет все этапы';
COMMENT ON COLUMN pls.ref_actor.ractor_auth_group_name IS 'соответствие auth.auth_groups.name';
COMMENT ON TABLE pls.ref_stage_action IS 'на этапе можно совершить разные действия разным акторам';
COMMENT ON COLUMN pls.ref_stage_action.rstage_id IS 'на каком этапе';
COMMENT ON COLUMN pls.ref_stage_action.raction_id IS 'какое действие может выполнить';
COMMENT ON COLUMN pls.ref_attr_dict.rattr_dict_no IS 'порядковый номер при отображении';
COMMENT ON COLUMN pls.ref_attr_dict.rattr_dict_name IS '!! После использования нельзя редактировать. Именно это поле записывается в значения атрибутов';
COMMENT ON COLUMN pls.ref_attr_dict.rattr_dict_label IS 'Отображаемый текст варианта выбора';
COMMENT ON COLUMN pls.ref_attr_outer.rattr_outer_fields IS 'какие поля показывать при выборе из справочника';
COMMENT ON COLUMN pls.ref_attr_outer.rattr_outer_path IS 'где находится этот справочник';
COMMENT ON COLUMN pls.ref_attr_outer.rattr_outer_key IS 'какое поле записывается в значение атрибута';
COMMENT ON COLUMN pls.ref_attr_outer.rattr_outer_sort IS 'по каким полям сортируется при отображении справочника';
COMMENT ON TABLE pls.ref_attr_actor IS 'Какой атрибут на каком этапе может редактирвоать';
COMMENT ON COLUMN pls.ref_attr_actor.rattr_id IS 'какой атрибут';
COMMENT ON COLUMN pls.ref_attr_actor.ractor_id IS 'какой актор';
COMMENT ON COLUMN pls.ref_attr_actor.rstage_id IS 'на каком конкретном этапе (NULL=на всех)';
COMMENT ON SERVER test4_tsup_ecp IS 'Используется для внешних таблиц в схеме egt';
COMMENT ON TABLE pls.entity_entity IS 'Связь двух сущностей';
COMMENT ON COLUMN pls.entity_entity.ent_ent_id IS 'уникальный ключ связки';
COMMENT ON COLUMN pls.entity_entity.entity_id IS 'сущность_родитель';
COMMENT ON COLUMN pls.entity_entity.entity_id_link IS 'сущность_дитя';
COMMENT ON TABLE pls.ref_stage_action_actor IS 'какое действие на каком этапе может выполнить какой актор';
COMMENT ON COLUMN pls.ref_stage_action_actor.rstage_action_id IS 'указатель на этап и действие';
COMMENT ON COLUMN pls.ref_stage_action_actor.ractor_id IS 'указатель на актора';
COMMENT ON COLUMN pls.ref_stage_action_stage.rstage_action_id IS 'после какого действия другого этапа';
COMMENT ON COLUMN pls.ref_stage_action_stage.rstage_id IS 'какие новые этапы начинаются (возможна развилка и распаллеливание)';
COMMENT ON TABLE pls.ref_route IS 'Маршрут, который объединяет несколько этапов';
COMMENT ON COLUMN pls.ref_route.rstage_id_start IS 'Этап, с которого начинается этот маршрут';
COMMENT ON COLUMN pls.ref_attr_group_actor.rattr_group_id IS 'в какой группе атрибутов';
COMMENT ON COLUMN pls.ref_attr_group_actor.ractor_id IS 'какой актор (роль)';
COMMENT ON COLUMN pls.ref_attr_group_actor.can_edit IS 'может редактировать все атрибуты в этой группе (по умолчанию нет)';
COMMENT ON COLUMN pls.ref_attr_group_actor.can_read IS 'может видеть атрибуты в этой группе (по умолчанию да)';
