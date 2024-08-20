import api from "@kakasoo/github-sdk";
import { IApiOrgsSecurityAdvisories } from "@kakasoo/github-sdk/lib/structures/IApiOrgsSecurityAdvisories";
import { repository_minus_advisory } from "@kakasoo/github-sdk/lib/structures/repository_minus_advisory";
import typia from "typia";

export async function test_api_orgs_security_advisories_getByOrg(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory[] =
    await api.functional.orgs.security_advisories.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsSecurityAdvisories.GetQuery>(),
    );
  typia.assert(output);
}
