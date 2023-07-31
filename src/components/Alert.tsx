import { useRef, useState } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    Input,
} from '@chakra-ui/react';
import { generateRandomId } from '../utils';
import { SecondaryCounter } from '../types';

export type AlertProps = {
    title: string;
    label: string;
    actionLabel: string;
    isOpen: boolean;
    variant: 'create' | 'delete';
    onClose: () => void;
    createNewCounter?: (counter: SecondaryCounter) => void;
    deleteCounter?: () => void;
};

export const Alert = ({
    isOpen,
    title,
    label,
    actionLabel,
    variant,
    onClose,
    createNewCounter,
    deleteCounter,
}: AlertProps) => {
    const cancelRef = useRef(null);
    const [counterName, setCounterName] = useState<string>('');

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader>{title}</AlertDialogHeader>
                    <AlertDialogBody>
                        {label}
                        {variant === 'create' && (
                            <Input
                                mt={15}
                                variant="flushed"
                                placeholder="Write a name"
                                onChange={(event) => {
                                    setCounterName(event.target.value);
                                }}
                            />
                        )}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            ml={3}
                            colorScheme={variant === 'create' ? 'green' : 'red'}
                            onClick={() => {
                                if (variant === 'create' && createNewCounter) {
                                    createNewCounter({
                                        title:
                                            counterName.length > 0
                                                ? counterName
                                                : null,
                                        value: 0,
                                        id: generateRandomId(5),
                                    });
                                    setCounterName('');
                                    onClose();
                                } else {
                                    if (deleteCounter) deleteCounter();
                                }
                            }}
                        >
                            {actionLabel}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};
