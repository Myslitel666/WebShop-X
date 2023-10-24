import React from 'react';

//MUI Import
import {
    Checkroom, Restaurant, Cable,
    Stroller, CoffeeMaker, BeachAccess
} from '@mui/icons-material';
import ArchiveIcon from '@mui/icons-material/Archive';

export const iconMappings: { [key: string]: React.ReactNode } = {
    'Checkroom': <Checkroom />,
    'Restaurant': <Restaurant />,
    'Cable': <Cable />,
    'BeachAccess': <BeachAccess />,
    'Stroller': <Stroller />,
    'CoffeeMaker': <CoffeeMaker />,
    'Archive': <ArchiveIcon />,
};