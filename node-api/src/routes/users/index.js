import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    data: [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
      },
      {
        id: 2,
        firstName: 'Stacey',
        lastName: 'Smith',
      },
    ],
  });
});

export default router;
