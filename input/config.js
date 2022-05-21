const fs = require("fs");
const width = 32;
const height = 32;
const dir = __dirname;
const description = "This is an NFT made by the coolest generative code.";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 1000;
const editionSize = 1000;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const races = {
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Light blue",
            path: `${dir}/Background/pixil-layer-0.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Base",
        elements: [
          {
            id: 0,
            name: "Face Base",
            path: `${dir}/Base/pixil-layer-1.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Skin",
        elements: [
          {
            id: 0,
            name: "Skin1",
            path: `${dir}/Skin/pixil-layer-5.png`,
            weight: 25,
          },
          {
            id: 1,
            name: "Skin2",
            path: `${dir}/Skin/pixil-layer-6.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Skin3",
            path: `${dir}/Skin/pixil-layer-7.png`,
            weight: 25,
          },
          {
            id: 3,
            name: "Skin4",
            path: `${dir}/Skin/pixil-layer-8.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyebrows",
        elements: [
          {
            id: 0,
            name: "Eyebrow1",
            path: `${dir}/Eyebrows/pixil-layer-9.png`,
            weight: 33,
          },
          {
            id: 1,
            name: "Eyebrow2",
            path: `${dir}/Eyebrows/pixil-layer-10.png`,
            weight: 33,
          },
          {
            id: 2,
            name: "Eyebrow3",
            path: `${dir}/Eyebrows/pixil-layer-11.png`,
            weight: 34,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 0,
            name: "Eyes1",
            path: `${dir}/Eyes/pixil-layer-12.png`,
            weight: 25,
          },
          {
            id: 1,
            name: "Eyes2",
            path: `${dir}/Eyes/pixil-layer-13.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Eyes3",
            path: `${dir}/Eyes/pixil-layer-14.png`,
            weight: 25,
          },
          {
            id: 3,
            name: "Eyes4",
            path: `${dir}/Eyes/pixil-layer-15.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mouth",
        elements: [
          {
            id: 0,
            name: "Mouth1",
            path: `${dir}/Mouth/pixil-layer-16.png`,
            weight: 25,
          },
          {
            id: 1,
            name: "Mouth2",
            path: `${dir}/Mouth/pixil-layer-17.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Mouth3",
            path: `${dir}/Mouth/pixil-layer-18.png`,
            weight: 25,
          },
          {
            id: 3,
            name: "Mouth4",
            path: `${dir}/Mouth/pixil-layer-19.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Beard",
        elements: [
          {
            id: 0,
            name: "Beard1",
            path: `${dir}/Beard/pixil-layer-33.png`,
            weight: 33,
          },
          {
            id: 1,
            name: "Beard2",
            path: `${dir}/Beard/pixil-layer-34.png`,
            weight: 33,
          },
          {
            id: 2,
            name: "Beard3",
            path: `${dir}/Beard/pixil-layer-35.png`,
            weight: 34,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hair",
        elements: [
          {
            id: 0,
            name: "Hair1",
            path: `${dir}/Hair/pixil-layer-20.png`,
            weight: 7,
          },
          {
            id: 1,
            name: "Hair2",
            path: `${dir}/Hair/pixil-layer-21.png`,
            weight: 7,
          },
          {
            id: 2,
            name: "Hair3",
            path: `${dir}/Hair/pixil-layer-22.png`,
            weight: 7,
          },
          {
            id: 3,
            name: "Hair4",
            path: `${dir}/Hair/pixil-layer-23.png`,
            weight: 7,
          },
          {
            id: 4,
            name: "Hair5",
            path: `${dir}/Hair/pixil-layer-24.png`,
            weight: 8,
          },
          {
            id: 5,
            name: "Hair6",
            path: `${dir}/Hair/pixil-layer-25.png`,
            weight: 8,
          },
          {
            id: 6,
            name: "Hair7",
            path: `${dir}/Hair/pixil-layer-26.png`,
            weight: 8,
          },
          {
            id: 7,
            name: "Hair8",
            path: `${dir}/Hair/pixil-layer-27.png`,
            weight: 8,
          },
          {
            id: 8,
            name: "Hair9",
            path: `${dir}/Hair/pixil-layer-28.png`,
            weight: 8,
          },
          {
            id: 9,
            name: "Hair10",
            path: `${dir}/Hair/pixil-layer-29.png`,
            weight: 8,
          },
          {
            id: 10,
            name: "Hair11",
            path: `${dir}/Hair/pixil-layer-30.png`,
            weight: 8,
          },
          {
            id: 11,
            name: "Hair12",
            path: `${dir}/Hair/pixil-layer-31.png`,
            weight: 8,
          },
          {
            id: 12,
            name: "Hair13",
            path: `${dir}/Hair/pixil-layer-32.png`,
            weight: 8,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Cigarette",
        elements: [
          {
            id: 0,
            name: "NoCigarette",
            path: `${dir}/Cigarette/pixil-layer-2.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Cigarette",
            path: `${dir}/Cigarette/pixil-layer-1.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
