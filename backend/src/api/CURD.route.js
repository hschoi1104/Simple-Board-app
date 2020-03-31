import Router from 'express'
import Post from '../models/post'
const router = Router()

router.get('/read', async function(req, res) {
    const post = await Post.find()
    res.json(post)
})

router.post('/write', async function(req, res) {
    const post = await new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save()
    res.end()
})

export default router