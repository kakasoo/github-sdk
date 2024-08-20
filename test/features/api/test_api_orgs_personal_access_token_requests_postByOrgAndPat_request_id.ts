import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia, { tags } from "typia";

export async function test_api_orgs_personal_access_token_requests_postByOrgAndPat_request_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.personal_access_token_requests.postByOrgAndPat_request_id(
      connection,
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
