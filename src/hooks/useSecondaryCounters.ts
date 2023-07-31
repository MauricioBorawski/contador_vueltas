import { useEffect, useState } from "react";
import type { SecondaryCounter } from "../types";

export interface UseSecondaryCountersReturnType {
    counters: SecondaryCounter[];
    createNewSecondaryCounter: (newCounter: SecondaryCounter) => void;
    deleteCounter: (id: string) => void;
    updateCounterValue: (action: "increase" | "decrease" | "reset", id: string) => void;
}

export const useSecondaryCounters = (): UseSecondaryCountersReturnType => {
    const [counters, setCounters] = useState<SecondaryCounter[]>(() => {
        const countersFromLocalStorage = localStorage.getItem("counters");

        if (!countersFromLocalStorage) return [{
            title: "Main Counter", value: 0, id: "maincounter"
        }];

        return JSON.parse(countersFromLocalStorage) as SecondaryCounter[];
    });

    const createNewSecondaryCounter = (newCounter: SecondaryCounter) => {
        setCounters([...counters, newCounter]);
    };

    const deleteCounter = (id: string) => {
        setCounters(counters.filter(counter => counter.id !== id));
    }

    const updateCounterValue = (action: "increase" | "decrease" | "reset", id: string) => {
        if (action === "increase") {
            const incresedCounter = counters.map((counter) => {
                if (counter.id === id) {
                    counter.value = counter.value + 1;
                    return counter;
                } else {
                    return counter;
                }
            });
            setCounters(incresedCounter);
        } else if (action === "decrease") {
            const decresedCounter = counters.map((counter) => {
                if (counter.id === id) {
                    counter.value = counter.value - 1;
                    return counter;
                } else {
                    return counter;
                }
            });

            setCounters(decresedCounter);
        } else {
            setCounters(counters.map(counter => {
                if (counter.id === id) {
                    counter.value = 0;
                    return counter
                } else {
                    return counter;
                }
            }))
        }
    }

    useEffect(() => {
        localStorage.setItem("counters", JSON.stringify(counters));
    }, [counters]);

    return {
        counters,
        createNewSecondaryCounter,
        deleteCounter,
        updateCounterValue,
    };
};
