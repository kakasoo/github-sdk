import api from "@kakasoo/github-sdk";
import { IApiOrgsOutsideCollaborators } from "@kakasoo/github-sdk/lib/structures/IApiOrgsOutsideCollaborators";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

export async function test_api_orgs_outside_collaborators_getByOrg(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.orgs.outside_collaborators.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsOutsideCollaborators.GetQuery>(),
    );
  typia.assert(output);
}
