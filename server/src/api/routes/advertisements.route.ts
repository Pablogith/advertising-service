import express, { Request, Response} from 'express';
import {AdvertisementModel} from '../../models/advertisement'

const router = express.Router();

router.post('/', async (req: Request, res: Response)=>{

  try{
    const {title, name } = req.body;
    const advertisement = new AdvertisementModel({
      title: title,
      name: name
    });

    const newAdvertisement = await advertisement.save();

    if(newAdvertisement) res.json(newAdvertisement)
    

  }catch(error){
    console.log(error);
    res.json(error)
  }

});

router.get('/',async (req, res)=>{
  try{
    const ads = await AdvertisementModel.find();
    res.json(ads)
  }catch(error){
    res.json(error)
  }
}
)


export { router }