import { tags } from "typia";

/**
 * Content File
 *
 * @title Content File
 */
export type content_minus_file = {
  type: "file";
  encoding: string;
  size: number & tags.Type<"int32">;
  name: string;
  path: string;
  content: string;
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
  target?: string &
    tags.JsonSchemaPlugin<{
      example: '"actual/actual.md"';
    }>;
  submodule_git_url?: string &
    tags.JsonSchemaPlugin<{
      example: '"git://example.com/defunkt/dotjs.git"';
    }>;
};
