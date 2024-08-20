import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_orgs_code_security_configurations_detach_eraseByOrg(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.code_security.configurations.detach.eraseByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
