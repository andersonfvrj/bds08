export type Loja = {
    id: number;
    name: string;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Faturamento = {
    gender: Gender;
    sum: number;
}

export type ChartConfig = {
    labels: string[];
    series: number[];
}