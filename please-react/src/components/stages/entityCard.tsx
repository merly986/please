import {Box, Card, CardContent, Divider, Grid, Typography} from '@mui/material';
import EntityField from "./entityField.tsx";
import ActionButton from "./actionButton.tsx";
import {Entity} from "../../types/entity.ts";
import {StageActions} from "../../types/entityStage.ts";

// Пропсы для компонента EntityCard
interface EntityCardProps {
    entity: Entity;
    actions: StageActions[];
    getData: () => void;
}

const EntityCard: React.FC<EntityCardProps> = ({entity, actions, getData}) => {
    return (
        <Card sx={{width: '100%'}}>
            <CardContent>
                <Typography gutterBottom variant="h2" sx={{textAlign: 'center'}} component="div">
                    {entity.rentity_type_label}
                </Typography>
                <Grid spacing={2} sx={{padding: '1rem'}} container>
                    {entity.entity_attr.map((x) =>
                        <Grid xs={4} key={'entity_attr_id' + x.entity_attr_id} item>
                            <EntityField attribute={x} key={'entity_attr_id' + x.entity_attr_id}/>
                        </Grid>
                    )}
                    <Grid item xs={12}><Divider/></Grid>
                    <Grid item xs={12} sm={4}
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '0px',
                              margin: '0px'
                          }}>
                        <Typography gutterBottom variant="h1" component="div">
                            Этапы
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        {
                            actions.map((x, index) =>
                                <Grid container spacing={2} key={'entity_stage_id' + x.entity_stage_id}>
                                    <Grid
                                        item xs={12}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Typography gutterBottom variant="h4" component="div">
                                            {x.rstage_label}
                                        </Typography>
                                    </Grid>
                                    {
                                        x.available_actions.map((y) =>
                                            <Grid item xs={12} sm={6} key={'raction_id' + y.raction_id}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        padding: '0.5rem'
                                                    }}>
                                                    <ActionButton
                                                        action={y}
                                                        stageID={x.entity_stage_id}
                                                        getData={getData}
                                                    />
                                                </Box>
                                            </Grid>
                                        )
                                    }
                                    <Grid item xs={12}>
                                        {
                                            index != actions.length - 1 ?
                                                <Divider sx={{margin: '1rem'}}/>
                                                : null
                                        }
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
        ;
}

export default EntityCard;
