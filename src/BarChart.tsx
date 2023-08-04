import React from "react";
import { styled } from "styled-components";
import suqre from "../src/assets/square.svg";
import Jas from "../src/assets/JS.svg";
const BarChart = () => {
  const data = {
    key: ["C", "Java", "Javascript", "JSON", "Markdown", "XML", "CSS", "Java Properties", "YAML", "Text"],
    value: ["630px", "495px", "375px", "311px", "260px", "183px", "133px", "71px", "29px", "22px"],
  };
  return (
    <div>
      <StChart.Months>
        <StChart.Month>
          3 months <StChart.SquareImg src={suqre} alt="suqre" />
        </StChart.Month>
        <StChart.Month>
          6 months
          <StChart.SquareImg src={suqre} alt="suqre" />
        </StChart.Month>
        <StChart.Month>
          9 months
          <StChart.SquareImg src={suqre} alt="suqre" />
        </StChart.Month>
        <StChart.Month>
          12 months
          <StChart.SquareImg src={suqre} alt="suqre" />
        </StChart.Month>
        <StChart.Month>
          15 months
          <StChart.SquareImg src={suqre} alt="suqre" />
        </StChart.Month>
        <StChart.Month>
          18 months
          <StChart.SquareImg src={suqre} alt="suqre" />
        </StChart.Month>
      </StChart.Months>
      <StChart.Labels>
        {data.key.map((e, i) => (
          <StChart.DataPair>
            <StChart.Label>
              <img src={Jas} />
              {e}
            </StChart.Label>
            <StChart.Bar width={data.value[i]}></StChart.Bar>
            {i < 2 && <StChart.Tag>2y 3m</StChart.Tag>}
          </StChart.DataPair>
        ))}
      </StChart.Labels>
    </div>
  );
};

export default BarChart;

const StChart = {
  Months: styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-left: 240px;
    justify-content: space-evenly;
  `,
  Month: styled.div`
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  SquareImg: styled.img`
    width: 100%;
    height: 8px;
  `,
  Labels: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  DataPair: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Label: styled.div`
    width: 160px;
    height: 45px;
    background: #eee;
    align-items: center;
    display: flex;
    padding-left: 12px;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 700;
    gap: 6px;
    border-right: 1px solid #000;
  `,
  Bar: styled.div<{ width: string }>`
    width: ${({ width }) => width};
    height: 25px;
    background: #ccc;
    margin-top: 10px;
  `,
  Tag: styled.div`
    border-radius: 20px;
    background: #000;
    color: #fff;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 500;
    width: 55px;
    height: 27px;
    margin-top: 10px;
    margin-left: 6px;
    justify-content: center;
    display: flex;
    align-items: center;
  `,
};
