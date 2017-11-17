import { combineReducers } from 'redux';
import expenseReducer from './js/components/ExpenseEntries/expenseReducer';
import incomeReducer from './js/components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers({
  expense: expenseReducer,
  income: incomeReducer
});

export default rootReducer;