import axiosInstance from "./axiosInstance.tsx";

export async function getStageActions(stageID: number) {
    try {
        const response = await axiosInstance.get(`/api/v1/entity/${stageID}/action`);
        // Возвращаем данные
        // console.log('getStageActions', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error(error);
    }
}