import PropTypes from 'prop-types';
import { Statistic, StatisticTitle,StatList,Label,StatItem,Percentage } from './Statistics.styled';

export const Statistics = ({title="",stats}) => {
    return(<Statistic>
  {title && <StatisticTitle>{title}</StatisticTitle>}

        <StatList>
            {stats.map(({ id, label, percentage }) => (
                 <StatItem key={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </StatItem>
            ))}
   
  </StatList>
</Statistic>)
}


Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}