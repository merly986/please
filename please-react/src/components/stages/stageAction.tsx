import {useState} from "react";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {getEntityByID} from "../../api/getEntityByID.tsx";
import {getStageActions} from "../../api/getStageActions.tsx";
import EntityCard from "./entityCard.tsx";
import {StageActions} from "../../types/entityStage.ts";
import {Entity} from "../../types/entity.ts";

const styles = {
    fillContainer: {
        height: '100%',
        width: '100%'
    }
}

const stageAction: React.FC = ({}) => {

    const [currentActions, setCurrentActions] =
        useState<StageActions[] | null>(null);
    const [entityID, setEntityID] =
        useState<number | null>(null);
    const [currentEntity, setCurrentEntity] =
        useState<Entity | null>(null);

    const getData = async () => {
        const entity = await getEntityByID(entityID || 0);
        const actions = await getStageActions(entityID || 0);
        // StageActions.setCurrentEntity(entity[0]);
        // StageActions.setCurrentAction(actions);
        setCurrentEntity(entity[0]);
        setCurrentActions(actions);
    };

    // JSX
    return (
        <Grid container spacing={2} style={{padding: '1rem'}}>
            <Grid item xs={2}>
                <TextField
                    label="Введите id entity"
                    sx={styles.fillContainer}
                    value={entityID || ''}
                    onChange={(e) =>
                        setEntityID(Number(e.target.value.replace(/\D/g, '')))}
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant={"outlined"}
                    sx={styles.fillContainer}
                    onClick={async () => await getData()}
                >
                    Поиск
                </Button>
            </Grid>
            <Grid item xs={8}/>

            {
                currentEntity != null && currentActions != null ?
                    <Grid item xs={12}>
                        <EntityCard
                            entity={currentEntity}
                            actions={currentActions}
                            getData={getData}
                        />
                    </Grid>

                    : null
            }
        </Grid>
    );
}

export default stageAction;