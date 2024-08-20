import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { organization_minus_full } from "@kakasoo/github-sdk/lib/structures/organization_minus_full";
import typia from "typia";

export async function test_api_orgs_patchByOrg(connection: api.IConnection) {
  const output: organization_minus_full = await api.functional.orgs.patchByOrg(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
