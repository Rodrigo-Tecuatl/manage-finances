export interface Income {
  readonly id: number
  comment: string
  price: number
  date: string
}

export interface Expense {
  readonly id: number
  comment: string
  price: number
  date: string
}

export interface AllMovement {
  index: number
  readonly incomeId?: number
  readonly expenseId?: number
  comment: string
  price: number
  date: string
  type: string
}
