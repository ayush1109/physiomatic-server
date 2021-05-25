const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentsRoutes");
const treatmentRoutes = require("./routes/treatmentRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const exerciseRoutes = require("./routes/exercise");
const chiefComplaintsRoutes = require('./routes/assessmentRoutes/chiefComplaintsRoutes');
const demographicDataRoutes = require('./routes/assessmentRoutes/demograhicDataRoutes');
const examinationRoutes = require('./routes/assessmentRoutes/examinationRouter');
const painRoutes = require('./routes/assessmentRoutes/painRouter');
const sensoryRoutes = require('./routes/assessmentRoutes/sensoryRoutes');
const motorRoutes = require('./routes/assessmentRoutes/motorExaminationRouter');
const shoulderEvaluationRoutes = require('./routes/assessmentRoutes/shoulderEvaluationRoutes');
const antiNatalRoutes = require('./routes/assessmentRoutes/antiNatalRoutes');
const NeuroExamRoutes = require('./routes/assessmentRoutes/NeuroExamRoutes');
const cardioExamRoutes = require('./routes/assessmentRoutes/cardioExamRoutes');
const investigationExamRoutes = require('./routes/assessmentRoutes/investigationExamRoutes');
const pediatricRoutes = require('./routes/assessmentRoutes/pediatricRouter');




const app = express();
// cors
app.use(cors());

// Body Parser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json());

// passport
app.use(passport.initialize());

// multer
// app.use(multer({ dest: "./assets/TMJ Retrusion.jpg",
//   rename: function (fieldname, filename) {
//     return filename;
//   },
//  }));

require("./config/passport")(passport);

// connection to mongoDB

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("DB is Connected Successfully"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("Hello from express");
});
app.use("/api", userRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/treatment", treatmentRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/invoice", invoiceRoutes);
app.use("/api/exercise", exerciseRoutes);
app.use('/api/chiefComplaint', chiefComplaintsRoutes);
app.use('/api/demograhicData', demographicDataRoutes);
app.use('/api/examination', examinationRoutes);
app.use('/api/pain', painRoutes);
app.use('/api/sensory', sensoryRoutes);
app.use('/api/motor', motorRoutes);
app.use('/api/shoulder', shoulderEvaluationRoutes);
app.use('/api/antiNatal', antiNatalRoutes);
app.use('/api/neuro', NeuroExamRoutes);
app.use('/api/cardio', cardioExamRoutes);
app.use('/api/investigation', investigationExamRoutes);
app.use('/api/pediatric', pediatricRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
