import { instance } from "@/services/our-backend/our-backend.instance";

export const getCompoundInterest = async (
  principal: number,
  annualRate: number,
  periods: number
) => {
  const response = await instance.post<{
    monto_total: number;
    detalles_solicitud: {
      periodos: number;
      principal: number;
      tasa_anual: number;
    };
  }>("/financial-calculations/compound-interest", {
    principal,
    annualRate: (annualRate / 100).toString(),
    periods,
  });
  return response.data;
};
