import api from "@kakasoo/github-sdk";
import { project_minus_column } from "@kakasoo/github-sdk/lib/structures/project_minus_column";
import typia from "typia";

export async function test_api_projects_columns_getByProject_id(
  connection: api.IConnection,
) {
  const output: project_minus_column[] =
    await api.functional.projects.columns.getByProject_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
