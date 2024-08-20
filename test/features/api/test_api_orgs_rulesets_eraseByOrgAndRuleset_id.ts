import api from "@kakasoo/github-sdk";
import typia, { tags } from "typia";

export async function test_api_orgs_rulesets_eraseByOrgAndRuleset_id(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.rulesets.eraseByOrgAndRuleset_id(
    connection,
    typia.random<string>(),
    typia.random<number & tags.Type<"int32">>(),
  );
  typia.assert(output);
}
