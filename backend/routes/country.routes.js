const { Router } = require('express');
const Country = require('../models/Country')
const router = Router();

// api/addCountry
router.post(
    '/addCountry',
    async (req, res) => {
    try {
        const { img, name } = req.body;
        const country = new Country ({img, name});
        await country.save();
        res.status(201).json("Страна создана");

    } catch (e) {
        res.status(500).json({
            message: "Что-то пошло не так, попробуйте позже"
        })
    }
    });

router.get('/getCountry', async (req, res) => {
    try {
        Country.find((error, data) => {
            if(error) {
                return next(error);
            }
            else  {
                res.json(data);
            }
        })
    } catch (e) {
        res.status(500).json({
            message: "Что-то пошло не так, попробуйте позже"
        })
    }
});

router.get('/getCountry/:id', async (req, res, next) => {
    try {
        Country.findById(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        })
    } catch (e) {
        res.status(500).json({
            message: "Что-то пошло не так, попробуйте позже"
        })
    }
});


router.put('/updateCountry/:id', async (req, res, next) => {
   try {
       Country.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
           if (error) {
               console.log(error);
               return next(error);
           } else {
               res.json(data);
           }
       })
   } catch (e) {
       console.log(e);
       res.status(500).json({
           message: "Что-то пошло не так, попробуйте позже"
       })
   }
});

router.delete('/deleteCountry/:id', async (req, res, next) => {
    try {
        Country.findByIdAndDelete(req.params.id, (error, data) => {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                res.status(200).json({ message: "Страна удалена"});
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Что-то пошло не так, попробуйте позже"
        })
    }
});
module.exports = router;
