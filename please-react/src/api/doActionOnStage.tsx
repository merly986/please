import axiosInstance from "./axiosInstance.tsx";

export async function doActionOnStage(stageID: number, ractionID: number) {
    try {
        const response = await axiosInstance.post(
            `/api/v1/stage/${stageID}`,
            {"raction_id": ractionID}
        );
        // Возвращаем данные
        return response.data;
    } catch (error) {
        console.error(error);
    }
}