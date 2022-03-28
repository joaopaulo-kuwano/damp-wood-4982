export interface FieldError {
  field: string
  type: string
  message: string
}

export interface ValidatorResponse<T> {
  data: T
  errors: FieldError[]
}

export interface ErrorObject {
  instancePath: string,
  schemaPath: string,
  keyword: string,
  params: { missingProperty: string },
  message: string
}
