/*eslint-disable*/

// import { DISPLAY } from "html2canvas/dist/types/css/property-descriptors/display";

// import Vue from "vue";
export function setInvoiceIdLocalForage(dis, { user, invoiceId }) {
  dis.$getItem("invoice").then((res) => {
    if (
      res === Object(res) &&
      Object.prototype.toString.call(res) !== "[object Array]"
    ) {
      Object.entries(res).forEach((item) => {
        if (item[0] == user) {
          if (!item[1].includes(invoiceId)) {
            item[1].unShift(invoiceId);
            if (item[1].length > 20) item[1].pop();
            res[item[0]] = item[1];
            dis.$setItem("invoice", res);
          }
        } else {
          res[user] = item[1];
          dis.$setItem("invoice", res);
        }
      });
    } else {
      // dis.$clear();
      dis.$setItem("invoiceId", { [user]: [invoiceId] });
    }
  });
}
