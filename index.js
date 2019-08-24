const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Idalia B",
    address: "Campeche 2",
    city: "DH",
    state: "Gto",
    country: "Mexico",
    postal_code: 11111
  },
  items: [
    {
      item: "Bread",
      description: "Bimbo Bread",
      quantity: 1,
      amount: 30
    },
    {
      item: "Tea",
      description: "Green Tea",
      quantity: 2,
      amount: 500
    },
    {
      item: "Milk",
      description: "Lala Milk",
      quantity: 2,
      amount: 400
    },
    {
      item: "BeneGastro",
      description: "Yoghurt Danone",
      quantity: 2,
      amount: 200
    }
  ],
  subtotal: 1400,
  paid: 0,
  invoice_nr: 123
};

createInvoice(invoice, "factura.pdf");
