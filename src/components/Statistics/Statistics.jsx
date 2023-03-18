import PropTypes from 'prop-types';

import { 
    Section, 
    Title, 
    StatsList, 
    StatItem, 
    Label, 
    Percentage} 
    from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}
                <StatsList>
                    {stats.map(stat => (
                    <StatItem key={stat.id}> 
                      <Label>{stat.label}</Label>
                        <Percentage>{stat.percentage}</Percentage>
                     </StatItem>
                    ))}
               </StatsList>
        </Section>
 );
};

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

