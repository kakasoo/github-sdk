import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_advisory } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_advisory";
import { private_minus_vulnerability_minus_report_minus_create } from "@ORGANIZATION/PROJECT-api/lib/structures/private_minus_vulnerability_minus_report_minus_create";

export async function test_api_repos_security_advisories_reports_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory =
    await api.functional.repos.security_advisories.reports.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<private_minus_vulnerability_minus_report_minus_create>(),
    );
  typia.assert(output);
}
