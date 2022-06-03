import nextConnect from 'next-connect';
const handler = nextConnect();
import serviceMail from './email';

handler.post(async (req, res, next) => {

   const { code } = req.body



  serviceMail(code).then( (data) => {
    console.log(data)
    if(data == 'success'){
       res.send({status:200})
    }
  })


});

export default handler;
