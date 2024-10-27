export interface APIResponse<T> {
    data: T;
    validationErrors: ValidationError[];
}

export interface ValidationError {
    errorCode: number;
    errorMessage: string;
}