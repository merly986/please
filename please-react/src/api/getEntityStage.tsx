import axiosInstance from "./axiosInstance.tsx";

export async function getEntityStage(stageID: number) {
    try {
        const response = await axiosInstance.get(`/api/v1/entity/${stageID}/stage`);
        // Возвращаем данные
        // console.log('getEntityStage', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error(error);
    }
}