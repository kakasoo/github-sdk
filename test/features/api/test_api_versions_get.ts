import api from "@kakasoo/github-sdk";
import typia, { tags } from "typia";

export async function test_api_versions_get(connection: api.IConnection) {
  const output: (string &
    tags.Format<"date"> &
    tags.JsonSchemaPlugin<{
      example: "2021-01-01";
    }>)[] = await api.functional.versions.get(connection);
  typia.assert(output);
}
