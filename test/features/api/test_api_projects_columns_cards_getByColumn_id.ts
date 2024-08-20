import api from "@kakasoo/github-sdk";
import { IApiProjectsColumnsCards } from "@kakasoo/github-sdk/lib/structures/IApiProjectsColumnsCards";
import { project_minus_card } from "@kakasoo/github-sdk/lib/structures/project_minus_card";
import typia from "typia";

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
