import { Box } from '@chakra-ui/react';
import { Counter } from '../components';
import { SecondaryCounter } from '../types';

export interface SecodaryCountersProps {
    counters: SecondaryCounter[];
}

export const SecondaryCounters = ({ counters }: SecodaryCountersProps) => {
    return (
        <Box className="w-full sm:w-3/4 lg:w-full flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start md:px-10  gap-8 flex-wrap">
            {counters.map((counter, i) => {
                return (
                    <Counter
                        counter={counter}
                        variant="secondary"
                        title={`${
                            counter.title
                                ? counter.title
                                : `Secondary Counter ${i + 1}`
                        }`}
                        key={counter.title + `${i}`}
                    />
                );
            })}
        </Box>
    );
};
