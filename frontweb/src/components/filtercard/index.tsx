import "./styles.css";
import Select from "react-select";
import { Loja, Faturamento, ChartConfig } from "../../types";
import { useEffect, useState } from "react";
import { makeRequest } from "../../utils/request";
import ChartCard from "../chartcard";
import { buildFaturamento } from "./helpers";

function FilterCard() {
  const [lojas, setLojas] = useState();
  const [summary, setSummary] = useState(0);
  const [faturamento, setFaturamento] = useState<ChartConfig>();

  const handleOnChange = (id: number) => {
    makeRequest.get("/sales/summary?storeId=" + id).then((response) => {
      setSummary(response.data.sum);
    });

    makeRequest
      .get<Faturamento[]>("/sales/by-gender?storeId=" + id)
      .then((response) => {
        console.log(response.data);
        setFaturamento(buildFaturamento(response.data));
      });
  };

  useEffect(() => {
    makeRequest.get("/stores").then((response) => {
      setLojas(response.data);
    });

    handleOnChange(0);
  }, []);

  return (
    <>
      <div className="filter-container">
        <div className="base-card base-card-filter">
          <Select
            classNamePrefix="loja-select"
            options={lojas}
            placeholder="Selecione a loja"
            isClearable={true}
            getOptionLabel={(loja: Loja) => loja.name}
            getOptionValue={(loja: Loja) => loja.id.toString()}
            onChange={(value) => handleOnChange(value ? value.id : 0)}
          />
        </div>
      </div>
      <ChartCard
        name="vendas"
        labels={faturamento?.labels}
        series={faturamento?.series}
        soma={summary}
      />
    </>
  );
}

export default FilterCard;
