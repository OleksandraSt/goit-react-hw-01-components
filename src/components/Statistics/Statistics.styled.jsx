import styled from '@emotion/styled';

export const Statistic = styled.section`
  width: 700px;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  justify-content:center;
text-align:center;
`;

export const StatisticTitle = styled.h2`
color: #000000;
text-transform: uppercase;
`;

export const StatList = styled.ul`
display:flex;
margin:auto;
padding:25px;
justify-content:center;
text-align:center;
`;

export const StatItem = styled.li`
padding:25px;
border: solid 1px #000000;
`;
export const Label = styled.span`
display:flex;
`;

export const Percentage = styled.span`
font-size: 14px;
`;