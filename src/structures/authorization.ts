import { tags } from "typia";

import { nullable_minus_scoped_minus_installation } from "./nullable_minus_scoped_minus_installation";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
 *
 * @title Authorization
 */
export type authorization = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  url: string & tags.Format<"uri">;
  /**
   * A list of scopes that this authorization is in.
   */
  scopes: string[] | null;
  token: string;
  token_last_eight: string | null;
  hashed_token: string | null;
  app: {
    client_id: string;
    name: string;
    url: string & tags.Format<"uri">;
  };
  note: string | null;
  note_url: (string & tags.Format<"uri">) | null;
  updated_at: string & tags.Format<"date-time">;
  created_at: string & tags.Format<"date-time">;
  fingerprint: string | null;
  user?: nullable_minus_simple_minus_user;
  installation?: nullable_minus_scoped_minus_installation;
  expires_at: (string & tags.Format<"date-time">) | null;
};
