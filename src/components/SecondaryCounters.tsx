import { Box } from "@chakra-ui/react";
import { Counter } from "../components";
import { SecondaryCounter } from "../types";

export interface SecodaryCountersProps {
    counters: SecondaryCounter[];
    deleteCounter: (id: string) => void;
    updateCounterValue: (action: "increase" | "decrease" | "reset", id: string) => void;
}

export const SecondaryCounters = ({ counters, deleteCounter, updateCounterValue }: SecodaryCountersProps) => {
    return (
        <Box className="w-full sm:w-3/4 lg:w-full flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start md:px-10  gap-8 flex-wrap">
            {counters.map((counter, i) => {
                if (i > 0) {
                    return <Counter
                        counter={counter.value}
                        variant="secondary"
                        title={`${counter.title ? counter.title : `Secondary Counter ${i}`}`}
                        key={counter.title + `${i}`}
                        id={counter.id}
                        deleteCounter={deleteCounter}
                        updateCounter={updateCounterValue}
                    />
                }
            })}
        </Box>
    );
};
