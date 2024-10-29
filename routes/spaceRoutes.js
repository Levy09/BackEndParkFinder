import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    //pegar vagas
    res.send("GET/space");    
});


router.post('/', (req, res) => {
    //criar vagas
    
    res.send("Post/space");       
});


router.delete  ('/:id', (req, res) => {
    //deletar vagas
   res.send("Delete/space");
      
});

export default router;