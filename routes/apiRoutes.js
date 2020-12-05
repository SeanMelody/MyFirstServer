const router = require("express").Router();
router.get("/", (req, res) => {
    console.log("we have been hit!");
    res.json({
        msg: "success",
        status: 200,
        data: { user: "Sean", title: "Me" },
    });
});
router.get("/isActive", (req, res) => {
    console.log("we have been hit!");
    res.json({
        msg: "success",
        status: 200,
        data: { active: true },
    });
});
router.put("/putexample", (req, res) => {
    console.log(req.body);
    res.json({
        msg: "success",
        status: 200,
    });
});
router.post("/queryString", (req, res) => {
    console.log(req.query);
    res.json(req.query)
});

router.patch("/parameter/:hash/:info", (req, res) => {
    console.log(req.params)
    res.json({ meg: "success" })
})

router.get("/new", (req, res) => {
    console.log("newRequest!");
    res.json({
        msg: "success",
        status: 200,
        data: { user: "Sean", title: "Is Confused" },
    });
});
module.exports = router;
