import React from "react";
import OldMessage from "./OldMessage";

export const OldProcess = () => {
  return (
    <div>
      <OldMessage message=" this is messsage" />
      <table border="1" cellpadding="30"  cellspacing="20">
        <thead>
          <td>
            <span>Name</span>
          </td>
          <td>
            <span>Age</span>
          </td>
        </thead>
        <tbody>
          <tr>
            <td>Rani</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Rajan</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Akshaya</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Ashick</td>
            <td>13</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
