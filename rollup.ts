import { RollupNFT, MapData } from "minanft";

async function main() {
  const pinataJWT = ""; // use "" to not pin on local network
  const name = "@test";

  const nft = new RollupNFT();

  nft.update({ key: "name", value: `@test` });
  nft.update({
    key: `address`,
    value: `B62qrR3kE3S9xsQy2Jq8tp3TceWDeAmiXhU4KCXh19HzAVPj7BiNAME`,
  });
  nft.updateText({
    key: `description`,
    text: "This is my long description of the Rollup NFT @test. Can be of any length, supports **markdown**.",
  });
  nft.update({ key: `twitter`, value: `@test` });
  nft.update({ key: `secret`, value: `mysecretvalue`, isPrivate: true });

  await nft.updateImage({
    filename: "./images/sunnyday.png",
    pinataJWT,
    calculateRoot: false, // set to true to calculate root, but it takes a long time
  });

  const map = new MapData();
  map.update({ key: `level2-1`, value: `value21` });
  map.update({ key: `level2-2`, value: `value22` });
  map.updateText({
    key: `level2-3`,
    text: `This is text on level 2. Can be very long`,
  });

  await map.updateFile({
    key: "woman",
    filename: "./images/woman.png",
    pinataJWT,
    calculateRoot: false, // set to true to calculate root, but it takes a long time
  });

  const mapLevel3 = new MapData();
  mapLevel3.update({ key: `level3-1`, value: `value31` });
  mapLevel3.update({ key: `level3-2`, value: `value32`, isPrivate: true });
  mapLevel3.update({ key: `level3-3`, value: `value33` });
  map.updateMap({ key: `level2-4`, map: mapLevel3 });
  nft.updateMap({ key: `level 2 and 3 data`, map });

  console.log(`json:`, nft.toJSON());
}

main().catch((error) => {
  console.error(error);
});
