import { useEffect } from 'react';
import { useCounterStore } from '../store/counter';
import type { SecondaryCounter } from '../types';

export interface UseSecondaryCountersReturnType {
    counters: SecondaryCounter[];
    create: (counter: SecondaryCounter) => void;
}

export const useSecondaryCounters = (): UseSecondaryCountersReturnType => {
    const { counters, create } = useCounterStore();

    useEffect(() => {
        localStorage.setItem('counters', JSON.stringify(counters));
    }, [counters]);

    return {
        counters,
        create,
    };
};
