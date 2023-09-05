import { StatisticItem, StatisticList, StatisticPositiveValue, StatisticValue } from "./Statistic.styled"

export const Statistic=({
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivePercentage = 0,
}) => {
    return (
        <StatisticList>
            <StatisticItem>
                Good: <StatisticValue>{good}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
                Neutral: <StatisticValue>{neutral}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
                Bad: <StatisticValue>{bad}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
                Total: <StatisticValue>{total}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
                Positive feedback: <StatisticPositiveValue>{positivePercentage}%</StatisticPositiveValue>
            </StatisticItem>
        </StatisticList>
)
}