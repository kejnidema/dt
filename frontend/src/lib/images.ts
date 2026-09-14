const patient = (name: string) => `/images/patients/${name}`;
const staff = (name: string) => `/images/staff/${name}`;
const misc = (name: string) => `/images/misc/${name}`;

const patients = [
  patient('patient0.jpeg'),
  patient('patient1.jpeg'),
  patient('patient2.jpeg'),
];

const clinic = [
  staff('lab0.jpeg'),
  staff('lab1.jpeg'),
  misc('allTeeth.jpeg'),
  misc('xray.jpeg'),
];

const surgery = Array.from({ length: 18 }, (_, i) => staff(`surgery${i}.jpeg`));

export const images = {
  doctor: staff('team0.jpeg'),
  doctorFemale: patients[1],
  team: staff('team0.jpeg'),
  clinic: clinic[0],
  journey: staff('surgery0.jpeg'),
  tirana: staff('surgery1.jpeg'),
  heroBefore: patient('before0.jpeg'),
  heroAfter: patient('after0.jpg'),
  emaxBefore: patient('before20.jpeg'),
  emaxAfter: patient('after21.jpeg'),
  patients,
  clinicGallery: clinic,
  surgery,
  beforeAfter: [
    {
      before: [patient('before0.jpeg')],
      after: [patient('after0.jpg'), patient('after0.jpg')],
    },
    {
      before: [patient('before20.jpeg')],
      after: [
        patient('after21.jpeg'),
        patient('after22.jpeg'),
        patient('after23.jpeg'),
      ],
    },
    {
      before: [patient('before30.jpeg'), patient('before31.jpeg')],
      after: [
        patient('after30.jpeg'),
        patient('after31.jpeg'),
        patient('after32.jpeg'),
        patient('after33.jpeg'),
      ],
    },
    {
      before: [patient('before40.jpeg')],
      after: [patient('after40.jpeg'), patient('after40.jpeg')],
    },
  ],
  beforeAfterEdited: [
    patient('afterbeforeimplant.jpeg'),
    patient('beforeafterwhitening.jpeg'),
  ],
  patientPhotosIRL: patients,
  results: [
    [patient('smile0.jpeg'), patient('smile01.jpeg')],
    [
      patient('smile1.jpeg'),
      patient('smile11.jpeg'),
      patient('smile12.jpeg'),
      patient('smile13.jpeg'),
      patient('smile14.jpeg'),
      patient('smile15.jpeg'),
    ],
    [
      patient('smile2.jpeg'),
      patient('smile21.jpeg'),
      patient('smile22.jpeg'),
      patient('smile23.jpeg'),
      patient('smile24.jpeg'),
      patient('smile25.jpeg'),
      patient('smile26.jpeg'),
      patient('smile27.jpeg'),
      patient('smile28.jpeg'),
    ],
    [
      patient('smile3.jpeg'),
      patient('smile31.jpeg'),
      patient('smile32.jpeg'),
      patient('smile33.jpeg'),
      patient('smile34.jpeg'),
    ],
    [patient('smile4.jpeg')],
    [patient('smile5.jpeg'), patient('smile50.jpeg')],
    [patient('smile6.jpeg')],
    [patient('smile8.jpeg')],
    [patient('smile9.jpeg')],
  ],
};

export const galleryPairs = images.beforeAfter;
