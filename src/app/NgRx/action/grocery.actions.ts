import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const GroceryActions = createActionGroup({
  source: 'Grocery',
  events: {
    'Load Grocerys': emptyProps(),
    
    
  }
});
