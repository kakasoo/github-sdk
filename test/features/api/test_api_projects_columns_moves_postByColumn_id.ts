import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_projects_columns_moves_postByColumn_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.projects.columns.moves.postByColumn_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
