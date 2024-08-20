import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_app_manifests_conversions_postByCode(
  connection: api.IConnection,
) {
  const output: any = await api.functional.app_manifests.conversions.postByCode(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
