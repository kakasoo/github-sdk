import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project_minus_card } from "@ORGANIZATION/PROJECT-api/lib/structures/project_minus_card";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_projects_columns_cards_postByColumn_id(
  connection: api.IConnection,
) {
  const output: project_minus_card =
    await api.functional.projects.columns.cards.postByColumn_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
