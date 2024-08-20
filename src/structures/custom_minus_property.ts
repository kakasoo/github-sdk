import { tags } from "typia";

/**
 * Custom property defined on an organization
 *
 * @title Organization Custom Property
 */
export type custom_minus_property = {
  /**
   * The name of the property
   */
  property_name: string;
  /**
   * The URL that can be used to fetch, update, or delete info about this property via the API.
   */
  url?: string & tags.Format<"uri">;
  /**
   * The type of the value for the property
   */
  value_type: "string" | "single_select" | "multi_select" | "true_false";
  /**
   * Whether the property is required.
   */
  required?: boolean;
  /**
   * Default value of the property
   */
  default_value?: string | string[] | null;
  /**
   * Short description of the property
   */
  description?: string | null;
  /**
   * An ordered list of the allowed values of the property.
   * The property can have up to 200 allowed values.
   */
  allowed_values?:
    | ((string & tags.MaxLength<75>)[] & tags.MaxItems<200>)
    | null;
  /**
   * Who can edit the values of the property
   */
  values_editable_by?: "org_actors" | "org_and_repo_actors" | null;
};
