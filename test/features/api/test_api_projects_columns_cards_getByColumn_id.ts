import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project_minus_card } from "@ORGANIZATION/PROJECT-api/lib/structures/project_minus_card";
import { IApiProjectsColumnsCards } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiProjectsColumnsCards";

export async function test_api_projects_columns_cards_getByColumn_id(
  connection: api.IConnection,
) {
  const output: project_minus_card[] =
    await api.functional.projects.columns.cards.getByColumn_id(
      connection,
      typia.random<string>(),
      typia.random<IApiProjectsColumnsCards.GetQuery>(),
    );
  typia.assert(output);
}
