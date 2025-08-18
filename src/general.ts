// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export type Primitives = string | boolean | number | null | undefined;

export type Success<TPayload = undefined> = {
    status: true;
    payload: TPayload;
    statusCode: number;
};

export type Failed = { status: false; message: string; statusCode: number };

export type Result<TData> = Success<TData> | Failed;

export type Optional<TData> = TData | null | undefined;

export type Pritter<T> = {
    [K in keyof T]: T[K];
} & {};
