import React from "react";
import DonutChart from "react-svg-donut-chart";
import { statistics } from "../data/data";
import { Container, Statistic, ChartContainer } from "./Statistics.styles";

function Statistics() {
  return (
    <Container>
      {statistics.data.map(statistic => (
        <Statistic key={statistic.id}>
          <h1>{statistic.title}</h1>
          <h2>{statistic.subTitle}</h2>
          <ChartContainer>
            <span>{`${statistic.value}%`}</span>
            <DonutChart
              data={[
                {
                  stroke: "#1FC5ED",
                  value: statistic.value,
                  strokeWidth: 8
                },
                {
                  stroke: "#F0F2F5",
                  value: 100 - statistic.value,
                  strokeWidth: 8
                }
              ]}
              spacing={1}
            />
          </ChartContainer>
        </Statistic>
      ))}
    </Container>
  );
}

export default Statistics;
