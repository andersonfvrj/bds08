import { Faturamento, Gender } from "../../types";

const formatGender = (gender: Gender) => {
    const textByGender = {
        MALE: 'Masculino',
        FEMALE: 'Feminino',
        OTHER: 'Outros'
    };

    return textByGender[gender];
};

export const buildFaturamento = (faturamento: Faturamento[]) => {
    const labels = faturamento.map(fat => formatGender(fat.gender));
    const series = faturamento.map(fat => fat.sum);
    return { labels, series };
};