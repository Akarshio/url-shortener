const shortenUrl = require('../models/url');



async function handlerPostUrl(req, res) {
    try {
        let { originalurl } = req.body;

   
        if (!originalurl) {
            return res.status(400).json({
                msg: "originalurl is required"
            });
        }

       
        if (!/^https?:\/\//i.test(originalurl)) {
            originalurl = "https://" + originalurl;
        }

       
        const originalLink = await shortenUrl.create({ originalurl });

        return res.status(201).json({
            msg: "done",
            shortUrl: `${req.protocol}://${req.get("host")}/${originalLink.shortId}`
        });

    } catch (err) {
        return res.status(500).json({
            msg: "server error"
        });
    }
}

async function handlerRedirect(req, res) {
    try {
        const { shortId } = req.params;
        const link = await shortenUrl.findOne({ shortId });
        if (!link) return res.status(404).json({ msg: "not url" });

        link.visitorcount.push({});
        await link.save();
       
        let target = link.originalurl;
        // if (!/^https?:\/\//i.test(target)) target = 'http://' + target;
        return res.redirect(target );
    } catch (err) {
        return res.status(500).json({ msg: "server error" });
    }
}

async function handlerGetVisitorCount(req , res) {
    try {
        const { shortId } = req.params;
        const link = await shortenUrl.findOne({ shortId });
        if (!link) return res.status(404).json({ msg: "not url" });
        const totalClicks = link.visitorcount ? link.visitorcount.length : 0;
        return res.status(200).json({ totalClicks });
    } catch (err) {
        return res.status(500).json({ msg: "server error" });
    }
}



module.exports = {
    handlerPostUrl,
    handlerRedirect,
    handlerGetVisitorCount
}