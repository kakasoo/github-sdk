export namespace IApiUserCodespacesExports {
  export type PostHeader = {
    /**
     * The name of the codespace.
     */
    codespace_name: string;
  };
  export type GetHeader = {
    /**
     * The name of the codespace.
     */
    codespace_name: string;
    /**
     * The ID of the export operation, or `latest`. Currently only `latest` is currently supported.
     */
    export_id: string;
  };
}
