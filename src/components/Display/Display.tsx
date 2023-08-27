import { useMetaMask } from "~/hooks/useMetaMask";
import styles from "./Display.module.css";
import { formatChainAsNum } from "~/utils";

export const Display = () => {
  const { wallet } = useMetaMask();
  console.log(wallet);

  return (
    <div className={styles.display}>
      {wallet.accounts.length > 0 && (
        <>
          <h3 className={styles.detailsHeading}>Wallet Details</h3>
          <div>
            <table>
              <tr>
                <td>
                  <strong>Wallet Accounts</strong>
                </td>
                <td>{wallet.accounts[0]}</td>
              </tr>
              <tr>
                <td>
                  <strong>Wallet Balance</strong>
                </td>
                <td>{wallet.balance}</td>
              </tr>
              <tr>
                <td>
                  <strong>Hex ChainId</strong>
                </td>
                <td>{wallet.chainId}</td>
              </tr>
              <tr>
                <td>
                  <strong>Numeric ChainId</strong>
                </td>
                <td>{formatChainAsNum(wallet.chainId)}</td>
              </tr>
            </table>
          </div>
        </>
      )}
    </div>
  );
};
