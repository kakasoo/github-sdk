/**
 * Sigstore Bundle v0.1
 *
 * @title Sigstore Bundle v0.1
 */
export type sigstore_minus_bundle_minus_0 = {
  mediaType?: string;
  verificationMaterial?: {
    x509CertificateChain?: {
      certificates?: {
        rawBytes?: string;
      }[];
    };
    tlogEntries?: {
      logIndex?: string;
      logId?: {
        keyId?: string;
      };
      kindVersion?: {
        kind?: string;
        version?: string;
      };
      integratedTime?: string;
      inclusionPromise?: {
        signedEntryTimestamp?: string;
      };
      inclusionProof?: string | null;
      canonicalizedBody?: string;
    }[];
    timestampVerificationData?: string | null;
  };
  dsseEnvelope?: {
    payload?: string;
    payloadType?: string;
    signatures?: {
      sig?: string;
      keyid?: string;
    }[];
  };
};
