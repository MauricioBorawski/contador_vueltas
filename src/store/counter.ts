import { create } from 'zustand';
import { SecondaryCounter } from '../types';

type Action = 'increase' | 'decrease' | 'reset';

export interface CounterStoreType {
    counters: SecondaryCounter[];
    create: (counter: SecondaryCounter) => void;
    delete: (id: string) => void;
    updateValue: (action: Action, id: string) => void;
}

const parsedCounters = (): SecondaryCounter[] => {
    const stringifyCounters = localStorage.getItem('counters');

    if (stringifyCounters) {
        return JSON.parse(stringifyCounters);
    } else {
        return [
            {
                title: 'Main Counter',
                value: 0,
                id: 'maincounter',
            },
        ];
    }
};

export const useCounterStore = create<CounterStoreType>((set) => ({
    counters: parsedCounters(),
    create: (counter: SecondaryCounter) => {
        set((state) => ({
            counters: [...state.counters, counter],
        }));
    },
    delete: (id: string) => {
        set((state) => ({
            counters: state.counters.filter((counter) => counter.id !== id),
        }));
    },
    updateValue: (action, id) => {
        set((state) => ({
            counters: state.counters.map((counter) => {
                if (counter.id === id) {
                    if (action === 'increase') {
                        counter.value = counter.value + 1;
                    }

                    if (action === 'decrease' && counter.value > 0) {
                        counter.value = counter.value - 1;
                    }
                    if (action === 'reset' && counter.value > 0) {
                        counter.value = 0;
                    }
                }
                return counter;
            }),
        }));
    },
}));
