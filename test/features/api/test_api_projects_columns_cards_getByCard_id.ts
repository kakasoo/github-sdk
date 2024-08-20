import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project_minus_card } from "@ORGANIZATION/PROJECT-api/lib/structures/project_minus_card";

export async function test_api_projects_columns_cards_getByCard_id(
  connection: api.IConnection,
) {
  const output: project_minus_card =
    await api.functional.projects.columns.cards.getByCard_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
