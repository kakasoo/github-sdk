import { tags } from "typia";

/**
 * Gitignore Template
 *
 * @title Gitignore Template
 */
export type gitignore_minus_template = {
  name: string &
    tags.JsonSchemaPlugin<{
      example: "C";
    }>;
  source: string &
    tags.JsonSchemaPlugin<{
      example: "# Object files\n*.o\n\n# Libraries\n*.lib\n*.a\n\n# Shared objects (inc. Windows DLLs)\n*.dll\n*.so\n*.so.*\n*.dylib\n\n# Executables\n*.exe\n*.out\n*.app\n";
    }>;
};
