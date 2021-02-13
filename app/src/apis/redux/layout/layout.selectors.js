import { createSelector } from 'reselect';

const layout = state => state.layout;

export const selectDrawerOpen = createSelector(
    layout,
    layout => layout.isDrawerOpen
);








