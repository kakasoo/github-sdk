/**
 * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
 *
 * @title metadata
 */
export type metadata = {
  [key: string]: string | number | boolean | null;
};
