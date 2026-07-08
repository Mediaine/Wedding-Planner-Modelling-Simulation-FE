export type ConstraintSeverity =
  | "INFO"
  | "WARNING"
  | "ERROR";

export interface Constraint {

  code: string;

  title: string;

  message: string;

  severity: ConstraintSeverity;

  valid: boolean;

}

export interface ConstraintResult {

  passed: boolean;

  constraints: Constraint[];

}