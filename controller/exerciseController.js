const Exercise = require("../models/Exercise");

exports.addExercise = async (req, res) => {
  const categoryData = [
    {
      category: "CERVICAL",
      name: "Lateral Flexion",
      description:
        "Sit Upright, tip your head to the side, bringing your ear towards your shoulder and return to the centre.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "CERVICAL",
      name: "Cervical Extension",
      description:
        "Sit upright in a chair, looking forwards. Tip your chin backwards to bring it up towards the ceiling, and then bring it back. Remember to keep your body still and shoulders relaxed during the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "CERVICAL",
      name: "Cervical Stretch",
      description:
        "Sit upright in a chair. Tilt your head to bring your ear towards your shoulder moving only your head and then use your hand to gently push your head further. Then return back to centre. Remember to only push as far as you can tolerate.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "CERVICAL",
      name: "Cervical Isometric Flexion",
      description:
        "Sit with your head up. Place one hand to your forehead and attempt to bend your head forwards, resisting the movement with your hand. Hold this movement for the prescribed time and then relax. Remember to use your hand to resist the movement.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "CERVICAL",
      name: "Cervical Isometric Rotation",
      description:
        "Sit upright with your head up. Place one hand to the side of your head and attempt to rotate your head to the same side as your hand, resisting the movement with your hand. Hold this movement for the prescribed time and then relax. Remember to use your hand to resist the movement.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "CERVICAL",
      name: "Cervical Isometric Rotation",
      description:
        "Sit upright with your head up. Place one hand to the side of your head and attempt to rotate your head to the same side as your hand, resisting the movement with your hand. Hold this movement for the prescribed time and then relax. Remember to use your hand to resist the movement.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "CERVICAL",
      name: "Cervical Supine Isometric Retraction",
      description:
        "Start by lying on your back with your arms by your sides. Rest your head on a pillow or towel and attempt to draw your head backwards into the towel or pillow. Hold this movement for the prescribed time and then relax. Remember to move only your head to press down.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "CERVICAL",
      name: "Cervical Isometric Extension",
      description:
        "Start by sitting upright, holding a towel in your hands. Place your hands up to either side of your head so that the towel rests across the back of your head. Now move your hands forward, resisting the pull of the towel with your head. Hold this movement for the prescribed time and then relax. Remember to use your head to resist the movement.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "CERVICAL",
      name: "Neck Extensors Stretch",
      description:
        "Start by sitting with your head up. Keep your chest straight, bend your head downwards until you feel a stretch in the back of your neck. Hold the stretch,then relax to complete the exercise. Remember to keep your shoulders relaxed.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder Pendular Exercises",
      description:
        "Start by placing one hand on the chair and then, keeping your back straight, lean over to hang your arm forwards in front of your body. Gently sway your arm forwards and then backwards in a straight line. Remember to keep your back straight and move your body only.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder extension with pulley",
      description:
        "Stand upright with the pulley secured behind you. Slowly pull down with one arm, causing your other arm to extend out behind you, keeping it straight as it lifts. Hold the position for the prescribed time and then use your other arm to bring your arm back to your side. Remember to keep your shoulders relaxed.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder flexion with pulley",
      description:
        "Sit upright with the pulley secured in front of you. Slowly pull down with one arm, causing your other arm to lift out in front you, keeping it straight as it lifts. Hold the position and then return. Remember to keep your shoulders relaxed.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder External Rotation with stick",
      description:
        "Start by sitting with your head up, holding a stick in your hands. Bend your elbows to 90 degrees and place your hand on the end of the stick. Keeping your elbow in the same position, rotate your arm away from your stomach, using the stick and then return. Remember to keep your elbow in the same position.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder Flexion in sitting with stick",
      description:
        "Sit with your head up, holding a stick in your hands. Keep your chest straight, lift your arms in front of your body, using the stick, and then lower your arms back. Remember to keep your arms straight throughout.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder Abduction with stick",
      description:
        "Sit with your head up, holding a stick in your hands. Place one hand on the end of the stick and move this hand to the side of your body. Keep your arm straight, lift out to the side and then back towards your head. Then lower your arm back down. Remember to keep your arm straight.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder Extension in sitting with stick",
      description:
        "Sit upright while holding a stick in your hands. Place one hand on the end of the stick and then turn the stick so the other end is pointing away from you. Keeping your arm straight, move your arm behind you in a straight line using the stick and then bring your arm forwards to your side. Remember to move your arm in a straight line.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "AAROM hand behind back with stick",
      description:
        "Stand with your feet shoulder width apart and head up, holding a stick in your hands. Lift the stick up and place it over your shoulder, then grasp the end of the stick in your other hand behind your back. Using the stick, pull your arm up towards your shoulder blades as far as you can, and then relax. Remember to keep your shoulders relaxed.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "AAROM hand behind back with towel",
      description:
        "Stand with your feet shoulder width apart, hold a towel in your hand. Bring your arm around behind you and then up towards your shoulder blades, then raise your hand holding the towel up and over your head, so you can grab the towel with your other hand. Use your top arm to help pull your lower arm up your back until you feel a stretch. Hold the stretch for the prescribed time and then relax. Remember to keep your shoulder relaxed.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder rolls backwards",
      description:
        "Sit in a chair with your head up. Keep your arms relaxed, bring your shoulders up towards your ears and then roll them backwards, then down and forward to complete a circle roll. Repeat this movement for the prescribed time.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder rolls forwards",
      description:
        "Keep your arms relaxed, bring your shoulders up towards your ears and then roll them forwards, then down and back to complete a circle roll. Repeat this movement for the prescribed time.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Circular pendulums with dumbbell",
      description:
        "Sit towards the front of a chair with your head up, then lean forwards letting your arm hang next to your leg, holding a dumbbell in your hand. Gently sway your body around in a circle, so that your arm moves in a circle. Remember to move your body only.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Circular pendulums with dumbbell",
      description:
        "Sit towards the front of a chair with your head up, then lean forwards letting your arm hang next to your leg, holding a dumbbell in your hand. Gently sway your body around in a circle, so that your arm moves in a circle. Remember to move your body only.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Wall crawls",
      description:
        "Start by sitting upright in a chair in front of a wall. Place your hand on the wall at chest height and slightly outside your shoulder. Slowly crawl your fingers up the wall and then back down. Remember to keep your head up and shoulder.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder abduction in sitting with support",
      description:
        "Sit in front of a wall with your head up and set your shoulder and the back of your hand on the wall. Keep your shoulder relaxed, slide your hand away from your body and up the wall to shoulder height and then return. Remember to keep your hand in contact with the wall.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder flexion in sitting with dumbbell",
      description:
        "Sit in a chair with your head up, chest tall and your arms relaxed by your side, holding a dumbbell in your hand. Keeping your chest straight, lift your arm up in front of you towards the side of your head. Then lower your arm back down to complete the exercise. Remember to keep your chest up and shoulder relaxed throughout the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Shoulder abduction in sitting with dumbbell",
      description:
        "Sit upright with arms by your sides, holding a dumbbell in your hand. Keep your arm straight and lift away from the side of your body and then up towards the side of your head. Then lower your arm back down. Remember to keep your shoulder relaxed and arm straight.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Thoracic Rotations in four point kneeling",
      description:
        "Kneel on your hands and knees with your hands below your shoulders and your knees below your hips. Place one hand on the back of your head with your elbow pointing out to the side. Keep the rest of your body still, lift your elbow up towards the ceiling, rotating your chest as you do so, and then lower your elbow back down. Remember to keep the rest of your body still.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Scapula setting in sitting",
      description:
        "Sit upright, engage your muscles at the top of your back to draw your shoulder blades together. Hold this position for the prescribed time, and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Scapula setting with raised arms against a wall",
      description:
        "Stand in front of a wall with your feet shoulder width apart. Bend your elbows and raise your arms so your arms are level with your shoulders. Then clench your fists and place your hands and forearms on the wall. Keeping your arms and hands on the wall, set your shoulders. Hold this position for the prescribed time and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Scapula retraction against table",
      description:
        "Stand in front of the bed with your head up. Keep your back straight, lean over and place both hands on the bed at shoulder width apart with your fingers pointing forwards. Lean your chest forwards to bring your shoulder blades together. Hold this movement for the prescribed time and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Scapula protraction against table",
      description:
        "Keep your back straight, lean over and place both hands on the bed at shoulder width apart with your fingers pointing forwards. Keep your chest straight, push through your hands to round your shoulders. Hold this movement for the prescribed time and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Posterior cuff stretch",
      description:
        "Stand with your feet shoulder width apart and head up. Raise your arm across your chest and use your other arm to pull it towards your chest. You should feel a stretch in the back of your shoulder. Hold the stretch for the prescribed time, and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Assisted upper traps stretch",
      description:
        "Sit upright, keep your chest straight, use your hand to help bend your head to the side until you feel a stretch. Hold the stretch for the prescribed time and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Hand behind head stretch",
      description:
        "Sit upright and place your hands behind your head with your elbows pointing forwards. Keep the rest of your body still, slowly move your elbows out to the side until you feel a stretch in your chest. Hold the stretch for the prescribed time and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "SHOULDER",
      name: "Triceps stretch",
      description:
        "Stand with your feet shoulder width apart and head up. Bring your arm up and over your head towards your opposite shoulder. Then use your other arm to pull your elbow down further until your arm feels stretched. Hold it for the prescribed time.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Elbow flexion/extension ",
      description:
        "Sit upright in a chair with your arms relaxed by your sides. Keep your palms facing upwards, bend your elbow to bring your hand towards your shoulder, then lower it back down.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Elbow flexion with pulley ",
      description:
        "Sit upright with the pulley secured in front of you. Slowly pull down with one arm, causing your other forearm to lift up towards your shoulder, keep your elbow tucked into your side. Hold the position for the prescribed time and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Paper tearing (upwards)",
      description:
        "Sit upright and hold a piece of paper in one hand, use your other hand to pinch the bottom of the paper and tear upwards.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Paper tearing (downwards)",
      description:
        "Sit upright and hold a piece of paper in one hand, use your other hand to pinch the top of the paper and tear downwards.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Triceps stretch",
      description:
        "Stand with your feet shoulder width apart and head up. Bring your arm up and over your head towards your opposite shoulder. Then use your other arm to pull your elbow down further and hold for the prescribed time.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Dynamic bear hugs",
      description:
        "Stand with your feet shoulder width apart and head up. Keep your chest straight, swing your arms across your body, and touch your opposite shoulder. Then swing your arms back open, cross your arms over and then touch your opposite shoulder again.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Wrist flexors STM",
      description:
        "Sit upright and rest your arm on a pillow or towel on the desk with your palm facing upwards. Using your other hand, apply pressure to the inside of your elbow and slowly massage down your arm towards your thumb. Then repeat this movement moving towards your little finger and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Combined wrist ROM",
      description:
        "Sit upright and rest your elbow on the table and allow your wrist to bend forwards. Then extend your wrist backwards. Next drop your wrist towards your thumb side, and then your little finger side. Finally, complete a full clockwise and anticlockwise circle to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Magazine page turning",
      description:
        "Sit upright with a magazine closed in front you, use your thumb and index finger to turn the pages of the magazine to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Bicep curl to shoulder press",
      description:
        "Sit upright with a kettlebell in your hand. Keep your chest straight, bend your elbows to bring your hands up to your chest. Then lift your hands up into the air, and then lower your hands back down.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Isometric elbow supination/pronation",
      description:
        "Stand with your feet shoulder width apart. Bend your selected elbow to 90 degrees with your fingers out straight and then place your other hand on the back of your hand. Attempt to rotate the palm of your hand towards the ceiling, using your other hand to resist the movement. And then relax. Then place your hand on your palm and attempt to rotate the palm of your hand down towards the ground, using your other hand to resist the movement, and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "ELBOW",
      name: "Chest press in supine",
      description:
        "Lie down on the bench with your knees bent and feet flat on the floor. Bend your elbows to bring your hands outside your chest and make a fist with each hand. Extend your arms out above your chest and then lower them back down.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip flexion in supine",
      description:
        "Lie on your back with your legs out straight and your arms by your sides. Keeping your leg straight, raise it up into the air, and then back down to complete the exercise",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip Internal rotation in prone",
      description:
        "Lie down on your stomach with your legs out straight and resting your head on your hands. Bend your knee so the sole of your foot points toward the ceiling. Keeping the rest of your body still, rotate your leg so your foot moves away from your other leg, then rotate your leg inwards to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip External rotation in prone",
      description:
        "Lie down on your stomach with your legs out straight and resting your head on your hands. Bend your knee so the sole of your foot points toward the ceiling. Keeping the rest of your body still, rotate your leg so your foot towards your other leg, then rotate your leg outwards to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip Extension in prone",
      description:
        "Lie down on your stomach with your legs out straight. Keep your leg straight, lift your leg off the floor towards the ceiling, and then lower it back down to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip Abduction in standing",
      description:
        "Stand with your feet hip width apart and hands on your hips. Shift your weight to one leg and lift your other foot off the floor. Keep your leg straight, lift it out to the side, and then lower your leg back down to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip figure 8's",
      description:
        "Stand with your feet shoulder width apart and your hands on your hips. Keep your chest straight, gently start moving your hips around in a figure eight pattern. Then move your hips around in the opposite direction to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip External rotation in standing",
      description:
        "Stand straight with your hands on your hips. Shift your weight to one leg and lift your other foot just off the floor. Keeping your foot flat, rotate your leg so your toes point away from your body, then rotate your leg inwards to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip flexion in standing",
      description:
        "Start by standing with your feet hip width apart, head up, chest tall, and your hands on your hips. Shift your weight to one leg and lift your other foot just off the floor. Keeping your chest straight, lift your leg out in front, then bring your leg back in to your other foot to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip Internal rotation in standing",
      description:
        "Stand with your feet hip width apart, and your hands on your hips. Shift your weight to one leg and lift your other foot just off the floor. Keeping your foot flat, rotate your leg so your toes point across your body, then rotate your leg outwards to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip Extension in standing",
      description:
        "Stand straight with hands on your hips. Shift your weight to one leg and then keeping your leg straight, lift your other foot just off the floor. Keeping your chest straight, move your leg behind you, and then bring it back next to your other leg to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip Extension with knee flexion in prone",
      description:
        "Lie down on your stomach with your legs relaxed out straight. Bend your knee to 90 degrees. Keeping your knee bent, extend your hip to lift it off the mat. Then lower your leg back down to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Hip Flexion in crook lying",
      description:
        "Lie down on your back with your knees bent, feet flat on the mat, and your arms resting by your sides. Keeping your knee bent, slowly bring your knee up towards your chest, and then lower it back down to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Trigger ball - Glute med",
      description:
        "Lie down on your back, place the trigger ball on the desired location and apply some body weight through the trigger ball. Stay on the trigger ball for the prescribed time and then relax to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Foam roller - ITB",
      description:
        "Lie down on your side on the floor, propping yourself up with your elbow. Place the foam roller underneath your bottom leg just above your knee. Cross your top leg over to put your foot flat on the ground to help support your body. Roll the foam roller up and down your leg for the prescribed time to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Trigger ball - Quadriceps",
      description:
        "Lie down on your stomach, place the trigger ball on the desired location and apply some body weight through the trigger ball. Stay on the trigger ball for the prescribed time and then relax to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Foam roller - Groin",
      description:
        "Lie down on your stomach and move your leg out to the side by bending your knee. Place the foam roller on the desired location and transfer some of your body weight through the foam roller by supporting the rest of your body through your arm and other leg. Roll the foam roller up and down the selected area and complete this for the prescribed time to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Foam roller - Glutes",
      description:
        "Sit on the floor with your legs out straight and place the foam roller underneath one of your glutes. Bend the opposite leg so your foot is flat on the floor. Pushing through your arms, lift your body into the air so you put weight through the foam roller. Roll the foam roller up and down your glute for the prescribed time to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Trigger ball - Groin",
      description:
        "Lie down on your stomach and bending your leg out to the side by bending your knee. Place the trigger ball on the desired location and apply some body weight through the trigger ball. Stay on the trigger ball for the prescribed time and then relax to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Foam roller - Hamstrings",
      description:
        "Sit on the floor with your legs out straight and the foam roller under your thighs, at the desired location. Pushing through your arms, lift your body into the air so you put weight through the foam roller. Roll the foam roller up and down your leg for the prescribed time to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Pilates swimming (level 1)",
      description:
        "Lie down on your stomach with your head resting on your hands and your legs lifted slightly off the mat. As you inhale, alternate lifting your legs for the count of 5 and then exhale and repeat for the count of 5 to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Spine twist",
      description:
        "Sit on the mat with your legs out straight, your arms stretched out to the side at shoulder height. As you exhale rotate your body to the side for 2 pulses and then inhale and return to the centre. Then repeat the movement on the opposite side to complete the exercise",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Pilates swimming (level 2)",
      description:
        "Lie down on your stomach with your arms out straight in front of you and lifted slightly off the mat. As you inhale, alternate lifting your arms for the count of 5 and then exhale and repeat for the count of 5.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Pilates swimming (level 3)",
      description:
        "Lie down on your stomach with your arms out straight in front of you and both your arms and legs lifted slightly off the mat. As you inhale, alternate lifting your arms and legs for the count of 5 and then exhale and repeat for the count of 5.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Swan dive (level 1)",
      description:
        "Lie down on your stomach with your hands at your shoulders and legs out straight. Press through your hands to lift your upper body off the mat. As you exhale, drop your upper body back down to the mat and rock forwards raising your legs up towards the ceiling. Then inhale and rock back, lifting your upper body off the floor by pushing through your hands to straighten your elbows. Repeat the rocking motion for the prescribed time and then relax.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
    {
      category: "HIP JOINT",
      name: "Swan dive (level 2)",
      description:
        "Lie down on your stomach with your hands at your shoulders and legs out straight. Press through your hands to lift your upper body off the mat. As you exhale, drop your upper body back down to the mat and rock forwards raising your legs up towards the ceiling. Then inhale and rock back lifting your upper body off the floor and stretch your arms up towards the ceiling. Repeat the rocking motion for the prescribed time and then relax to complete the exercise.",
      image:
        "https://drive.google.com/file/d/1RaWnwfTKSx9iOwEQk32ZJ_A8o--fYbgZ/view?usp=sharing",
    },
  ];

  categoryData.forEach((exercise, index) => {
    const exerciseDocument = new Exercise(exercise);
    exerciseDocument
      .save()
      .then((newExercise) => {
        console.log("Added", index);
      })
      .catch((err) => {
        console.log("Error");
      });
  });
};

exports.getAllExercises = (req, res) => {
  Exercise.find({})
    .then((exercises) => {
      res.json({
        exercises,
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ message: "Some problem occured", error: err });
    });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  Exercise.findOne({ _id: id })
    .then((exercise) => {
      res.json(exercise);
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ message: "Some problem occured", error: err });
    });
};
