/**
 * @title Verification
 */
export type verification = {
  verified: boolean;
  reason: string;
  payload: string | null;
  signature: string | null;
};
