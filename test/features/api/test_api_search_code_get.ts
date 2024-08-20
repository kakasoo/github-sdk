import api from "@kakasoo/github-sdk";
import { IApiSearchCode } from "@kakasoo/github-sdk/lib/structures/IApiSearchCode";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_search_code_get(connection: api.IConnection) {
  const output: response = await api.functional.search.code.get(
    connection,
    typia.random<IApiSearchCode.GetQuery>(),
  );
  typia.assert(output);
}
