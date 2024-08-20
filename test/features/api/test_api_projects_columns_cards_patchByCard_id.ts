import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { project_minus_card } from "@kakasoo/github-sdk/lib/structures/project_minus_card";
import typia from "typia";

export async function test_api_projects_columns_cards_patchByCard_id(
  connection: api.IConnection,
) {
  const output: project_minus_card =
    await api.functional.projects.columns.cards.patchByCard_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
