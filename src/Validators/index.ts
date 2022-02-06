export interface FieldError {
  field: string
  type: string
  message: string
}

export interface ValidatorResponse<T> {
  data: T
  errors: FieldError[]
}
