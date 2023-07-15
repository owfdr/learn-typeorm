import { AppDataSource } from "./data-source";
import { Image } from "./entity/Image";
import fs from "fs";

AppDataSource.initialize()
  .then(async () => {
    const fileName = "logo.png";
    const folderPath = "src/image/";
    const fileBuffer = await fs.promises.readFile(folderPath + fileName);

    const image = new Image();
    image.fileName = fileName;
    image.buffer = fileBuffer;

    await AppDataSource.manager.save(image);

    const images = await AppDataSource.manager.find(Image);
    const outputPath = "src/output/";

    images.forEach(async (image) => {
      await fs.promises.writeFile(outputPath + image.fileName, image.buffer);
    });

    // const userProfile = Factory.userProfile();
    // const user = Factory.user();
    // user.profile = userProfile;

    // await AppDataSource.manager.save(userProfile);
    // await AppDataSource.manager.save(user);

    // const users = await AppDataSource.manager.find(User, {
    //   relations: ["profile"],
    // });
    // console.log(users);
  })
  .catch((error) => console.log(error));
