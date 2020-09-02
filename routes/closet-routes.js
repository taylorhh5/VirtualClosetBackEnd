const router = require("express").Router();

const Closet = require("../models/closet-models.js");


//Get all Categories
router.get("/categories", (req, res) => {
  Closet.allCategory()
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get category" });
    });
});

//Get Category by id
router.get("/category/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    Closet.getCategoryById(id)
  
      .then((category) => {
        if (category) {
          res.status(200).json(category);
        } else {
          res
            .status(201)
            .json({ err: `No category with the id of ${id} exists` });
        }
      })
      .catch((err) => {
        res.status(500).json({ err: "failed to get category" });
      });
  });

  //Add Category
router.post("/category", (req, res) => {
    Closet.addCategory(req.body)
      .then((category) => {
        res.status(201).json(category);
      })
      .catch((err) => {
        res.status(500).json({ err: "failed to add category" });
      });
  });

  //Edit Category
router.put("/category/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Closet.editCategory(id, body)
  
      .then((category) => {
        !category
          ? res.status(400).json({ message: "category does not exist" })
          : res.status(200).json(category);
      })
      .catch((err) => {
        console.log("error", err);
        res.status(500).json({ error: "There was an error updating the category" });
      });
  });

  //Delete Category
  router.delete("/category/:id", (req, res) => {
    const id = req.params.id;
    Closet.removeCategory(id)
      .then((category) => {
        !category
          ? res.status(400).json({ message: "Category does not exist" })
          : res.status(200).json({ message: `Deleted category with id of ${id}` });
      })
      .catch((err) => {
        console.log("error", err);
        res.status(500).json({ error: "There was an error deleting the category" });
      });
  });

  //Clothing

  //Get all Clothing
router.get("/clothing", (req, res) => {
    Closet.allClothing()
      .then((clothing) => {
        res.status(200).json(clothing);
      })
      .catch((err) => {
        res.status(500).json({ err: "failed to get clothing" });
      });
  });
  
  //Get Clothing by id
  router.get("/clothing/:id", (req, res) => {
      const id = req.params.id;
      console.log(req.params);
      Closet.getClothingById(id)
    
        .then((clothing) => {
          if (clothing) {
            res.status(200).json(clothing);
          } else {
            res
              .status(201)
              .json({ err: `No clothing with the id of ${id} exists` });
          }
        })
        .catch((err) => {
          res.status(500).json({ err: "failed to get clothing" });
        });
    });
  
    //Add Clothing
  router.post("/clothing", (req, res) => {
      Closet.addClothing(req.body)
        .then((clothing) => {
          res.status(201).json(clothing);
        })
        .catch((err) => {
          res.status(500).json({ err: "failed to add clothing" });
        });
    });
  
    //Edit Clothing
  router.put("/clothing/:id", (req, res) => {
      const id = req.params.id;
      const body = req.body;
      Closet.editClothing(id, body)
    
        .then((clothing) => {
          !clothing
            ? res.status(400).json({ message: "clothing does not exist" })
            : res.status(200).json(clothing);
        })
        .catch((err) => {
          console.log("error", err);
          res.status(500).json({ error: "There was an error updating the clothing" });
        });
    });
  
    //Delete Clothing
    router.delete("/clothing/:id", (req, res) => {
      const id = req.params.id;
      Closet.removeClothing(id)
        .then((clothing) => {
          !clothing
            ? res.status(400).json({ message: "clothing does not exist" })
            : res.status(200).json({ message: `Deleted clothing with id of ${id}` });
        })
        .catch((err) => {
          console.log("error", err);
          res.status(500).json({ error: "There was an error deleting the clothing" });
        });
    });

  


module.exports=router;