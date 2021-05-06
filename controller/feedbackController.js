const Feedback = require("../models/Feedback");
exports.addFeedback = (req, res) => {
  const data = req.body;
  console.log(data);
  const name = data.name;
  const email = data.email;
  const date = data.date;
  const gender = data.gender; // male/female
  const ease = parseInt(data.ease);
  const informed = parseInt(data.informed);
  const waiting = parseInt(data.waiting);
  const courteous = parseInt(data.courteous);
  const promptly = parseInt(data.promptly);
  const clearity = parseInt(data.clearity);
  const effectiveness = parseInt(data.effectiveness);
  const sufficientTimeGiven = parseInt(data.sufficientTimeGiven);
  const assessmentDoneCompletely = parseInt(data.assessmentDoneCompletely);
  const adviceToStay = parseInt(data.adviceToStay);
  const informationMaterialEffectiveness = parseInt(
    data.informationMaterialEffectiveness
  );
  const qualityOfCare = parseInt(data.qualityOfCare);
  const ratingOfCare = parseInt(data.ratingOfCare);
  const caring = parseInt(data.caring);
  const helpful = parseInt(data.helpful);
  const overallSatisfactionAchieved = parseInt(
    data.overallSatisfactionAchieved
  );
  const total =
    ease +
    informed +
    waiting +
    courteous +
    promptly +
    clearity +
    effectiveness +
    sufficientTimeGiven +
    assessmentDoneCompletely +
    adviceToStay +
    informationMaterialEffectiveness +
    qualityOfCare +
    ratingOfCare +
    helpful +
    caring +
    overallSatisfactionAchieved;
  const score = total / 16;

  const feedback = new Feedback({
    user: req.user._id,
    patientName: name,
    score,
    recommend: score > 7 ? true : false,
  });

  feedback
    .save()
    .then((feed) => {
      return res.json(feed);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Something went wrong", err });
    });
};

exports.getAllFeedback = (req, res) => {
  const user = req.user._id;

  Feedback.find({ user })
    .then((feedbacks) => {
      return res.json({ feedbacks }); //{feedbacks:[{feedback1,feedback2}]}
    })
    .catch((err) => {
      return res.status(500).json({ message: "Something went wrong" });
    });
};
