import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { project_minus_column } from "@kakasoo/github-sdk/lib/structures/project_minus_column";
import typia from "typia";

export async function test_api_projects_columns_patchByColumn_id(
  connection: api.IConnection,
) {
  const output: project_minus_column =
    await api.functional.projects.columns.patchByColumn_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
