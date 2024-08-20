import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_code_security_configurations_defaults_putByOrgAndConfiguration_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.code_security.configurations.defaults.putByOrgAndConfiguration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
