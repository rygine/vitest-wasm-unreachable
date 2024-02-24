import { webcrypto } from "node:crypto";
import { user_preferences_encrypt } from "@xmtp/user-preferences-bindings-wasm";

describe("WASM unreachable error", () => {
  it("encrypts using WASM module", () => {
    const publicKey = webcrypto.getRandomValues(new Uint8Array(32));
    const privateKey = webcrypto.getRandomValues(new Uint8Array(32));
    const message = new TextEncoder().encode("hello, world!");
    const encrypted = user_preferences_encrypt(publicKey, privateKey, message);
    expect(encrypted).toBeDefined();
  });
});
