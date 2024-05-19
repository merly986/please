import axiosInstance from "./axiosInstance.tsx";

export async function getEntityByID(entityID: number) {
    try {
        const response = await axiosInstance.get(`/api/v1/entity/${entityID}`);
        // Возвращаем данные
        // console.log('getEntityByID\n', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error(error);
    }
}