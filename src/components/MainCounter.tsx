import { CustomCard } from './ui/CustomCard';

export interface MainCounterProps {
    total: number;
}

export const MainCounter = ({ total }: MainCounterProps) => {
    return (
        <CustomCard variant="primary" title="Main Counter">
            {total}
        </CustomCard>
    );
};
