import { tags } from "typia";

/**
 * An object describing a submodule
 *
 * @title Submodule Content
 */
export type content_minus_submodule = {
  type: "submodule";
  submodule_git_url: string & tags.Format<"uri">;
  size: number & tags.Type<"int32">;
  name: string;
  path: string;
  sha: string;
  url: string & tags.Format<"uri">;
  git_url: (string & tags.Format<"uri">) | null;
  html_url: (string & tags.Format<"uri">) | null;
  download_url: (string & tags.Format<"uri">) | null;
  _links: {
    git: (string & tags.Format<"uri">) | null;
    html: (string & tags.Format<"uri">) | null;
    self: string & tags.Format<"uri">;
  };
};
