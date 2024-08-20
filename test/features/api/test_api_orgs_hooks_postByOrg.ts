import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { org_minus_hook } from "@kakasoo/github-sdk/lib/structures/org_minus_hook";
import typia from "typia";

export async function test_api_orgs_hooks_postByOrg(
  connection: api.IConnection,
) {
  const output: org_minus_hook = await api.functional.orgs.hooks.postByOrg(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
