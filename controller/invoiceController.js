const Invoice = require("../models/Invoice");

exports.addInvoice = (req, res) => {
  const treatment = req.body.treatment;
  const consultant = req.user._id;
  const quantity = req.body.sessions;
  const price = req.body.price;
  const date = req.body.date;
  const patient = req.body.patient;

  const addInvoiceData = {
    treatment,
    consultant,
    quantity,
    price,
    date,
    patient,
  };

  const newInvoice = new Invoice(addInvoiceData);
  newInvoice
    .save()
    .then((invoice) => {
      return res.json(invoice);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: "Some Error Occured", error: err });
    });
};

exports.getInvoicesByPatientID = (req, res) => {
  const patientId = req.params.patientId;

  Invoice.find({ patient: patientId })
    .then((invoices) => {
      res.json({ invoices });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ message: "Something Went Wrong", error: err });
    });
};
