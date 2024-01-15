const { Router } = request('express');
const router = Router();

router.get('/', getUser);