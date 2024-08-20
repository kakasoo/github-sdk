import { tags } from "typia";

/**
 * An array of repository objects that the installation can access.
 */
export type webhooks_repositories = {
  full_name: string;
  /**
   * Unique identifier of the repository
   */
  id: number & tags.Type<"int32">;
  /**
   * The name of the repository.
   */
  name: string;
  node_id: string;
  /**
   * Whether the repository is private or public.
   */
  private: boolean;
}[];
