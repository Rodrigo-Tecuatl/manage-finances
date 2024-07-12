import { AllMovement, Income, Expense } from '@/config/types'

export const income: Income[] = [
  {
    id: 1,
    comment: 'Nómina',
    price: 5000,
    date: ''
  },
  {
    id: 2,
    comment: 'Nómina',
    price: 5000,
    date: ''
  }
]

export const expenses: Expense[] = [
  {
    id: 1,
    comment: 'hola',
    price: 5000,
    date: ''
  },
  {
    id: 1,
    comment: 'hola',
    price: 5000,
    date: ''
  }
]

export const allMovement: AllMovement[] = [
  {
    index: 1,
    incomeId: 1,
    comment: 'hola',
    price: 5000,
    date: '',
    type: 'income'
  },
  {
    index: 2,
    expenseId: 1,
    comment: 'hola',
    price: 5000,
    date: '',
    type: 'expense'
  }
]
