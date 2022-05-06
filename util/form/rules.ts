import type { Rule } from 'async-validator'

export type Triggers = 'blur' | 'change'

export type ValidatorFn<T> = (
  message: string,
  options: T & { trigger: Triggers | Triggers[] }
) => Rule

export class Validators {
  public static required: ValidatorFn<{}> = (message: string, options) => ({
    message,
    ...options,
    required: true,
  })

  public static regex: ValidatorFn<{
    pattern: RegExp | string
  }> = (message, { trigger, pattern }) => {
    return { message, trigger, pattern }
  }

  public static email: ValidatorFn<{}> = (message, { trigger }) => {
    return { trigger, message, type: 'email' }
  }

  public static min: ValidatorFn<{ min: number }> = (
    message,
    { trigger, min }
  ) => {
    return { message, min, trigger }
  }
}
