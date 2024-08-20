import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project_minus_column } from "@ORGANIZATION/PROJECT-api/lib/structures/project_minus_column";

export async function test_api_projects_columns_getByColumn_id(
  connection: api.IConnection,
) {
  const output: project_minus_column =
    await api.functional.projects.columns.getByColumn_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
