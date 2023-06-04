import React from "react";
// import contractInfo from "../../src/counter.json";
import contractInfo from "../contracts/instantiateInfo/contractList.json";
import { contractInformation } from "../types/configTypes";
import Headlines from "./headlines";
// const info: contractInformation = contractInfo;
const info: any = contractInfo;
function Instantiate(contractName: any = "counter") {
  //  console.log(contractName);
  //  let t  = "counter";

  // console.log(info);

  const contract: string = contractName["contractName"];
  //  console.log(info[contract]["testnet"]["deployInfo"]["codeId"]);
  return (
    <div className="instantiate-page">
      <br></br>

      <Headlines
        heading="Code ID"
        // subheading={info[contract]["codeId"]}
        subheading={(Object.keys(contractInfo).length === 0) ? "nothing here" :(info as Record<string, any>)[contract]?.codeId}
      ></Headlines>

      <br></br>

      <Headlines
        heading="Contract Address"
        subheading={
          (Object.keys(contractInfo).length === 0) ? "nothing here" :(info as Record<string, any>)[contract]?.codeAddress
        }
      ></Headlines>
    </div>
  );
}

export default Instantiate;
