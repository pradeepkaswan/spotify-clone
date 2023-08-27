import { validateRoute } from '../../services/auth'

export default validateRoute(async (req, res, user) => {
  res.json(user)
})
