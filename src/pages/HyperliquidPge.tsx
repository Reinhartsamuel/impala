import React, { useState } from "react";
import { ExchangeClient, HttpTransport } from "@nktkas/hyperliquid";
import { createWalletClient, custom } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";

export default function HyperliquidPage() {
  const [status, setStatus] = useState("");
  const [agentData, setAgentData] = useState<{ address: string; privateKey: string } | null>(null);

  async function registerAgent() {
    try {
      setStatus("Connecting wallet...");
      const [address] = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log(address,'this is address')
      // 1. Setup Clients
      const walletClient = createWalletClient({
        account: address,
        chain: mainnet,
        transport: custom(window.ethereum),
      });

      const exchangeClient = new ExchangeClient({
        wallet: walletClient,
        transport: new HttpTransport(),
      });

      // 2. Generate Local Agent Credentials
      setStatus("Generating agent keys...");
      const newPrivateKey = generatePrivateKey();
      const newAgentAccount = privateKeyToAccount(newPrivateKey);
      const newAgentAddress = newAgentAccount.address;

      // 3. Authorize Agent on Hyperliquid L1
      setStatus("Waiting for signature in wallet...");
      const result = await exchangeClient.approveAgent({
        agentAddress: newAgentAddress,
        agentName: "BotAgent",
      });

      if (result.status === "ok") {
        setAgentData({ address: newAgentAddress, privateKey: newPrivateKey });
        setStatus("Agent Registered Successfully!");

        // NEXT STEP: Send agentData to your backend API here
        console.log("Send this to backend:", { agentAddress: newAgentAddress, agentPrivateKey: newPrivateKey });
      } else {
        setStatus("Registration failed: " + JSON.stringify(result));
      }
    } catch (error: any) {
      console.error(error);
      setStatus("Error: " + (error.message || "Unknown error"));
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Hyperliquid Bot Registration</h1>
      <button onClick={registerAgent} className="p-2 border-s-stone-50 rounded-lg bg-amber-100 text-gray-600 cursor-pointer">
        Authorize Bot Agent
      </button>

      <p><strong>Status:</strong> {status}</p>

      {agentData && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", background: "#f9f9f9" }}>
          <p>✅ <strong>Agent Authorized!</strong></p>
          <p><small>Address: {agentData.address}</small></p>
          <p style={{ color: "red" }}><small>Private Key: {agentData.privateKey}</small></p>
          <p><i>The keys above should now be sent to your secure backend.</i></p>
        </div>
      )}
    </div>
  );
}
