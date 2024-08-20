import { tags } from "typia";

/**
 * Validation Error
 *
 * @title Validation Error
 */
export type validation_minus_error = {
  message: string;
  documentation_url: string;
  errors?: {
    resource?: string;
    field?: string;
    message?: string;
    code: string;
    index?: number & tags.Type<"int32">;
    value?: string | (number & tags.Type<"int32">) | string[] | null;
  }[];
};
