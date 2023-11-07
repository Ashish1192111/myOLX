var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
const port = process.env.PORT|| 2410;

const carDetails = [
  {
    id: 1,
    price: 400000,
    year: 2015,
    miles: 25000,
    make: "Maruti",
    model: "Swift Dzire",
    location: "MG Road",
    city: "Gurgaon",
    postedOn: "2 Feb",
    image: "https://i.imgur.com/ySIJH9R.png",
    fuel: "Petrol",
    featured: true,
  },
  {
    id: 2,
    price: 480000,
    year: 2012,
    miles: 75000,
    make: "Toyota",
    model: "Etios",
    location: "Sector 18",
    city: "Noida",
    postedOn: "5 Feb",
    image: "https://i.imgur.com/m6kBxtO.png",
    fuel: "Diesel",
    featured: true,
  },
  {
    id: 3,
    price: 300000,
    year: 2013,
    miles: 55000,
    make: "Honda",
    model: "City",
    location: "Rohini",
    city: "Delhi",
    postedOn: "10 Feb",
    image: "https://i.imgur.com/dE5wGak.png",
    fuel: "Petrol",
    featured: true,
  },
  {
    id: 4,
    price: 400000,
    year: 2015,
    miles: 25000,
    make: "Maruti",
    model: "Swift",
    location: "MG Road",
    city: "Gurgaon",
    postedOn: "2 Feb",
    image: "https://i.imgur.com/DBvxiVR.png",
    fuel: "Diesel",
    featured: false,
  },
  {
    id: 5,
    price: 480000,
    year: 2012,
    miles: 75000,
    make: "Toyota",
    model: "Etios",
    location: "Sector 18",
    city: "Noida",
    postedOn: "5 Feb",
    image: "https://i.imgur.com/qbTLYvJ.png",
    fuel: "Diesel",
    featured: false,
  },
  {
    id: 6,
    price: 300000,
    year: 2013,
    miles: 55000,
    make: "Honda",
    model: "City",
    location: "Rohini",
    city: "Delhi",
    postedOn: "10 Feb",
    image: "https://i.imgur.com/epcJiAL.png",
    fuel: "Petrol",
    featured: false,
  },
];

const carCarousels = [
  {
    id: 1,
    urls: [
      "https://i.imgur.com/wAUhZuq.png",
      "https://i.imgur.com/3cV0QeO.png",
      "https://i.imgur.com/JxiK8Dx.png",
    ],
  },
  {
    id: 2,
    urls: [
      "https://i.imgur.com/ZKNTBiy.png",
      "https://i.imgur.com/POCCyQq.png",
      "https://i.imgur.com/ZgwHDpF.png",
    ],
  },
  {
    id: 3,
    urls: [
      "https://i.imgur.com/c8fP7bm.png",
      "https://i.imgur.com/BxsXYBk.png",
      "https://i.imgur.com/tInES5t.png",
    ],
  },
  {
    id: 4,
    urls: [
      "https://i.imgur.com/1SDyXHT.png",
      "https://i.imgur.com/DhRZ936.png",
      "https://i.imgur.com/uIgDEPX.png",
    ],
  },
  {
    id: 5,
    urls: [
      "https://i.imgur.com/ODpHqUi.png",
      "https://i.imgur.com/QsVCEaX.png",
      "https://i.imgur.com/jYBoEJK.png",
    ],
  },
  {
    id: 6,
    urls: [
      "https://i.imgur.com/RGLTmba.png",
      "https://i.imgur.com/fPDkePA.png",
      "https://i.imgur.com/AYU8WAp.png",
    ],
  },
];

const carExtraInfo = [
  {
    id: 1,
    extraInfo: [
      "ADDITIONAL VEHICLE INFORMATION:",
      "Aux Compatibility: Yes",
      "Accidental: No",
      "Flood Affected: No",
      "ABS: Yes",
      "Insurance Type: Third Party",
      "Registration Place: KL",
      "Power steering: Yes",
      "Color: White",
      "Insurance: Yes",
      "Condition: Used",
      "No. of Owners: First",
      "Variant: Celerio VXi",
      "Exchange: Yes",
      "Type of Car: Hatchback",
      "AM/FM Radio: Yes",
      "USB Compatibility: Yes",
      "Transmission: Manual",
      "Air Conditioning: With Heater ",
    ],
  },
  {
    id: 2,
    extraInfo: [
      "ADDITIONAL VEHICLE INFORMATION:",
      "Aux Compatibility: Yes",
      "Accidental: No",
      "Flood Affected: No",
      "ABS: Yes",
      "Insurance Type: Third Party",
      "Registration Place: KL",
      "Power steering: Yes",
      "Color: White",
      "Insurance: Yes",
      "Condition: Used",
      "No. of Owners: First",
      "Variant: Celerio VXi",
      "Exchange: Yes",
      "Type of Car: Hatchback",
      "AM/FM Radio: Yes",
      "USB Compatibility: Yes",
      "Transmission: Manual",
      "Air Conditioning: With Heater ",
    ],
  },
  {
    id: 3,
    extraInfo: [
      "ADDITIONAL VEHICLE INFORMATION:",
      "Aux Compatibility: Yes",
      "Accidental: No",
      "Flood Affected: No",
      "ABS: Yes",
      "Insurance Type: Third Party",
      "Registration Place: KL",
      "Power steering: Yes",
      "Color: White",
      "Insurance: Yes",
      "Condition: Used",
      "No. of Owners: First",
      "Variant: Celerio VXi",
      "Exchange: Yes",
      "Type of Car: Hatchback",
      "AM/FM Radio: Yes",
      "USB Compatibility: Yes",
      "Transmission: Manual",
      "Air Conditioning: With Heater ",
    ],
  },
  {
    id: 4,
    extraInfo: [
      "ADDITIONAL VEHICLE INFORMATION:",
      "Aux Compatibility: Yes",
      "Accidental: No",
      "Flood Affected: No",
      "ABS: Yes",
      "Insurance Type: Third Party",
      "Registration Place: KL",
      "Power steering: Yes",
      "Color: White",
      "Insurance: Yes",
      "Condition: Used",
      "No. of Owners: First",
      "Variant: Celerio VXi",
      "Exchange: Yes",
      "Type of Car: Hatchback",
      "AM/FM Radio: Yes",
      "USB Compatibility: Yes",
      "Transmission: Manual",
      "Air Conditioning: With Heater ",
    ],
  },
  {
    id: 5,
    extraInfo: [
      "ADDITIONAL VEHICLE INFORMATION:",
      "Aux Compatibility: Yes",
      "Accidental: No",
      "Flood Affected: No",
      "ABS: Yes",
      "Insurance Type: Third Party",
      "Registration Place: KL",
      "Power steering: Yes",
      "Color: White",
      "Insurance: Yes",
      "Condition: Used",
      "No. of Owners: First",
      "Variant: Celerio VXi",
      "Exchange: Yes",
      "Type of Car: Hatchback",
      "AM/FM Radio: Yes",
      "USB Compatibility: Yes",
      "Transmission: Manual",
      "Air Conditioning: With Heater ",
    ],
  },
  {
    id: 6,
    extraInfo: [
      "ADDITIONAL VEHICLE INFORMATION:",
      "Aux Compatibility: Yes",
      "Accidental: No",
      "Flood Affected: No",
      "ABS: Yes",
      "Insurance Type: Third Party",
      "Registration Place: KL",
      "Power steering: Yes",
      "Color: White",
      "Insurance: Yes",
      "Condition: Used",
      "No. of Owners: First",
      "Variant: Celerio VXi",
      "Exchange: Yes",
      "Type of Car: Hatchback",
      "AM/FM Radio: Yes",
      "USB Compatibility: Yes",
      "Transmission: Manual",
      "Air Conditioning: With Heater ",
    ],
  },
];

app.get("/carExtraInfo/:id", function (req, res) {
  const id = +req.params.id;
  let extraInfo = carExtraInfo.find((c) => c.id === id);

  if (extraInfo) {
    res.send(extraInfo);
  } else {
    res.status(404).send("not found extraInfo");
  }
});
app.get("/carCarousel/:id", function (req, res) {
  const id = +req.params.id;
  let carousel = carCarousels.find((c) => c.id === id);

  if (carousel) {
    res.send(carousel);
  } else {
    res.status(404).send("not found carousel");
  }
});
app.get("/carDetails/:id", function (req, res) {
  const id = +req.params.id;
  let car = carDetails.find((c) => c.id === id);

  if (car) {
    res.send(car);
  } else {
    res.status(404).send("not found Car");
  }
});

app.get("/carDetails", function (req, res) {
  const msgQuery = req.query.q;
  let filteredData = carDetails;

  res.send(filteredData);
});

app.listen(port, () => console.log(`Node app listening on port ${port}!`));
