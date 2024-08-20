import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * A CodeQL database.
 *
 * @title CodeQL Database
 */
export type code_minus_scanning_minus_codeql_minus_database = {
  /**
   * The ID of the CodeQL database.
   */
  id: number & tags.Type<"int32">;
  /**
   * The name of the CodeQL database.
   */
  name: string;
  /**
   * The language of the CodeQL database.
   */
  language: string;
  uploader: simple_minus_user;
  /**
   * The MIME type of the CodeQL database file.
   */
  content_type: string;
  /**
   * The size of the CodeQL database file in bytes.
   */
  size: number & tags.Type<"int32">;
  /**
   * The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  created_at: string & tags.Format<"date-time">;
  /**
   * The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  updated_at: string & tags.Format<"date-time">;
  /**
   * The URL at which to download the CodeQL database. The `Accept` header must be set to the value of the `content_type` property.
   */
  url: string & tags.Format<"uri">;
  /**
   * The commit SHA of the repository at the time the CodeQL database was created.
   */
  commit_oid?: string | null;
};
