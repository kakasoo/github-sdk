import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_projects_columns_eraseByColumn_id(
  connection: api.IConnection,
) {
  const output = await api.functional.projects.columns.eraseByColumn_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
