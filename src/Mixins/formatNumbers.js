/*eslint-disable*/
export const myMixin = {
  methods: {
    numbFormat: function (nb, region, currencyUsed) {
      if (typeof nb == String && nb.includes(",")) {
        nb = parseInt(nb.split(",").join(""));
      }
      return new Intl.NumberFormat(region, {
        style: "currency",
        currency: currencyUsed,
        maximumSignificantDigits: 3,
      }).format(nb);
    },
    countFromOne: function (x) {
      if (x) {
        return x.map((item, index) => {
          item.count = index + 1;
          return item;
        });
      }
      return [];
    },
    // replaceStr(param) {
    //   let str = ["acct", "id", "channel"]
    //   if (Array.isArray(param)) {

    //   }
    //   if (typeof param == Object) {
    //     Object.keys(x).map((item) => {
    //       item = item.toLowerCase().toString()
    //       item = _.upperCase(item)
    //       for (let i of str) {
    //         if (formatedStr.includes(i)) {
    //           console.log(i)
    //         }
    //       }

    //       // _.upperCase(item[0])
    //       // rows.push(item[1]);
    //     })
    //   }

    // },

    // format input value from text-field
    commaValue: function (x) {
      let num = parseFloat(x);
      if (num) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else return x;
    },
    //convert formatted input value from string to int
    formattedInputValue: function (x) {
      let inputValue = x.split(",");
      return parseFloat(inputValue.join(""));
    },
    numberInputRules: function (val) {
      return [
        (val) => !!val || "this field is Required.",
        (val) =>
          !isNaN(val) ||
          val.match(/^(\d+,)\.*(.)*\d+$/) ||
          "sorry field is expecting number",
      ];
    },
    walletNameExist: function (val) {
      let arr = this.$store.getters.operationalWalletNamesGetter;
      return [
        (val) => !!val || "this field is Required.",
        (val) => {
          let x = arr.filter((item) => {
            return item.includes(val.toLowerCase().trim());
          });
          return (
            x.length == 0 ||
            "sorry, The Account Name already exist, try a different one"
          );
        },
      ];
    },
  },
};
